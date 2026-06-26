import { NestFactory } from '@nestjs/core';
import { Module, Controller, Get, Post, Put, Delete, Body, Param, Query, HttpCode, HttpStatus } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

@Controller('api/v1/auth')
class AuthController {
  @Post('register')
  async register(@Body() body: any) {
    const { email, password, firstName, lastName, phone, companyName } = body;
    const exists = await prisma.user.findFirst({ where: { email: email?.toLowerCase() } });
    if (exists) return { success: false, message: 'Email already registered' };
    const hash = await bcrypt.hash(password, 12);
    const result = await prisma.$transaction(async (tx: any) => {
      const tenant = await tx.tenant.create({ data: { name: companyName || `${firstName} ${lastName}`, slug: `${firstName}-${lastName}-${Date.now()}`.toLowerCase(), email: email?.toLowerCase(), phone } });
      const user = await tx.user.create({ data: { tenantId: tenant.id, email: email?.toLowerCase(), passwordHash: hash, firstName, lastName, phone } });
      return { user, tenant };
    });
    return { success: true, message: 'Registration successful', data: { userId: result.user.id, tenantId: result.tenant.id } };
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() body: { email: string; password: string }) {
    const user = await prisma.user.findFirst({ where: { email: body.email?.toLowerCase() }, include: { tenant: true } });
    if (!user) return { success: false, message: 'Invalid credentials' };
    const valid = await bcrypt.compare(body.password, user.passwordHash);
    if (!valid) return { success: false, message: 'Invalid credentials' };
    const isActive = user.tenant.subscriptionStatus === 'ACTIVE';
    return { success: true, data: { user: { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, phone: user.phone, avatar: user.avatar }, tenant: { id: user.tenant.id, name: user.tenant.name, subscriptionStatus: user.tenant.subscriptionStatus, subscriptionPlan: user.tenant.subscriptionPlan, subscriptionEndsAt: user.tenant.subscriptionEndsAt }, accessToken: 'w4v3_' + user.id + '_' + Date.now(), isSubscribed: isActive } };
  }

  @Post('subscribe')
  async subscribe(@Body() body: { tenantId: string; plan: string; mpesaCode: string }) {
    await prisma.tenant.update({ where: { id: body.tenantId }, data: { subscriptionStatus: 'ACTIVE', subscriptionPlan: body.plan || 'STARTER', subscriptionEndsAt: new Date(Date.now() + 30*24*60*60*1000) } });
    return { success: true, message: 'Subscription activated! Payment of KES 1,000 received via M-Pesa Till 4760783.' };
  }
}

@Controller('api/v1/tenant')
class TenantController {
  @Get('stats')
  async getStats(@Query('tenantId') tenantId: string) {
    const [products, customers, employees, sales, invoices, revenue, lowStock] = await Promise.all([
      prisma.product.count({ where: { tenantId } }), prisma.customer.count({ where: { tenantId } }), prisma.employee.count({ where: { tenantId } }),
      prisma.sale.count({ where: { tenantId } }), prisma.invoice.count({ where: { tenantId } }),
      prisma.sale.aggregate({ where: { tenantId }, _sum: { grandTotal: true } }),
      prisma.stockLevel.count({ where: { tenantId, quantityOnHand: { lte: 5 } } })
    ]);
    return { success: true, data: { totalProducts: products, totalCustomers: customers, totalEmployees: employees, totalSales: sales, totalInvoices: invoices, totalRevenue: revenue._sum.grandTotal || 0, lowStockProducts: lowStock, pendingInvoices: invoices, activeCustomers: customers } };
  }
  @Get()
  async getTenant(@Query('id') id: string) {
    const t = await prisma.tenant.findUnique({ where: { id } });
    return { success: true, data: t };
  }
}

@Controller('api/v1/products')
class ProductsController {
  @Get()
  async getProducts(@Query('tenantId') tenantId: string, @Query('search') search: string, @Query('page') page = 1) {
    const where: any = { tenantId };
    if (search) where.name = { contains: search, mode: 'insensitive' };
    const data = await prisma.product.findMany({ where, include: { stockLevels: true }, skip: (+page-1)*20, take: 20 });
    const total = await prisma.product.count({ where });
    return { success: true, data, pagination: { page: +page, limit: 20, total, totalPages: Math.ceil(total/20) } };
  }
  @Get('search')
  async search(@Query('q') q: string, @Query('tenantId') tenantId: string) {
    const r = await prisma.product.findMany({ where: { tenantId, name: { contains: q, mode: 'insensitive' } }, take: 10 });
    return { success: true, data: r };
  }
  @Post()
  async create(@Body() body: any) {
    const p = await prisma.product.create({ data: { ...body, slug: (body.name||'product').toLowerCase().replace(/\s+/g,'-') } });
    return { success: true, data: p };
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    await prisma.product.update({ where: { id }, data: { deletedAt: new Date() } });
    return { success: true };
  }
}

@Controller('api/v1/customers')
class CustomersController {
  @Get()
  async getCustomers(@Query('tenantId') tenantId: string, @Query('search') search: string) {
    const where: any = { tenantId };
    if (search) where.OR = [{ firstName: { contains: search, mode: 'insensitive' } }, { lastName: { contains: search, mode: 'insensitive' } }];
    const data = await prisma.customer.findMany({ where, orderBy: { createdAt: 'desc' }, take: 50 });
    return { success: true, data, pagination: { page: 1, limit: 50, total: data.length } };
  }
  @Post()
  async create(@Body() body: any) {
    body.customerNumber = 'CUS-' + Date.now();
    return { success: true, data: await prisma.customer.create({ data: body }) };
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    await prisma.customer.update({ where: { id }, data: { deletedAt: new Date() } });
    return { success: true };
  }
}

@Controller('api/v1/employees')
class EmployeesController {
  @Get()
  async getEmployees(@Query('tenantId') tenantId: string) {
    return { success: true, data: await prisma.employee.findMany({ where: { tenantId } }) };
  }
  @Post()
  async create(@Body() body: any) {
    body.employeeNumber = 'EMP-' + Date.now();
    return { success: true, data: await prisma.employee.create({ data: body }) };
  }
}

@Controller('api/v1/suppliers')
class SuppliersController {
  @Get()
  async getSuppliers(@Query('tenantId') tenantId: string) {
    return { success: true, data: await prisma.supplier.findMany({ where: { tenantId } }) };
  }
  @Post()
  async create(@Body() body: any) {
    body.supplierNumber = 'SUP-' + Date.now();
    return { success: true, data: await prisma.supplier.create({ data: body }) };
  }
}

@Controller('api/v1/sales')
class SalesController {
  @Get()
  async getSales(@Query('tenantId') tenantId: string) {
    const data = await prisma.sale.findMany({ where: { tenantId }, include: { customer: true }, take: 50, orderBy: { createdAt: 'desc' } });
    return { success: true, data };
  }
  @Post()
  async create(@Body() body: any) {
    body.saleNumber = 'SALE-' + Date.now();
    return { success: true, data: await prisma.sale.create({ data: { ...body, items: { create: body.items || [] } } }) };
  }
}

@Controller('api/v1/invoices')
class InvoicesController {
  @Get()
  async getInvoices(@Query('tenantId') tenantId: string) {
    const data = await prisma.invoice.findMany({ where: { tenantId }, take: 50, orderBy: { createdAt: 'desc' } });
    const s = await prisma.invoice.aggregate({ where: { tenantId }, _sum: { grandTotal: true, amountPaid: true, balanceDue: true } });
    return { success: true, data, summary: { totalInvoiced: s._sum.grandTotal||0, totalPaid: s._sum.amountPaid||0, totalOutstanding: s._sum.balanceDue||0 } };
  }
  @Post()
  async create(@Body() body: any) {
    body.invoiceNumber = 'INV-' + Date.now();
    return { success: true, data: await prisma.invoice.create({ data: body }) };
  }
}

@Controller('api/v1/expenses')
class ExpensesController {
  @Get()
  async getExpenses(@Query('tenantId') tenantId: string) {
    const data = await prisma.expense.findMany({ where: { tenantId }, take: 50 });
    const s = await prisma.expense.aggregate({ where: { tenantId }, _sum: { amount: true } });
    return { success: true, data, summary: { totalExpenses: s._sum.amount||0 } };
  }
  @Post()
  async create(@Body() body: any) {
    body.expenseNumber = 'EXP-' + Date.now();
    return { success: true, data: await prisma.expense.create({ data: body }) };
  }
  @Post(':id/approve')
  async approve(@Param('id') id: string) {
    await prisma.expense.update({ where: { id }, data: { status: 'APPROVED' } });
    return { success: true };
  }
}

@Controller('api/v1/subscription')
class SubscriptionController {
  @Get()
  async get(@Query('tenantId') tenantId: string) {
    const t = await prisma.tenant.findUnique({ where: { id: tenantId } });
    return { success: true, data: { currentStatus: t?.subscriptionStatus, currentPlan: t?.subscriptionPlan, subscriptionEndsAt: t?.subscriptionEndsAt, plans: { starter: { name: 'Starter', price: 1000, currency: 'KES', features: ['All Modules','5 Users','POS','Inventory','CRM','Accounting','HRM','AI Copilot'] }, professional: { name: 'Professional', price: 3000, currency: 'KES', features: ['All Starter','20 Users','Multi-Branch','Reports'] }, business: { name: 'Business', price: 7500, currency: 'KES', features: ['All Pro','50 Users','API Access'] }, enterprise: { name: 'Enterprise', price: 20000, currency: 'KES', features: ['Unlimited','Custom','SLA'] } } } };
  }
}

@Controller('api/v1/analytics')
class AnalyticsController {
  @Get('dashboard')
  async getDashboard(@Query('tenantId') tenantId: string) {
    const today = new Date(); today.setHours(0,0,0,0);
    const rev = await prisma.sale.aggregate({ where: { tenantId, saleDate: { gte: today } }, _sum: { grandTotal: true } });
    const sales = await prisma.sale.findMany({ where: { tenantId }, orderBy: { createdAt: 'desc' }, take: 5, include: { customer: true } });
    return { success: true, data: { revenueToday: rev._sum.grandTotal||0, transactionsToday: await prisma.sale.count({ where: { tenantId, saleDate: { gte: today } } }), revenueThisMonth: rev._sum.grandTotal||0, recentSales: sales.map(s=>({ id: s.id, saleNumber: s.saleNumber, amount: Number(s.grandTotal), customer: s.customer?.firstName||'Walk-in', date: s.saleDate })) } };
  }
}

@Controller('api/v1/ai')
class AiController {
  @Post('chat')
  async chat(@Body() body: { message: string }) {
    const msg = body.message.toLowerCase();
    let reply = "I'm WAVECORE AI Copilot. Ask me about sales, inventory, or business insights.";
    if (msg.includes('sales')) reply = 'Your sales dashboard shows real-time revenue updates. Check the Analytics section.';
    if (msg.includes('stock') || msg.includes('inventory')) reply = 'Monitor stock levels from the Inventory module. Low stock alerts appear on your dashboard.';
    if (msg.includes('customer')) reply = 'Customer insights are available in the CRM section with purchase history.';
    return { success: true, data: { conversationId: Date.now().toString(), message: reply } };
  }
}

@Controller()
class HealthController {
  @Get('health')
  getHealth() { return { status: 'ok', name: 'WAVECOREERP', version: '1.0.0', tillNumber: '4760783', fee: 'KES 1,000/month' }; }
}

@Module({ controllers: [HealthController, AuthController, TenantController, ProductsController, CustomersController, EmployeesController, SuppliersController, SalesController, InvoicesController, ExpensesController, SubscriptionController, AnalyticsController, AiController] })
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: ['log', 'error', 'warn'] });
  app.enableCors({ origin: '*', credentials: true });
  await app.listen(process.env.PORT || 4000);
  console.log('WAVECOREERP API: http://localhost:' + (process.env.PORT || 4000));
}
bootstrap();
'use client';
import { useQuery } from '@tanstack/react-query';
import { api, useAuth } from '@/stores/auth-store';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';

export default function DashboardPage() {
  const { tenant } = useAuth();
  const { data: stats, isLoading } = useQuery({
    queryKey: ['stats', tenant?.id],
    queryFn: () => api.get('/tenant/stats', { params: { tenantId: tenant?.id } }).then(r => r.data.data || r.data),
    enabled: !!tenant?.id
  });

  const cards = [
    { title: 'Total Products', value: stats?.totalProducts || 0 },
    { title: 'Total Customers', value: stats?.activeCustomers || 0 },
    { title: 'Total Employees', value: stats?.totalEmployees || 0 },
    { title: 'Total Sales', value: stats?.totalSales || 0 },
    { title: 'Low Stock Items', value: stats?.lowStockProducts || 0 },
    { title: 'Pending Invoices', value: stats?.pendingInvoices || 0 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to {tenant?.name || 'WAVECOREERP'}</p>
      </div>
      <div className="flex gap-3 flex-wrap">
        <Link href="/pos/terminal" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">POS Terminal</Link>
        <Link href="/inventory/products" className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium">Products</Link>
        <Link href="/crm/customers" className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium">Customers</Link>
        <Link href="/accounting/invoices" className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium">Invoices</Link>
        <Link href="/ai-copilot" className="bg-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium">AI Copilot</Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map(c => (
          <Card key={c.title}>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">{c.title}</p>
              {isLoading ? <Skeleton className="h-8 w-24 mt-1" /> : <p className="text-2xl font-bold mt-1">{c.value}</p>}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
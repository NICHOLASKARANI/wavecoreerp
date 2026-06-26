'use client';
import { useQuery } from '@tanstack/react-query';
import { api, useAuth } from '@/stores/auth-store';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { formatCurrency, formatNumber } from '@/lib/utils';
import { DollarSign, ShoppingCart, Package, Users, AlertTriangle, FileText, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const { tenant } = useAuth();
  const { data: stats, isLoading } = useQuery({ queryKey: ['stats', tenant?.id], queryFn: () => api.get('/tenant/stats', { params: { tenantId: tenant?.id } }).then(r => r.data.data || r.data), enabled: !!tenant?.id });
  const { data: analytics } = useQuery({ queryKey: ['analytics', tenant?.id], queryFn: () => api.get('/analytics/dashboard', { params: { tenantId: tenant?.id } }).then(r => r.data.data || r.data), enabled: !!tenant?.id });
  const cards = [
    { title: 'Revenue Today', value: formatCurrency(analytics?.revenueToday || 0), icon: DollarSign, color: 'text-green-600', bg: 'bg-green-100' },
    { title: 'Revenue Month', value: formatCurrency(analytics?.revenueThisMonth || 0), icon: TrendingUp, color: 'text-blue-600', bg: 'bg-blue-100' },
    { title: 'Products', value: formatNumber(stats?.totalProducts || 0), icon: Package, color: 'text-purple-600', bg: 'bg-purple-100' },
    { title: 'Low Stock', value: stats?.lowStockProducts || 0, icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-100' },
    { title: 'Customers', value: formatNumber(stats?.activeCustomers || 0), icon: Users, color: 'text-teal-600', bg: 'bg-teal-100' },
    { title: 'Pending Invoices', value: stats?.pendingInvoices || 0, icon: FileText, color: 'text-orange-600', bg: 'bg-orange-100' },
  ];
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold">Dashboard</h1><p className="text-muted-foreground">Welcome to {tenant?.name || 'WAVECOREERP'}</p></div>
      <div className="flex gap-3 flex-wrap">{[
        { href: '/pos/terminal', label: 'POS', color: 'bg-blue-600' },
        { href: '/inventory/products', label: 'Products', color: 'bg-purple-600' },
        { href: '/crm/customers', label: 'Customers', color: 'bg-teal-600' },
        { href: '/accounting/invoices', label: 'Invoices', color: 'bg-orange-600' },
        { href: '/ai-copilot', label: 'AI Copilot', color: 'bg-pink-600' },
      ].map(l => <Link key={l.href} href={l.href} className={l.color + ' text-white px-4 py-2 rounded-lg text-sm font-medium'}>{l.label}</Link>)}</div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{cards.map(c => <Card key={c.title}><CardContent className="p-6"><div className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground">{c.title}</p>{isLoading ? <Skeleton className="h-8 w-24" /> : <p className="text-2xl font-bold">{c.value}</p>}</div><div className={'rounded-full p-3 ' + c.bg}><c.icon className={'h-5 w-5 ' + c.color} /></div></div></CardContent></Card>))}</div>
    </div>
  );
}
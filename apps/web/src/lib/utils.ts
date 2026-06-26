import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
export function formatCurrency(amount: number, currency = 'KES') { return new Intl.NumberFormat('en-KE', { style: 'currency', currency }).format(amount); }
export function formatNumber(num: number) { return new Intl.NumberFormat('en-US').format(num); }
export function formatDate(date: string | Date) { return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }); }
export function getStatusColor(status: string) { const c: Record<string, string> = { ACTIVE: 'bg-green-100 text-green-800', PAID: 'bg-green-100 text-green-800', PENDING: 'bg-yellow-100 text-yellow-800', DRAFT: 'bg-gray-100 text-gray-800', UNPAID: 'bg-red-100 text-red-800', APPROVED: 'bg-green-100 text-green-800', COMPLETED: 'bg-blue-100 text-blue-800' }; return c[status] || 'bg-gray-100 text-gray-800'; }

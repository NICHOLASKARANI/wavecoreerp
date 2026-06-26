import * as React from 'react';
import { cn } from '@/lib/utils';
function Badge({ className, variant = 'default', ...props }: React.HTMLAttributes<HTMLDivElement> & { variant?: string }) {
  const v: Record<string, string> = { default: 'bg-primary text-primary-foreground', secondary: 'bg-secondary text-secondary-foreground', outline: 'border', success: 'bg-green-100 text-green-800', destructive: 'bg-red-100 text-red-800' };
  return <div className={cn('inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold', v[variant] || v.default, className)} {...props} />;
}
export { Badge };

import * as React from 'react';
import { cn } from '@/lib/utils';
const Select = ({ value, onValueChange, children }: { value: string; onValueChange: (v: string) => void; children: React.ReactNode }) => <div className="relative">{children}</div>;
const SelectTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(({ className, children, ...props }, ref) => <button ref={ref} className={cn('flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm', className)} {...props}>{children}</button>);
SelectTrigger.displayName = 'SelectTrigger';
const SelectValue = ({ placeholder }: { placeholder?: string }) => <span>{placeholder || 'Select...'}</span>;
const SelectContent = ({ children }: { children: React.ReactNode }) => <div className="absolute z-50 mt-1 w-full rounded-md border bg-popover shadow-md">{children}</div>;
const SelectItem = ({ value, children }: { value: string; children: React.ReactNode }) => <div className="px-3 py-2 text-sm hover:bg-accent cursor-pointer">{children}</div>;
export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };

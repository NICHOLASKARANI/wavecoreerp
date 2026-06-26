import * as React from 'react';
import { cn } from '@/lib/utils';
const Dialog = ({ open, onOpenChange, children }: { open: boolean; onOpenChange: (open: boolean) => void; children: React.ReactNode }) => open ? <div className="fixed inset-0 z-50"><div className="fixed inset-0 bg-black/80" onClick={() => onOpenChange(false)} /><div className="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] rounded-lg border bg-background p-6 shadow-lg max-w-lg w-full">{children}</div></div> : null;
const DialogContent = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const DialogHeader = ({ children }: { children: React.ReactNode }) => <div className="mb-4">{children}</div>;
const DialogTitle = ({ children }: { children: React.ReactNode }) => <h2 className="text-lg font-semibold">{children}</h2>;
const DialogFooter = ({ children }: { children: React.ReactNode }) => <div className="mt-4 flex justify-end gap-2">{children}</div>;
export { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter };

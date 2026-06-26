'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Mail, ArrowLeft, Loader2 } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); toast.success('Reset link sent!'); setIsSubmitting(false); };
  return (
    <div className="space-y-6">
      <Link href="/login" className="flex items-center gap-1 text-sm text-muted-foreground"><ArrowLeft className="h-4 w-4" />Back</Link>
      <h2 className="text-2xl font-bold">Forgot Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div><Label>Email</Label><div className="relative"><Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input type="email" placeholder="you@example.com" className="pl-10" value={email} onChange={e => setEmail(e.target.value)} required /></div></div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>{isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}Send Reset Link</Button>
      </form>
    </div>
  );
}
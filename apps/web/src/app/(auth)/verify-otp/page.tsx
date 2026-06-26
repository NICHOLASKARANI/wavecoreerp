'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Loader2, Shield, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function VerifyOtpPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [code, setCode] = useState(['','','','']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (index: number, value: string) => { if (value.length > 1) return; const newCode = [...code]; newCode[index] = value; setCode(newCode); if (value && index < 3) document.getElementById('otp-'+(index+1))?.focus(); };
  const handleVerify = async () => { const otpCode = code.join(''); if (otpCode.length < 4) { toast.error('Enter 4-digit code'); return; } setIsSubmitting(true); toast.success('OTP Verified!'); router.push('/dashboard'); };
  return (
    <div className="space-y-6">
      <Link href="/login" className="flex items-center gap-1 text-sm text-muted-foreground"><ArrowLeft className="h-4 w-4" />Back</Link>
      <div className="text-center"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600"><Shield className="h-8 w-8 text-white" /></div><h2 className="mt-4 text-2xl font-bold">Verify OTP</h2><p className="mt-2 text-sm text-muted-foreground">Enter the 4-digit security code</p></div>
      <div className="flex justify-center gap-3">{code.map((digit, i) => <Input key={i} id={'otp-'+i} type="text" maxLength={1} value={digit} onChange={e => handleChange(i, e.target.value)} className="h-16 w-16 text-center text-2xl font-bold rounded-xl border-2" />)}</div>
      <Button onClick={handleVerify} className="w-full bg-gradient-to-r from-blue-600 to-purple-600" disabled={isSubmitting}>{isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Shield className="mr-2 h-4 w-4" />}Verify Now</Button>
    </div>
  );
}
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/stores/auth-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Eye, EyeOff, Loader2, ArrowRight, ArrowLeft, Camera, Upload } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const { register: registerUser } = useAuth();
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', password: '', confirmPassword: '' });
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) { const reader = new FileReader(); reader.onload = () => setProfileImage(reader.result as string); reader.readAsDataURL(file); }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) { setStep(step + 1); return; }
    if (form.password !== form.confirmPassword) { toast.error('Passwords do not match'); return; }
    if (form.password.length < 8) { toast.error('Password must be at least 8 characters'); return; }
    setIsSubmitting(true);
    try {
      await registerUser({ ...form, avatar: profileImage });
      toast.success('Account created! Redirecting to payment...');
      router.push('/settings/subscription');
    } catch (err: any) { toast.error('Registration failed'); }
    finally { setIsSubmitting(false); }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center gap-2 mb-6">
        {[1,2,3].map(s => <div key={s} className="flex items-center"><div className={'flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ' + (step >= s ? 'bg-primary text-primary-foreground' : 'bg-muted')}>{s}</div>{s < 3 && <div className={'h-1 w-8 ' + (step > s ? 'bg-primary' : 'bg-muted')} />}</div>)}
      </div>
      <h2 className="text-2xl font-bold">Create your account</h2>
      <p className="text-sm text-muted-foreground">Subscribe KES 1,000/month via M-Pesa Till 4760783</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 && <>
          <div className="grid grid-cols-2 gap-4"><div><Label>First Name</Label><Input value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} required /></div><div><Label>Last Name</Label><Input value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})} required /></div></div>
          <div><Label>Email</Label><Input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required /></div>
          <div><Label>Phone (M-Pesa)</Label><Input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} /></div>
        </>}
        {step === 2 && <div className="space-y-4">
          <Label>Profile Photo</Label>
          <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-8">
            {profileImage ? <img src={profileImage} alt="Profile" className="h-32 w-32 rounded-full object-cover" /> : <><Camera className="h-12 w-12 text-muted-foreground mb-2" /><p className="text-sm text-muted-foreground">Drag & drop your photo</p></>}
            <label className="mt-2 cursor-pointer rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"><Upload className="mr-1 inline h-3 w-3" />Browse<input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} /></label>
          </div>
        </div>}
        {step === 3 && <>
          <div><Label>Password</Label><div className="relative"><Input type={showPassword ? 'text' : 'password'} value={form.password} onChange={e => setForm({...form, password: e.target.value})} className="pr-10" required /><button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2">{showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button></div></div>
          <div><Label>Confirm Password</Label><Input type="password" value={form.confirmPassword} onChange={e => setForm({...form, confirmPassword: e.target.value})} required /></div>
        </>}
        <div className="flex gap-3">{step > 1 && <Button type="button" variant="outline" className="flex-1" onClick={() => setStep(step-1)}><ArrowLeft className="mr-2 h-4 w-4" />Back</Button>}<Button type="submit" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600" disabled={isSubmitting}>{isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : step === 3 ? 'Complete & Pay KES 1,000' : 'Continue'}</Button></div>
      </form>
      <p className="text-center text-sm">Have account? <Link href="/login" className="text-primary hover:underline">Sign in</Link></p>
    </div>
  );
}
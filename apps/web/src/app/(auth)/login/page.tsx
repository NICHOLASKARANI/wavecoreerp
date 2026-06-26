'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/stores/auth-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Eye, EyeOff, Loader2, Mail, Lock, ArrowRight, Sun, Moon, Wifi, WifiOff, Github, Chrome } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const { theme, setTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setIsOnline(navigator.onLine);
    window.addEventListener('online', () => setIsOnline(true));
    window.addEventListener('offline', () => setIsOnline(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isOnline) { toast.error('No internet connection'); return; }
    setIsSubmitting(true);
    try {
      const result = await login(email, password);
      if (result?.requiresMfa) router.push('/verify-otp?email=' + email);
      else if (!result?.isSubscribed) router.push('/settings/subscription');
      else { toast.success('Welcome back!'); router.push('/dashboard'); }
    } catch (err: any) { toast.error('Login failed'); }
    finally { setIsSubmitting(false); }
  };

  return (
    <div className="space-y-6">
      <div className={'fixed top-4 right-4 z-50 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-lg ' + (isOnline ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800')}>
        {isOnline ? <Wifi className="h-4 w-4" /> : <WifiOff className="h-4 w-4" />}
        {isOnline ? 'Online' : 'Offline'}
      </div>
      <div className="flex items-center justify-between mt-6">
        <div><h2 className="text-2xl font-bold">Welcome back</h2><p className="mt-2 text-sm text-muted-foreground">Sign in to WAVECOREERP</p></div>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-orange-500 dark:from-slate-700 dark:to-slate-900 shadow-lg">
          <Sun className="absolute h-5 w-5 text-white dark:opacity-0" />
          <Moon className="absolute h-5 w-5 text-white opacity-0 dark:opacity-100" />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline"><Chrome className="mr-2 h-4 w-4 text-blue-600" />Google</Button>
        <Button variant="outline"><Github className="mr-2 h-4 w-4" />GitHub</Button>
      </div>
      <div className="relative"><div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div><div className="relative flex justify-center text-xs uppercase"><span className="bg-background px-2 text-muted-foreground">Or with email</span></div></div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2"><Label>Email</Label><div className="relative"><Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input type="email" placeholder="you@example.com" className="pl-10" value={email} onChange={e => setEmail(e.target.value)} required /></div></div>
        <div className="space-y-2"><div className="flex justify-between"><Label>Password</Label><Link href="/forgot-password" className="text-xs text-primary hover:underline">Forgot?</Link></div><div className="relative"><Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input type={showPassword ? 'text' : 'password'} placeholder="Password" className="pl-10 pr-10" value={password} onChange={e => setPassword(e.target.value)} required /><button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2">{showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button></div></div>
        <div className="flex items-center space-x-2"><Checkbox id="remember" /><Label htmlFor="remember" className="text-sm">Keep me logged in</Label></div>
        <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600" disabled={isSubmitting}>{isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <ArrowRight className="mr-2 h-4 w-4" />}Sign In</Button>
      </form>
      <p className="text-center text-sm text-muted-foreground">No account? <Link href="/register" className="font-medium text-primary hover:underline">Create one</Link></p>
    </div>
  );
}
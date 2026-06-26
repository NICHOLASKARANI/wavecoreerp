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
import { Eye, EyeOff, Loader2, Mail, Lock, ArrowRight, Sun, Moon, Wifi, WifiOff, Github, Chrome, Building2, Fingerprint, QrCode } from 'lucide-react';
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
  const [rememberMe, setRememberMe] = useState(false);

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
    } catch { toast.error('Invalid credentials'); }
    finally { setIsSubmitting(false); }
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl animate-pulse" />
        </div>
        <div className="relative z-10 max-w-lg px-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <div><h1 className="text-3xl font-bold text-white">WAVECORE<span className="text-blue-400">ERP</span></h1><p className="text-sm text-blue-200/80">AI-Powered Enterprise Platform</p></div>
          </div>
          <h2 className="text-4xl font-bold text-white leading-tight mb-4">Intelligent ERP for Modern Enterprises</h2>
          <p className="text-lg text-blue-200/60 mb-8">AI-powered inventory, accounting, HRM, CRM, and analytics - all in one platform.</p>
          <div className="grid grid-cols-3 gap-4">
            {[{label:'Businesses',value:'10,000+'},{label:'Transactions',value:'KES 50B+'},{label:'Uptime',value:'99.9%'}].map(s => <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"><p className="text-2xl font-bold text-white">{s.value}</p><p className="text-xs text-blue-200/60">{s.label}</p></div>)}
          </div>
        </div>
      </div>
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-white dark:bg-slate-900 px-6">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-between mb-8">
            <div className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ${isOnline ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              <div className={`h-2 w-2 rounded-full ${isOnline ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />{isOnline ? 'Online' : 'Offline'}
            </div>
            <button onClick={() => setTheme(theme==='dark'?'light':'dark')} className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-orange-500 dark:from-slate-700 dark:to-slate-600 shadow-lg">
              <Sun className="absolute h-4 w-4 text-white dark:opacity-0" /><Moon className="absolute h-4 w-4 text-white opacity-0 dark:opacity-100" />
            </button>
          </div>
          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Welcome back</h2>
          <p className="text-gray-500 mb-8">Sign in to your WAVECORE account</p>
          <div className="grid grid-cols-3 gap-3 mb-6">
            <Button variant="outline" className="w-full gap-2"><Chrome className="h-4 w-4 text-blue-600"/><span className="text-xs">Google</span></Button>
            <Button variant="outline" className="w-full gap-2"><Building2 className="h-4 w-4 text-blue-700"/><span className="text-xs">Microsoft</span></Button>
            <Button variant="outline" className="w-full gap-2"><Github className="h-4 w-4"/><span className="text-xs">GitHub</span></Button>
          </div>
          <div className="relative mb-6"><div className="absolute inset-0 flex items-center"><span className="w-full border-t"/></div><div className="relative flex justify-center text-xs uppercase"><span className="bg-white dark:bg-slate-900 px-3 text-gray-400">or with email</span></div></div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div><Label>Email</Label><div className="relative"><Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"/><Input type="email" placeholder="you@company.com" className="pl-10 h-12 rounded-xl" value={email} onChange={e=>setEmail(e.target.value)} required/></div></div>
            <div><div className="flex justify-between"><Label>Password</Label><Link href="/forgot-password" className="text-xs text-blue-600">Forgot?</Link></div><div className="relative"><Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"/><Input type={showPassword?'text':'password'} placeholder="Password" className="pl-10 pr-12 h-12 rounded-xl" value={password} onChange={e=>setPassword(e.target.value)} required/><button type="button" onClick={()=>setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400">{showPassword?<EyeOff className="h-4 w-4"/>:<Eye className="h-4 w-4"/>}</button></div></div>
            <div className="flex items-center space-x-2"><Checkbox id="remember" checked={rememberMe} onCheckedChange={c=>setRememberMe(!!c)}/><Label htmlFor="remember" className="text-sm text-gray-500">Remember me</Label></div>
            <Button type="submit" className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg" disabled={isSubmitting||!isOnline}>{isSubmitting?<Loader2 className="mr-2 h-5 w-5 animate-spin"/>:<ArrowRight className="mr-2 h-5 w-5"/>}Sign In</Button>
          </form>
          <p className="mt-6 text-sm text-gray-500">No account? <Link href="/register" className="font-semibold text-blue-600">Create one</Link></p>
          <div className="mt-4 flex gap-3"><button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"><Fingerprint className="h-5 w-5 text-gray-400"/></button><button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"><QrCode className="h-5 w-5 text-gray-400"/></button></div>
          <p className="mt-8 text-center text-xs text-gray-400">KES 1,000/month · M-Pesa Till 4760783 · WAVECORE v2.0</p>
        </div>
      </div>
    </div>
  );
}
'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/stores/auth-store';
import { useTheme } from 'next-themes';
import { toast } from 'sonner';
import { Eye, EyeOff, Loader2, Mail, Lock, ArrowRight, Sun, Moon, Wifi, WifiOff, Github, Chrome } from 'lucide-react';

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
    } catch { toast.error('Invalid credentials'); }
    finally { setIsSubmitting(false); }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-md text-white">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <div><h1 className="text-2xl font-bold">WAVECORE<span className="text-blue-200">ERP</span></h1></div>
          </div>
          <h2 className="text-4xl font-bold leading-tight mb-4">Smart ERP Platform</h2>
          <p className="text-lg text-blue-200/80 mb-8">Inventory, POS, CRM, Accounting, HRM, AI Copilot — all in one platform. Built for businesses in Africa and beyond.</p>
          <div className="grid grid-cols-3 gap-4">
            {[{label:'Businesses',value:'10,000+'},{label:'Countries',value:'40+'},{label:'Uptime',value:'99.9%'}].map(s=><div key={s.label} className="rounded-xl bg-white/10 backdrop-blur p-4"><p className="text-2xl font-bold">{s.value}</p><p className="text-xs text-blue-200/60 mt-1">{s.label}</p></div>)}
          </div>
        </div>
      </div>

      {/* Right - Login Form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-white dark:bg-slate-900 px-6">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-between mb-8">
            <div className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ${isOnline ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700'}`}>
              <div className={`h-2 w-2 rounded-full ${isOnline ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />{isOnline ? 'Online' : 'Offline'}
            </div>
            <button onClick={() => setTheme(theme==='dark'?'light':'dark')} className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 dark:bg-slate-700 shadow">
              <Sun className="h-4 w-4 text-amber-600 dark:opacity-0" /><Moon className="h-4 w-4 text-slate-400 opacity-0 dark:opacity-100 absolute" />
            </button>
          </div>
          <div className="flex justify-center mb-6 lg:hidden">
            <div className="flex items-center gap-2 text-2xl font-bold"><div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white"><svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div>WAVECORE</div>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Welcome back</h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 mb-8">Sign in to your WAVECOREERP account</p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 py-2.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition"><Chrome className="h-4 w-4 text-blue-600"/>Google</button>
            <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 py-2.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition"><Github className="h-4 w-4"/>GitHub</button>
          </div>
          <div className="relative mb-6"><div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-200 dark:border-slate-700"/></div><div className="relative flex justify-center"><span className="bg-white dark:bg-slate-900 px-3 text-xs text-slate-400 uppercase">or with email</span></div></div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div><label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email</label><div className="relative"><Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"/><input type="email" placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)} required className="w-full h-11 pl-10 pr-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"/></div></div>
            <div><div className="flex justify-between mb-1.5"><label className="text-sm font-medium text-slate-700 dark:text-slate-300">Password</label><Link href="/forgot-password" className="text-xs text-blue-600 hover:text-blue-700">Forgot?</Link></div><div className="relative"><Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"/><input type={showPassword?'text':'password'} placeholder="Enter your password" value={password} onChange={e=>setPassword(e.target.value)} required className="w-full h-11 pl-10 pr-12 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"/><button type="button" onClick={()=>setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">{showPassword?<EyeOff className="h-4 w-4"/>:<Eye className="h-4 w-4"/>}</button></div></div>
            <div className="flex items-center"><input type="checkbox" id="remember" className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"/><label htmlFor="remember" className="ml-2 text-sm text-slate-500">Keep me logged in</label></div>
            <button type="submit" disabled={isSubmitting||!isOnline} className="w-full h-11 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold shadow-lg shadow-blue-200 dark:shadow-blue-900/30 transition flex items-center justify-center gap-2 disabled:opacity-50">{isSubmitting?<Loader2 className="h-4 w-4 animate-spin"/>:<ArrowRight className="h-4 w-4"/>}Sign In</button>
          </form>
          <p className="mt-6 text-center text-sm text-slate-500">Don&apos;t have an account? <Link href="/register" className="font-semibold text-blue-600 hover:text-blue-700">Create one</Link></p>
          <p className="mt-6 text-center text-xs text-slate-400">KES 1,000/month · M-Pesa Till 4760783 · WAVECORE v2.0</p>
        </div>
      </div>
    </div>
  );
}
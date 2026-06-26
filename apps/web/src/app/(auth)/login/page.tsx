'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/stores/auth-store';
import { useTheme } from 'next-themes';
import { toast } from 'sonner';
import { Eye, EyeOff, Loader2, Mail, Lock, ArrowRight, Sun, Moon, Wifi, WifiOff, Github, Chrome, Star } from 'lucide-react';

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
      const r = await login(email, password);
      if (r?.requiresMfa) router.push('/verify-otp?email='+email);
      else if (!r?.isSubscribed) router.push('/settings/subscription');
      else { toast.success('Welcome!'); router.push('/dashboard'); }
    } catch { toast.error('Invalid credentials'); }
    finally { setIsSubmitting(false); }
  };

  return (
    <div className="flex min-h-screen bg-[#030712]">
      <div className="hidden lg:flex lg:w-[60%] relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px] animate-pulse" style={{animationDelay:'2s'}} />
        </div>
        <div className="relative z-10 max-w-xl px-16">
          <div className="flex items-center gap-3 mb-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 shadow-2xl">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <div><h1 className="text-2xl font-bold">WAVECORE<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 ml-1">ERP</span></h1><p className="text-xs text-gray-500">Enterprise Intelligence Platform</p></div>
          </div>
          <h2 className="text-5xl font-bold leading-tight mb-6">Intelligent{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">Enterprise</span><br />Resource Planning</h2>
          <p className="text-lg text-gray-500 mb-12">AI-powered ERP that transforms how modern enterprises manage inventory, accounting, CRM, HRM, and analytics.</p>
          <div className="grid grid-cols-2 gap-4">
            {[{v:'10,000+',l:'Active Companies'},{v:'KES 50B+',l:'Transactions'},{v:'99.99%',l:'Uptime SLA'},{v:'24/7',l:'AI Support'}].map(s=><div key={s.l} className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-5"><p className="text-2xl font-bold">{s.v}</p><p className="text-sm text-gray-400">{s.l}</p></div>)}
          </div>
        </div>
      </div>
      <div className="flex w-full lg:w-[40%] items-center justify-center px-8 border-l border-white/[0.03]">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-between mb-10">
            <div className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${isOnline?'bg-emerald-500/5 text-emerald-400 border-emerald-500/10':'bg-red-500/5 text-red-400 border-red-500/10'}`}><div className={`h-1.5 w-1.5 rounded-full ${isOnline?'bg-emerald-400 animate-pulse':'bg-red-400'}`}/>{isOnline?'Connected':'Offline'}</div>
            <button onClick={()=>setTheme(theme==='dark'?'light':'dark')} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.04]"><Sun className="absolute h-4 w-4 text-amber-400 dark:opacity-0"/><Moon className="absolute h-4 w-4 text-gray-400 opacity-0 dark:opacity-100"/></button>
          </div>
          <h2 className="text-3xl font-bold mb-2">Welcome back</h2>
          <p className="text-gray-500 mb-8">Sign in to your enterprise account</p>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.04] bg-white/[0.01] py-3 text-sm text-gray-400 hover:text-white transition"><Chrome className="h-4 w-4"/>Google</button>
            <button className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.04] bg-white/[0.01] py-3 text-sm text-gray-400 hover:text-white transition"><Github className="h-4 w-4"/>GitHub</button>
          </div>
          <div className="relative mb-6"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/[0.04]"/></div><div className="relative flex justify-center"><span className="bg-[#030712] px-3 text-xs text-gray-600 uppercase">or with email</span></div></div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div><label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Email</label><div className="relative"><Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600"/><input type="email" placeholder="you@enterprise.com" value={email} onChange={e=>setEmail(e.target.value)} required className="w-full h-12 pl-12 pr-4 rounded-xl border border-white/[0.04] bg-white/[0.01] text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500/30 transition-all text-sm"/></div></div>
            <div><div className="flex justify-between mb-2"><label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Password</label><Link href="/forgot-password" className="text-xs text-blue-400">Forgot?</Link></div><div className="relative"><Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600"/><input type={showPassword?'text':'password'} placeholder="••••••••••" value={password} onChange={e=>setPassword(e.target.value)} required className="w-full h-12 pl-12 pr-12 rounded-xl border border-white/[0.04] bg-white/[0.01] text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500/30 transition-all text-sm"/><button type="button" onClick={()=>setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600">{showPassword?<EyeOff className="h-4 w-4"/>:<Eye className="h-4 w-4"/>}</button></div></div>
            <div className="flex items-center"><input type="checkbox" className="h-4 w-4 rounded border-white/[0.08] bg-white/[0.02]"/><label className="ml-2 text-sm text-gray-500">Remember me</label></div>
            <button type="submit" disabled={isSubmitting||!isOnline} className="relative w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-xl hover:scale-[1.01] transition-all overflow-hidden disabled:opacity-50">{isSubmitting?<span className="flex items-center justify-center gap-2"><Loader2 className="h-4 w-4 animate-spin"/>Signing in...</span>:<span className="flex items-center justify-center gap-2">Sign In<ArrowRight className="h-4 w-4"/></span>}</button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">No account? <Link href="/register" className="text-blue-400 font-medium">Start free trial</Link></p>
          <div className="mt-8 pt-6 border-t border-white/[0.03] flex justify-between text-xs text-gray-700"><span>KES 1,000/month · M-Pesa 4760783</span><span>WAVECORE ERP v2.0</span></div>
        </div>
      </div>
    </div>
  );
}
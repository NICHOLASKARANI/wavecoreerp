'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/stores/auth-store';
import { useTheme } from 'next-themes';
import { toast } from 'sonner';
import { Eye, EyeOff, Loader2, Mail, Lock, ArrowRight, Sun, Moon, Wifi, WifiOff, Shield, Zap, Globe, Star } from 'lucide-react';

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
      else { toast.success('Welcome back!'); router.push('/dashboard'); }
    } catch { toast.error('Invalid credentials'); }
    finally { setIsSubmitting(false); }
  };

  return (
    <div className="flex min-h-screen bg-white">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-md text-white">
          <Link href="/" className="flex items-center gap-3 mb-12">
            <img src="/wavecoreerplogo.png" alt="WaveCore" className="h-10 w-auto brightness-0 invert" />
            <span className="text-xl font-bold">WAVECORE<span className="text-blue-200">ERP</span></span>
          </Link>
          <h2 className="text-5xl font-bold leading-tight mb-6">The AI Operating System for Business</h2>
          <p className="text-lg text-blue-200/80 mb-12">One platform. Every ERP module. KES 1,000/month.</p>
          <div className="grid grid-cols-2 gap-4">
            {[{icon:Star,value:'10,000+',label:'Businesses'},{icon:Globe,value:'40+',label:'Countries'},{icon:Shield,value:'99.99%',label:'Uptime'},{icon:Zap,value:'24/7',label:'AI Support'}].map(s=><div key={s.label} className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 p-5"><s.icon className="h-5 w-5 text-blue-300 mb-2" /><p className="text-2xl font-bold">{s.value}</p><p className="text-xs text-blue-200/60">{s.label}</p></div>)}
          </div>
        </div>
      </div>
      <div className="flex w-full lg:w-1/2 items-center justify-center px-8 bg-white">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-between mb-10">
            <div className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium border ${isOnline?'bg-green-50 text-green-700 border-green-200':'bg-red-50 text-red-700 border-red-200'}`}><div className={`h-1.5 w-1.5 rounded-full ${isOnline?'bg-green-500 animate-pulse':'bg-red-500'}`}/>{isOnline?'Connected':'Offline'}</div>
            <button onClick={()=>setTheme(theme==='dark'?'light':'dark')} className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"><Sun className="h-4 w-4 text-amber-500 dark:opacity-0 absolute"/><Moon className="h-4 w-4 text-gray-500 opacity-0 dark:opacity-100 absolute"/></button>
          </div>
          <div className="flex justify-center mb-8 lg:hidden"><Link href="/" className="flex items-center gap-2"><img src="/wavecoreerplogo.png" alt="WaveCore" className="h-8"/><span className="text-xl font-bold text-gray-900">WAVECORE<span className="text-blue-600">ERP</span></span></Link></div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h2>
          <p className="text-gray-500 mb-8">Sign in to your WaveCore ERP account</p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Email address</label><div className="relative"><Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"/><input type="email" placeholder="you@company.com" value={email} onChange={e=>setEmail(e.target.value)} required className="w-full h-12 pl-12 pr-4 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"/></div></div>
            <div><div className="flex justify-between mb-1.5"><label className="text-sm font-medium text-gray-700">Password</label><Link href="/forgot-password" className="text-xs text-blue-600 hover:text-blue-700 font-medium">Forgot?</Link></div><div className="relative"><Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"/><input type={showPassword?'text':'password'} placeholder="••••••••" value={password} onChange={e=>setPassword(e.target.value)} required className="w-full h-12 pl-12 pr-12 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"/><button type="button" onClick={()=>setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">{showPassword?<EyeOff className="h-4 w-4"/>:<Eye className="h-4 w-4"/>}</button></div></div>
            <div className="flex items-center"><input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"/><label htmlFor="remember" className="ml-2 text-sm text-gray-500">Remember me</label></div>
            <button type="submit" disabled={isSubmitting||!isOnline} className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-lg shadow-blue-200 transition flex items-center justify-center gap-2 disabled:opacity-50">{isSubmitting?<Loader2 className="h-4 w-4 animate-spin"/>:<ArrowRight className="h-4 w-4"/>}Sign In</button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-500">No account? <Link href="/register" className="text-blue-600 hover:text-blue-700 font-semibold">Start free trial</Link></p>
          <p className="mt-8 text-center text-xs text-gray-400">KES 1,000/month · M-Pesa Till 4760783</p>
        </div>
      </div>
    </div>
  );
}
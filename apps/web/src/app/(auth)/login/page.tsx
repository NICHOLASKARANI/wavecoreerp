'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/stores/auth-store';
import { useTheme } from 'next-themes';
import { toast } from 'sonner';
import { Eye, EyeOff, Loader2, Mail, Lock, ArrowRight, Sun, Moon, Wifi, WifiOff, Github, Chrome, Building2, Fingerprint, QrCode, Globe, Shield, Zap, TrendingUp, BarChart3 } from 'lucide-react';

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
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    setIsOnline(navigator.onLine);
    window.addEventListener('online', () => setIsOnline(true));
    window.addEventListener('offline', () => setIsOnline(false));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const particles = [];
    for (let i = 0; i < 80; i++) particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,vx:(Math.random()-0.5)*0.5,vy:(Math.random()-0.5)*0.5,size:Math.random()*2+0.5,opacity:Math.random()*0.5+0.1});
    const lines = [];
    for (let i = 0; i < 15; i++) lines.push({x1:Math.random()*canvas.width,y1:Math.random()*canvas.height,x2:Math.random()*canvas.width,y2:Math.random()*canvas.height,opacity:Math.random()*0.15+0.03,speed:Math.random()*0.3+0.1});
    let id;
    const animate = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      particles.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>canvas.width)p.vx*=-1;if(p.y<0||p.y>canvas.height)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fillStyle=`rgba(59,130,246,${p.opacity})`;ctx.fill()});
      lines.forEach(l=>{l.x1+=l.speed;l.y1+=l.speed*0.5;if(l.x1>canvas.width)l.x1=0;if(l.y1>canvas.height)l.y1=0;ctx.beginPath();ctx.moveTo(l.x1,l.y1);ctx.lineTo(l.x2,l.y2);ctx.strokeStyle=`rgba(139,92,246,${l.opacity})`;ctx.lineWidth=0.5;ctx.stroke()});
      id=requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(id);
  }, []);

  const checkStrength = (p: string) => {
    let s = 0;
    if (p.length >= 8) s++; if (/[a-z]/.test(p)) s++; if (/[A-Z]/.test(p)) s++; if (/[0-9]/.test(p)) s++; if (/[^A-Za-z0-9]/.test(p)) s++;
    setPasswordStrength(s);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isOnline) { toast.error('No internet'); return; }
    setIsSubmitting(true);
    try {
      const r = await login(email, password);
      if (r?.requiresMfa) router.push('/verify-otp?email='+email);
      else if (!r?.isSubscribed) router.push('/settings/subscription');
      else { toast.success('Welcome!'); router.push('/dashboard'); }
    } catch { toast.error('Invalid credentials'); }
    finally { setIsSubmitting(false); }
  };

  const strengthColors = ['','bg-red-500','bg-orange-500','bg-yellow-500','bg-emerald-500','bg-green-500'];

  return (
    <div className="flex min-h-screen bg-[#0a0a0f]">
      <div className="hidden lg:flex lg:w-[60%] relative overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" style={{animationDelay:'2s'}} />
        <div className="relative z-10 flex flex-col justify-between w-full p-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-2xl">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <div><h1 className="text-2xl font-bold text-white">WAVECORE<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 ml-1">ERP</span></h1><p className="text-xs text-blue-300/60">Enterprise Intelligence Platform</p></div>
            </div>
            <h2 className="text-5xl font-bold text-white leading-tight max-w-xl">The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Business Intelligence</span></h2>
            <p className="mt-4 text-lg text-blue-200/50 max-w-lg">AI-powered ERP that automates your entire business.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-lg my-auto">
            {[{icon:TrendingUp,label:'Revenue Today',value:'KES 2.4M',trend:'+12.5%',c:'from-emerald-500 to-teal-500'},{icon:BarChart3,label:'AI Predictions',value:'97.8%',trend:'Accuracy',c:'from-blue-500 to-indigo-500'},{icon:Shield,label:'Security',value:'A+',trend:'Enterprise',c:'from-purple-500 to-pink-500'},{icon:Zap,label:'Transactions',value:'14,295',trend:'Today',c:'from-amber-500 to-orange-500'}].map((card,i)=><div key={card.label} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 hover:bg-white/[0.06] hover:border-white/20 transition-all hover:scale-[1.02]" style={{animationDelay:`${i*0.2}s`}}><div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${card.c}`}/><div className="flex items-center justify-between mb-2"><card.icon className="h-5 w-5 text-white/60"/><span className="text-xs font-medium text-emerald-400">{card.trend}</span></div><p className="text-2xl font-bold text-white">{card.value}</p><p className="text-xs text-white/40 mt-0.5">{card.label}</p></div>)}
          </div>
          <div className="flex items-center gap-8 text-xs text-white/30"><div className="flex items-center gap-2"><Wifi className="h-3 w-3 text-emerald-400"/><span>Real-time Sync</span></div><div className="flex items-center gap-2"><Shield className="h-3 w-3 text-blue-400"/><span>SOC2 Compliant</span></div><div className="flex items-center gap-2"><Zap className="h-3 w-3 text-amber-400"/><span>99.99% Uptime</span></div><div className="flex items-center gap-2"><Globe className="h-3 w-3 text-purple-400"/><span>6 Regions</span></div></div>
        </div>
      </div>
      <div className="flex w-full lg:w-[40%] items-center justify-center bg-gradient-to-br from-[#0f0f1a] via-[#0d0d18] to-[#0a0a15] px-8">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-between mb-10">
            <div className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium border ${isOnline?'bg-emerald-500/10 text-emerald-400 border-emerald-500/20':'bg-red-500/10 text-red-400 border-red-500/20'}`}><div className={`h-1.5 w-1.5 rounded-full ${isOnline?'bg-emerald-400 animate-pulse':'bg-red-400'}`}/>{isOnline?'Connected':'Offline'}</div>
            <div className="flex items-center gap-2"><button className="p-1.5 rounded-lg hover:bg-white/5 text-white/40"><Globe className="h-4 w-4"/></button>{mounted&&<button onClick={()=>setTheme(theme==='dark'?'light':'dark')} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10"><Sun className="absolute h-4 w-4 text-amber-400 dark:opacity-0"/><Moon className="absolute h-4 w-4 text-blue-300 opacity-0 dark:opacity-100"/></button>}</div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Welcome back</h2>
          <p className="text-white/40 mb-8">Sign in to your WAVECORE account</p>
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[{icon:Chrome,label:'Google'},{icon:Building2,label:'Microsoft'},{icon:Github,label:'GitHub'}].map(b=><button key={b.label} className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] py-3 text-xs font-medium text-white/60 hover:text-white hover:bg-white/[0.05] transition-all"><b.icon className="h-4 w-4"/><span className="hidden sm:inline">{b.label}</span></button>)}
          </div>
          <div className="relative mb-6"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"/></div><div className="relative flex justify-center"><span className="bg-[#0f0f1a] px-4 text-xs text-white/20 uppercase">or with email</span></div></div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div><label className="block text-sm font-medium text-white/60 mb-2">Email</label><div className="relative"><Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/20"/><input type="email" placeholder="you@enterprise.com" value={email} onChange={e=>setEmail(e.target.value)} required className="w-full h-12 pl-11 pr-4 rounded-xl border border-white/[0.08] bg-white/[0.02] text-white placeholder:text-white/15 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10 transition-all text-sm"/></div></div>
            <div><div className="flex justify-between mb-2"><label className="text-sm font-medium text-white/60">Password</label><Link href="/forgot-password" className="text-xs text-blue-400">Forgot?</Link></div><div className="relative"><Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/20"/><input type={showPassword?'text':'password'} placeholder="Password" value={password} onChange={e=>{setPassword(e.target.value);checkStrength(e.target.value)}} required className="w-full h-12 pl-11 pr-12 rounded-xl border border-white/[0.08] bg-white/[0.02] text-white placeholder:text-white/15 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10 transition-all text-sm"/><button type="button" onClick={()=>setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20">{showPassword?<EyeOff className="h-4 w-4"/>:<Eye className="h-4 w-4"/>}</button></div>{password&&<div className="mt-2 flex gap-1">{[1,2,3,4,5].map(l=><div key={l} className={`h-1 flex-1 rounded-full transition-all ${l<=passwordStrength?strengthColors[passwordStrength]:'bg-white/5'}`}/>)}</div>}</div>
            <div className="flex items-center justify-between"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={rememberMe} onChange={e=>setRememberMe(e.target.checked)} className="h-4 w-4 rounded border-white/10 bg-white/5"/><span className="text-sm text-white/40">Remember me</span></label><div className="flex gap-1"><button type="button" className="p-2 rounded-lg hover:bg-white/5 text-white/30"><Fingerprint className="h-4 w-4"/></button><button type="button" className="p-2 rounded-lg hover:bg-white/5 text-white/30"><QrCode className="h-4 w-4"/></button></div></div>
            <button type="submit" disabled={isSubmitting||!isOnline} className="relative w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold text-sm shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all overflow-hidden disabled:opacity-50">{isSubmitting?<span className="flex items-center justify-center gap-2"><Loader2 className="h-4 w-4 animate-spin"/>Authenticating...</span>:<span className="flex items-center justify-center gap-2">Sign In<ArrowRight className="h-4 w-4"/></span>}</button>
          </form>
          <p className="mt-6 text-sm text-white/30">No account? <Link href="/register" className="text-blue-400 font-medium">Start free trial</Link></p>
          <div className="mt-8 pt-6 border-t border-white/5 flex justify-between text-[10px] text-white/15"><span>KES 1,000/month · M-Pesa Till 4760783</span><span>WAVECORE ERP v2.0</span></div>
        </div>
      </div>
    </div>
  );
}
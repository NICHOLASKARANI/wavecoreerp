'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/stores/auth-store';
import { toast } from 'sonner';
import { Loader2, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const r = await login(email, password);
      if (r?.requiresMfa) router.push('/verify-otp?email='+email);
      else if (!r?.isSubscribed) router.push('/settings/subscription');
      else { toast.success('Welcome back!'); router.push('/dashboard'); }
    } catch { toast.error('Invalid email or password'); }
    finally { setIsSubmitting(false); }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">W</span>
            </div>
            <span className="text-sm font-semibold text-gray-900">WaveCore<span className="text-gray-400 font-normal">ERP</span></span>
          </Link>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
            <h1 className="text-xl font-bold text-gray-900 mb-1">Sign in</h1>
            <p className="text-sm text-gray-500 mb-6">to continue to WaveCore ERP</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required
                  className="w-full h-10 px-3 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="you@company.com" />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-sm font-medium text-gray-700">Password</label>
                  <Link href="/forgot-password" className="text-xs text-blue-600 hover:text-blue-800">Forgot password?</Link>
                </div>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required
                  className="w-full h-10 px-3 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your password" />
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-blue-600" />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600">Keep me signed in</label>
              </div>

              <button type="submit" disabled={isSubmitting}
                className="w-full h-10 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition flex items-center justify-center gap-2 disabled:opacity-50">
                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
                Sign in
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              No account? <Link href="/register" className="text-blue-600 hover:text-blue-800 font-semibold">Start free trial</Link>
            </p>
          </div>
          <p className="mt-4 text-center text-xs text-gray-400">
            KES 1,000/month · M-Pesa Till 4760783
          </p>
        </div>
      </div>
    </div>
  );
}
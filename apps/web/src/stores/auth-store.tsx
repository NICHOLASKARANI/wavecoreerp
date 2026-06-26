'use client';
import { createContext, useContext, useState, useCallback, useEffect, createElement } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1';
const api = axios.create({ baseURL: API_URL });

interface AuthState {
  user: any; tenant: any; isLoading: boolean; isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<any>;
  register: (data: any) => Promise<any>;
  logout: () => void;
}

const AuthContext = createContext<AuthState>({} as AuthState);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [tenant, setTenant] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => { setIsLoading(false); }, []);

  const login = useCallback(async (email: string, password: string) => {
    const res = await api.post('/auth/login', { email, password });
    const d = res.data.data || res.data;
    setUser(d.user); setTenant(d.tenant);
    return d;
  }, []);

  const register = useCallback(async (data: any) => {
    const res = await api.post('/auth/register', data);
    return res.data;
  }, []);

  const logout = useCallback(() => { setUser(null); setTenant(null); router.push('/login'); }, [router]);

  return createElement(AuthContext.Provider, { value: { user, tenant, isLoading, isAuthenticated: !!user, login, register, logout } }, children);
}

export function useAuth() { return useContext(AuthContext); }
export { api };

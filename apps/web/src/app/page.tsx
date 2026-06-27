"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ChevronRight, Play, Brain, 
  Shield, Cloud, Globe, Zap, TrendingUp,
  Users, Building, Store, Truck, Factory, Hotel,
  School, Hospital, ShoppingBag, Coffee,
  BarChart3, Package, ShoppingCart, User, 
  Layers, Code, CheckCircle, Star, Quote, 
  Linkedin, Twitter, Github, Youtube,
  Rocket, Sparkles, ArrowRight, Mail,
  Phone, MapPin, Send, Calendar,
  ChevronDown, Server, Network, Lock,
  Award, Briefcase, Heart, Leaf,
  Building2, Banknote, Wallet, PieChart,
  FileText, Lightbulb, Target, Globe2,
  Plane, Train, Bus, Car, Database,
  Cpu, Activity, RefreshCw, Workflow,
  LineChart, PieChart as PieChartIcon,
  DollarSign
} from "lucide-react";

import { Area, AreaChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Chart data
  const revenueData = [
    { name: "Jan", revenue: 45000 },
    { name: "Feb", revenue: 52000 },
    { name: "Mar", revenue: 48000 },
    { name: "Apr", revenue: 61000 },
    { name: "May", revenue: 58000 },
    { name: "Jun", revenue: 72000 },
    { name: "Jul", revenue: 68000 },
  ];

  const inventoryData = [
    { name: "Warehouse A", value: 4500 },
    { name: "Warehouse B", value: 3200 },
    { name: "Warehouse C", value: 2800 },
    { name: "Warehouse D", value: 1900 },
    { name: "Warehouse E", value: 3600 },
  ];

  // Floating metrics
  const metrics = [
    { label: "Revenue", value: "$1.24M", change: "+12.5%", icon: DollarSign },
    { label: "Orders", value: "8,450", change: "+8.2%", icon: ShoppingCart },
    { label: "Inventory", value: "23,400", change: "-3.1%", icon: Package },
    { label: "Profit", value: "$489K", change: "+15.8%", icon: TrendingUp },
  ];

  return (
    <div ref={containerRef} className="bg-[#FFFFFF] min-h-screen overflow-x-hidden selection:bg-[#2563EB]/20 font-sans antialiased">
      
      {/* === PREMIUM NAVIGATION === */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 bg-[#2563EB] rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-[#0F172A] tracking-tight">
                  WaveCore
                </span>
                <span className="text-[10px] font-medium text-[#2563EB] block -mt-0.5 tracking-wider uppercase">
                  Enterprise ERP
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-6 text-sm font-medium text-[#0F172A]/70 hover:text-[#0F172A] transition-colors">
                <a href="#" className="hover:text-[#2563EB] transition-colors">Platform</a>
                <a href="#" className="hover:text-[#2563EB] transition-colors">Solutions</a>
                <a href="#" className="hover:text-[#2563EB] transition-colors">Industries</a>
                <a href="#" className="hover:text-[#2563EB] transition-colors">Pricing</a>
                <a href="#" className="hover:text-[#2563EB] transition-colors">Developers</a>
              </div>
              <div className="flex items-center gap-4">
                <button className="text-sm font-medium text-[#0F172A]/70 hover:text-[#2563EB] transition-colors">Sign In</button>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2.5 bg-[#2563EB] text-white rounded-lg text-sm font-medium hover:bg-[#1D4ED8] transition-all shadow-sm hover:shadow-md"
                >
                  Get Started
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-[#0F172A]" /> : <Menu className="w-6 h-6 text-[#0F172A]" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100"
          >
            <div className="px-6 py-4 space-y-3">
              <a href="#" className="block text-sm font-medium text-[#0F172A]/70 hover:text-[#2563EB]">Platform</a>
              <a href="#" className="block text-sm font-medium text-[#0F172A]/70 hover:text-[#2563EB]">Solutions</a>
              <a href="#" className="block text-sm font-medium text-[#0F172A]/70 hover:text-[#2563EB]">Industries</a>
              <a href="#" className="block text-sm font-medium text-[#0F172A]/70 hover:text-[#2563EB]">Pricing</a>
              <a href="#" className="block text-sm font-medium text-[#0F172A]/70 hover:text-[#2563EB]">Developers</a>
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <button className="text-sm font-medium text-[#0F172A]/70 hover:text-[#2563EB]">Sign In</button>
                <button className="px-5 py-2.5 bg-[#2563EB] text-white rounded-lg text-sm font-medium hover:bg-[#1D4ED8]">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* === CINEMATIC HERO SECTION === */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#FFFFFF]">
        {/* Cinematic Enterprise Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/5 via-transparent to-[#0F172A]/5" />
          
          {/* Neural Network Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 80 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#2563EB]/20 rounded-full"
                animate={{
                  x: [0, Math.random() * 1000 - 500],
                  y: [0, Math.random() * 1000 - 500],
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: Math.random() * 30 + 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          {/* Glowing Network Lines */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="lineGradient">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#0F172A" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.line
                key={i}
                x1={Math.random() * 100 + "%"}
                y1={Math.random() * 100 + "%"}
                x2={Math.random() * 100 + "%"}
                y2={Math.random() * 100 + "%"}
                stroke="url(#lineGradient)"
                strokeWidth="0.5"
                animate={{
                  opacity: [0.1, 0.4, 0.1],
                }}
                transition={{
                  duration: Math.random() * 5 + 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </svg>

          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#2563EB]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#0F172A]/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              style={{ opacity: heroOpacity, scale: heroScale }}
              initial={{ opacity: 0, x: -40 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="px-4 py-1.5 bg-[#2563EB]/10 text-[#2563EB] text-xs font-semibold rounded-full">
                  AI-Powered Enterprise Platform
                </span>
                <span className="px-4 py-1.5 bg-[#0F172A]/5 text-[#0F172A]/70 text-xs font-semibold rounded-full">
                  Trusted by 10,000+ Businesses
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0F172A] leading-tight tracking-tight mb-6"
              >
                Transform Every Business
                <span className="block text-[#2563EB] mt-2">With AI-Powered Intelligence</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-lg text-[#0F172A]/70 mb-8 max-w-md leading-relaxed"
              >
                One platform. Unlimited companies. Unlimited growth. 
                AI ERP • POS • CRM • Accounting • Payroll • Inventory • Manufacturing • Analytics
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3.5 bg-[#2563EB] text-white rounded-lg text-sm font-medium hover:bg-[#1D4ED8] transition-all shadow-sm hover:shadow-md flex items-center gap-2"
                >
                  Start Free Trial <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3.5 border border-gray-200 text-[#0F172A]/70 rounded-lg text-sm font-medium hover:border-[#2563EB] hover:text-[#2563EB] transition-all flex items-center gap-2"
                >
                  <Play className="w-4 h-4" /> Watch Demo
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right - Animated Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 p-6 overflow-hidden">
                {/* Glass reflection */}
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
                
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-xs font-medium text-[#0F172A]/60">Live System</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#0F172A]/40">
                    <Activity className="w-3 h-3" />
                    <span>AI Active</span>
                  </div>
                </div>

                {/* Animated Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {metrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="p-3 bg-[#F8FAFC] rounded-lg border border-gray-100"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-[#0F172A]/50">{metric.label}</span>
                        <metric.icon className="w-3 h-3 text-[#2563EB]" />
                      </div>
                      <div className="text-lg font-bold text-[#0F172A]">{metric.value}</div>
                      <div className="text-xs text-green-500">{metric.change}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Animated Chart */}
                <div className="h-32 bg-[#F8FAFC] rounded-lg border border-gray-100 p-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData}>
                      <XAxis dataKey="name" stroke="#9CA3AF" fontSize={8} />
                      <YAxis stroke="#9CA3AF" fontSize={8} />
                      <Tooltip />
                      <Area type="monotone" dataKey="revenue" stroke="#2563EB" fill="#2563EB" fillOpacity={0.1} strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* AI Copilot Widget */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="mt-4 p-3 bg-gradient-to-r from-[#2563EB]/5 to-[#0F172A]/5 rounded-lg border border-[#2563EB]/10"
                >
                  <div className="flex items-start gap-3">
                    <Brain className="w-4 h-4 text-[#2563EB] mt-0.5" />
                    <div>
                      <p className="text-xs font-medium text-[#0F172A]">AI Forecast</p>
                      <p className="text-[10px] text-[#0F172A]/60">Revenue projected +12.5% this quarter</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating UI Elements */}
                <motion.div
                  className="absolute -top-2 -right-2 w-16 h-16 bg-[#2563EB]/10 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-16 h-16 bg-[#0F172A]/10 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-[#0F172A]/40">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 text-[#0F172A]/40" />
          </div>
        </motion.div>
      </section>

      {/* === TRUST BAR === */}
      <section className="py-12 bg-[#F8FAFC] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-sm font-medium text-[#0F172A]/40 uppercase tracking-wider">
              Trusted by 10,000+ businesses worldwide
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60">
            {["Retail", "Manufacturing", "Healthcare", "Finance", "Logistics", "Education", "Government", "Technology"].map((industry, i) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-base font-semibold text-[#0F172A]/40 hover:text-[#0F172A]/60 transition-colors"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === LIVE DASHBOARD PREVIEW === */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4 tracking-tight">
              See WaveCore in Action
            </h2>
            <p className="text-[#0F172A]/60 max-w-2xl mx-auto text-lg">
              Real-time ERP dashboard showing live data, AI insights, and business intelligence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-8"
          >
            {/* Glass reflection */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
            
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-sm font-medium text-[#0F172A]/60">Live System — WaveCore ERP</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-[#0F172A]/40">
                <Activity className="w-4 h-4" />
                <span>AI Copilot Active</span>
                <span className="w-px h-4 bg-gray-200" />
                <span>12,450 users online</span>
              </div>
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: "Revenue", value: "$1.24M", change: "+12.5%", icon: DollarSign },
                { label: "Orders", value: "8,450", change: "+8.2%", icon: ShoppingCart },
                { label: "Inventory", value: "23,400", change: "-3.1%", icon: Package },
                { label: "Profit", value: "$489K", change: "+15.8%", icon: TrendingUp },
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -2 }}
                  className="p-4 bg-[#F8FAFC] rounded-xl border border-gray-100 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#0F172A]/50">{metric.label}</span>
                    <metric.icon className="w-4 h-4 text-[#2563EB]" />
                  </div>
                  <div className="text-2xl font-bold text-[#0F172A]">{metric.value}</div>
                  <div className="text-xs text-green-500">{metric.change}</div>
                </motion.div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-4 bg-[#F8FAFC] rounded-xl border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-[#0F172A]">Revenue Trend</span>
                  <LineChart className="w-4 h-4 text-[#2563EB]" />
                </div>
                <div className="h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData}>
                      <XAxis dataKey="name" stroke="#9CA3AF" fontSize={8} />
                      <YAxis stroke="#9CA3AF" fontSize={8} />
                      <Tooltip />
                      <Area type="monotone" dataKey="revenue" stroke="#2563EB" fill="#2563EB" fillOpacity={0.1} strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-4 bg-[#F8FAFC] rounded-xl border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-[#0F172A]">Inventory by Warehouse</span>
                  <Package className="w-4 h-4 text-[#2563EB]" />
                </div>
                <div className="h-40 flex items-end justify-around gap-2">
                  {inventoryData.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ height: 0 }}
                      whileInView={{ height: "auto" }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex flex-col items-center gap-1"
                    >
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: (item.value / 4500) * 120 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 + 0.2 }}
                        className="w-8 bg-[#2563EB] rounded-t-md"
                      />
                      <span className="text-[10px] text-[#0F172A]/60">{item.name.split(" ")[1]}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* AI Copilot Widget */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-4 bg-gradient-to-r from-[#2563EB]/5 to-[#0F172A]/5 rounded-xl border border-[#2563EB]/10"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-[#0F172A]">AI Copilot</span>
                    <span className="text-xs text-green-500 flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Active
                    </span>
                  </div>
                  <p className="text-sm text-[#0F172A]/70">
                    Revenue forecast for next quarter shows 12.5% growth. Recommend increasing inventory for top 3 products.
                  </p>
                  <div className="mt-3 flex gap-2">
                    <span className="text-xs px-2 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full">Forecast</span>
                    <span className="text-xs px-2 py-1 bg-[#0F172A]/5 text-[#0F172A]/60 rounded-full">Inventory</span>
                    <span className="text-xs px-2 py-1 bg-[#0F172A]/5 text-[#0F172A]/60 rounded-full">Revenue</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating glass decoration */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-[#2563EB]/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#0F172A]/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* === INDUSTRIES SECTION === */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4 tracking-tight">
              Built for Every Industry
            </h2>
            <p className="text-[#0F172A]/60 max-w-2xl mx-auto text-lg">
              Tailored solutions for every sector — from retail to manufacturing, healthcare to logistics.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Retail", image: "https://images.unsplash.com/photo-1473186578172-c141b6798cf4?w=400&q=80", count: "12,400+" },
              { name: "Restaurant", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80", count: "8,200+" },
              { name: "Wholesale", image: "https://images.unsplash.com/photo-1472851294608-054d19c6c836?w=400&q=80", count: "6,800+" },
              { name: "Manufacturing", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&q=80", count: "9,100+" },
              { name: "Construction", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80", count: "4,500+" },
              { name: "Schools", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80", count: "7,800+" },
              { name: "Hospital", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80", count: "5,200+" },
              { name: "Pharmacy", image: "https://images.unsplash.com/photo-1576602971766-0dbcd2db510e?w=400&q=80", count: "3,400+" },
              { name: "NGO", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80", count: "2,100+" },
              { name: "Government", image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&q=80", count: "1,800+" },
              { name: "E-commerce", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80", count: "15,600+" },
              { name: "Distribution", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80", count: "6,300+" },
            ].map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ y: -4 }}
                className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{industry.name}</h3>
                    <span className="text-xs text-white/70">{industry.count}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === AI COPILOT SECTION === */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" 
                  alt="AI Technology" 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/80 to-transparent p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#0F172A]">AI Copilot Active</p>
                      <p className="text-xs text-[#0F172A]/50">Processing 1.2M records</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-[#2563EB]">AI Copilot</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4 tracking-tight">
                Your AI-Powered Assistant
              </h2>
              <p className="text-[#0F172A]/60 mb-6 text-lg leading-relaxed">
                Let AI handle the heavy lifting. From forecasting demand to detecting fraud, WaveCore's Copilot gives you instant answers and actionable insights.
              </p>
              <div className="space-y-3">
                {[
                  "Forecast sales with 95% accuracy",
                  "Detect fraud patterns in real-time",
                  "Generate comprehensive reports in seconds",
                  "Optimize reorder points automatically",
                  "Predict cash flow trends with precision",
                  "Voice commands and natural language queries"
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 text-sm text-[#0F172A]/70"
                  >
                    <div className="w-4 h-4 rounded-full bg-[#2563EB]/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-[#2563EB]" />
                    </div>
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === BUSINESS INTELLIGENCE === */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
                  alt="Business Intelligence" 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/80 to-transparent p-6">
                  <div className="flex gap-6">
                    <div>
                      <div className="text-2xl font-bold text-[#0F172A]">12.5%</div>
                      <div className="text-xs text-[#0F172A]/50">Revenue Growth</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#0F172A]">94%</div>
                      <div className="text-xs text-[#0F172A]/50">Accuracy Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#0F172A]">99.9%</div>
                      <div className="text-xs text-[#0F172A]/50">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-[#2563EB]">Business Intelligence</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4 tracking-tight">
                Data-Driven Decisions
              </h2>
              <p className="text-[#0F172A]/60 mb-6 text-lg leading-relaxed">
                Real-time dashboards, predictive analytics, and AI-powered insights that help you stay ahead of the market and make confident decisions.
              </p>
              <div className="space-y-3">
                {[
                  "Real-time dashboards and KPIs",
                  "Predictive analytics and forecasting",
                  "Automated reporting and insights",
                  "AI-powered recommendations",
                  "Customizable data views",
                  "Interactive maps and heatmaps"
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 text-sm text-[#0F172A]/70"
                  >
                    <div className="w-4 h-4 rounded-full bg-[#2563EB]/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-[#2563EB]" />
                    </div>
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === GLOBAL PRESENCE - MAP SECTION === */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4 tracking-tight">
              Global Reach
            </h2>
            <p className="text-[#0F172A]/60 max-w-2xl mx-auto text-lg">
              Serving businesses across 150+ countries worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100"
          >
            <img 
              src="https://images.unsplash.com/photo-1526772662000-3f88f104f39e?w=1200&q=80" 
              alt="Global map" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-center gap-12">
              {[
                { label: "Countries", number: "150+" },
                { label: "Customers", number: "10,000+" },
                { label: "Employees", number: "500+" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-[#0F172A]">{stat.number}</div>
                  <div className="text-sm text-[#0F172A]/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4 tracking-tight">
              What Our Customers Say
            </h2>
            <p className="text-[#0F172A]/60 max-w-2xl mx-auto text-lg">
              See how businesses are transforming with WaveCore.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[ 
              { 
                name: "Sarah Johnson", 
                role: "CEO, TechRetail Group", 
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80", 
                quote: "WaveCore unified our entire operation. Efficiency increased by 47% in just 3 months." 
              },
              { 
                name: "Michael Chen", 
                role: "Finance Director, GlobalMfg", 
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80", 
                quote: "AI insights revolutionized our decision-making. We're seeing results we never thought possible." 
              },
              { 
                name: "Emily Rodriguez", 
                role: "Operations Manager, CityHealth", 
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80", 
                quote: "One platform for patient care, inventory, and scheduling. It's transformed how we work." 
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold text-[#0F172A]">{testimonial.name}</h4>
                    <p className="text-xs text-[#0F172A]/50">{testimonial.role}</p>
                  </div>
                </div>
                <Quote className="w-5 h-5 text-[#2563EB]/30 mb-3" />
                <p className="text-[#0F172A]/70 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex gap-1 mt-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#2563EB] text-[#2563EB]" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === PRICING === */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4 tracking-tight">
              One Simple Plan
            </h2>
            <p className="text-[#0F172A]/60 max-w-2xl mx-auto text-lg">
              Everything you need. Nothing you don't.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto bg-white rounded-2xl border border-gray-200 shadow-lg p-8"
          >
            <div className="text-center mb-6 border-b border-gray-100 pb-6">
              <div className="text-5xl font-bold text-[#0F172A]">KES 1,000</div>
              <div className="text-sm text-[#0F172A]/50">per month</div>
            </div>
            <div className="space-y-3">
              {[
                "Unlimited Modules",
                "Unlimited Companies",
                "Unlimited AI",
                "Unlimited Branches",
                "24/7 Premium Support"
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 p-3 bg-[#F8FAFC] rounded-lg"
                >
                  <CheckCircle className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
                  <span className="text-sm text-[#0F172A]/70">{item}</span>
                </motion.div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-6 py-3.5 bg-[#2563EB] text-white rounded-lg font-medium hover:bg-[#1D4ED8] transition-all shadow-sm hover:shadow-md"
            >
              Start Free Trial
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* === FAQS === */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { 
                q: "What makes WaveCore different from other ERPs?", 
                a: "WaveCore is the only AI-powered platform that unifies every business function in one system. Our Copilot provides real-time insights and automation that no other ERP can match." 
              },
              { 
                q: "How long does implementation take?", 
                a: "Most businesses are fully operational within 2-4 weeks. Our AI-powered setup wizard makes onboarding seamless, and we provide dedicated migration support." 
              },
              { 
                q: "Is my data secure?", 
                a: "Absolutely. We use enterprise-grade encryption, SOC 2 compliance, and regular security audits. Your data is always protected with bank-level security." 
              },
              { 
                q: "Can I migrate from another ERP?", 
                a: "Yes! We provide automated migration tools to switch from any system — QuickBooks, SAP, NetSuite, Zoho, or Odoo. Our team guides you through every step." 
              },
              { 
                q: "What kind of support do you offer?", 
                a: "24/7 premium support with dedicated account managers, live chat, phone support, and an extensive knowledge base. We're always here to help." 
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <details className="group">
                  <summary className="px-6 py-4 text-sm font-medium text-[#0F172A] cursor-pointer flex items-center justify-between hover:bg-[#F8FAFC] transition-colors">
                    {faq.q}
                    <ChevronRight className="w-4 h-4 text-[#0F172A]/40 group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-4">
                    <p className="text-sm text-[#0F172A]/70 leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === CONTACT / CTA === */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              Ready to transform your business?
            </h2>
            <p className="text-blue-200/80 mb-8 text-lg">
              Join 10,000+ companies already using WaveCore ERP to drive growth and efficiency.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 bg-[#2563EB] text-white rounded-lg font-medium hover:bg-[#1D4ED8] transition-colors shadow-lg"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#2563EB] rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold text-[#0F172A] tracking-tight">
                    WaveCore
                  </span>
                  <span className="text-[10px] font-medium text-[#2563EB] block -mt-0.5 tracking-wider uppercase">
                    Enterprise ERP
                  </span>
                </div>
              </div>
              <p className="text-sm text-[#0F172A]/50 mb-4 max-w-xs">
                AI-powered ERP for the future of business. Unifying enterprise operations worldwide.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-[#0F172A]/40 hover:text-[#2563EB] transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-[#0F172A]/40 hover:text-[#2563EB] transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="text-[#0F172A]/40 hover:text-[#2563EB] transition-colors"><Github className="w-5 h-5" /></a>
                <a href="#" className="text-[#0F172A]/40 hover:text-[#2563EB] transition-colors"><Youtube className="w-5 h-5" /></a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#0F172A] mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-[#0F172A]/50">
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#0F172A] mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-[#0F172A]/50">
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">ERP Core</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">AI Copilot</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Analytics</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Mobile App</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#0F172A] mb-4">Developers</h4>
              <ul className="space-y-2 text-sm text-[#0F172A]/50">
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">SDK</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#0F172A] mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-[#0F172A]/50">
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Contact Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#0F172A]/50">© 2024 WaveCore ERP. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-[#0F172A]/50">
              <a href="#" className="hover:text-[#2563EB] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#2563EB] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#2563EB] transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ChevronRight, Play, Sparkles, Brain, 
  Shield, Cloud, Database, Globe, Zap, TrendingUp,
  Users, Building, Store, Truck, Factory, Hotel,
  School, Hospital, Bank, ShoppingBag, Coffee,
  BarChart3, PieChart, LineChart, Activity,
  ArrowUpRight, ArrowDownRight, DollarSign,
  Package, ShoppingCart, User, Settings,
  Lock, Clock, RefreshCw, Layers, Code,
  CheckCircle, Star, Quote, Mail, Phone,
  Linkedin, Twitter, Github, Youtube,
  Instagram, Facebook, MapPin, Send
} from "lucide-react";
import { Area, AreaChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// TypeScript interfaces
interface DashboardMetric {
  label: string;
  value: number;
  change: number;
  icon: any;
  color: string;
}

interface ModuleItem {
  name: string;
  icon: any;
  color: string;
  description: string;
}

interface IndustryItem {
  name: string;
  icon: any;
  gradient: string;
  description: string;
}

// Dashboard data
const metrics: DashboardMetric[] = [
  { label: "Revenue", value: 1245000, change: 12.5, icon: DollarSign, color: "#2563EB" },
  { label: "Orders", value: 8450, change: 8.2, icon: ShoppingCart, color: "#22C55E" },
  { label: "Inventory", value: 23400, change: -3.1, icon: Package, color: "#F59E0B" },
  { label: "Profit", value: 489200, change: 15.8, icon: TrendingUp, color: "#8B5CF6" },
];

const chartData = [
  { name: "Jan", revenue: 45000, expenses: 32000, profit: 13000 },
  { name: "Feb", revenue: 52000, expenses: 35000, profit: 17000 },
  { name: "Mar", revenue: 48000, expenses: 33000, profit: 15000 },
  { name: "Apr", revenue: 61000, expenses: 38000, profit: 23000 },
  { name: "May", revenue: 58000, expenses: 37000, profit: 21000 },
  { name: "Jun", revenue: 72000, expenses: 41000, profit: 31000 },
  { name: "Jul", revenue: 68000, expenses: 39000, profit: 29000 },
];

const modules: ModuleItem[] = [
  { name: "Inventory", icon: Package, color: "#2563EB", description: "Real-time stock tracking with AI predictions" },
  { name: "POS", icon: ShoppingCart, color: "#22C55E", description: "Omnichannel point of sale system" },
  { name: "Accounting", icon: BarChart3, color: "#F59E0B", description: "Automated bookkeeping and financial reporting" },
  { name: "Payroll", icon: Users, color: "#8B5CF6", description: "Smart payroll processing with tax compliance" },
  { name: "CRM", icon: User, color: "#EC4899", description: "AI-driven customer relationship management" },
  { name: "HR", icon: Building, color: "#06B6D4", description: "Complete human resources management" },
  { name: "Assets", icon: Layers, color: "#34D399", description: "Asset tracking and maintenance scheduling" },
  { name: "Manufacturing", icon: Factory, color: "#F472B6", description: "Production planning and quality control" },
  { name: "Projects", icon: TrendingUp, color: "#6366F1", description: "Project management with resource allocation" },
  { name: "Procurement", icon: ShoppingBag, color: "#14B8A6", description: "Smart purchasing and vendor management" },
  { name: "Warehouse", icon: Store, color: "#F87171", description: "Advanced warehouse management system" },
  { name: "Fleet", icon: Truck, color: "#60A5FA", description: "Fleet tracking and logistics optimization" },
];

const industries: IndustryItem[] = [
  { name: "Retail", icon: Store, gradient: "from-blue-600 to-cyan-600", description: "Smart retail management" },
  { name: "Manufacturing", icon: Factory, gradient: "from-green-600 to-emerald-600", description: "Industrial automation" },
  { name: "Wholesale", icon: ShoppingBag, gradient: "from-yellow-600 to-amber-600", description: "B2B distribution" },
  { name: "Construction", icon: Building, gradient: "from-orange-600 to-red-600", description: "Project management" },
  { name: "Schools", icon: School, gradient: "from-purple-600 to-violet-600", description: "Educational management" },
  { name: "Hospitals", icon: Hospital, gradient: "from-pink-600 to-rose-600", description: "Healthcare operations" },
  { name: "Hotels", icon: Hotel, gradient: "from-indigo-600 to-blue-600", description: "Hospitality solutions" },
  { name: "Restaurants", icon: Coffee, gradient: "from-red-600 to-orange-600", description: "F&B management" },
  { name: "NGOs", icon: Globe, gradient: "from-teal-600 to-green-600", description: "Nonprofit operations" },
  { name: "Government", icon: Building, gradient: "from-slate-600 to-gray-600", description: "Public sector solutions" },
  { name: "Agriculture", icon: Cloud, gradient: "from-lime-600 to-green-600", description: "Farm management" },
  { name: "Distribution", icon: Truck, gradient: "from-cyan-600 to-blue-600", description: "Supply chain logistics" },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechRetail Group",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    quote: "WaveCore ERP transformed our entire operation. We've seen 47% increase in efficiency across all departments.",
  },
  {
    name: "Michael Chen",
    role: "Finance Director, Global Manufacturing",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    quote: "The AI-powered insights have revolutionized our decision-making. Real-time analytics that actually work.",
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Manager, City Hospital",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    quote: "Unified platform that connects everything. Patient care, inventory, staff scheduling - all in one place.",
  },
];

const faqs = [
  {
    question: "What makes WaveCore ERP different from other solutions?",
    answer: "WaveCore is the only AI-powered ERP that unifies all business operations in one platform. Our advanced AI provides real-time insights, predictions, and automation that no other system can match.",
  },
  {
    question: "How long does implementation take?",
    answer: "Implementation varies by organization size, but most businesses are fully operational within 2-4 weeks. Our AI-powered setup wizard makes onboarding seamless.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We employ enterprise-grade security with end-to-end encryption, SOC 2 compliance, and regular security audits. Your data is always protected.",
  },
  {
    question: "Can I switch from another ERP system?",
    answer: "Yes! We provide automated data migration tools that make switching from QuickBooks, SAP, NetSuite, or any other system quick and painless.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer 24/7 premium support with dedicated account managers, live chat, phone support, and an extensive knowledge base.",
  },
];

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div ref={containerRef} className="bg-white dark:bg-black min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                WaveCore
              </span>
              <span className="text-xs font-medium text-gray-400 dark:text-gray-600">ERP</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Solutions</a>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Products</a>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Industries</a>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Resources</a>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Developers</a>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Documentation</a>
              </div>
              <div className="flex items-center gap-4">
                <button className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600">Sign In</button>
                <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all">
                  Get Started
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white dark:bg-black border-b border-gray-200/20 dark:border-gray-800/20"
            >
              <div className="px-4 py-4 space-y-4">
                <a href="#" className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600">Solutions</a>
                <a href="#" className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600">Products</a>
                <a href="#" className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600">Industries</a>
                <a href="#" className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600">Resources</a>
                <a href="#" className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600">Developers</a>
                <a href="#" className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600">Documentation</a>
                <div className="pt-4 border-t border-gray-200/20 dark:border-gray-800/20 flex flex-col gap-3">
                  <button className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600">Sign In</button>
                  <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-medium">
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-cyan-600/5" />
          <div className="absolute inset-0 bg-white/95 dark:bg-black/95" />
          
          {/* Particle system */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/20 dark:bg-blue-400/10 rounded-full"
                animate={{
                  x: [0, Math.random() * 1000 - 500],
                  y: [0, Math.random() * 1000 - 500],
                }}
                transition={{
                  duration: Math.random() * 20 + 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 100 + "%",
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
                  AI-Powered
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-medium rounded-full">
                  Enterprise Grade
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                AI Powered Business
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Operating System
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
                WaveCore ERP unifies inventory, POS, accounting, HR, CRM, and analytics into one intelligent platform. 
                Run your entire business with real-time AI insights.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-medium hover:shadow-xl hover:shadow-blue-500/25 transition-all">
                  Start Free
                </button>
                <button className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:border-blue-600 hover:text-blue-600 transition-all">
                  Book Demo
                </button>
                <button className="flex items-center gap-2 px-8 py-3 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:text-blue-600 transition-colors">
                  <Play className="w-4 h-4" /> Watch Overview
                </button>
              </div>
            </motion.div>

            {/* Right Dashboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-2xl">
                {/* Floating metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {metrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{metric.label}</span>
                        <metric.icon className="w-4 h-4" style={{ color: metric.color }} />
                      </div>
                      <div className="text-xl font-bold text-gray-900 dark:text-white">
                        K
                      </div>
                      <div className="text-xs font-medium">
                        <span className={metric.change > 0 ? "text-green-500" : "text-red-500"}>
                          {metric.change > 0 ? "+" : ""}{metric.change}%
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Chart */}
                <div className="h-48 bg-white dark:bg-gray-800 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <XAxis dataKey="name" stroke="#9CA3AF" fontSize={10} />
                      <YAxis stroke="#9CA3AF" fontSize={10} />
                      <Tooltip />
                      <Area type="monotone" dataKey="revenue" stroke="#2563EB" fill="#2563EB" fillOpacity={0.1} />
                      <Area type="monotone" dataKey="profit" stroke="#22C55E" fill="#22C55E" fillOpacity={0.1} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* AI Insights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200/50 dark:border-blue-800/50"
                >
                  <div className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">AI Forecast</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        Revenue projected to increase by 12.5% next quarter based on current trends
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-700 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-300 dark:bg-gray-700 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Trusted Companies */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-8">
            Trusted by companies worldwide
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {["Banks", "Hospitals", "Schools", "Retail", "Manufacturing"].map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm"
              >
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Modules */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive ERP Modules
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Every aspect of your business unified in one intelligent platform
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {modules.map((module, index) => (
              <motion.div
                key={module.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200/50 dark:border-gray-800/50 hover:border-blue-300 dark:hover:border-blue-700 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center mb-3 shadow-sm group-hover:shadow-md transition-shadow" style={{ color: module.color }}>
                  <module.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{module.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{module.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Copilot */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">AI Copilot</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Your Intelligent Business Assistant
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                WaveCore's AI Copilot helps you make smarter decisions with predictive analytics, 
                automated workflows, and real-time insights.
              </p>
              <div className="space-y-3">
                {[
                  "Forecast sales with 95% accuracy",
                  "Predict inventory needs automatically",
                  "Generate reports in seconds",
                  "Detect fraud patterns instantly",
                  "Recommend optimal reorder points"
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {feature}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-2xl">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200/50 dark:border-gray-800/50">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">AI Assistant</span>
                </div>
                
                <div className="space-y-4">
                  {[
                    { text: "Sales forecast for next month shows 8.5% growth", time: "2s ago" },
                    { text: "Inventory alert: 5 items below threshold", time: "5s ago" },
                    { text: "Generated Q3 financial report", time: "10s ago" },
                    { text: "Recommended reorder for 3 suppliers", time: "15s ago" },
                  ].map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <p className="text-sm text-gray-700 dark:text-gray-300">{message.text}</p>
                      <p className="text-xs text-gray-400 mt-1">{message.time}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Built for Every Industry
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Tailored solutions for businesses of all sizes and sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className={p-6 bg-gradient-to-br  rounded-xl text-white cursor-pointer relative overflow-hidden group}
              >
                <div className="relative z-10">
                  <industry.icon className="w-8 h-8 mb-3" />
                  <h3 className="text-sm font-semibold">{industry.name}</h3>
                  <p className="text-xs text-white/70 mt-1">{industry.description}</p>
                </div>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Customers Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <Quote className="w-6 h-6 text-blue-500/30 mb-3" />
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex gap-1 mt-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="border border-gray-200/50 dark:border-gray-800/50 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                >
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{faq.question}</span>
                  <ChevronRight className={w-4 h-4 text-gray-400 transition-transform } />
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-sm text-gray-600 dark:text-gray-400">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold">WaveCore</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                AI-powered ERP for the future of business.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">ERP Core</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Copilot</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Developers</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SDK</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 WaveCore ERP. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

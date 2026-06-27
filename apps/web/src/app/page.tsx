"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  Plane, Train, Bus, Car
} from "lucide-react";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
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

  return (
    <div ref={containerRef} className="bg-white min-h-screen overflow-x-hidden selection:bg-blue-500/20 font-sans antialiased">
      {/* Premium Navigation - Transparent to Solid */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
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

      {/* HERO SECTION - Split Screen with Premium Photography */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white">
        {/* Premium Background Image - Modern Corporate Headquarters */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" 
            alt="Modern corporate headquarters" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
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
                <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] text-xs font-semibold rounded-full">
                  AI-Powered Enterprise Platform
                </span>
                <span className="px-3 py-1 bg-[#0F172A]/5 text-[#0F172A]/70 text-xs font-semibold rounded-full">
                  Trusted by 10,000+ Businesses
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0F172A] leading-tight tracking-tight mb-6"
              >
                The AI Operating System
                <span className="block text-[#2563EB] mt-2">for Global Enterprise</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-lg text-[#0F172A]/70 mb-8 max-w-md leading-relaxed"
              >
                Unify finance, inventory, HR, CRM, and analytics into one intelligent platform. 
                WaveCore brings AI to every corner of your enterprise — from the warehouse to the boardroom.
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

            {/* Right - Product Storytelling Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" 
                  alt="WaveCore AI Platform" 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/80 to-transparent p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#0F172A]">AI-powered business intelligence</p>
                      <p className="text-xs text-[#0F172A]/50">Real-time insights at your fingertips</p>
                    </div>
                  </div>
                </div>
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

      {/* TRUSTED BY - Global Brands */}
      <section className="py-16 bg-[#F8FAFC] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-sm font-medium text-[#0F172A]/50 uppercase tracking-wider">
              Trusted by 10,000+ businesses worldwide
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-12 md:gap-16 opacity-60">
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

      {/* ERP MODULES - Premium Photography Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4 tracking-tight">
              One Platform. Every Function.
            </h2>
            <p className="text-[#0F172A]/60 max-w-2xl mx-auto text-lg">
              From the warehouse to the boardroom, WaveCore unifies your entire enterprise with AI-powered intelligence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Inventory Management", 
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80", 
                desc: "Real-time stock tracking with AI predictions",
                icon: Package 
              },
              { 
                name: "Financial Operations", 
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80", 
                desc: "Automated accounting and financial reporting",
                icon: BarChart3 
              },
              { 
                name: "Customer Relationship", 
                image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80", 
                desc: "AI-driven CRM and customer insights",
                icon: User 
              },
              { 
                name: "Human Resources", 
                image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80", 
                desc: "Streamlined payroll and employee management",
                icon: Users 
              },
              { 
                name: "Manufacturing Control", 
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80", 
                desc: "Production planning and quality control",
                icon: Factory 
              },
              { 
                name: "Logistics & Fulfillment", 
                image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80", 
                desc: "Advanced warehouse and distribution management",
                icon: Store 
              },
            ].map((module, index) => (
              <motion.div
                key={module.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={module.image} 
                    alt={module.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <module.icon className="w-4 h-4 text-white/80" />
                    <h3 className="text-xl font-bold text-white">{module.name}</h3>
                  </div>
                  <p className="text-sm text-white/80">{module.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI COPILOT - Premium Photography Section */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" 
                alt="AI Technology" 
                className="rounded-2xl shadow-xl border border-gray-200"
              />
              <div className="mt-4 flex items-center gap-4 text-sm text-[#0F172A]/60">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>AI Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
                  <span>Processing 1.2M records</span>
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
                  "Predict cash flow trends with precision"
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

      {/* BUSINESS INTELLIGENCE - Premium Photography Section */}
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
                  "Customizable data views"
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

      {/* INDUSTRIES - Global Reach */}
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
              { name: "Retail", image: "https://images.unsplash.com/photo-1473186578172-c141b6798cf4?w=400&q=80" },
              { name: "Manufacturing", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&q=80" },
              { name: "Healthcare", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80" },
              { name: "Logistics", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80" },
              { name: "Education", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80" },
              { name: "Hospitality", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80" },
              { name: "Finance", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80" },
              { name: "Government", image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&q=80" },
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-[#0F172A]/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold text-white">{industry.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE - Map Section */}
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

      {/* CUSTOMER SUCCESS STORIES */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4 tracking-tight">
              Success Stories
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

      {/* PRICING - Simple, Transparent */}
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

      {/* FAQS */}
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

      {/* CONTACT / CTA */}
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

      {/* FOOTER */}
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

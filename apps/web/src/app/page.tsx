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
  ChevronDown, Server, Network, Lock
} from "lucide-react";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div ref={containerRef} className="bg-white min-h-screen overflow-x-hidden selection:bg-blue-500/20">
      {/* Premium Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                WaveCore
              </span>
              <span className="text-xs font-medium text-gray-400 border-l border-gray-200 pl-2">ERP</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-6 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                <a href="#" className="hover:text-blue-600 transition-colors">Platform</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Solutions</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Industries</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Pricing</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Developers</a>
              </div>
              <div className="flex items-center gap-4">
                <button className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Sign In</button>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-all shadow-sm hover:shadow-md"
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
              {isMenuOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
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
            <div className="px-4 py-4 space-y-3">
              <a href="#" className="block text-sm font-medium text-gray-600 hover:text-blue-600">Platform</a>
              <a href="#" className="block text-sm font-medium text-gray-600 hover:text-blue-600">Solutions</a>
              <a href="#" className="block text-sm font-medium text-gray-600 hover:text-blue-600">Industries</a>
              <a href="#" className="block text-sm font-medium text-gray-600 hover:text-blue-600">Pricing</a>
              <a href="#" className="block text-sm font-medium text-gray-600 hover:text-blue-600">Developers</a>
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <button className="text-sm font-medium text-gray-600 hover:text-blue-600">Sign In</button>
                <button className="px-5 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* HERO SECTION - Full Screen Corporate Split */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white">
        {/* Professional Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" 
            alt="Global headquarters" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              style={{ opacity: heroOpacity, scale: heroScale }}
              initial={{ opacity: 0, x: -30 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
                  Enterprise AI Platform
                </span>
                <span className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-semibold rounded-full">
                  Trusted by 10,000+ Businesses
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight mb-6"
              >
                The AI Operating System
                <span className="block text-blue-600 mt-2">for Modern Business</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed"
              >
                Unify your entire enterprise — inventory, finance, HR, CRM, and analytics — with one intelligent platform powered by AI.
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
                  className="px-8 py-3 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-all shadow-sm hover:shadow-md flex items-center gap-2"
                >
                  Start Free Trial <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 border border-gray-200 text-gray-700 rounded-md text-sm font-medium hover:border-blue-600 hover:text-blue-600 transition-all flex items-center gap-2"
                >
                  <Play className="w-4 h-4" /> Watch Demo
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right - Product Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100 p-8">
                <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-xs font-medium text-gray-400 ml-2">WaveCore Dashboard</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-600">Revenue</span>
                    <span className="text-sm font-bold text-gray-900">$1.24M</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-600">Orders</span>
                    <span className="text-sm font-bold text-gray-900">8,450</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-600">Inventory</span>
                    <span className="text-sm font-bold text-gray-900">23,400</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <span className="text-sm font-medium text-blue-700">AI Forecast</span>
                    <span className="text-sm font-bold text-blue-700">+12.5%</span>
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
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </section>

      {/* TRUSTED COMPANIES */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider mb-6"
          >
            Trusted by 10,000+ businesses worldwide
          </motion.p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70">
            {["Retail", "Manufacturing", "Healthcare", "Finance", "Logistics", "Education", "Government", "NGOs"].map((industry, i) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-sm font-semibold text-gray-400 hover:text-gray-600 transition-colors"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ERP MODULES - Real Photography Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              One Platform. Every Function.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From the warehouse to the boardroom, WaveCore unifies your entire enterprise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Inventory", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80", desc: "Real-time stock management" },
              { name: "Accounting", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80", desc: "Automated financial operations" },
              { name: "CRM", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80", desc: "AI-driven customer relationships" },
              { name: "Payroll", image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80", desc: "Smart employee management" },
              { name: "Manufacturing", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80", desc: "Production planning & control" },
              { name: "Warehouse", image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80", desc: "Advanced logistics & fulfillment" },
            ].map((module, index) => (
              <motion.div
                key={module.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={module.image} 
                    alt={module.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{module.name}</h3>
                  <p className="text-sm text-white/80">{module.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI COPILOT SECTION */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600">AI Copilot</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Your AI-Powered Assistant
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Let AI handle the heavy lifting. From forecasting demand to detecting fraud, WaveCore's Copilot gives you instant answers.
              </p>
              <div className="space-y-2">
                {["Forecast sales with 95% accuracy", "Detect fraud in real-time", "Generate reports in seconds", "Optimize reorder points"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" 
                alt="AI Technology" 
                className="rounded-2xl shadow-xl border border-gray-200"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 max-w-[200px]">
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-medium text-gray-900">AI Analysis</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Revenue forecast: +12.5%</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BUSINESS INTELLIGENCE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" 
                alt="Analytics Dashboard" 
                className="rounded-2xl shadow-xl border border-gray-200"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600">Business Intelligence</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Data-Driven Decisions
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Real-time dashboards, predictive analytics, and AI-powered insights that help you stay ahead of the market.
              </p>
              <div className="flex gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-2xl font-bold text-gray-900">12.5%</div>
                  <div className="text-xs text-gray-500">Revenue Growth</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-2xl font-bold text-gray-900">94%</div>
                  <div className="text-xs text-gray-500">Accuracy Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Built for Your Industry
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Tailored solutions for every sector — from retail to manufacturing.
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold text-white">{industry.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER SUCCESS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "CEO, TechRetail", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80", quote: "WaveCore unified our entire operation. Efficiency up 47%." },
              { name: "Michael Chen", role: "Finance Director, GlobalMfg", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80", quote: "AI insights revolutionized our decision-making." },
              { name: "Emily Rodriguez", role: "Operations, CityHealth", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80", quote: "One platform for patient care, inventory, and scheduling." },
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
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <Quote className="w-5 h-5 text-blue-500/30 mb-3" />
                <p className="text-gray-600 leading-relaxed">"{testimonial.quote}"</p>
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

      {/* PRICING */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              One Simple Plan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Everything you need. Nothing you don't.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto bg-white rounded-2xl border border-gray-200 shadow-lg p-8"
          >
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-gray-900">KES 1,000</div>
              <div className="text-sm text-gray-500">per month</div>
            </div>
            <div className="space-y-3">
              {["Unlimited Modules", "Unlimited Companies", "Unlimited AI", "Unlimited Branches", "24/7 Support"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-sm hover:shadow-md"
            >
              Start Free Trial
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              FAQs
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: "What makes WaveCore different?", a: "WaveCore is the only AI-powered platform that unifies every business function in one system." },
              { q: "How long does implementation take?", a: "Most businesses are fully operational within 2-4 weeks. Our AI setup wizard makes it seamless." },
              { q: "Is my data secure?", a: "We use enterprise-grade encryption, SOC 2 compliance, and regular audits to keep your data safe." },
              { q: "Can I migrate from another ERP?", a: "Yes! We provide automated migration tools to switch from any system." },
              { q: "What support do you offer?", a: "24/7 premium support with dedicated account managers and live chat." },
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
                  <summary className="px-6 py-4 text-sm font-medium text-gray-900 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors">
                    {faq.q}
                    <ChevronRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-4">
                    <p className="text-sm text-gray-600">{faq.a}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to transform your business?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Join 10,000+ companies already using WaveCore ERP.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-gray-50 transition-colors shadow-lg"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 border border-white/30 text-white rounded-md font-medium hover:bg-white/10 transition-colors"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-6 h-6 text-white" />
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
            <p className="text-sm text-gray-400">© 2024 WaveCore ERP. All rights reserved.</p>
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

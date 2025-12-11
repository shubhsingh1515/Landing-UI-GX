'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ShieldCheck, 
  Globe, 
  Clock, 
  Cloud, 
  Server, 
  ArrowRight,
  Database,
  Cpu,
  Activity,
  Users,
  Layers,
  CheckCircle2,
  Rocket,
  TrendingUp,
  Settings,
  Workflow,
  Briefcase,
  HeartPulse,
  Landmark,
  Signal,
  GraduationCap,
  ShoppingBag,
  Building2,
  Quote,
  Star,
  Trophy,
  Search,
  FileText,
  Hammer,
  Headphones,
  ChevronDown,
  HelpCircle,
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Lock,
  Zap,
  Check,
  AlertCircle,
  Sparkles,
  Code2,
  Terminal,
  Stethoscope,
  Landmark as Bank,
  Wifi,
  BookOpen,
  ShoppingCart,
  Briefcase as Gov
} from 'lucide-react';

// --- MOCK LINK COMPONENT FOR PREVIEW ---
// In your actual Next.js app, import Link from 'next/link';
const Link = ({ href, children, className, ...props }) => (
  <a href={href} className={className} {...props}>
    {children}
  </a>
);

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null); 
  const [formStatus, setFormStatus] = useState('idle'); 
   const [gsapLoaded, setGsapLoaded] = useState(false);

  // State for scroll animations
  const [visibleSections, setVisibleSections] = useState({
    title: false,
    cards: false,
    services: false,
    industries: false,
    testimonials: false,
    process: false,
    faq: false,
    contact: false,
    footer: false
  });

  const titleRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const servicesRef = useRef(null);
  const industriesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const processRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);


    useEffect(() => {
    const loadGsap = async () => {
      if (window.gsap) {
        setGsapLoaded(true);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
      script.onload = () => setGsapLoaded(true);
      document.body.appendChild(script);
    };
    loadGsap();
  }, []);

  // Trigger GSAP Animations for Services Section
  useEffect(() => {
    if (gsapLoaded && visibleSections.services && window.gsap) {
      const gsap = window.gsap;
      
      // Animate Service Cards Entry
      gsap.fromTo(".service-bento-card", 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );

      // 1. Cloud Icon Floating Animation
      gsap.to(".aws-cloud-icon", {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // 2. Gear Rotation
      gsap.to(".devops-gear", {
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: "none"
      });

      // 3. Shield Pulse
      gsap.to(".security-shield", {
        scale: 1.1,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // 4. Code Typing blink (simple opacity)
      gsap.to(".code-cursor", {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "steps(1)"
      });
    }
  }, [gsapLoaded, visibleSections.services]);

  // Trigger GSAP Animations for Industries Section
  useEffect(() => {
    if (gsapLoaded && visibleSections.industries && window.gsap) {
      const gsap = window.gsap;

      // Staggered Entry for Industry Cards
      gsap.fromTo(".industry-card",
        { y: 50, opacity: 0, rotationX: 15 },
        { y: 0, opacity: 1, rotationX: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
      );

      // Morphing Shape Animation (Background of icons)
      gsap.to(".morph-shape", {
        borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }, [gsapLoaded, visibleSections.industries]);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Native Intersection Observer for Scroll Animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };


    

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === titleRef.current) setVisibleSections(prev => ({ ...prev, title: true }));
          if (entry.target === cardsContainerRef.current) setVisibleSections(prev => ({ ...prev, cards: true }));
          if (entry.target === servicesRef.current) setVisibleSections(prev => ({ ...prev, services: true }));
          if (entry.target === industriesRef.current) setVisibleSections(prev => ({ ...prev, industries: true }));
          if (entry.target === testimonialsRef.current) setVisibleSections(prev => ({ ...prev, testimonials: true }));
          if (entry.target === processRef.current) setVisibleSections(prev => ({ ...prev, process: true }));
          if (entry.target === faqRef.current) setVisibleSections(prev => ({ ...prev, faq: true }));
          if (entry.target === contactRef.current) setVisibleSections(prev => ({ ...prev, contact: true }));
          if (entry.target === footerRef.current) setVisibleSections(prev => ({ ...prev, footer: true }));
        }
      });
    }, observerOptions);

    if (titleRef.current) observer.observe(titleRef.current);
    if (cardsContainerRef.current) observer.observe(cardsContainerRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (industriesRef.current) observer.observe(industriesRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    if (processRef.current) observer.observe(processRef.current);
    if (faqRef.current) observer.observe(faqRef.current);
    if (contactRef.current) observer.observe(contactRef.current);
    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (cardsContainerRef.current) observer.unobserve(cardsContainerRef.current);
      if (servicesRef.current) observer.unobserve(servicesRef.current);
      if (industriesRef.current) observer.unobserve(industriesRef.current);
      if (testimonialsRef.current) observer.unobserve(testimonialsRef.current);
      if (processRef.current) observer.unobserve(processRef.current);
      if (faqRef.current) observer.unobserve(faqRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };
  

  const features = [
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Global Managed IT & AWS",
      desc: "Outsource your entire IT backbone — no hassle, full scalability.",
      gradient: "from-blue-500 to-cyan-400",
      delay: "0ms"
    },
    {
      icon: <Layers className="w-8 h-8 text-purple-600" />,
      title: "Infrastructure Transformation",
      desc: "Modernize legacy systems for agility, performance & cost-efficiency.",
      gradient: "from-purple-500 to-pink-400",
      delay: "150ms"
    },
    {
      icon: <Cpu className="w-8 h-8 text-emerald-600" />,
      title: "DevOps & Automation",
      desc: "Faster deployments, fewer errors, more productivity with automated workflows.",
      gradient: "from-emerald-500 to-teal-400",
      delay: "300ms"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "On-Site & Remote Support",
      desc: "Skilled teams available when and where you need — worldwide.",
      gradient: "from-orange-500 to-red-400",
      delay: "450ms"
    }
  ];

  const services = [
    {
      title: "Managed IT & AWS Cloud",
      desc: "Full-stack cloud architecture, migration, maintenance & optimization.",
      icon: <Cloud className="w-10 h-10 mb-4 text-orange-400" />,
      color: "hover:shadow-orange-500/20 hover:border-orange-500/50",
      bg: "bg-orange-500/10"
    },
    {
      title: "Infrastructure Modernization",
      desc: "Upgrade legacy systems: data centers, networks, backup & DR.",
      icon: <Server className="w-10 h-10 mb-4 text-blue-400" />,
      color: "hover:shadow-blue-500/20 hover:border-blue-500/50",
      bg: "bg-blue-500/10"
    },
    {
      title: "DevOps & IT Automation",
      desc: "CI/CD, automated pipelines, monitoring, release management.",
      icon: <Workflow className="w-10 h-10 mb-4 text-purple-400" />,
      color: "hover:shadow-purple-500/20 hover:border-purple-500/50",
      bg: "bg-purple-500/10"
    },
    {
      title: "Cybersecurity & Compliance",
      desc: "Enterprise-grade protection, risk mitigation, audits & compliance support.",
      icon: <ShieldCheck className="w-10 h-10 mb-4 text-emerald-400" />,
      color: "hover:shadow-emerald-500/20 hover:border-emerald-500/50",
      bg: "bg-emerald-500/10"
    },
    {
      title: "On-site / Remote IT Staffing",
      desc: "Hire skilled IT professionals — temporary or permanent — as needed.",
      icon: <Briefcase className="w-10 h-10 mb-4 text-pink-400" />,
      color: "hover:shadow-pink-500/20 hover:border-pink-500/50",
      bg: "bg-pink-500/10"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      desc: "Secure & compliant IT infrastructure for patient data.",
      icon: <HeartPulse className="w-8 h-8 text-red-500" />,
      border: "hover:border-red-200",
      bg: "hover:bg-red-50"
    },
    {
      name: "Finance & Banking",
      desc: "Regulatory-ready cloud & cybersecurity solutions.",
      icon: <Landmark className="w-8 h-8 text-emerald-600" />,
      border: "hover:border-emerald-200",
      bg: "hover:bg-emerald-50"
    },
    {
      name: "Telecom & Networking",
      desc: "Scalable communication and network services.",
      icon: <Signal className="w-8 h-8 text-blue-500" />,
      border: "hover:border-blue-200",
      bg: "hover:bg-blue-50"
    },
    {
      name: "Education",
      desc: "Cloud-based learning platforms & secure networks.",
      icon: <GraduationCap className="w-8 h-8 text-yellow-600" />,
      border: "hover:border-yellow-200",
      bg: "hover:bg-yellow-50"
    },
    {
      name: "Retail & E-commerce",
      desc: "Omnichannel solutions, cloud scalability, secure payments.",
      icon: <ShoppingBag className="w-8 h-8 text-purple-500" />,
      border: "hover:border-purple-200",
      bg: "hover:bg-purple-50"
    },
    {
      name: "Government",
      desc: "Reliable, robust infrastructure & compliance.",
      icon: <Building2 className="w-8 h-8 text-slate-600" />,
      border: "hover:border-slate-300",
      bg: "hover:bg-slate-100"
    }
  ];

  const stats = [
    { value: "100+", label: "Businesses Served Globally", icon: <Globe className="w-6 h-6 text-blue-400" /> },
    { value: "24/7", label: "Support Across Time Zones", icon: <Clock className="w-6 h-6 text-emerald-400" /> },
    { value: "99.9%", label: "Uptime Guaranteed", icon: <Activity className="w-6 h-6 text-purple-400" /> },
    { value: "3 Wks", label: "Avg. Cloud Migration Time", icon: <Rocket className="w-6 h-6 text-orange-400" /> }
  ];

  const testimonials = [
    {
      quote: "Migrated our entire 200-user infrastructure to AWS in under 3 weeks — zero downtime. The transition was seamless.",
      author: "Sarah Jenkins",
      role: "CTO, FinTech Corp",
      bg: "bg-blue-500/10"
    },
    {
      quote: "GlobalXperts handles our cybersecurity so we can focus on sales. Their 24/7 monitoring has saved us multiple times.",
      author: "Michael Chen",
      role: "Director of Ops, Retail Giant",
      bg: "bg-purple-500/10"
    },
    {
      quote: "The DevOps automation pipeline they built reduced our deployment time from days to minutes. Truly transformative.",
      author: "Elena Rodriguez",
      role: "VP Engineering, SaaS Startup",
      bg: "bg-emerald-500/10"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Assessment",
      desc: "We audit your existing infrastructure, understand your goals, and identify key requirements.",
      icon: <Search className="w-6 h-6 text-blue-600" />,
      color: "blue"
    },
    {
      number: "02",
      title: "Solution Design",
      desc: "Our architects create a tailor-made roadmap covering cloud, security, and scalability.",
      icon: <FileText className="w-6 h-6 text-purple-600" />,
      color: "purple"
    },
    {
      number: "03",
      title: "Implementation",
      desc: "We execute the migration and setup with automated workflows to ensure zero disruption.",
      icon: <Hammer className="w-6 h-6 text-emerald-600" />,
      color: "white"
    },
    {
      number: "04",
      title: "Support & Scaling",
      desc: "24/7 active monitoring, maintenance, and continuous optimization as you grow.",
      icon: <Headphones className="w-6 h-6 text-orange-600" />,
      color: "orange"
    }
  ];

  const faqs = [
    {
      question: "Do you support both on-site and remote clients globally?",
      answer: "Yes, we operate a hybrid model. We provide 24/7 remote monitoring and support from our global SOCs (Security Operations Centers), while maintaining partnerships for on-site dispatch in over 30 countries for hardware-critical issues."
    },
    {
      question: "How do you ensure data security and compliance?",
      answer: "Security is our DNA. We adhere to GDPR, HIPAA, and ISO 27001 standards. Our infrastructure uses end-to-end encryption, regular penetration testing, and automated compliance auditing to ensure your data is never at risk."
    },
    {
      question: "What level of support can we expect after deployment?",
      answer: "We offer tiered support packages, from 9-to-5 helpdesk to premium 24/7 dedicated engineering teams. All clients get access to our real-time portal to track ticket status and system health."
    },
    {
      question: "Can you scale as our company grows?",
      answer: "Absolutely. Our cloud-native approach means your infrastructure scales elastically. Whether you add 10 users or 10,000, our automated provisioning handles the load instantly."
    },
    {
      question: "What is your typical onboarding timeline?",
      answer: "For standard cloud migrations, we typically complete discovery to go-live in 3-5 weeks. For managed IT takeovers, we have a 30-day transition plan to ensure no service interruption."
    },
    {
      question: "How does your pricing model work?",
      answer: "We believe in transparency. We offer fixed-fee monthly managed services (based on user/device count) and project-based pricing for migrations. No hidden fees, ever."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Custom Animations Style Block */}
      {/* Note: In a real Next.js app, consider moving this to globals.css or a CSS module */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(0px, 0px); }
          25% { transform: translate(10px, 15px); }
          50% { transform: translate(-5px, 25px); }
          75% { transform: translate(-15px, 10px); }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 7s ease-in-out 2s infinite; }
        .animate-float-fast { animation: float 5s ease-in-out 1s infinite; }
        .animate-float-slow { animation: float-slow 15s ease-in-out infinite; }
        .animate-blob { animation: blob 7s infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-shimmer { animation: shimmer 8s linear infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .perspective-1000 { perspective: 1000px; }
      `}</style>

      {/* --- Navigation --- */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${
          isScrolled 
            ? 'bg-slate-950/80 backdrop-blur-md border-slate-800 py-3 shadow-lg' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 cursor-pointer group">
            <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-tr from-indigo-600 to-blue-500 rounded-lg shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-wide">
              Global<span className="text-indigo-400">Xperts</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Managed IT</Link>
            <Link href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Cloud & AWS</Link>
            <Link href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Cybersecurity</Link>
            <Link href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">DevOps</Link>
            <button className="px-5 py-2.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full transition-all">
              Client Portal
            </button>
            <button className="px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-full shadow-lg shadow-indigo-600/20 transition-all hover:scale-105">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 shadow-2xl">
            <div className="flex flex-col p-6 space-y-4">
              <Link href="#" className="text-lg font-medium text-slate-300">Managed IT</Link>
              <Link href="#" className="text-lg font-medium text-slate-300">Cloud Solutions</Link>
              <Link href="#" className="text-lg font-medium text-slate-300">Cybersecurity</Link>
              <button className="w-full py-3 text-center font-bold text-white bg-indigo-600 rounded-lg">
                Talk to an Expert
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* --- Hero Section (Dark) --- */}
      <section className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[128px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Column: Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 backdrop-blur-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">Top-Tier Managed Services</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Transform Your IT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 animate-gradient-x">
                  Secure. Scalable. Seamless.
                </span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
                Managed IT, Cloud & AWS Solutions, and DevOps Expertise — Empowering Businesses Worldwide with infrastructure that never sleeps.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button className="group relative px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg shadow-xl shadow-indigo-600/30 overflow-hidden transition-all hover:scale-[1.02]">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                  <span className="relative flex items-center gap-2">
                    Talk to an Expert <ArrowRight size={20} />
                  </span>
                </button>
                <button className="px-8 py-4 bg-slate-800/50 text-white font-bold rounded-lg border border-slate-700 hover:bg-slate-800 hover:border-indigo-500/50 transition-all">
                  View Solutions
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-slate-500 border-t border-slate-800 pt-6">
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>24/7 Global Support</span></div>
                <div className="flex items-center gap-2"><Globe className="w-4 h-4 text-blue-400" /><span>Remote & On-site</span></div>
                <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-indigo-400" /><span>Enterprise Security</span></div>
              </div>
            </div>

            {/* Right Column: Abstract Tech Visual */}
            <div className="relative lg:h-[600px] w-full flex items-center justify-center perspective-1000">
               {/* Connecting Lines SVG */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20 hidden lg:block">
                <defs>
                   <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                      <stop offset="50%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                   </linearGradient>
                </defs>
                <path d="M50% 50% L80% 20%" stroke="url(#line-gradient)" strokeWidth="1" />
                <path d="M50% 50% L20% 75%" stroke="url(#line-gradient)" strokeWidth="1" />
                <path d="M50% 50% L85% 70%" stroke="url(#line-gradient)" strokeWidth="1" />
                <path d="M50% 50% L15% 30%" stroke="url(#line-gradient)" strokeWidth="1" />
              </svg>

              <div className="relative w-full max-w-md aspect-square z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-600 rounded-full blur-[80px] opacity-40 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl p-6 transform transition-transform hover:scale-[1.01] duration-500 group z-20">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="text-xs font-mono text-slate-500 tracking-wider">SYSTEM_STATUS: <span className="text-emerald-400">OPTIMAL</span></div>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-slate-400"><span>Cloud Uptime</span><span className="text-emerald-400">99.99%</span></div>
                      <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[99%] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 transition-colors group/card">
                        <ShieldCheck className="w-8 h-8 text-indigo-400 mb-2 group-hover/card:scale-110 transition-transform" />
                        <div className="text-2xl font-bold text-white">0</div>
                        <div className="text-xs text-slate-400">Threats Detected</div>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-colors group/card">
                        <Cloud className="w-8 h-8 text-blue-400 mb-2 group-hover/card:scale-110 transition-transform" />
                        <div className="text-2xl font-bold text-white">AWS</div>
                        <div className="text-xs text-slate-400">Integration Active</div>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-900/20 to-blue-900/20 border border-indigo-500/20 flex items-center gap-4">
                      <div className="p-2 bg-indigo-500/20 rounded-lg"><Server className="w-6 h-6 text-indigo-300" /></div>
                      <div>
                        <div className="text-sm font-semibold text-white">GlobalXperts Managed</div>
                        <div className="text-xs text-slate-400">Optimization in progress...</div>
                      </div>
                      <div className="ml-auto animate-spin">
                        <div className="w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Nodes */}
                <div className="absolute -top-12 -right-8 p-4 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-xl shadow-xl animate-float-delayed z-30 flex flex-col items-center gap-2 hover:bg-slate-800 transition-colors">
                  <div className="p-2 bg-indigo-500/20 rounded-lg"><Database className="w-6 h-6 text-indigo-400" /></div>
                  <div className="text-[10px] font-mono text-indigo-300">DATA_SECURE</div>
                </div>
                <div className="absolute -bottom-10 -left-6 p-3 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-xl shadow-xl animate-float z-30 flex items-center gap-3 hover:bg-slate-800 transition-colors">
                  <div className="p-2 bg-emerald-500/20 rounded-lg"><Cpu className="w-6 h-6 text-emerald-400" /></div>
                  <div><div className="text-xs font-bold text-white">Low Latency</div><div className="text-[10px] text-slate-400 font-mono">0.24ms</div></div>
                </div>
                <div className="absolute -top-6 -left-10 p-3 bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-full shadow-2xl animate-float-fast z-10 hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Why GlobalXperts (White + Neon + Moving Icons) --- */}
      <section className="relative py-24 bg-white overflow-hidden">
        
        {/* --- Creative Background Elements --- */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Neon Blobs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

          {/* Floating Icons Layer */}
          <div className="absolute top-20 left-10 text-slate-200 animate-float-slow">
             <Cloud className="w-24 h-24 opacity-60" />
          </div>
          <div className="absolute top-40 right-20 text-blue-100 animate-float-delayed">
             <Rocket className="w-16 h-16 opacity-80" />
          </div>
          <div className="absolute bottom-32 left-1/4 text-purple-100 animate-spin-slow">
             <Settings className="w-32 h-32 opacity-40" />
          </div>
          <div className="absolute top-1/3 right-1/3 text-emerald-100 animate-float-fast">
             <ShieldCheck className="w-12 h-12 opacity-50" />
          </div>
          <div className="absolute bottom-10 right-10 text-orange-100 animate-float-slow">
             <TrendingUp className="w-20 h-20 opacity-60" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div 
            ref={titleRef}
            className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 transform ${
              visibleSections.title ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wider mb-4 border border-blue-200">
              WHY GLOBALXPERTS
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Value Proposition <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-shimmer bg-[length:200%_auto]">
                Driven by Innovation.
              </span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Reduced downtimes, faster time-to-market, razor-sharp security, and total peace of mind. We don't just fix problems; we architect solutions.
            </p>
          </div>

          {/* Cards Grid */}
          <div 
            ref={cardsContainerRef}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden hover:-translate-y-3 transform ${
                  visibleSections.cards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: feature.delay }}
              >
                {/* Hover Gradient Border Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none p-[2px] rounded-2xl bg-gradient-to-br ${feature.gradient} -z-10`}></div>
                
                {/* Inner Content Background */}
                <div className="absolute inset-[1px] bg-white rounded-[15px] -z-10"></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} bg-opacity-1 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                  {React.cloneElement(feature.icon, { className: "text-white w-8 h-8" })}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {feature.desc}
                </p>

                {/* Bottom Link/Arrow */}
                <div className="flex items-center text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer">
                  Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Trust Line */}
          <div className="mt-16 text-center">
             <div className="inline-flex items-center gap-2 bg-slate-50 px-6 py-3 rounded-full border border-slate-200 shadow-sm text-slate-600 text-sm font-medium hover:scale-105 transition-transform cursor-default">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Trusted by 500+ Enterprises across 30 Countries</span>
             </div>
          </div>
        </div>
      </section>

     {/* --- NEW CREATIVE "BENTO" SERVICES SECTION (Updated) --- */}
      <section ref={servicesRef} className="relative py-32 bg-[#010c41] overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#09ec5e]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 transform ${
            visibleSections.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
               Comprehensive <span className="text-[#09ec5e]">IT Solutions</span>
             </h2>
             <p className="text-slate-400 text-lg">
               Our stack is designed for resilience. From cloud migration to 24/7 support, we provide the full spectrum of services needed to modernize your business.
             </p>
          </div>

          {/* BENTO BOX LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             
             {/* 1. Large Feature Card: Cloud & AWS (Spans 2 cols) */}
             <div className="md:col-span-2 relative p-8 rounded-3xl bg-gradient-to-br from-[#010c41] to-slate-900 border border-[#09ec5e]/20 overflow-hidden group service-bento-card hover:border-[#09ec5e]/50 transition-all duration-500">
                {/* Floating AWS Graphic Background */}
                <div className="absolute right-0 top-0 w-64 h-64 bg-[#09ec5e]/5 rounded-full blur-3xl group-hover:bg-[#09ec5e]/10 transition-colors"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 h-full">
                   <div className="flex-1 space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#09ec5e]/10 border border-[#09ec5e]/30 text-[#09ec5e] text-xs font-bold uppercase">
                         <Cloud className="w-3 h-3" /> Core Service
                      </div>
                      <h3 className="text-3xl font-bold text-white">Managed AWS & Cloud</h3>
                      <p className="text-slate-400 leading-relaxed">
                         Full-stack cloud architecture, migration, and optimization. We ensure your infrastructure is scalable, secure, and cost-efficient.
                      </p>
                      <div className="pt-4 flex items-center gap-4 text-sm font-semibold text-white">
                         <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09ec5e]" /> Auto-Scaling</div>
                         <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09ec5e]" /> Disaster Recovery</div>
                      </div>
                   </div>
                   
                   {/* Animated Graphic Area */}
                   <div className="w-48 h-48 relative flex items-center justify-center">
                      {/* Central Cloud Icon (Animated via GSAP) */}
                      <Cloud className="aws-cloud-icon w-24 h-24 text-[#09ec5e] relative z-20 drop-shadow-[0_0_15px_rgba(9,236,94,0.3)]" />
                      
                      {/* Orbiting Satellites */}
                      <div className="absolute inset-0 border border-[#09ec5e]/20 rounded-full animate-[spin_10s_linear_infinite]">
                         <div className="absolute top-0 left-1/2 w-3 h-3 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_white]"></div>
                      </div>
                      <div className="absolute inset-4 border border-dashed border-[#09ec5e]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                   </div>
                </div>
             </div>

             {/* 2. Square Card: DevOps (Spans 1 col) */}
             <div className="md:col-span-1 relative p-8 rounded-3xl bg-slate-900/50 backdrop-blur-md border border-slate-700 hover:border-[#FACC15]/50 transition-all duration-300 service-bento-card group">
                <div className="absolute top-4 right-4 text-[#FACC15] opacity-20 group-hover:opacity-100 transition-opacity">
                   <Settings className="devops-gear w-16 h-16" />
                </div>
                <div className="mt-12">
                   <h3 className="text-xl font-bold text-white mb-2">DevOps Automation</h3>
                   <p className="text-slate-400 text-sm mb-4">CI/CD pipelines, containerization, and infrastructure as code.</p>
                   <div className="flex items-center gap-2 text-xs font-mono text-[#FACC15]">
                      <Terminal className="w-4 h-4" /> 
                      <span className="code-cursor">_deploying...</span>
                   </div>
                </div>
             </div>

             {/* 3. Square Card: Cybersecurity (Spans 1 col) */}
             <div className="md:col-span-1 relative p-8 rounded-3xl bg-slate-900/50 backdrop-blur-md border border-slate-700 hover:border-red-500/50 transition-all duration-300 service-bento-card group">
                <div className="absolute top-4 right-4 text-red-500 opacity-20 group-hover:opacity-100 transition-opacity">
                   <ShieldCheck className="security-shield w-12 h-12" />
                </div>
                <div className="mt-12">
                   <h3 className="text-xl font-bold text-white mb-2">Cybersecurity</h3>
                   <p className="text-slate-400 text-sm mb-4">Zero-trust architecture, penetration testing, and 24/7 SOC.</p>
                   <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 w-[98%] animate-pulse"></div>
                   </div>
                   <div className="mt-2 text-xs text-red-400 font-bold">Threats Blocked: 99.9%</div>
                </div>
             </div>

             {/* 4. Wide Card: Staffing & Support (Spans 2 cols) */}
             <div className="md:col-span-2 relative p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-[#010c41] border border-slate-700 hover:border-[#09ec5e]/30 transition-all duration-300 service-bento-card group overflow-hidden">
                {/* World Map Background Opacity */}
                <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-cover opacity-5 pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                   <div className="flex-1">
                      <div className="inline-flex items-center gap-2 mb-3">
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#09ec5e] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#09ec5e]"></span>
                        </span>
                        <span className="text-[#09ec5e] text-xs font-bold uppercase tracking-wider">Talent Network</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">Global IT Staffing</h3>
                      <p className="text-slate-400 mb-6 max-w-md">
                         Scale your team instantly. Access a vetted pool of developers, engineers, and architects ready to deploy in <span className="text-white font-semibold">24 hours</span>.
                      </p>
                      
                      {/* Skill Pills */}
                      <div className="flex flex-wrap gap-2">
                         {['React', 'Node.js', 'Python', 'AWS', 'Kubernetes'].map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs text-slate-300">
                               {skill}
                            </span>
                         ))}
                         <span className="px-3 py-1 bg-[#09ec5e]/10 border border-[#09ec5e]/30 rounded-full text-xs text-[#09ec5e] font-semibold">
                            +50 More
                         </span>
                      </div>
                   </div>

                   {/* Avatars & Network Graphic */}
                   <div className="relative">
                      {/* Connecting Lines (Decorative) */}
                      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20" viewBox="0 0 200 100">
                         <path d="M 20 50 Q 50 10 100 50 T 180 50" stroke="#09ec5e" fill="none" strokeWidth="2" strokeDasharray="4 4" />
                      </svg>

                      <div className="flex items-center -space-x-4">
                         {/* Avatar 1 */}
                         <div className="relative w-12 h-12 rounded-full border-2 border-[#010c41] overflow-hidden transform hover:scale-110 hover:z-10 transition-transform duration-300">
                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100" alt="Dev 1" className="w-full h-full object-cover" />
                         </div>
                         {/* Avatar 2 */}
                         <div className="relative w-14 h-14 rounded-full border-2 border-[#010c41] overflow-hidden transform hover:scale-110 hover:z-10 transition-transform duration-300 z-10 -mt-4">
                            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100" alt="Dev 2" className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#09ec5e] border-2 border-[#010c41] rounded-full"></div>
                         </div>
                         {/* Avatar 3 */}
                         <div className="relative w-12 h-12 rounded-full border-2 border-[#010c41] overflow-hidden transform hover:scale-110 hover:z-10 transition-transform duration-300">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100" alt="Dev 3" className="w-full h-full object-cover" />
                         </div>
                         {/* Count Badge */}
                         <div className="w-12 h-12 rounded-full border-2 border-[#010c41] bg-[#09ec5e] flex items-center justify-center text-xs font-bold text-[#010c41] transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                            500+
                         </div>
                      </div>
                      
                      {/* Floating 'Hired' Badge */}
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-slate-800 px-3 py-1 rounded-full border border-slate-600 shadow-xl flex items-center gap-2 whitespace-nowrap">
                         <span className="text-[10px] text-slate-400">Avg. Placement</span>
                         <span className="text-xs font-bold text-white">48 Hrs</span>
                      </div>
                   </div>
                </div>
             </div>

          </div>

        </div>
      </section>


      {/* --- Industries / Use-Cases (Clean/Light) --- */}
     <section ref={industriesRef} className="relative py-32 bg-white overflow-hidden">
        {/* Background Gradients for Soft Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#09ec5e]/10 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#010c41]/5 blur-[120px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3"></div>
        
        {/* Subtle Mesh/Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 transform ${
            visibleSections.industries ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#010c41]"></span>
                <span className="text-xs font-bold text-[#010c41] tracking-wider uppercase">Industries</span>
            </div>
             <h2 className="text-4xl md:text-5xl font-extrabold text-[#010c41] mb-6 tracking-tight">
               Trusted Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#010c41] to-[#09ec5e]">Verticals</span>
             </h2>
             <p className="text-slate-500 text-lg leading-relaxed">
               Specialized expertise for high-compliance sectors. We deliver tailored infrastructure that meets the unique demands of your industry.
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="industry-card group relative p-8 bg-gradient-to-br from-white via-blue-50/20 to-emerald-50/30 backdrop-blur-xl rounded-[2rem] border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(9,236,94,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* 1. Border Glow on Hover */}
                <div className="absolute inset-0 rounded-[2rem] border border-[#09ec5e]/0 group-hover:border-[#09ec5e]/30 transition-all duration-500 pointer-events-none"></div>

                {/* 2. Large Watermark Number/Icon (Background) */}
                <div className="absolute -right-4 -bottom-8 text-[120px] font-bold text-slate-900/5 select-none pointer-events-none group-hover:text-[#09ec5e]/10 transition-colors duration-500">
                   0{index + 1}
                </div>

                {/* 3. Icon Container with Liquid Blob */}
                <div className="relative mb-8 w-16 h-16 flex items-center justify-center">
                   {/* Liquid Blob Background - Made sharper and more vibrant */}
                   <div className="absolute inset-0 bg-[#09ec5e]/20 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] group-hover:bg-[#09ec5e] group-hover:rotate-180 transition-all duration-700 ease-in-out morph-shape"></div>
                   
                   {/* Icon */}
                   <div className="relative z-10 text-[#010c41] group-hover:text-[#010c41] group-hover:scale-110 transition-transform duration-300 industry-icon">
                      {industry.icon}
                   </div>
                </div>
                
                {/* 4. Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-[#010c41] transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 group-hover:text-slate-600 transition-colors">
                    {industry.desc}
                  </p>

                  {/* 5. Trendy Link */}
                  <div className="flex items-center text-sm font-bold text-[#010c41] group/link cursor-pointer">
                     <span className="relative overflow-hidden">
                        Learn more
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#010c41] to-[#09ec5e] transform -translate-x-full group-hover/link:translate-x-0 transition-transform duration-300"></span>
                     </span>
                     <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 group-hover/link:text-[#09ec5e] transition-all duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Decorative Elements (Dots/Crosses) */}
          <div className="absolute top-1/3 left-10 text-[#09ec5e] opacity-30 animate-spin-slow pointer-events-none">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20"/></svg>
          </div>
          <div className="absolute bottom-1/4 right-20 text-[#010c41] opacity-10 animate-float-delayed pointer-events-none">
             <div className="w-4 h-4 rounded-full border-2 border-current"></div>
          </div>

        </div>
      </section>

      {/* --- Social Proof / Testimonials / Stats (Dark) --- */}
      <section ref={testimonialsRef} className="relative py-24 bg-slate-950 overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
         <div className="absolute -left-20 top-40 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="absolute -right-20 bottom-40 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Stats Row */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-b border-slate-800 pb-12 transition-all duration-1000 transform ${
               visibleSections.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
               {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                     <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                        <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 group-hover:border-indigo-500/50 shadow-lg">
                           {stat.icon}
                        </div>
                     </div>
                     <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
                        {stat.value}
                     </div>
                     <div className="text-sm font-medium text-slate-400 uppercase tracking-widest">
                        {stat.label}
                     </div>
                  </div>
               ))}
            </div>

            {/* Testimonials Header */}
            <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 delay-200 transform ${
               visibleSections.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
               <span className="text-indigo-400 font-bold tracking-wider text-sm uppercase mb-2 block">Client Success Stories</span>
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Trusted by Industry Leaders
               </h2>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
               {testimonials.map((testimonial, index) => (
                  <div 
                     key={index} 
                     className={`relative p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 group ${
                        visibleSections.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                     }`}
                     style={{ transitionDelay: `${index * 150 + 400}ms` }}
                  >
                     {/* Quote Icon Background */}
                     <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-800 group-hover:text-slate-700 transition-colors duration-300" />
                     
                     {/* Rating */}
                     <div className="flex gap-1 mb-6">
                        {[1,2,3,4,5].map((_, i) => (
                           <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        ))}
                     </div>

                     <p className="text-lg text-slate-300 leading-relaxed mb-8 relative z-10">
                        "{testimonial.quote}"
                     </p>

                     <div className="flex items-center gap-4 mt-auto">
                        <div className={`w-12 h-12 rounded-full ${testimonial.bg} flex items-center justify-center font-bold text-white text-lg`}>
                           {testimonial.author.charAt(0)}
                        </div>
                        <div>
                           <div className="font-bold text-white">{testimonial.author}</div>
                           <div className="text-sm text-indigo-400">{testimonial.role}</div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* Logo Ticker / Static Grid */}
            <div className={`text-center pt-8 border-t border-slate-800 transition-all duration-1000 delay-700 transform ${
               visibleSections.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
               <p className="text-slate-500 mb-8 text-sm uppercase tracking-widest">Powering Next-Gen Companies</p>
               <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  {['AWS Partner', 'Microsoft Gold', 'Cisco Secure', 'Google Cloud', 'Salesforce', 'Oracle'].map((brand, i) => (
                     <div key={i} className="flex items-center gap-2 text-xl font-bold text-slate-300 select-none">
                        <Trophy className="w-5 h-5 text-slate-400" /> {brand}
                     </div>
                  ))}
               </div>
            </div>

         </div>
      </section>

      {/* --- How It Works / Engagement Process (Clean/Technical) --- */}
      <section ref={processRef} className="relative py-24 bg-white overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 transform ${
            visibleSections.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
             <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 text-sm font-bold tracking-wider mb-4 border border-slate-200">
               ENGAGEMENT PROCESS
             </span>
             <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
               Streamlined Success
             </h2>
             <p className="text-slate-600 text-lg">
               We simplify complexity. Our proven four-step methodology ensures seamless execution and predictable results.
             </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200">
               <div className={`absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 transition-all duration-1000 ease-out ${
                 visibleSections.process ? 'w-full' : 'w-0'
               }`}></div>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
               {processSteps.map((step, index) => (
                 <div 
                   key={index} 
                   className={`relative group bg-white p-6 pt-0 md:pt-6 rounded-xl md:bg-transparent transition-all duration-500 ${
                     visibleSections.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                   }`}
                   style={{ transitionDelay: `${index * 200}ms` }}
                 >
                    {/* Icon Container */}
                    <div className={`w-24 h-24 mx-auto mb-6 relative flex items-center justify-center bg-white rounded-full border-4 border-slate-50 z-10 group-hover:scale-110 transition-transform duration-300 shadow-sm ${
                      index === 0 ? 'border-blue-100' : index === 1 ? 'border-purple-100' : index === 2 ? 'border-emerald-100' : 'border-orange-100'
                    }`}>
                       <div className={`absolute inset-2 rounded-full opacity-20 bg-${step.color}-500`}></div>
                       <div className={`relative z-10 p-4 rounded-full bg-${step.color}-50 text-${step.color}-600`}>
                          {step.icon}
                       </div>
                       <div className={`absolute -right-2 -top-2 w-8 h-8 rounded-full bg-${step.color}-600 text-black flex items-center justify-center font-bold text-sm shadow-md`}>
                          {step.number}
                       </div>
                    </div>

                    <div className="text-center">
                       <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                       <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>

                    {/* Mobile Connecting Line */}
                    {index !== processSteps.length - 1 && (
                      <div className="md:hidden absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-4 w-0.5 h-8 bg-slate-200"></div>
                    )}
                 </div>
               ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-700 transform ${
            visibleSections.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
             <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full shadow-xl hover:bg-indigo-600 transition-colors flex items-center gap-2 mx-auto">
               Start Your Journey <ArrowRight size={20} />
             </button>
          </div>

        </div>
      </section>

      {/* --- FAQ / Doubts-Busting (Dark Accordion) --- */}
      <section ref={faqRef} className="relative py-24 bg-slate-900 overflow-hidden">
        {/* Subtle Gradient Backdrops */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[128px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[128px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            visibleSections.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
             <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-slate-800 text-indigo-400">
               <HelpCircle className="w-6 h-6" />
             </div>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
               Common Questions
             </h2>
             <p className="text-slate-400 text-lg">
               Everything you need to know about partnering with GlobalXperts.
             </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`group border border-slate-800 rounded-2xl bg-slate-950/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-indigo-500/30 ${
                  visibleSections.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-lg font-medium transition-colors duration-300 ${
                    openFaq === index ? 'text-indigo-400' : 'text-slate-200 group-hover:text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                      openFaq === index ? 'transform rotate-180 text-indigo-400' : ''
                    }`} 
                  />
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Final CTA + Contact / Lead-Capture Form (Deep & Glass) --- */}
      <section ref={contactRef} className="relative py-24 bg-slate-950 overflow-hidden border-t border-slate-800/50">
        
        {/* Immersive Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/30 via-slate-950 to-slate-950 pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side: Copy & Info */}
            <div className={`transition-all duration-1000 transform ${
              visibleSections.contact ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6">
                 <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                 Accepting New Partners
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to transform your IT operations? <br />
                <span className="text-indigo-400">Let’s talk.</span>
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Whether you need a full infrastructure audit, cloud migration, or just 24/7 support, our team is ready to deploy. We typically respond within 24 hours.
              </p>

              {/* Contact Info Items */}
              <div className="space-y-6">
                 <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all duration-300">
                       <Mail className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                       <div className="text-sm text-slate-500">Email Us</div>
                       <div className="text-white font-medium">solutions@globalxperts.com</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all duration-300">
                       <Phone className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                       <div className="text-sm text-slate-500">Call Us</div>
                       <div className="text-white font-medium">+1 (888) 123-4567</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all duration-300">
                       <MapPin className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                       <div className="text-sm text-slate-500">Global HQ</div>
                       <div className="text-white font-medium">101 Tech Blvd, San Francisco, CA</div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Right Side: Lead Capture Form */}
            <div className={`transition-all duration-1000 delay-300 transform ${
              visibleSections.contact ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
                {/* Form Glow */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/30 rounded-full blur-[80px] pointer-events-none"></div>

                <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
                         <input type="text" placeholder="John Doe" required className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-medium text-slate-300 ml-1">Company</label>
                         <input type="text" placeholder="Tech Inc." required className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" />
                      </div>
                   </div>

                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-sm font-medium text-slate-300 ml-1">Email</label>
                         <input type="email" placeholder="john@company.com" required className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-medium text-slate-300 ml-1">Phone</label>
                         <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" />
                      </div>
                   </div>

                   <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 ml-1">Service Interest</label>
                      <select className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all appearance-none">
                         <option>Managed IT Services</option>
                         <option>Cloud Migration (AWS)</option>
                         <option>Cybersecurity Audit</option>
                         <option>DevOps & Automation</option>
                         <option>Other</option>
                      </select>
                   </div>

                   <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 ml-1">Message</label>
                      <textarea rows="4" placeholder="Tell us about your project needs..." className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"></textarea>
                   </div>

                   <button 
                     type="submit" 
                     disabled={formStatus !== 'idle'}
                     className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                       formStatus === 'success' ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-indigo-600 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/25'
                     }`}
                   >
                     {formStatus === 'idle' && <>Request Consultation <Send className="w-5 h-5" /></>}
                     {formStatus === 'submitting' && <Loader2 className="w-6 h-6 animate-spin" />}
                     {formStatus === 'success' && <>Message Sent! <CheckCircle2 className="w-6 h-6" /></>}
                   </button>
                   
                   <p className="text-center text-xs text-slate-500 mt-4">
                      By submitting, you agree to our Privacy Policy. Your data is secure.
                   </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- NEW SECTION: Footer (Complete) --- */}
      <footer ref={footerRef} className={`bg-slate-950 pt-20 pb-10 border-t border-slate-800 transition-all duration-1000 transform ${visibleSections.footer ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Column 1: Brand Info */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-tr from-indigo-600 to-blue-500 rounded-lg">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Global<span className="text-indigo-400">Xperts</span></span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Empowering businesses worldwide with secure, scalable, and seamless IT solutions. Your technology partner for the future.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-400 hover:bg-blue-400/10 transition-all">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-pink-500 hover:bg-pink-500/10 transition-all">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-600 hover:bg-blue-600/10 transition-all">
                  <Facebook className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><Link href="#" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-indigo-400 transition-colors">Careers</Link> <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full ml-2">Hiring</span></li>
                <li><Link href="#" className="hover:text-indigo-400 transition-colors">Partners</Link></li>
                <li><Link href="#" className="hover:text-indigo-400 transition-colors">News & Blog</Link></li>
                <li><Link href="#" className="hover:text-indigo-400 transition-colors">Case Studies</Link></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h4 className="text-white font-bold mb-6">Services</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><Link href="#" className="hover:text-indigo-400 transition-colors">Managed IT Support</Link></li>
                <li><Link href="#" className="hover:text-indigo-400 transition-colors">Cloud Migration (AWS/Azure)</Link></li>
                <li><Link href="#" className="hover:text-indigo-400 transition-colors">Cybersecurity Assessment</Link></li>
                <li><Link href="#" className="hover:text-indigo-400 transition-colors">DevOps & Automation</Link></li>
                <li><Link href="#" className="hover:text-indigo-400 transition-colors">Data Backup & Recovery</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                  <span>101 Tech Blvd, Suite 500<br />San Francisco, CA 94107</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-indigo-500 shrink-0" />
                  <span>+1 (888) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-indigo-500 shrink-0" />
                  <span>hello@globalxperts.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} GlobalXperts Inc. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
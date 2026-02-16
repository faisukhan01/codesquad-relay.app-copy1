import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Brain, TrendingUp, Cog, Eye, MessageSquare, Code } from "lucide-react";

const services = [
  {
    title: "Generative",
    subtitle: "AI",
    description: "Automate customer support and improve engagement with intelligent conversational agents.",
    icon: Brain,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    cardBg: "bg-white",
    link: "#"
  },
  {
    title: "Predictive",
    subtitle: "Analytics",
    description: "Use machine learning models to forecast trends and business outcomes.",
    icon: TrendingUp,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
    cardBg: "bg-white",
    link: "#"
  },
  {
    title: "Process",
    subtitle: "Automation",
    description: "Streamline repetitive tasks and optimize workflows using AI-driven automation.",
    icon: Cog,
    iconBg: "bg-green-50",
    iconColor: "text-green-500",
    cardBg: "bg-white",
    link: "#"
  },
  {
    title: "Computer",
    subtitle: "Vision",
    description: "Harness AI to analyze and process visual data, from facial recognition to object detection.",
    icon: Eye,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    cardBg: "bg-white",
    link: "#"
  },
  {
    title: "NLP",
    subtitle: "(Data Engineering)",
    description: "Unlock text and voice understanding with AI models tailored to your business.",
    icon: MessageSquare,
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    cardBg: "bg-white",
    link: "#"
  },
  {
    title: "Custom",
    subtitle: "AI Software",
    description: "End-to-end development of tailored AI applications integrated into your systems.",
    icon: Code,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-500",
    cardBg: "bg-white",
    link: "#"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-left max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.15] text-foreground">
              <span className="font-normal">Modern softwares that help</span><br />
              <span className="font-normal">SMEs grow with </span>
              <span className="font-bold text-primary">AI.</span>
            </h1>
            
            <motion.p
              className="mt-6 text-lg md:text-xl text-foreground font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Innovate. Create. Elevate.
            </motion.p>
            
            <motion.p
              className="mt-3 text-base text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              We craft calm, modern interfaces and robust software systems that feel as good as they look.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 md:py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive software development services tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group"
              >
                <motion.div
                  whileHover={{ 
                    y: -12,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                  }}
                  className={`relative h-full ${service.cardBg} rounded-3xl p-8 border border-border/40 hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-2xl overflow-hidden backdrop-blur-sm`}
                >
                  {/* Animated gradient background on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "linear"
                    }}
                  ></motion.div>
                  
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={false}
                    animate={{
                      background: [
                        'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 60%, transparent 100%)',
                      ],
                      backgroundPosition: ['-200% 0', '200% 0'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with animation */}
                    <motion.div 
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.iconBg} mb-6 shadow-md group-hover:shadow-xl transition-shadow duration-300`}
                      whileHover={{ 
                        scale: 1.15,
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 }
                      }}
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    >
                      <service.icon className={`w-8 h-8 ${service.iconColor}`} strokeWidth={2.5} />
                    </motion.div>
                    
                    {/* Title with subtitle */}
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.title} <span className="text-primary">{service.subtitle}</span>
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Decorative corner elements */}
                  <motion.div 
                    className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                  
                  <motion.div 
                    className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  ></motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with gradient background */}
      <section className="hero-gradient py-20 md:py-28 relative overflow-hidden mb-16">
        {/* Additional decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Ready to transform your<br className="hidden sm:block" /> business with AI?
              </h2>
            </motion.div>
            
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-3 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Let's build something amazing together.
            </motion.p>
            
            <motion.p
              className="text-base text-muted-foreground/90 mb-10 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Start your journey with CodeSquad today and unlock the full potential of AI for your business.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <motion.button 
                className="bg-foreground text-background px-8 py-3.5 rounded-full text-base font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Get Started</span>
                <motion.div
                  className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.button>
              <motion.button 
                className="bg-white/80 backdrop-blur-sm border-2 border-border/60 text-foreground px-8 py-3.5 rounded-full text-base font-semibold hover:border-primary hover:text-primary hover:bg-white transition-all duration-300 shadow-md hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Sales
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

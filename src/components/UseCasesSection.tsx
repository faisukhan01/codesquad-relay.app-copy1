import { motion } from "framer-motion";
import { TrendingUp, Headphones, Settings, BarChart3, Megaphone, DollarSign, type LucideIcon } from "lucide-react";

interface UseCase {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  iconColor: string;
  number: string;
}

const useCases: UseCase[] = [
  {
    number: "1️⃣",
    title: "Sales Automation",
    description: "Never miss a lead. Automate follow-ups and CRM updates.",
    icon: TrendingUp,
    gradient: "from-green-100/80 via-emerald-100/60 to-teal-100/80",
    iconColor: "text-green-600",
  },
  {
    number: "2️⃣",
    title: "Customer Support Automation",
    description: "Reduce inbox overload with AI-assisted responses and routing.",
    icon: Headphones,
    gradient: "from-blue-100/80 via-sky-100/60 to-indigo-100/80",
    iconColor: "text-blue-600",
  },
  {
    number: "3️⃣",
    title: "Operations Automation",
    description: "Remove internal bottlenecks and manual admin work.",
    icon: Settings,
    gradient: "from-yellow-100/80 via-amber-100/60 to-orange-100/80",
    iconColor: "text-yellow-600",
  },
  {
    number: "4️⃣",
    title: "Reporting Automation",
    description: "Generate weekly performance reports automatically.",
    icon: BarChart3,
    gradient: "from-purple-100/80 via-violet-100/60 to-indigo-100/80",
    iconColor: "text-purple-600",
  },
  {
    number: "5️⃣",
    title: "Marketing Automation",
    description: "Stay visible without manual posting. Automatically repurpose content, schedule campaigns, and track performance across channels.",
    icon: Megaphone,
    gradient: "from-pink-100/80 via-rose-100/60 to-red-100/80",
    iconColor: "text-pink-600",
  },
  {
    number: "6️⃣",
    title: "Finance & Admin Automation",
    description: "Reduce back-office workload. Automate invoices, payment reminders, expense tracking, and basic financial reporting.",
    icon: DollarSign,
    gradient: "from-orange-100/80 via-amber-100/60 to-yellow-100/80",
    iconColor: "text-orange-600",
  },
];

const UseCasesSection = () => {
  return (
    <section className="py-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-[1.1] tracking-tight">
            Create custom agents<br className="hidden sm:block" />
            <span className="text-gradient-blue">for any use case</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              className={`bg-gradient-to-br ${uc.gradient} rounded-2xl p-8 border border-border/20 cursor-pointer group relative overflow-hidden min-h-[280px] flex flex-col`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 25px 70px -15px rgba(0,0,0,0.15)", 
                transition: { duration: 0.3 } 
              }}
            >
              {/* Animated background gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%", y: "-100%" }}
                whileHover={{ x: "100%", y: "100%" }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Animated decorative circles */}
              <motion.div
                className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${uc.iconColor} opacity-10`}
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
              />
              <motion.div
                className={`absolute -bottom-10 -left-10 w-32 h-32 rounded-full ${uc.iconColor} opacity-10`}
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, -90, 0]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: i * 0.4
                }}
              />
              
              {/* Icon container with animation */}
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-white/90 flex items-center justify-center mb-5 shadow-lg relative z-10"
                whileHover={{ 
                  scale: 1.15, 
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <motion.div
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.2
                  }}
                >
                  <uc.icon className={`w-8 h-8 ${uc.iconColor}`} strokeWidth={2} />
                </motion.div>
              </motion.div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 relative z-10 group-hover:text-foreground/90 transition-colors">
                {uc.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed relative z-10 flex-grow">
                {uc.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;

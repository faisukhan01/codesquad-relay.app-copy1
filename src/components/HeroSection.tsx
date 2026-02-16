import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Megaphone, Headphones, DollarSign, Users } from "lucide-react";
import avatarAnnika from "@/assets/avatar-annika.png";
import avatarJacob from "@/assets/avatar-jacob.png";

const emilyAgents = [
  {
    name: "Sales Automation System",
    description: "Automates lead qualification and follow-ups across your sales pipeline.",
    tag: "Qualifying inbound leads · Scoring prospects",
    workflows: "4 workflows",
    tools: "CRM · Email · LinkedIn · Slack",
    icon: TrendingUp,
    iconColor: "text-purple-600",
    bgClass: "agent-card-green",
  },
  {
    name: "Marketing Engine",
    description: "Repurposes content, tracks competitors, and automates distribution.",
    tag: "Generating weekly content · Monitoring competitors",
    workflows: "3 workflows",
    tools: "LinkedIn · X · Email · Analytics",
    icon: Megaphone,
    iconColor: "text-green-600",
    bgClass: "agent-card-teal",
  },
  {
    name: "Customer Support Assistant",
    description: "Handles repetitive support queries and drafts smart replies.",
    tag: "Summarizing tickets · Drafting responses",
    workflows: "5 workflows",
    tools: "Email · Helpdesk · Slack · Knowledge Base",
    icon: Headphones,
    iconColor: "text-yellow-600",
    bgClass: "agent-card-amber",
  },
];

const shahAgents = [
  {
    name: "Finance Automation System",
    description: "Tracks payments, sends reminders, and builds real-time dashboards.",
    tag: "Monitoring invoices · Generating weekly reports",
    workflows: "3 workflows",
    tools: "Stripe · QuickBooks · Sheets · Email",
    icon: DollarSign,
    iconColor: "text-blue-600",
    bgClass: "agent-card-blue",
  },
  {
    name: "HR & Hiring Assistant",
    description: "Screens resumes and manages interview scheduling automatically.",
    tag: "Scoring candidates · Scheduling interviews",
    workflows: "4 workflows",
    tools: "Forms · Calendar · Email · Slack",
    icon: Users,
    iconColor: "text-orange-600",
    bgClass: "agent-card-coral",
  },
];

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<"emily" | "shah">("emily");
  const allCards = activeTab === "emily" 
    ? [...emilyAgents, ...shahAgents] 
    : [...shahAgents, ...emilyAgents];

  return (
    <section className="hero-gradient pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero text */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-foreground">
            Build an{" "}
            <span className="text-primary">AI team</span>
            {" "}that<br className="hidden md:block" /> works for you
          </h1>
          <motion.p
            className="mt-5 text-sm md:text-base text-muted-foreground max-w-xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            We design and implement intelligent workflow systems across sales, marketing, operations, finance, HR, and decision-making.
          </motion.p>
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <button className="bg-foreground text-background px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.18)] active:scale-[0.98]">
              Start for free
            </button>
          </motion.div>
        </motion.div>

        {/* Agent tabs */}
        <motion.div
          className="mt-10 flex items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <button
            onClick={() => setActiveTab("emily")}
            className={`flex items-center gap-2 transition-all duration-300 ${
              activeTab === "emily" ? "opacity-100" : "opacity-50 hover:opacity-75"
            }`}
          >
            <img src={avatarAnnika} alt="Emily" className="w-9 h-9 rounded-full object-cover ring-2 ring-background shadow-md" />
            <span className="text-sm font-semibold text-foreground">Emily's agents</span>
          </button>
          <button
            onClick={() => setActiveTab("shah")}
            className={`flex items-center gap-2 transition-all duration-300 ${
              activeTab === "shah" ? "opacity-100" : "opacity-50 hover:opacity-75"
            }`}
          >
            <img src={avatarJacob} alt="Shah" className="w-9 h-9 rounded-full object-cover ring-2 ring-background shadow-md" />
            <span className="text-sm font-semibold text-foreground">Shah's agents</span>
          </button>
        </motion.div>

        {/* Agent cards */}
        <motion.div
          className="mt-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
            >
              {allCards.map((card, i) => {
                const IconComponent = card.icon;
                return (
                  <motion.div
                    key={card.name}
                    className={`${card.bgClass} rounded-xl p-5 cursor-pointer group relative overflow-hidden min-h-[220px] flex flex-col`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ 
                      y: -6, 
                      scale: 1.03,
                      transition: { duration: 0.3, ease: "easeOut" } 
                    }}
                  >
                    {/* Icon - smaller and animated */}
                    <div className="relative w-full flex items-center justify-center mb-3">
                      <motion.div
                        animate={{ 
                          y: [0, -6, 0],
                          rotate: [0, 3, -3, 0],
                        }}
                        transition={{ 
                          duration: 2.5 + i * 0.3, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                        whileHover={{
                          scale: 1.15,
                          rotate: 360,
                          transition: { duration: 0.5 }
                        }}
                      >
                        <IconComponent className={`w-12 h-12 ${card.iconColor} drop-shadow-md`} strokeWidth={2.5} fill="currentColor" />
                      </motion.div>
                    </div>
                    
                    {/* Content - bullet points style with hover effect */}
                    <div className="space-y-1.5 flex-1">
                      <h3 className="font-bold text-xs text-foreground leading-tight mb-2 group-hover:text-foreground transition-colors">{card.name}</h3>
                      <ul className="space-y-1 text-[9.5px] text-muted-foreground/70 group-hover:text-muted-foreground transition-all duration-300">
                        <li className="flex items-start gap-1.5">
                          <span className="text-[7px] mt-0.5 group-hover:scale-125 transition-transform">●</span>
                          <span className="line-clamp-2 leading-relaxed">{card.description}</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="text-[7px] mt-0.5 group-hover:scale-125 transition-transform">●</span>
                          <span className="line-clamp-2 leading-relaxed">{card.tag}</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="text-[7px] mt-0.5 group-hover:scale-125 transition-transform">●</span>
                          <span>{card.workflows}</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="text-[7px] mt-0.5 group-hover:scale-125 transition-transform">●</span>
                          <span className="line-clamp-1">{card.tools}</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

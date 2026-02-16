import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Headphones, Settings, BarChart3, Megaphone, DollarSign } from "lucide-react";

const agentTypes = [
  {
    id: "sales-revenue",
    name: "Sales & Revenue",
    description: "Automate lead qualification, follow-ups, and pipeline management to accelerate revenue growth",
    icon: TrendingUp,
    color: "from-green-400 to-green-600",
    iconColor: "text-green-600",
    hoverColor: "border-green-500 bg-green-50",
    emoji: "🟢",
  },
  {
    id: "marketing-growth",
    name: "Marketing & Growth",
    description: "Repurpose content, track competitors, and automate distribution across all channels",
    icon: Megaphone,
    color: "from-purple-400 to-purple-600",
    iconColor: "text-purple-600",
    hoverColor: "border-purple-500 bg-purple-50",
    emoji: "🟣",
  },
  {
    id: "customer-support",
    name: "Customer Support",
    description: "Handle support queries, draft replies, and manage tickets automatically with AI assistance",
    icon: Headphones,
    color: "from-blue-400 to-blue-600",
    iconColor: "text-blue-600",
    hoverColor: "border-blue-500 bg-blue-50",
    emoji: "🔵",
  },
  {
    id: "operations",
    name: "Operations & Internal Processes",
    description: "Streamline workflows, manage tasks, and optimize internal processes for maximum efficiency",
    icon: Settings,
    color: "from-yellow-400 to-yellow-600",
    iconColor: "text-yellow-600",
    hoverColor: "border-yellow-500 bg-yellow-50",
    emoji: "🟡",
  },
  {
    id: "finance-reporting",
    name: "Finance & Reporting",
    description: "Track payments, send reminders, generate insights, and build real-time financial dashboards",
    icon: DollarSign,
    color: "from-orange-400 to-orange-600",
    iconColor: "text-orange-600",
    hoverColor: "border-orange-500 bg-orange-50",
    emoji: "🟠",
  },
  {
    id: "hr-hiring",
    name: "HR & Hiring",
    description: "Screen resumes, manage interview scheduling, and automate recruitment workflows",
    icon: BarChart3,
    color: "from-gray-400 to-gray-600",
    iconColor: "text-gray-600",
    hoverColor: "border-gray-500 bg-gray-50",
    emoji: "⚪",
  },
];

const StepsSection = () => {
  const [selectedAgent, setSelectedAgent] = useState(0);

  // Auto-cycle through agents every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedAgent((prev) => (prev + 1) % agentTypes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-foreground leading-[1.1] tracking-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Add an agent to your team in 3 simple steps
        </motion.h2>

        {/* Dynamic subtitle showing selected agent */}
        <motion.div
          className="text-center mb-12 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            <motion.h3
              key={selectedAgent}
              className="text-xl font-semibold text-muted-foreground"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              {agentTypes[selectedAgent].emoji} {agentTypes[selectedAgent].name}
            </motion.h3>
          </AnimatePresence>
        </motion.div>

        {/* Main interactive area */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 md:p-10 shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left side - Agent selection */}
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-gray-700 mb-5">
                Choose your automation area
              </h4>
              
              <div className="space-y-3">
                {agentTypes.map((agent, index) => (
                  <motion.button
                    key={agent.id}
                    onClick={() => setSelectedAgent(index)}
                    className={`w-full text-left p-3.5 rounded-xl border-2 transition-all duration-300 ${
                      selectedAgent === index
                        ? `${agent.hoverColor} shadow-md`
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedAgent === index
                            ? "border-primary bg-primary"
                            : "border-gray-300 bg-white"
                        }`}
                      >
                        {selectedAgent === index && (
                          <motion.div
                            className="w-2 h-2 rounded-full bg-white"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </div>
                      <span className="font-medium text-gray-800">{agent.name}</span>
                    </div>
                  </motion.button>
                ))}
              </div>

              <motion.button
                className="mt-5 px-5 py-2 bg-foreground text-background rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore More
              </motion.button>
            </div>

            {/* Right side - Agent preview card */}
            <div className="flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedAgent}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-gray-200 w-full max-w-md min-h-[400px] flex flex-col justify-center"
                  initial={{ opacity: 0, x: 50, rotateY: -15 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: -50, rotateY: 15 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Agent icon */}
                  <div className="flex justify-center mb-8">
                    <motion.div
                      className={`w-36 h-36 rounded-full bg-gradient-to-br ${agentTypes[selectedAgent].color} flex items-center justify-center shadow-2xl relative overflow-hidden`}
                      initial={{ scale: 0.8, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {/* Animated background circles */}
                      <motion.div
                        className="absolute inset-0 opacity-30"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-3 h-3 bg-white rounded-full"
                            style={{
                              top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 8)}%`,
                              left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 8)}%`,
                            }}
                          />
                        ))}
                      </motion.div>
                      
                      {/* Icon with animation */}
                      <motion.div
                        animate={{ 
                          y: [0, -10, 0],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                        className="relative z-10"
                      >
                        {(() => {
                          const IconComponent = agentTypes[selectedAgent].icon;
                          return <IconComponent className="w-16 h-16 text-white" strokeWidth={2} />;
                        })()}
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Agent info */}
                  <div className="text-center">
                    <motion.h3 
                      className="text-xl font-bold text-gray-800 mb-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {agentTypes[selectedAgent].name}
                    </motion.h3>
                    <motion.p 
                      className="text-base text-gray-600 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {agentTypes[selectedAgent].description}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a href="#" className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline underline-offset-4 transition-all">
            Learn more about our automation systems
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default StepsSection;

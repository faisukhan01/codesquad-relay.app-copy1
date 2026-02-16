import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mike S.",
    role: "Small Business Owner",
    quote: "LIFE-CHANGING! CodeSquad has allowed me to build integrations for my service business that have completely automated my office and saved us countless hours of time and money. The team has been phenomenal.",
    platform: "G2",
  },
  {
    name: "Joni S.",
    role: "Product Management Consultant",
    quote: "Love CodeSquad and use it to automate my coaching business. It integrates seamlessly with my tech stack. I've tried many other automation/workflow products, but CodeSquad is the best!",
    platform: "LinkedIn",
  },
  {
    name: "Craig G.",
    role: "Sales & Strategy Executive",
    quote: "Love the platform. I've been exploring agentic tools and found CodeSquad very capable and user friendly.",
    platform: "LinkedIn",
  },
  {
    name: "Matt P.",
    role: "Partnerships Manager",
    quote: "CodeSquad has been a game-changer for marketing and partnerships. Saves me countless hours per week and is super affordable. It was a quick learning curve to get started.",
    platform: "G2",
  },
  {
    name: "Rocio G.",
    role: "General Manager",
    quote: "One of the most intuitive and powerful automation tools I've come across. Despite not being a programmer, I find it incredibly user-friendly while still offering the robustness needed for advanced workflows.",
    platform: "G2",
  },
  {
    name: "Ryan B.",
    role: "Marketing Leader",
    quote: "CodeSquad is one of the best, most practical platforms for creating agents… Cannot recommend CodeSquad enough.",
    platform: "LinkedIn",
  },
  {
    name: "Carla M.",
    role: "Producer",
    quote: "I've been using CodeSquad for about a year, and what's stood out to me is how approachable it feels compared to other agent tools. It doesn't feel like you need to think like an engineer.",
    platform: "LinkedIn",
  },
  {
    name: "Dhilip S.",
    role: "Consultant",
    quote: "The UI is brilliant, but the AI is now extraordinary. CodeSquad was already a solid tool, but the ability to build entire agentic workflows seamlessly is a massive leap.",
    platform: "LinkedIn",
  },
  {
    name: "Craig H.",
    role: "Senior Director of Product & Ops",
    quote: "Love the platform. My team is already building some genuinely useful agents with CodeSquad.",
    platform: "LinkedIn",
  },
];

const avatarColors = [
  "bg-blue-100 text-blue-700",
  "bg-emerald-100 text-emerald-700",
  "bg-amber-100 text-amber-700",
  "bg-rose-100 text-rose-700",
  "bg-violet-100 text-violet-700",
  "bg-cyan-100 text-cyan-700",
  "bg-pink-100 text-pink-700",
  "bg-teal-100 text-teal-700",
  "bg-indigo-100 text-indigo-700",
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            People love CodeSquad
          </h2>
        </motion.div>

        {/* Masonry-like grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="break-inside-avoid bg-card rounded-xl border border-border/50 p-5 hover:shadow-xl hover:border-border transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-sm font-bold flex-shrink-0`}>
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
                <div className="ml-auto">
                  <span className="text-[10px] font-bold text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">{t.platform}</span>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.quote}</p>
              
              {/* Professional Links Section */}
              <div className="flex flex-col gap-2 mb-4 border-t border-border/30 pt-3">
                <a 
                  href="https://www.upwork.com/freelancers/~01ea1a66dfb217e6a4?mp_source=share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 flex items-center gap-1"
                >
                  📄 Read on Upwork
                </a>
                <a 
                  href="https://www.linkedin.com/in/shahzaibhamid/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 flex items-center gap-1"
                >
                  💼 Read on LinkedIn
                </a>
              </div>
              
              {/* 5 Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ratings */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">4.9 stars on</span>
            <span className="text-sm font-bold text-foreground">G2</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">5.0 stars on</span>
            <span className="text-sm font-bold text-foreground">Product Hunt</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

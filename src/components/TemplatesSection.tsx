import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const testimonials = [
  {
    name: "Faraz",
    platform: "LinkedIn",
    text: "I highly recommend Shahzaib and Code Squad. They were diligent, prompt and reliable over the course of two projects that I used their service. The project involved UX/UI, prompt engineering and ML to give incrementally better results. Wish them the best!",
    gradient: "from-blue-500/10 via-purple-500/10 to-pink-500/10"
  },
  {
    name: "John",
    platform: "Upwork",
    text: "Shahzaib did a great job of communicating throughout the project, he found solutions to hurdles along the way and ultimately we were very satisfied!",
    gradient: "from-emerald-500/10 via-teal-500/10 to-cyan-500/10"
  },
  {
    name: "Noah",
    platform: "Upwork",
    text: "Great working with Shahzaib and his team. 10/10.",
    gradient: "from-orange-500/10 via-amber-500/10 to-yellow-500/10"
  },
  {
    name: "David",
    platform: "Upwork",
    text: "Shahzaib is a pleasure to work with—polite, responsive, and highly professional. He quickly understands requirements, needs minimal guidance, and consistently delivers high-quality work.",
    gradient: "from-violet-500/10 via-purple-500/10 to-fuchsia-500/10"
  },
  {
    name: "Michael",
    platform: "Upwork",
    text: "I recommend Shahzaib for his strong problem-solving skills. Due to unforeseen issues, an hourly arrangement works best, and clear, well-organized information is essential for optimal results.",
    gradient: "from-rose-500/10 via-pink-500/10 to-red-500/10"
  },
  {
    name: "Kennard",
    platform: "Upwork",
    text: "Shahzaib is a highly skilled and reliable freelancer with strong technical expertise. He was responsive, proactive, and communicated complex ideas clearly. Highly recommended.",
    gradient: "from-cyan-500/10 via-blue-500/10 to-indigo-500/10"
  },
  {
    name: "AI Data Analysis",
    platform: "Upwork",
    text: "Shah is an expert on this field of AI. Great to work with, very easy to talk to and very flexible on the timing. Highly recommendable!",
    gradient: "from-lime-500/10 via-green-500/10 to-emerald-500/10"
  },
  {
    name: "AI Tools",
    platform: "Upwork",
    text: "Excellent developing a complex AI-driven application from scratch, over an extended period of time",
    gradient: "from-amber-500/10 via-orange-500/10 to-red-500/10"
  },
  {
    name: "Pose Estimation",
    platform: "Upwork",
    text: "Shahzaib was an outstanding freelancer! He showed strong technical expertise, clear understanding of our goals, and was very responsive and flexible. His professionalism made the collaboration seamless.",
    gradient: "from-indigo-500/10 via-violet-500/10 to-purple-500/10"
  }
];

const TemplatesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const next = (currentIndex + 1) % testimonials.length;
    return [prev, currentIndex, next];
  };

  return (
    <section id="templates" className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-[1.2] tracking-tight">
            Don't just take our words for it, take theirs.
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[380px] flex items-center justify-center">
            <AnimatePresence initial={false}>
              {getVisibleTestimonials().map((index, position) => {
                const isCenter = position === 1;
                const isLeft = position === 0;
                const isRight = position === 2;

                return (
                  <motion.div
                    key={index}
                    className={`absolute ${
                      isCenter ? 'w-[380px] z-20' : 'w-[340px] z-10'
                    }`}
                    initial={false}
                    animate={{
                      opacity: 1,
                      scale: isCenter ? 1 : 0.88,
                      rotateY: isLeft ? -12 : isRight ? 12 : 0,
                      x: isLeft ? -420 : isRight ? 420 : 0,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <div
                      className={`relative h-[340px] rounded-2xl bg-gradient-to-br ${testimonials[index].gradient} backdrop-blur-xl border border-border/40 p-7 shadow-xl ${
                        isCenter ? 'shadow-primary/15 bg-white/80' : 'shadow-black/5 bg-white/60 blur-sm'
                      } transition-all duration-600`}
                    >
                      {/* Quote Icon */}
                      <div className="absolute top-5 right-5 text-5xl text-primary/15 font-serif leading-none">
                        "
                      </div>

                      {/* Content */}
                      <div className={`relative z-10 h-full flex flex-col ${!isCenter ? 'opacity-70' : ''} transition-opacity duration-600`}>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-bold text-base shadow-md">
                              {testimonials[index].name.charAt(0)}
                            </div>
                            <div>
                              <h3 className="font-bold text-foreground text-base">
                                {testimonials[index].name}
                              </h3>
                              <p className="text-xs text-muted-foreground">
                                {testimonials[index].platform}
                              </p>
                            </div>
                          </div>

                          <p className="text-foreground/85 leading-relaxed text-sm">
                            {testimonials[index].text}
                          </p>
                        </div>

                        {/* Fixed Position Buttons - Always at bottom */}
                        <div className="mt-auto pt-4">
                          <div className="flex gap-2">
                            <a 
                              href="https://www.upwork.com/freelancers/~01ea1a66dfb217e6a4?mp_source=share"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 text-green-700 hover:text-green-800 text-xs font-medium rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 border border-green-200/50"
                            >
                              <svg className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.438-5.439-5.438z"/>
                              </svg>
                              <span>Read on Upwork</span>
                            </a>
                            
                            <a 
                              href="https://www.linkedin.com/in/shahzaibhamid/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 text-blue-700 hover:text-blue-800 text-xs font-medium rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 border border-blue-200/50"
                            >
                              <svg className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                              <span>Read on LinkedIn</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-foreground text-background shadow-xl hover:scale-110 transition-transform duration-200 flex items-center justify-center z-30"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-foreground text-background shadow-xl hover:scale-110 transition-transform duration-200 flex items-center justify-center z-30"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;

import { motion } from "framer-motion";

// Import brand logos with proper syntax
import dbPartner from "../assets/db partner.png";
import dropPr from "../assets/drop pr.png";
import gAI from "../assets/gAI.png";
import kenetics from "../assets/kenetics.png";
import mr from "../assets/mr.png";
import settleIn from "../assets/settleIn.png";

const TrustedBy = () => {
  const brands = [
    { name: "DB Partner", logo: dbPartner },
    { name: "Drop PR", logo: dropPr },
    { name: "gAI", logo: gAI },
    { name: "Kenetics", logo: kenetics },
    { name: "MR", logo: mr },
    { name: "SettleIn", logo: settleIn },
  ];

  // Create duplicated array for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-16 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Brands we work with
        </motion.h2>
        
        {/* Decorative line above logos */}
        <div className="relative mb-8">
          <motion.div
            className="h-1 rounded-full mx-auto"
            style={{
              width: "200px",
              background: "linear-gradient(135deg, hsl(200 100% 95%) 0%, hsl(280 85% 95%) 15%, hsl(340 90% 95%) 30%, hsl(160 80% 95%) 45%, hsl(50 100% 95%) 60%, hsl(220 85% 95%) 75%, hsl(300 80% 95%) 90%, hsl(180 85% 95%) 100%)"
            }}
            animate={{
              width: ["100px", "300px", "100px"],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          />
        </div>
        
        {/* Animated logo carousel */}
        <div className="relative h-32 overflow-hidden">
          <motion.div
            className="flex items-center h-full absolute left-0 top-0"
            animate={{
              x: [0, -180 * brands.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35, // Slower animation
                ease: "linear",
              },
            }}
            style={{ 
              width: `${180 * duplicatedBrands.length}px`,
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <motion.div
                key={`${brand.name}-${index}`}
                className="group flex-shrink-0 cursor-pointer flex items-center justify-center mx-10"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
                style={{ width: "140px" }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-20 w-auto max-w-full object-contain transition-all duration-300" // Larger logos
                  style={{
                    filter: "grayscale(100%) brightness(0.6)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "grayscale(0%) brightness(1) saturate(150%) hue-rotate(220deg) drop-shadow(0 0 15px rgba(59, 130, 246, 0.6))";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = "grayscale(100%) brightness(0.6)";
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>

        {/* Decorative line below logos */}
        <div className="relative mt-8">
          <motion.div
            className="h-1 rounded-full mx-auto"
            style={{
              width: "200px",
              background: "linear-gradient(135deg, hsl(200 100% 95%) 0%, hsl(280 85% 95%) 15%, hsl(340 90% 95%) 30%, hsl(160 80% 95%) 45%, hsl(50 100% 95%) 60%, hsl(220 85% 95%) 75%, hsl(300 80% 95%) 90%, hsl(180 85% 95%) 100%)"
            }}
            animate={{
              width: ["100px", "250px", "100px"],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              repeat: Infinity,
              duration: 3.5,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;


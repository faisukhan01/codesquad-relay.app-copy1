import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import codesquadLogo from "../assets/codesquadlogo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[60px]">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={codesquadLogo} alt="CodeSquad" className="h-36" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            <Link 
              to="/" 
              className={`text-[13px] font-medium transition-colors duration-200 ${
                location.pathname === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`text-[13px] font-medium transition-colors duration-200 ${
                location.pathname === "/services" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Service
            </Link>
            <span className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-not-allowed">Portfolio</span>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-2">
            <button className="text-[13px] font-semibold bg-foreground text-background px-5 py-2 rounded-full hover:opacity-90 transition-all duration-200 shadow-sm">
              Start for free
            </button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-1" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-4 py-4 space-y-3">
              <Link 
                to="/" 
                className={`block text-sm font-medium py-1 ${
                  location.pathname === "/" ? "text-foreground" : "text-muted-foreground"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`block text-sm font-medium py-1 ${
                  location.pathname === "/services" ? "text-foreground" : "text-muted-foreground"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                Service
              </Link>
              <span className="block text-sm font-medium text-muted-foreground py-1 cursor-not-allowed">Portfolio</span>
              <div className="pt-3 border-t border-border space-y-2">
                <button className="w-full text-sm font-semibold bg-foreground text-background px-5 py-2.5 rounded-full">Start for free</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

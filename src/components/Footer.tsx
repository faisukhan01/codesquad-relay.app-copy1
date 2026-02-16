const footerLinks = {
  Product: [
    { label: "Integrations", href: "#integrations" },
    { label: "Templates", href: "#templates" },
    { label: "AI agents for marketing", href: "#" },
    { label: "Pricing", href: "#pricing" },
  ],
  Learn: [
    { label: "Videos", href: "https://www.youtube.com/@codesquad" },
    { label: "Live events", href: "#" },
    { label: "AI Agent Academy", href: "#" },
    { label: "Community", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Resources: [
    { label: "Hire a Certified Partner", href: "#" },
    { label: "Become a Certified Partner", href: "#" },
    { label: "Affiliate program", href: "#" },
    { label: "CodeSquad for Educators", href: "#" },
    { label: "Information security", href: "#" },
    { label: "Leave a review", href: "#" },
    { label: "Company", href: "#" },
    { label: "System status", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight">CodeSquad</span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              {/* YouTube icon */}
              <a href="https://www.youtube.com/@shahzaib_hamid" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              {/* LinkedIn icon */}
              <a href="https://www.linkedin.com/in/shahzaibhamid/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              {/* Email icon */}
              <a href="mailto:info@codesquad.ai" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </a>
            </div>
            <p className="text-sm text-background/40">
              © CodeSquad Inc. 2026
            </p>
            <div className="mt-3 flex gap-4 flex-wrap">
              <a href="#" className="text-xs text-background/40 hover:text-background/70 transition-colors">Legal</a>
              <a href="#" className="text-xs text-background/40 hover:text-background/70 transition-colors">Privacy</a>
              <a href="#" className="text-xs text-background/40 hover:text-background/70 transition-colors">Google API disclosures</a>
              <a href="#" className="text-xs text-background/40 hover:text-background/70 transition-colors">SOC 2</a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm mb-5 text-background/70">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[13px] text-background/40 hover:text-background/80 transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

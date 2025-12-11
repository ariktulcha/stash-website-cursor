import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Phone, Mail, MessageCircle, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-12 sm:py-16">
        {/* Main Footer Content - Centered */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12">
            {/* Logo & Tagline */}
            <div className="md:col-span-2 lg:col-span-1 text-center md:text-right">
              <div className="mb-6">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4 inline-block">
                  STASH
                </div>
                <p className="text-foreground text-xl sm:text-2xl font-semibold mb-3">
                  צמידים ותגים לאירועים
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md mx-auto md:mx-0">
                  הדפסה איכותית. עיצוב אישי. שירות מהיר.
                </p>
              </div>
              
              {/* Social Media */}
              <div className="flex items-center justify-center md:justify-start gap-4 space-x-reverse">
                <a 
                  href="https://instagram.com/stash.events" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all p-3 hover:bg-primary/10 rounded-full hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a 
                  href="https://facebook.com/stash.events" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all p-3 hover:bg-primary/10 rounded-full hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="text-center md:text-right">
              <h3 className="font-semibold text-foreground mb-6 text-lg sm:text-xl">ניווט מהיר</h3>
              <nav className="flex flex-col space-y-3">
                <Link to="/" onClick={handleLinkClick} className="text-muted-foreground hover:text-primary transition-all text-sm sm:text-base py-1.5 hover:translate-x-[-4px]">
                  דף הבית
                </Link>
                <Link to="/fabric-wristbands" onClick={handleLinkClick} className="text-muted-foreground hover:text-primary transition-all text-sm sm:text-base py-1.5 hover:translate-x-[-4px]">
                  צמידי בד
                </Link>
                <Link to="/colored-paper-wristbands" onClick={handleLinkClick} className="text-muted-foreground hover:text-primary transition-all text-sm sm:text-base py-1.5 hover:translate-x-[-4px]">
                  צמידי נייר צבעוני
                </Link>
                <Link to="/paper-graphic-wristbands" onClick={handleLinkClick} className="text-muted-foreground hover:text-primary transition-all text-sm sm:text-base py-1.5 hover:translate-x-[-4px]">
                  צמידי נייר + גרפיקה
                </Link>
                <Link to="/production-tags" onClick={handleLinkClick} className="text-muted-foreground hover:text-primary transition-all text-sm sm:text-base py-1.5 hover:translate-x-[-4px]">
                  תגי הפקה
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h3 className="font-semibold text-foreground mb-6 text-lg sm:text-xl">פרטי קשר</h3>
              <div className="flex flex-col space-y-4">
                <a 
                  href="tel:+9720559753446" 
                  className="flex items-center justify-center md:justify-end gap-3 space-x-reverse text-muted-foreground hover:text-primary transition-all group"
                >
                  <span className="text-sm sm:text-base">055-975-3446</span>
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://wa.me/9720559753446" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-end gap-3 space-x-reverse text-muted-foreground hover:text-green-600 transition-all group gads-conversion-footer-whatsapp"
                >
                  <span className="text-sm sm:text-base">WhatsApp</span>
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="mailto:info@stash-events.co.il" 
                  className="flex items-center justify-center md:justify-end gap-3 space-x-reverse text-muted-foreground hover:text-primary transition-all group break-all"
                >
                  <span className="text-sm sm:text-base">info@stash-events.co.il</span>
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Additional Links Section */}
            <div className="text-center md:text-right">
              <h3 className="font-semibold text-foreground mb-6 text-lg sm:text-xl">מידע נוסף</h3>
              <nav className="flex flex-col space-y-3">
                <Link to="/about" onClick={handleLinkClick} className="text-muted-foreground hover:text-primary transition-all text-sm sm:text-base py-1.5 hover:translate-x-[-4px]">
                  אודות
                </Link>
                <Link to="/contact" onClick={handleLinkClick} className="text-muted-foreground hover:text-primary transition-all text-sm sm:text-base py-1.5 hover:translate-x-[-4px]">
                  צור קשר
                </Link>
                <Link to="/faq" onClick={handleLinkClick} className="text-muted-foreground hover:text-primary transition-all text-sm sm:text-base py-1.5 hover:translate-x-[-4px]">
                  שאלות ותשובות
                </Link>
                <Link to="/design-consultation" onClick={handleLinkClick} className="text-muted-foreground hover:text-primary transition-all text-sm sm:text-base py-1.5 hover:translate-x-[-4px]">
                  יעוץ ועיצוב
                </Link>
                <Link to="/delivery-times" onClick={handleLinkClick} className="text-muted-foreground hover:text-primary transition-all text-sm sm:text-base py-1.5 hover:translate-x-[-4px]">
                  זמני אספקה
                </Link>
                <Link to="/which-wristband-to-choose" onClick={handleLinkClick} className="text-muted-foreground hover:text-primary transition-all text-sm sm:text-base py-1.5 hover:translate-x-[-4px]">
                  איזה צמיד לבחור?
                </Link>
                <Link to="/privacy" onClick={handleLinkClick} className="text-muted-foreground hover:text-primary transition-all text-sm sm:text-base py-1.5 hover:translate-x-[-4px]">
                  מדיניות פרטיות
                </Link>
              </nav>
            </div>
          </div>

          {/* Divider */}
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/50"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-background px-4">
                <div className="h-2 w-2 rounded-full bg-primary/20"></div>
              </div>
            </div>
          </div>

          {/* Legal Links & Copyright */}
          <div className="max-w-6xl mx-auto mt-10 sm:mt-12">
            <div className="flex flex-col gap-6 items-center">
              {/* Copyright */}
              <div className="text-xs sm:text-sm text-muted-foreground text-center">
                <p className="font-medium">© 2024 STASH - כל הזכויות שמורות</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "דף הבית", href: "/" },
    { name: "איזה צמיד לבחור", href: "/which-wristband-to-choose" },
    { name: "צמידי בד", href: "/fabric-wristbands" },
    { name: "צמידי נייר צבעוני", href: "/colored-paper-wristbands" },
    { name: "צמידי נייר + גרפיקה", href: "/paper-graphic-wristbands" },
    { name: "צמידי ויניל", href: "/vinyl-wristbands" },
    { name: "תגי הפקה", href: "/production-tags" },
    { name: "אודות", href: "/about" },
    { name: "צור קשר", href: "/contact" },
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "9720559753446";
    const defaultMessage = "היי, יש לי שאלה על המוצרים שלכם";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 space-x-reverse">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              STASH
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
              צמידים ותגים לאירועים
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-xs xl:text-sm font-medium text-foreground hover:text-primary transition-colors text-right whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* WhatsApp Button */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
            <Button 
              variant="whatsapp" 
              size="sm" 
              onClick={handleWhatsAppClick}
              className="gads-conversion-header-whatsapp-desktop"
            >
              <MessageCircle className="h-4 w-4" />
              צור קשר בוואטסאפ
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="flex flex-col space-y-2 px-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-muted/50 text-right"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Button 
                  variant="whatsapp" 
                  size="default" 
                  className="w-full gads-conversion-header-whatsapp-mobile" 
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="h-4 w-4" />
                  צור קשר בוואטסאפ
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
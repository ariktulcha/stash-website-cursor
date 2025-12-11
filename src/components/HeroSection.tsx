import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-wristbands.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
            <span className="bg-gradient-hero bg-clip-text text-transparent drop-shadow-none">
              צמידים ותגים
            </span>
            <br />
            <span className="text-white drop-shadow-md">
              שעושים את האירוע
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            עיצוב אישי | שירות מהיר | הדפסה איכותית | מחיר תחרותי
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 space-x-reverse">
            <Button 
              variant="hero" 
              size="xl" 
              className="animate-glow gads-conversion-hero-whatsapp"
              onClick={() => window.open('https://wa.me/9720559753446?text=היי, אני מעוניין לקבל הצעת מחיר לצמידים לאירוע', '_blank')}
            >
              <MessageCircle className="h-6 w-6" />
              קבלו הצעת מחיר ב-WhatsApp
            </Button>
            
            <Button variant="outline" size="xl" className="border-primary/30 hover:bg-primary/10">
              צפו במוצרים שלנו
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default HeroSection;
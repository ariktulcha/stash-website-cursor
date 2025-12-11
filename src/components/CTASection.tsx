import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            בואו נשדרג את האירוע שלכם
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            מוכנים להפוך את האירוע שלכם לבלתי נשכח? 
            <br />
            השאירו פרטים או דברו איתנו ישירות
          </p>

          <Button 
            variant="secondary" 
            size="xl"
            className="bg-white text-primary hover:bg-white/90 shadow-intense gads-conversion-cta-whatsapp"
            onClick={() => window.open('https://wa.me/9720559753446?text=היי, אני מעוניין לקבל מידע על צמידים לאירוע שלי', '_blank')}
          >
            <MessageCircle className="h-6 w-6" />
            שלח הודעה בוואטסאפ
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-6 h-6 bg-white/20 rounded-full animate-float" />
      <div className="absolute top-32 right-20 w-4 h-4 bg-white/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default CTASection;
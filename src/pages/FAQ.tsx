import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, HelpCircle, ShoppingCart, Palette, Package, CreditCard, RotateCcw, Headphones } from "lucide-react";
import faqData from "@/data/faq.json";
import SEO from "@/components/SEO";

// Icon mapping from string names to icon components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShoppingCart,
  Palette,
  Package,
  CreditCard,
  RotateCcw,
  Headphones,
};

const FAQ = () => {
  const categories = faqData.categories.map((category) => ({
    ...category,
    icon: iconMap[category.icon] || Package, // Default to Package if icon not found
  }));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.categories.flatMap(category => 
      category.questions.map(q => ({
        "@type": "Question",
        name: q.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.a
        }
      }))
    )
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="שאלות ותשובות - Stash Events | כל מה שצריך לדעת על צמידי אירועים"
        description="מצאנו תשובות לשאלות הנפוצות ביותר על צמידי אירועים, תגי הפקה, מחירים, זמני אספקה ועוד. לא מצאתם תשובה? בואו נדבר!"
        keywords="שאלות על צמידים, FAQ צמידי אירועים, שאלות נפוצות צמידים, מידע על תגי הפקה, מחירים צמידים, זמני אספקה צמידים"
        url="https://stash-events.co.il/faq"
        structuredData={structuredData}
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-glow">
                <HelpCircle className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  שאלות ותשובות
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4">
                מצאנו תשובות לשאלות הנפוצות ביותר.
                <br />
                לא מצאתם את מה שחיפשתם? בואו נדבר!
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-12">
              {categories.map((category, categoryIndex) => {
                const IconComponent = category.icon;
                return (
                  <div key={categoryIndex}>
                    <div className="flex items-center space-x-3 space-x-reverse mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                        {category.title}
                      </h2>
                    </div>
                    
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((item, questionIndex) => (
                        <AccordionItem 
                          key={questionIndex} 
                          value={`item-${categoryIndex}-${questionIndex}`}
                          className="border-border"
                        >
                          <AccordionTrigger className="text-right hover:no-underline">
                            <span className="font-semibold">{item.q}</span>
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed">
                            {item.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 sm:py-16 md:py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card variant="glow" className="text-center">
                <CardHeader>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">לא מצאתם תשובה?</CardTitle>
                  <CardContent className="pt-4">
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed px-2">
                      יש לכם שאלה נוספת? אנחנו כאן לעזור!
                      <br />
                      צרו קשר ונענה על כל השאלות שלכם.
                    </p>
                    <Button 
                      variant="hero" 
                      size="lg"
                      className="w-full sm:w-auto"
                      onClick={() => window.open('https://wa.me/9720559753446?text=היי, יש לי שאלה נוספת', '_blank')}
                    >
                      <MessageCircle className="h-5 w-5" />
                      בואו נדבר ב-WhatsApp
                    </Button>
                  </CardContent>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;


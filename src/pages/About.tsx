import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "../components/CTASection";
import { PriceCalculator } from "@/components/PriceCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Users, Star, Target } from "lucide-react";
import SEO from "@/components/SEO";

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "אודות Stash Events",
    description: "חברת STASH נולדה מתוך עולם חיי הלילה והאירועים - כי הבנו שחוויית הלקוח מתחילה בפרטים הכי קטנים",
    url: "https://stash-events.co.il/about"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="אודותינו - Stash Events | צמידי אירועים ותגי הפקה מקצועיים"
        description="חברת STASH נולדה מתוך עולם חיי הלילה והאירועים. צמידי בד, צמידי נייר, תגי הפקה - הכל עם שירות מהיר, עיצוב אישי ומחיר תחרותי."
        keywords="אודות Stash Events, חברת צמידים, צמידי אירועים ישראל, תגי הפקה מקצועיים, שירות צמידים לאירועים"
        url="https://stash-events.co.il/about"
        structuredData={structuredData}
      />
      <Header />
      
      <main className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2">
              <span className="text-foreground">הפרטים הקטנים </span>
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                שעושים את ההפקה
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              חברת STASH נולדה מתוך עולם חיי הלילה והאירועים - 
              כי הבנו שחוויית הלקוח מתחילה בפרטים הכי קטנים
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="space-y-8">
              <Card variant="gradient">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>מי אנחנו</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    חברת STASH נולדה מתוך עולם חיי הלילה. אחרי שנים בהפקות, הבנו שחוויית הלקוח 
                    מתחילה בפרטים הכי קטנים – צמיד, תג, מיתוג.
                    <br /><br />
                    בדקנו מעל 100 ספקים, עיצבנו אין ספור דגמים, ושמנו לעצמנו מטרה: 
                    להפוך את הפרטים הקטנים לבלתי נשכחים.
                  </p>
                </CardContent>
              </Card>

              <Card variant="gradient">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mb-4">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>מה אנחנו מציעים</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    צמידי בד באיכות מעולה, צמידי נייר ייחודיים, תגי הפקה מעוצבים – 
                    הכל עם שירות מהיר, עיצוב אישי ומחיר תחרותי.
                    <br /><br />
                    כל מוצר שלנו עובר בדיקות איכות קפדניות ומגיע אליכם בדיוק כמו שדמיינתם.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card variant="gradient">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-success to-accent rounded-full flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>למי אנחנו מתאימים</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>מפיקים ומועדוני לילה</span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      <span>חברות הפקה מקצועיות</span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>מסיבות פרטיות וחתונות</span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-2 h-2 bg-warning rounded-full" />
                      <span>פסטיבלים והופעות</span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-2 h-2 bg-success rounded-full" />
                      <span>אירועים עסקיים וכנסים</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <Card variant="glow">
                <CardHeader>
                  <CardTitle>מוכנים להתחיל?</CardTitle>
                  <CardDescription>
                    בואו נדבר על האירוע שלכם ונמצא את הפתרון המושלם
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="hero" 
                    className="w-full"
                    onClick={() => window.open('https://wa.me/9720559753446?text=היי, אני מעוניין לשמוע עוד על השירותים שלכם', '_blank')}
                  >
                    <MessageCircle className="h-5 w-5" />
                    בואו נדבר ב-WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Values Section */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                הערכים שלנו
              </span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">איכות מובטחת</h3>
                <p className="text-muted-foreground">
                  כל מוצר עובר בדיקות איכות קפדניות לפני משלוח
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">שירות אישי</h3>
                <p className="text-muted-foreground">
                  כל לקוח מקבל יחס אישי ופתרון מותאם לצרכיו
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-success to-warning rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">מחויבות לתוצאה</h3>
                <p className="text-muted-foreground">
                  אנחנו לא מרוצים עד שאתם מרוצים מהתוצאה
                </p>
              </div>
            </div>
          </div>

          {/* Price Calculators Section */}
          <section className="mt-12 sm:mt-16 md:mt-20">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  מחשבון מחירים
                </span>
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground px-4">
                חשבו את המחיר המדויק לפי הכמות שאתם צריכים
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="colored-paper" className="w-full">
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-6 sm:mb-8 gap-1 sm:gap-2 h-auto">
                  <TabsTrigger value="colored-paper" className="text-[10px] xs:text-xs sm:text-sm py-2 px-2 sm:px-4">צמידי נייר</TabsTrigger>
                  <TabsTrigger value="fabric" className="text-[10px] xs:text-xs sm:text-sm py-2 px-2 sm:px-4">צמידי בד</TabsTrigger>
                  <TabsTrigger value="graphic" className="text-[10px] xs:text-xs sm:text-sm py-2 px-2 sm:px-4">נייר + גרפיקה</TabsTrigger>
                  <TabsTrigger value="tags" className="text-[10px] xs:text-xs sm:text-sm py-2 px-2 sm:px-4">תגי הפקה</TabsTrigger>
                </TabsList>
                
                <TabsContent value="colored-paper">
                  <PriceCalculator productId="colored-paper-wristbands" />
                </TabsContent>
                <TabsContent value="fabric">
                  <PriceCalculator productId="fabric-wristbands" />
                </TabsContent>
                <TabsContent value="graphic">
                  <PriceCalculator productId="paper-graphic-wristbands" />
                </TabsContent>
                <TabsContent value="tags">
                  <PriceCalculator productId="production-tags" />
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </div>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default About;
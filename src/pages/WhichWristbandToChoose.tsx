import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PriceCalculator } from "@/components/PriceCalculator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, HelpCircle, Calculator, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const WhichWristbandToChoose = () => {
  const wristbandTypes = [
    {
      id: "fabric",
      name: "צמידי בד",
      description: "המוצר הפופולרי ביותר - עמיד, איכותי ומתאים לאירועים ארוכים",
      features: ["עמיד במים", "לא נקרע בקלות", "מתאים לשימוש של כמה ימים", "הדפסה בצבע מלא"],
      link: "/fabric-wristbands",
      minQuantity: 100
    },
    {
      id: "colored-paper",
      name: "צמידי נייר צבעוניים",
      description: "פתרון חסכוני ואיכותי לאירועים חד-יומיים",
      features: ["מחיר תחרותי", "הדפסה מהירה", "מגוון צבעים", "מתאים לאירועים קטנים וגדולים"],
      link: "/colored-paper-wristbands",
      minQuantity: 500
    },
    {
      id: "paper-graphic",
      name: "צמידי נייר + גרפיקה",
      description: "שילוב של מחיר נוח עם אפשרויות עיצוב מתקדמות",
      features: ["הדפסה מותאמת אישית", "לוגו וטקסט", "מחיר אטרקטיבי", "זמן אספקה מהיר"],
      link: "/paper-graphic-wristbands",
      minQuantity: 250
    },
    {
      id: "vinyl",
      name: "צמידי ויניל",
      description: "עמידות גבוהה ונראות מקצועית",
      features: ["עמידות גבוהה", "נראות מקצועית", "מתאים לאירועים יוקרתיים", "מגוון עיצובים"],
      link: "/vinyl-wristbands",
      minQuantity: 100
    },
    {
      id: "tags",
      name: "תגי הפקה",
      description: "פתרון מושלם לזיהוי והפקה מקצועית",
      features: ["זיהוי מהיר", "מתאים להפקות", "עיצוב מותאם", "איכות גבוהה"],
      link: "/production-tags",
      minQuantity: 50
    }
  ];

  const faqItems = [
    {
      question: "איזה צמיד מתאים לאירוע שלי?",
      answer: "הבחירה תלויה בסוג האירוע, התקציב והצרכים שלך. צמידי בד מתאימים לאירועים ארוכים (כמה ימים) ודורשים עמידות גבוהה. צמידי נייר צבעוניים מתאימים לאירועים חד-יומיים עם תקציב מוגבל. צמידי נייר + גרפיקה מציעים שילוב של מחיר נוח עם אפשרויות עיצוב. צמידי ויניל מתאימים לאירועים יוקרתיים. תגי הפקה מתאימים להפקות מקצועיות."
    },
    {
      question: "מה ההבדל בין צמידי בד לצמידי נייר?",
      answer: "צמידי בד עשויים מבד פוליאסטר איכותי, עמידים במים ולא נקרעים בקלות - מתאימים לשימוש של כמה ימים. צמידי נייר הם פתרון חסכוני יותר, מתאימים לאירועים חד-יומיים, וניתן להדפיס עליהם בצבעים שונים או עם גרפיקה מותאמת אישית."
    },
    {
      question: "כמה זמן לוקח לקבל את הצמידים?",
      answer: "זמן האספקה תלוי בסוג המוצר והכמות. בדרך כלל, זמן האספקה הוא 3-7 ימי עסקים מרגע אישור ההזמנה. לכמויות גדולות או עיצובים מורכבים, הזמן יכול להיות מעט ארוך יותר. מומלץ ליצור קשר מראש כדי לתאם את לוח הזמנים."
    },
    {
      question: "מה הכמות המינימלית להזמנה?",
      answer: "הכמות המינימלית משתנה לפי סוג המוצר: תגי הפקה - 50 יחידות, צמידי בד וויניל - 100 יחידות, צמידי נייר + גרפיקה - 250 יחידות, וצמידי נייר צבעוניים - 500 יחידות. ככל שהכמות גדולה יותר, המחיר ליחידה יורד."
    },
    {
      question: "האם אפשר להדפיס לוגו מותאם אישית?",
      answer: "כן! אנו מציעים הדפסה מותאמת אישית עם לוגו, טקסט, צבעים ועיצובים לפי דרישה. ניתן להדפיס על צמידי נייר + גרפיקה, צמידי בד, צמידי ויניל ותגי הפקה. נשמח לעזור לך ליצור עיצוב מושלם לאירוע שלך."
    },
    {
      question: "האם הצמידים עמידים במים?",
      answer: "צמידי בד וצמידי ויניל עמידים במים ומתאימים לשימוש גם בתנאי מזג אוויר קשים. צמידי נייר פחות עמידים במים ומתאימים יותר לאירועים מקורים או בתנאי מזג אוויר נוחים."
    },
    {
      question: "איך בוחרים את הרוחב הנכון?",
      answer: "רוחב הצמיד תלוי בסוג המוצר. צמידי בד מגיעים ברוחב 15mm, 20mm או 25mm. הרוחב הסטנדרטי הוא 20mm ומתאים לרוב השימושים. רוחב גדול יותר נותן יותר מקום להדפסה, ורוחב קטן יותר עדין יותר. ניתן להתייעץ איתנו לבחירה המתאימה."
    },
    {
      question: "מה המחיר של הצמידים?",
      answer: "המחיר תלוי בסוג המוצר, הכמות והעיצוב. ככל שהכמות גדולה יותר, המחיר ליחידה יורד. ניתן להשתמש במחשבון המחירים באתר כדי לקבל הערכה מדויקת לפי הכמות הרצויה. למידע מדויק יותר, מומלץ ליצור קשר לקבלת הצעת מחיר מותאמת."
    },
    {
      question: "האם יש אפשרות לסגירה נפתחת?",
      answer: "רוב הצמידים שלנו מגיעים עם סגירה בלתי ניתק (snap closure) שמבטיחה אבטחה. עם זאת, ניתן להזמין צמידים עם סגירה נפתחת לפי דרישה מיוחדת. מומלץ ליצור קשר כדי לדון באפשרויות."
    },
    {
      question: "איך מזמינים צמידים?",
      answer: "ניתן ליצור קשר דרך WhatsApp, טלפון או טופס יצירת קשר באתר. נשמח לעזור לך לבחור את המוצר המתאים, לתאם את העיצוב ולספק הצעת מחיר מדויקת. לאחר אישור ההזמנה, נתחיל בתהליך הייצור והאספקה."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                מדריך בחירה
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  איזה צמיד לבחור?
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                מדריך מקיף שיעזור לך לבחור את הצמיד המושלם לאירוע שלך
              </p>
            </div>
          </div>
        </section>

        {/* Wristband Types Comparison */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                סוגי הצמידים שלנו
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {wristbandTypes.map((type) => (
                <Card key={type.id} variant="gradient" className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl">{type.name}</CardTitle>
                    <CardDescription className="text-right">
                      {type.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <ul className="space-y-2 mb-6 flex-grow">
                      {type.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 flex-row-reverse text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="space-y-3">
                      <div className="text-sm text-muted-foreground text-right">
                        כמות מינימלית: {type.minQuantity.toLocaleString('he-IL')} יחידות
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        asChild
                      >
                        <Link to={type.link}>
                          למידע נוסף
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-4 flex-row-reverse">
                  <HelpCircle className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    <span className="bg-gradient-accent bg-clip-text text-transparent">
                      שאלות נפוצות
                    </span>
                  </h2>
                </div>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                  כל מה שרצית לדעת על בחירת הצמיד הנכון
                </p>
              </div>
              
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-card border rounded-lg px-4"
                  >
                    <AccordionTrigger className="text-right hover:no-underline">
                      <span className="text-lg font-semibold">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-right text-muted-foreground leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Price Calculator Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4 flex-row-reverse">
                <Calculator className="h-8 w-8 text-primary" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-accent bg-clip-text text-transparent">
                    מחשבון מחירים
                  </span>
                </h2>
              </div>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                חשבו את המחיר המדויק לפי הכמות שאתם צריכים
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="colored-paper" className="w-full">
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-8 gap-1 sm:gap-2">
                  <TabsTrigger value="colored-paper" className="text-xs sm:text-sm">צמידי נייר</TabsTrigger>
                  <TabsTrigger value="fabric" className="text-xs sm:text-sm">צמידי בד</TabsTrigger>
                  <TabsTrigger value="graphic" className="text-xs sm:text-sm">נייר + גרפיקה</TabsTrigger>
                  <TabsTrigger value="tags" className="text-xs sm:text-sm">תגי הפקה</TabsTrigger>
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                עדיין לא בטוחים?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                נשמח לעזור לך לבחור את הצמיד המושלם לאירוע שלך
              </p>
              <Button 
                variant="hero" 
                size="lg"
                className="flex items-center gap-2 mx-auto flex-row-reverse"
                onClick={() => window.open('https://wa.me/9720559753446?text=היי, אני צריך עזרה בבחירת הצמיד המתאים לאירוע שלי', '_blank')}
              >
                <MessageCircle className="h-5 w-5" />
                דברו איתנו ב-WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WhichWristbandToChoose;


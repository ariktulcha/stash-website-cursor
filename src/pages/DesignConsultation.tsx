import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Palette, ImageIcon, CheckCircle, Users, Star, Zap, Lightbulb, FileImage, Sparkles } from "lucide-react";

const DesignConsultation = () => {
  const services = [
    {
      icon: Palette,
      title: "ייעוץ עיצוב חינם",
      description: "שיחה מקצועית להבנת הצרכים והעדפות שלכם"
    },
    {
      icon: ImageIcon,
      title: "עיצוב מותאם אישית",
      description: "עיצוב ייחודי שמתאים בדיוק לאירוע שלכם"
    },
    {
      icon: FileImage,
      title: "תצוגה מקדימה דיגיטלית",
      description: "ראו בדיוק איך המוצר ייראה לפני ההדפסה"
    },
    {
      icon: Lightbulb,
      title: "המלצות מקצועיות",
      description: "ייעוץ בבחירת חומרים, צבעים וסגנונות"
    },
    {
      icon: Sparkles,
      title: "עיצוב לוגו וגרפיקה",
      description: "יצירת עיצובים מאפס או שיפור עיצובים קיימים"
    },
    {
      icon: CheckCircle,
      title: "שינויים ללא הגבלה",
      description: "עד שתאהבו את התוצאה - ללא עלות נוספת"
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "פגישת ייעוץ",
      description: "שיחה טלפונית או ב-WhatsApp להבנת הצרכים, סגנון האירוע והעדפות העיצוב. נמליץ על החומרים והצבעים המתאימים ביותר.",
      icon: MessageCircle
    },
    {
      number: "2",
      title: "עיצוב דוגמא",
      description: "נכין עבורכם דוגמא דיגיטלית של המוצר עם העיצוב שלכם. נשלח לכם לאישור ותוכלו לבקש שינויים עד שתאהבו את התוצאה.",
      icon: ImageIcon
    },
    {
      number: "3",
      title: "אישור והדפסה",
      description: "לאחר אישור סופי, נעביר את ההזמנה לייצור. המוצר יודפס באיכות גבוהה ויישלח אליכם בזמן המוסכם.",
      icon: CheckCircle
    }
  ];

  const designExamples = [
    {
      category: "חתונות ואירועים פרטיים",
      examples: ["שמות החתן והכלה", "תאריך האירוע", "מסר אישי מיוחד", "תמונות זוגיות"]
    },
    {
      category: "פסטיבלים והופעות",
      examples: ["לוגו האירוע", "עיצוב אמנותי", "שם האמן/להקה", "תאריך ומיקום"]
    },
    {
      category: "אירועים עסקיים",
      examples: ["לוגו החברה", "QR Code", "פרטי קשר", "מיתוג מקצועי"]
    },
    {
      category: "מועדונים וברים",
      examples: ["לוגו הברנד", "עיצוב נועז", "תאריך האירוע", "מיתוג לילי"]
    }
  ];

  const faqs = [
    {
      question: "כמה זמן לוקח תהליך העיצוב?",
      answer: "תהליך העיצוב הראשוני לוקח בדרך כלל 1-2 ימי עסקים. לאחר מכן, תוכלו לבקש שינויים עד שתאהבו את התוצאה."
    },
    {
      question: "האם הייעוץ באמת חינם?",
      answer: "כן! הייעוץ והעיצוב הראשוני הם ללא עלות. אתם משלמים רק על המוצר הסופי."
    },
    {
      question: "מה אם לא נאהב את העיצוב?",
      answer: "אנחנו נמשיך לעבוד איתכם עד שתאהבו את התוצאה. אפשר לבצע שינויים ללא הגבלה עד לאישור סופי."
    },
    {
      question: "איזה פורמטים של קבצים אתם מקבלים?",
      answer: "אנחנו מקבלים את כל הפורמטים הנפוצים: JPG, PNG, PDF, AI, EPS. אם יש לכם קובץ אחר, נסו לשלוח ואנחנו נבדוק."
    },
    {
      question: "האם אתם עושים עיצוב מאפס?",
      answer: "כן! אם אין לכם עיצוב קיים, אנחנו יכולים ליצור עיצוב מותאם אישית לפי הרעיון והסגנון שלכם."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-4">
                שירות מקצועי ללא עלות
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  יעוץ ועיצוב
                </span>
                <br />
                <span className="text-foreground">
                  מקצועי
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                נעזור לכם ליצור את הצמיד או התג המושלם לאירוע שלכם.
                <br />
                ייעוץ חינם, עיצוב מותאם אישית ותוצאה מושלמת.
              </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.open('https://wa.me/9720559753446?text=היי, אני מעוניין ביעוץ עיצוב חינם לאירוע שלי', '_blank')}
              >
                <MessageCircle className="h-5 w-5" />
                קבלו יעוץ חינם
              </Button>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  מה אנחנו מציעים
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                שירותי עיצוב מקצועיים שיעזרו לכם להפוך את הרעיון למציאות
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} variant="gradient" className="group hover:scale-105 transition-all duration-300">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:shadow-intense transition-all">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-center">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-center">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  תהליך הייעוץ
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                שלושה שלבים פשוטים לתוצאה מושלמת
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto shadow-glow">
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center text-white font-bold">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Design Examples */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  דוגמאות עיצוב
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                רעיונות לעיצובים מותאמים אישית לפי סוג האירוע
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {designExamples.map((category, index) => (
                <Card key={index} variant="product">
                  <CardHeader>
                    <CardTitle className="text-center">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center space-x-2 space-x-reverse text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  שאלות נפוצות
                </span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} variant="gradient">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default DesignConsultation;




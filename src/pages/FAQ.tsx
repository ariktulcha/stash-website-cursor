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

const FAQ = () => {
  const categories = [
    {
      icon: ShoppingCart,
      title: "הזמנות ומחירים",
      questions: [
        {
          q: "מה הכמות המינימלית להזמנה?",
          a: "הכמויות המינימליות משתנות לפי סוג המוצר: צמידי בד - 100 יחידות, צמידי נייר צבעוני - 500 יחידות, צמידי נייר + גרפיקה - 250 יחידות, תגי הפקה - 50 יחידות."
        },
        {
          q: "איך מקבלים הצעת מחיר?",
          a: "אפשר ליצור קשר דרך WhatsApp, טלפון או טופס יצירת קשר באתר. נצטרך לדעת את סוג המוצר, הכמות והעיצוב המבוקש."
        },
        {
          q: "האם יש הנחה להזמנות גדולות?",
          a: "כן! אנחנו מציעים מחירים מדורגים - ככל שההזמנה גדולה יותר, המחיר ליחידה יורד. המחירים מתחילים מ-100 יחידות ומשתפרים עם הגדלת הכמות."
        },
        {
          q: "מה כולל המחיר?",
          a: "המחיר כולל את המוצר, ההדפסה, העיצוב (אם נדרש) ומשלוח סטנדרטי. משלוח מהיר או דחוף כרוך בתוספת תשלום."
        },
        {
          q: "האם יש עלויות נסתרות?",
          a: "לא. המחיר שתקבלו הוא המחיר הסופי. אין עלויות נסתרות או הפתעות."
        }
      ]
    },
    {
      icon: Palette,
      title: "עיצוב והתאמה אישית",
      questions: [
        {
          q: "כמה שינויים אפשר לבצע בעיצוב?",
          a: "אפשר לבצע שינויים ללא הגבלה עד לאישור סופי. אנחנו רוצים שתאהבו את התוצאה, אז נמשיך לעבוד איתכם עד שתאהבו."
        },
        {
          q: "איזה פורמטים של קבצים אתם מקבלים?",
          a: "אנחנו מקבלים את כל הפורמטים הנפוצים: JPG, PNG, PDF, AI, EPS. אם יש לכם קובץ בפורמט אחר, נסו לשלוח ואנחנו נבדוק אם אפשר לעבוד איתו."
        },
        {
          q: "האם אתם עושים עיצוב מאפס?",
          a: "כן! אם אין לכם עיצוב קיים, אנחנו יכולים ליצור עיצוב מותאם אישית לפי הרעיון והסגנון שלכם. זה חלק מהשירות שלנו."
        },
        {
          q: "כמה זמן לוקח תהליך העיצוב?",
          a: "תהליך העיצוב הראשוני לוקח בדרך כלל 1-2 ימי עסקים. לאחר מכן, תוכלו לבקש שינויים עד שתאהבו את התוצאה."
        },
        {
          q: "האם יש עלות נוספת לעיצוב מותאם?",
          a: "לא. העיצוב והשינויים כלולים במחיר. אתם משלמים רק על המוצר הסופי."
        }
      ]
    },
    {
      icon: Package,
      title: "איכות וחומרים",
      questions: [
        {
          q: "כמה זמן הצמידים מחזיקים?",
          a: "צמידי הבד עמידים מאוד ומחזיקים מספר ימים ואף שבועות. צמידי הנייר מתאימים לשימוש חד-פעמי לאירוע אחד."
        },
        {
          q: "האם הצמידים עמידים במים?",
          a: "צמידי הבד עמידים במים ומתאימים לשימוש באירועי חוף או בריכה. צמידי הנייר אינם עמידים במים."
        },
        {
          q: "מה ההבדל בין סוגי הצמידים?",
          a: "צמידי בד - עמידים, איכותיים, מתאימים לשימוש ממושך. צמידי נייר צבעוני - חסכוניים, מהירים, מושלמים למיון קהל. צמידי נייר + גרפיקה - מותאמים אישית עם עיצוב ייחודי."
        },
        {
          q: "האם אפשר לראות דוגמאות לפני ההזמנה?",
          a: "כן! אנחנו שולחים דוגמא דיגיטלית לפני ההדפסה. תוכלו לראות בדיוק איך המוצר ייראה ולבקש שינויים."
        },
        {
          q: "מה איכות ההדפסה?",
          a: "אנחנו משתמשים בהדפסה דיגיטלית באיכות 300 DPI עם צבעים חזקים ובהירים שלא דוהים."
        }
      ]
    },
    {
      icon: Package,
      title: "משלוח ואספקה",
      questions: [
        {
          q: "כמה זמן לוקח המשלוח?",
          a: "זמני המשלוח משתנים לפי סוג המוצר: צמידי בד - 4-7 ימי עסקים, צמידי נייר צבעוני - 2-4 ימי עסקים, צמידי נייר + גרפיקה - 4-7 ימי עסקים, תגי הפקה - 3-6 ימי עסקים. כולל זמן ייצור ומשלוח."
        },
        {
          q: "לאיזה אזורים אתם משלוחים?",
          a: "אנחנו משלוחים לכל הארץ. משלוח סטנדרטי בדואר רשום או משלוח מהיר לפי בחירתכם."
        },
        {
          q: "מה עלות המשלוח?",
          a: "משלוח סטנדרטי כלול במחיר. משלוח מהיר (24 שעות) כרוך בתוספת של 30 ש\"ח. איסוף עצמי מתל אביב - חינם."
        },
        {
          q: "האם יש אפשרות למשלוח דחוף?",
          a: "כן! אנחנו מציעים שירות אקספרס למשלוחים דחופים תוך 24-48 שעות. צרו קשר לפרטים."
        },
        {
          q: "איך עוקבים אחרי המשלוח?",
          a: "לאחר שליחת המשלוח, תקבלו מספר מעקב במייל או ב-SMS. תוכלו לעקוב אחרי המשלוח בזמן אמת דרך אתר חברת המשלוחים."
        }
      ]
    },
    {
      icon: CreditCard,
      title: "תשלומים",
      questions: [
        {
          q: "איזה אמצעי תשלום אתם מקבלים?",
          a: "אנחנו מקבלים העברה בנקאית או תשלום בכרטיס אשראי."
        },
        {
          q: "מתי צריך לשלם?",
          a: "התשלום מתבצע בעת שליחת הגרפיקה לאישור. לאחר אישור הגרפיקה, לא ניתן לבצע החזרה כי אנחנו מתחילים לייצר את המוצר."
        },
        {
          q: "האם יש אפשרות לתשלומים?",
          a: "להזמנות גדולות (מעל 10,000 ש\"ח) אפשר לדון בתשלומים. צרו קשר לפרטים."
        },
        {
          q: "האם יש החזר במקרה של ביטול?",
          a: "מהרגע שמאשרים את הגרפיקה ומשלמים, לא ניתן לבצע החזרה כי התחלנו לייצר את המוצר. אם יש בעיה עם המוצר הסופי, נטפל בזה."
        }
      ]
    },
    {
      icon: RotateCcw,
      title: "החזרות וביטולים",
      questions: [
        {
          q: "מה מדיניות ההחזרות?",
          a: "מהרגע שמאשרים את הגרפיקה ומשלמים, לא ניתן לבצע החזרה כי התחלנו לייצר את המוצר. אם המוצר הסופי פגום או לא תואם את מה שהזמנתם, נטפל בזה ונמצא פתרון."
        },
        {
          q: "האם אפשר לבטל הזמנה?",
          a: "אפשר לבטל הזמנה רק לפני אישור הגרפיקה ותשלום. לאחר התשלום, לא ניתן לבטל כי התחלנו בייצור."
        },
        {
          q: "מה קורה אם המוצר פגום?",
          a: "אם המוצר מגיע פגום או לא תואם את מה שהזמנתם, אנחנו נטפל בזה מיד ונמצא פתרון - תיקון, החלפה או החזר כספי לפי המקרה."
        },
        {
          q: "האם אפשר להחזיר מוצר מותאם אישית?",
          a: "מוצרים מותאמים אישית לא ניתנים להחזרה לאחר ייצור, אלא אם יש פגם במוצר עצמו."
        }
      ]
    },
    {
      icon: Headphones,
      title: "שירות לקוחות",
      questions: [
        {
          q: "איך אפשר ליצור קשר?",
          a: "אפשר ליצור קשר דרך WhatsApp (055-975-3446), טלפון, מייל (info@stash-events.co.il) או טופס יצירת קשר באתר."
        },
        {
          q: "מה שעות הפעילות?",
          a: "שעות הפעילות: א'-ה' 9:00-18:00, ו' 9:00-13:00. אפשר גם ליצור קשר ב-WhatsApp בכל שעה."
        },
        {
          q: "כמה זמן לוקח לקבל תשובה?",
          a: "אנחנו מנסים לענות תוך כמה שעות. ב-WhatsApp התשובה בדרך כלל מהירה יותר."
        },
        {
          q: "האם יש תמיכה אחרי המכירה?",
          a: "כן! אנחנו כאן לעזור גם אחרי המכירה. אם יש בעיה או שאלה, פנו אלינו ונטפל בזה."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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


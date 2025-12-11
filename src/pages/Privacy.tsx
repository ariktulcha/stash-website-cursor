import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, FileText, Mail, AlertCircle } from "lucide-react";
import SEO from "@/components/SEO";

const Privacy = () => {
  const sections = [
    {
      icon: FileText,
      title: "איסוף מידע",
      content: [
        "אנחנו אוספים מידע אישי שאתם מספקים לנו ישירות בעת יצירת קשר או ביצוע הזמנה:",
        "• שם מלא, מספר טלפון וכתובת מייל",
        "• פרטי האירוע (סוג, תאריך, כמות)",
        "• קבצי עיצוב ולוגואים שאתם שולחים",
        "• מידע טכני כמו כתובת IP וסוג דפדפן (דרך עוגיות)"
      ]
    },
    {
      icon: Eye,
      title: "שימוש במידע",
      content: [
        "אנחנו משתמשים במידע שנאסף למטרות הבאות:",
        "• ביצוע והשלמת הזמנות",
        "• תקשורת עם הלקוח בנוגע להזמנה",
        "• שיפור השירות והמוצרים שלנו",
        "• שליחת עדכונים על מוצרים חדשים (רקכמתכם)",
        "• עמידה בחובות משפטיות"
      ]
    },
    {
      icon: Shield,
      title: "שיתוף מידע",
      content: [
        "אנחנו לא מוכרים או משכירים את המידע האישי שלכם לצדדים שלישיים.",
        "אנחנו עשויים לשתף מידע עם:",
        "• ספקי שירות (חברות משלוחים, מערכות תשלום) - רק לצורך ביצוע ההזמנה",
        "• רשויות חוק - במקרה של דרישה משפטית",
        "• שירותי אחסון ואבטחה - עם הגנות מתאימות"
      ]
    },
    {
      icon: Lock,
      title: "אבטחת מידע",
      content: [
        "אנחנו משתמשים באמצעי אבטחה מתקדמים להגנה על המידע שלכם:",
        "• הצפנת מידע רגיש",
        "• גישה מוגבלת למידע רק לעובדים הזקוקים לו",
        "• מערכות אבטחה מתעדכנות",
        "• גיבויים סדירים של המידע"
      ]
    },
    {
      icon: FileText,
      title: "זכויות המשתמש",
      content: [
        "לפי חוק הגנת הפרטיות, יש לכם זכויות הבאות:",
        "• גישה למידע האישי שלכם",
        "• תיקון מידע שגוי או לא מעודכן",
        "• מחיקת מידע (בכפוף למגבלות משפטיות)",
        "• התנגדות לעיבוד מידע למטרות שיווק",
        "• הגשת תלונה לרשות להגנת הפרטיות"
      ]
    },
    {
      icon: AlertCircle,
      title: "עוגיות (Cookies)",
      content: [
        "האתר שלנו משתמש בעוגיות לשיפור החוויה:",
        "• עוגיות הכרחיות - לפעולת האתר",
        "• עוגיות ביצועים - לניתוח שימוש באתר",
        "• עוגיות פונקציונליות - לשמירת העדפות",
        "אפשר לבטל עוגיות בהגדרות הדפדפן, אך זה עשוי להשפיע על תפקוד האתר."
      ]
    },
    {
      icon: FileText,
      title: "שינויים במדיניות",
      content: [
        "אנחנו עשויים לעדכן את מדיניות הפרטיות מעת לעת.",
        "שינויים משמעותיים יפורסמו בעמוד זה ויישלחו לכם במייל אם נדרש.",
        "מומלץ לבדוק את המדיניות מעת לעת כדי להישאר מעודכנים."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="מדיניות פרטיות - Stash Events | הגנה על הפרטיות שלכם"
        description="מדיניות פרטיות מפורטת של Stash Events. מידע על איסוף, שימוש והגנה על המידע האישי שלכם. הגנה על הפרטיות היא בראש סדר העדיפויות שלנו."
        keywords="מדיניות פרטיות, הגנת פרטיות, אבטחת מידע, עוגיות, זכויות משתמש, Stash Events פרטיות"
        url="https://stash-events.co.il/privacy"
      />
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                מדיניות פרטיות
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              הגנה על הפרטיות שלכם היא בראש סדר העדיפויות שלנו.
              <br />
              כאן תוכלו למצוא מידע מפורט על איך אנחנו אוספים, משתמשים ומגנים על המידע האישי שלכם.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              עודכן לאחרונה: {new Date().toLocaleDateString('he-IL')}
            </p>
          </div>

          {/* Content Sections */}
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Card key={index} variant="gradient">
                  <CardHeader>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{section.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-muted-foreground leading-relaxed">
                      {section.content.map((item, idx) => (
                        <p key={idx}>{item}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Contact Section */}
            <Card variant="glow">
              <CardHeader>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">יצירת קשר</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  יש לכם שאלות על מדיניות הפרטיות שלנו? אנחנו כאן לעזור.
                </p>
                <div className="space-y-2">
                  <a 
                    href="mailto:info@stash-events.co.il" 
                    className="text-primary hover:underline flex items-center space-x-2 space-x-reverse"
                  >
                    <Mail className="h-4 w-4" />
                    <span>info@stash-events.co.il</span>
                  </a>
                  <a 
                    href="tel:+9720559753446" 
                    className="text-primary hover:underline flex items-center space-x-2 space-x-reverse"
                  >
                    <span>055-975-3446</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;




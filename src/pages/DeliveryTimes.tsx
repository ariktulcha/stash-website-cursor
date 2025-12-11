import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Clock, Truck, Zap, Package, AlertCircle, CheckCircle } from "lucide-react";

const DeliveryTimes = () => {
  const deliveryTable = [
    {
      product: "צמידי בד",
      production: "3-5 ימי עסקים",
      shipping: "1-2 ימי עסקים",
      total: "4-7 ימי עסקים",
      minQuantity: "100 יחידות"
    },
    {
      product: "צמידי נייר צבעוני",
      production: "1-2 ימי עסקים",
      shipping: "1-2 ימי עסקים",
      total: "2-4 ימי עסקים",
      minQuantity: "500 יחידות"
    },
    {
      product: "צמידי נייר + גרפיקה",
      production: "3-5 ימי עסקים",
      shipping: "1-2 ימי עסקים",
      total: "4-7 ימי עסקים",
      minQuantity: "250 יחידות"
    },
    {
      product: "תגי הפקה",
      production: "2-4 ימי עסקים",
      shipping: "1-2 ימי עסקים",
      total: "3-6 ימי עסקים",
      minQuantity: "50 יחידות"
    }
  ];

  const factors = [
    {
      icon: Package,
      title: "כמות ההזמנה",
      description: "הזמנות גדולות עשויות לקחת זמן ייצור ארוך יותר"
    },
    {
      icon: MessageCircle,
      title: "מורכבות העיצוב",
      description: "עיצובים מורכבים דורשים זמן עיצוב נוסף"
    },
    {
      icon: Clock,
      title: "עונתיות",
      description: "בתקופות עמוסות (חגים, קיץ) זמני האספקה עשויים להתארך"
    },
    {
      icon: CheckCircle,
      title: "אישור עיצוב",
      description: "זמני האספקה מחושבים מיום אישור העיצוב הסופי"
    }
  ];

  const shippingOptions = [
    {
      type: "משלוח סטנדרטי",
      time: "1-2 ימי עסקים",
      cost: "כלול במחיר",
      description: "משלוח בדואר רשום לכל הארץ"
    },
    {
      type: "משלוח מהיר",
      time: "24 שעות",
      cost: "תוספת 30 ש\"ח",
      description: "משלוח אקספרס עם מעקב בזמן אמת"
    },
    {
      type: "איסוף עצמי",
      time: "מיידי",
      cost: "חינם",
      description: "איסוף מתל אביב בתיאום מראש"
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
              <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <Truck className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  זמני אספקה
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                אנחנו מתחייבים לאספקה מהירה ואמינה.
                <br />
                כאן תוכלו למצוא מידע מפורט על זמני הייצור והמשלוח לכל סוג מוצר.
              </p>
            </div>
          </div>
        </section>

        {/* Delivery Table */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  טבלת זמני אספקה
                </span>
              </h2>
              <p className="text-muted-foreground">
                זמנים מחושבים מיום אישור העיצוב הסופי
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-right p-4 font-bold">סוג מוצר</th>
                      <th className="text-right p-4 font-bold">זמן ייצור</th>
                      <th className="text-right p-4 font-bold">זמן משלוח</th>
                      <th className="text-right p-4 font-bold">סה"כ</th>
                      <th className="text-right p-4 font-bold">כמות מינימלית</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deliveryTable.map((row, index) => (
                      <tr key={index} className="border-b border-border hover:bg-muted/20 transition-colors">
                        <td className="p-4 font-medium text-right">{row.product}</td>
                        <td className="p-4 text-muted-foreground text-right">{row.production}</td>
                        <td className="p-4 text-muted-foreground text-right">{row.shipping}</td>
                        <td className="p-4 text-right">
                          <Badge variant="outline" className="font-semibold">
                            {row.total}
                          </Badge>
                        </td>
                        <td className="p-4 text-muted-foreground text-sm text-right">{row.minQuantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 p-4 bg-muted/20 rounded-lg">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <strong className="text-foreground">הערה חשובה:</strong> זמני האספקה מחושבים מיום אישור העיצוב הסופי. 
                    לא כולל חגים ושבתות. הזמנות גדולות (מעל 5000 יחידות) דורשות תיאום מראש.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Factors Section */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  גורמים המשפיעים על זמני האספקה
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {factors.map((factor, index) => {
                const IconComponent = factor.icon;
                return (
                  <Card key={index} variant="gradient">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{factor.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{factor.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Shipping Options */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  אפשרויות משלוח
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {shippingOptions.map((option, index) => (
                <Card key={index} variant="product" className="text-center">
                  <CardHeader>
                    <CardTitle>{option.type}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-primary">
                      {option.time}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{option.description}</p>
                    <Badge variant="outline">{option.cost}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Express Delivery */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                משלוח דחוף?
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                צריכים את המוצר במהירות? אנחנו מציעים שירות אקספרס למשלוחים דחופים.
                <br />
                משלוח תוך 24-48 שעות עם תוספת תשלום.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-intense"
                onClick={() => window.open('https://wa.me/9720559753446?text=היי, אני צריך משלוח דחוף. אפשר לקבל פרטים?', '_blank')}
              >
                <MessageCircle className="h-5 w-5" />
                צרו קשר למשלוח דחוף
              </Button>
            </div>
          </div>
        </section>

        {/* Tracking Section */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card variant="gradient">
                <CardHeader>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Package className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">מעקב משלוח</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    לאחר שליחת המשלוח, תקבלו מספר מעקב במייל או ב-SMS.
                    תוכלו לעקוב אחרי המשלוח בזמן אמת דרך אתר חברת המשלוחים.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    יש לכם שאלות על המשלוח? אנחנו כאן לעזור.
                  </p>
                </CardContent>
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

export default DeliveryTimes;


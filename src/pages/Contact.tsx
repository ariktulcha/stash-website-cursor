import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PriceCalculator } from "@/components/PriceCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, Instagram, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    quantity: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `היי! אני מעוניין לקבל הצעת מחיר:
שם: ${formData.name}
טלפון: ${formData.phone}
מייל: ${formData.email}
סוג אירוע: ${formData.eventType}
כמות מוערכת: ${formData.quantity}
הערות נוספות: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/9720559753446?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "הטופס נשלח בהצלחה!",
      description: "אנחנו נחזור אליכם בהקדם האפשרי",
    });
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      eventType: "",
      quantity: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "צור קשר - Stash Events",
    description: "מוכנים להפוך את האירוע שלכם לבלתי נשכח? צרו קשר ונמצא יחד את הפתרון המושלם",
    url: "https://stash-events.co.il/contact",
    mainEntity: {
      "@type": "Organization",
      name: "Stash Events",
      telephone: "+972-55-975-3446",
      email: "info@stash-events.co.il",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tel Aviv",
        addressCountry: "IL"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="צור קשר - Stash Events | הזמנת צמידים ותגי הפקה"
        description="מוכנים להפוך את האירוע שלכם לבלתי נשכח? צרו קשר ונמצא יחד את הפתרון המושלם. WhatsApp: 055-975-3446 | מייל: info@stash-events.co.il"
        keywords="צור קשר Stash Events, הזמנת צמידים, הצעת מחיר צמידים, שירות לקוחות צמידים, WhatsApp צמידים"
        url="https://stash-events.co.il/contact"
        structuredData={structuredData}
      />
      <Header />
      
      <main className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                בואו נדבר
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              מוכנים להפוך את האירוע שלכם לבלתי נשכח? 
              צרו קשר ונמצא יחד את הפתרון המושלם
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <Card variant="gradient">
              <CardHeader>
                <CardTitle className="text-2xl">שלחו לנו הודעה</CardTitle>
                <CardDescription>
                  מלאו את הפרטים ונחזור אליכם עם הצעת מחיר מותאמת
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 gads-conversion-contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-right">שם מלא *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="השם שלכם"
                        required
                        className="text-right"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-right">טלפון *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="055-975-3446"
                        required
                        className="text-right"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-right">מייל</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className="text-right"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="eventType" className="text-right">סוג אירוע</Label>
                      <Input
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        placeholder="מסיבה, חתונה, פסטיבל..."
                        className="text-right"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quantity" className="text-right">כמות מוערכת</Label>
                      <Input
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="כמה צמידים אתם צריכים?"
                        className="text-right"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-right">מה חשוב לכם לדעת?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="ספרו לנו על האירוע, דרישות מיוחדות, צבעים, עיצוב..."
                      rows={4}
                      className="text-right"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    className="w-full gads-conversion-contact-form-submit"
                  >
                    <Send className="h-5 w-5" />
                    שלחו הודעה
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <Card variant="glow">
                <CardHeader>
                  <CardTitle>צריכים תשובה מהירה?</CardTitle>
                  <CardDescription>
                    דברו איתנו ישירות ותקבלו תשובה תוך דקות
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    variant="whatsapp" 
                    className="w-full gads-conversion-contact-whatsapp-quick"
                    onClick={() => window.open('https://wa.me/9720559753446?text=היי, יש לי שאלה על המוצרים שלכם', '_blank')}
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp - תגובה מיידית
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full gads-conversion-contact-phone"
                    onClick={() => window.location.href = 'tel:+9720559753446'}
                  >
                    <Phone className="h-5 w-5" />
                    התקשרו עכשיו: 055-975-3446
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle>פרטי קשר</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">טלפון</div>
                      <div className="text-muted-foreground">055-975-3446</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">מייל</div>
                      <div className="text-muted-foreground">info@stash-events.co.il</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 space-x-reverse">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">כתובת</div>
                      <div className="text-muted-foreground">תל אביב, ישראל</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">שעות פעילות</div>
                      <div className="text-muted-foreground">א'-ה' 9:00-18:00</div>
                      <div className="text-muted-foreground">ו' 9:00-13:00</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle>עקבו אחרינו</CardTitle>
                  <CardDescription>
                    תמונות מהפרויקטים שלנו ועדכונים על מוצרים חדשים
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4 space-x-reverse">
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://instagram.com/stash.events" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://facebook.com/stash.events" target="_blank" rel="noopener noreferrer">
                        <Facebook className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Price Calculators Section */}
          <section className="mt-12 sm:mt-16 md:mt-20">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  מחשבון מחירים מהיר
                </span>
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground px-4">
                חשבו את המחיר לפני יצירת הקשר
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
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
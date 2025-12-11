import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { PriceCalculator } from "@/components/PriceCalculator";
import ProductGallery from "@/components/ProductGallery";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Calculator } from "lucide-react";
import productDetails from "@/data/productDetails.json";
import SEO from "@/components/SEO";
import {
  Palette,
  Banknote,
  Clock,
  Users,
  Star,
  Droplets,
  Zap,
  Check,
  Shield,
  ImageIcon,
  Settings,
  Award,
} from "lucide-react";

interface ProductPageProps {
  productId: string;
}

// Icon mapping
const iconMap: Record<string, any> = {
  Palette,
  Banknote,
  Clock,
  Users,
  Star,
  Droplets,
  Zap,
  Check,
  Shield,
  ImageIcon,
  Settings,
  Award,
};

const ProductPage = ({ productId }: ProductPageProps) => {
  const product = productDetails[productId as keyof typeof productDetails];

  // Generate SEO-friendly keywords based on product
  const getProductKeywords = (productId: string) => {
    const keywordsMap: Record<string, string> = {
      "fabric-wristbands": "צמידי בד, צמידי בד מותאמים אישית, צמידי בד לפסטיבל, צמידי בד למועדון, הדפסה על צמידי בד, צמידי בד עמידים",
      "colored-paper-wristbands": "צמידי נייר צבעוניים, מיון קהל, צמידי נייר לאירועים, צמידי נייר חסכוניים, צמידי נייר מהירים",
      "paper-graphic-wristbands": "צמידי נייר עם גרפיקה, צמידי נייר עם לוגו, הדפסה על צמידי נייר, צמידי נייר מותאמים אישית, צמידי נייר עם QR Code",
      "vinyl-wristbands": "צמידי ויניל, צמידי ויניל עמידים, צמידי ויניל למים, צמידי ויניל לפסטיבל, צמידי ויניל לאירועי חוץ",
      "production-tags": "תגי הפקה, תגי הפקה מקצועיים, תגי VIP, תגי גישה, תגי הפקה מעוצבים, תגי הפקה עם שרוכים"
    };
    return keywordsMap[productId] || "צמידי אירועים, תגי הפקה";
  };

  const getProductUrl = (productId: string) => {
    const urlMap: Record<string, string> = {
      "fabric-wristbands": "https://stash-events.co.il/fabric-wristbands",
      "colored-paper-wristbands": "https://stash-events.co.il/colored-paper-wristbands",
      "paper-graphic-wristbands": "https://stash-events.co.il/paper-graphic-wristbands",
      "vinyl-wristbands": "https://stash-events.co.il/vinyl-wristbands",
      "production-tags": "https://stash-events.co.il/production-tags"
    };
    return urlMap[productId] || "https://stash-events.co.il/";
  };

  if (!product) {
    return null;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.hero.description,
    image: `https://stash-events.co.il/products/${productId}.jpg`,
    brand: {
      "@type": "Brand",
      name: "Stash Events",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "ILS",
      url: getProductUrl(productId),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150"
    }
  };

  if (!product) {
    return null;
  }

  const scrollToCalculator = () => {
    const calculatorElement = document.getElementById("price-calculator");
    if (calculatorElement) {
      calculatorElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${product.name} | Stash Events - צמידי אירועים איכותיים`}
        description={`${product.hero.description} - ${product.name} באיכות גבוהה עם אספקה מהירה. עיצוב אישי, מחיר תחרותי ושירות מקצועי.`}
        keywords={getProductKeywords(productId)}
        url={getProductUrl(productId)}
        type="product"
        structuredData={structuredData}
      />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 text-xs sm:text-sm">
                {product.hero.badge}
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  {product.hero.title}
                </span>
                <br />
                <span className="text-foreground">{product.hero.subtitle}</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
                {product.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() =>
                    window.open(
                      `https://wa.me/9720559753446?text=${encodeURIComponent(
                        product.hero.whatsappMessage
                      )}`,
                      "_blank"
                    )
                  }
                >
                  <MessageCircle className="h-5 w-5" />
                  צור קשר בוואטסאפ
                </Button>
                <Button variant="outline" size="lg" onClick={scrollToCalculator}>
                  <Calculator className="h-5 w-5" />
                  מחשבון מחירים
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <ProductGallery productId={productId} />

        {/* First Calculator Button Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  חשבו את המחיר המדויק
                </span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                השתמשו במחשבון שלנו כדי לקבל הצעת מחיר מותאמת לכמות שאתם צריכים
              </p>
              <Button
                variant="hero"
                size="lg"
                onClick={scrollToCalculator}
                className="text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-8"
              >
                <Calculator className="h-5 w-5 sm:h-6 sm:w-6" />
                פתחו מחשבון מחירים
              </Button>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center px-2">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  מפרט טכני
                </span>
              </h2>
              <Card variant="gradient" className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle>פרטי המוצר</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground text-right">
                    {product.technicalSpecs.map((spec: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Suitable Events */}
        <section className="py-12 sm:py-16 md:py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center px-2">
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  לאיזה אירועים זה מתאים?
                </span>
              </h2>
              <Card variant="gradient" className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle>סוגי אירועים</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground text-right">
                    {product.suitableEvents.map(
                      (event: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{event}</span>
                        </li>
                      )
                    )}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose This Product */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center px-2">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  {product.whyChoose.title}
                </span>
              </h2>
              <div className="text-center">
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-4">
                  {product.whyChoose.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Second Calculator Button Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  מוכנים להזמין?
                </span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                חשבו את המחיר המדויק והזמינו את {product.name} שלכם
              </p>
              <Button
                variant="hero"
                size="lg"
                onClick={scrollToCalculator}
                className="text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-8"
              >
                <Calculator className="h-5 w-5 sm:h-6 sm:w-6" />
                פתחו מחשבון מחירים
              </Button>
            </div>
          </div>
        </section>

        {/* Product Advantages */}
        <section className="py-12 sm:py-16 md:py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center px-2">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                יתרונות המוצר
              </span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
              {product.advantages.map((advantage: any, index: number) => {
                const IconComponent = iconMap[advantage.icon] || Star;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:shadow-intense transition-all duration-300">
                      <IconComponent className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2">
                      {advantage.text}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Price Calculator Section */}
        <section
          id="price-calculator"
          className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-muted/20 to-background scroll-mt-20"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  מחשבון מחירים
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                חשבו את המחיר המדויק לפי הכמות שאתם צריכים
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <PriceCalculator productId={productId} />
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;


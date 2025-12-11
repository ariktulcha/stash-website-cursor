import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import productDetails from "@/data/productDetails.json";
import productGalleries from "@/data/products.json";
import SEO from "@/components/SEO";

const WhichWristbandToChoose = () => {
  const products = [
    {
      id: "fabric-wristbands",
      name: "צמידי בד",
      description: "צמידים עמידים, יפים וממותגים – מושלמים לכל אירוע. עשויים מבד איכותי שמחזיק במשך ימים ולא נקרע בקלות.",
      link: "/fabric-wristbands",
      minQuantity: 100,
      badge: "המוצר הפופולרי ביותר"
    },
    {
      id: "colored-paper-wristbands",
      name: "צמידי נייר צבעוניים",
      description: "פתרון מושלם למיון קהל באירועים - צבעוני, חסכוני ומהיר לביצוע. זמינים במגוון רחב של צבעים לכל סוג אירוע.",
      link: "/colored-paper-wristbands",
      minQuantity: 500,
      badge: "הפתרון החסכוני"
    },
    {
      id: "paper-graphic-wristbands",
      name: "צמידי נייר + גרפיקה",
      description: "צמידי נייר לבן עם הדפסה גרפית מותאמת אישית. מלוגו החברה ועד עיצובים מורכבים - אנחנו מדפיסים את החזון שלכם על הצמיד.",
      link: "/paper-graphic-wristbands",
      minQuantity: 250,
      badge: "עיצוב מותאם אישית"
    },
    {
      id: "vinyl-wristbands",
      name: "צמידי ויניל",
      description: "צמידים עמידים במיוחד מויניל איכותי - מושלמים לאירועים ארוכים, אירועי חוץ וכל מקום שדורש עמידות מקסימלית.",
      link: "/vinyl-wristbands",
      minQuantity: 100,
      badge: "הכי עמיד"
    },
    {
      id: "production-tags",
      name: "תגי הפקה",
      description: "תגים מעוצבים לזיהוי צוות, גישה לאזורים ומיון קהל באירועים מקצועיים. מהפקות קולנוע ועד כנסים גדולים.",
      link: "/production-tags",
      minQuantity: 50,
      badge: "מקצועי להפקות"
    }
  ];

  // Get product image from gallery
  const getProductImage = (productId: string) => {
    const gallery = (productGalleries as any)[productId]?.gallery;
    return gallery && gallery.length > 0 ? gallery[0].url : null;
  };

  // Get key features from product details
  const getProductFeatures = (productId: string) => {
    const product = (productDetails as any)[productId];
    if (!product) return [];
    
    // Get first 4 advantages as features
    return product.advantages?.slice(0, 4).map((adv: any) => adv.text) || [];
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "מוצרי צמידי אירועים ותגי הפקה",
    description: "קטלוג מוצרים מקצועיים - צמידי בד, צמידי נייר, צמידי ויניל ותגי הפקה",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        url: `https://stash-events.co.il${product.link}`
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="איזה צמיד לבחור? | מדריך לבחירת צמידי אירועים - Stash Events"
        description="מדריך מקצועי לבחירת צמידי אירועים - צמידי בד, צמידי נייר, צמידי ויניל ותגי הפקה. השוואה בין המוצרים, יתרונות וחסרונות, ומתי להשתמש בכל סוג."
        keywords="איזה צמיד לבחור, השוואת צמידים, צמידי בד vs צמידי נייר, בחירת צמיד לאירוע, מדריך צמידים, השוואת מחירים צמידים"
        url="https://stash-events.co.il/which-wristband-to-choose"
        structuredData={structuredData}
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                קטלוג המוצרים
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  המוצרים שלנו
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                פתרונות מקצועיים לכל סוג של אירוע - מהדפסה איכותית ועיצוב מושלם
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {products.map((product) => {
                const productImage = getProductImage(product.id);
                const features = getProductFeatures(product.id);
                
                return (
                  <Link key={product.id} to={product.link} className="block h-full">
                    <Card 
                      variant="glow" 
                      className="group flex flex-col overflow-hidden h-full hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                    >
                      {/* Product Image */}
                      {productImage && (
                        <div className="relative h-64 w-full overflow-hidden bg-muted">
                          <img 
                            src={productImage} 
                            alt={`${product.name} - ${product.description.substring(0, 50)}... | Stash Events`}
                            title={product.description}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                          {product.badge && (
                            <Badge 
                              variant="outline" 
                              className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm"
                            >
                              {product.badge}
                            </Badge>
                          )}
                        </div>
                      )}
                      
                      <CardHeader className="flex-grow">
                        <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                          {product.name}
                        </CardTitle>
                        <CardDescription className="text-right text-base leading-relaxed">
                          {product.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="flex-grow flex flex-col">
                        {/* Features List */}
                        {features.length > 0 && (
                          <ul className="space-y-2 mb-6 flex-grow">
                            {features.map((feature, index) => (
                              <li 
                                key={index} 
                                className="flex items-center gap-2 flex-row-reverse text-sm text-muted-foreground"
                              >
                                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        
                        {/* Min Quantity & CTA */}
                        <div className="space-y-4 pt-4 border-t">
                          <div className="text-sm text-muted-foreground text-right">
                            כמות מינימלית: <span className="font-semibold text-foreground">{product.minQuantity.toLocaleString('he-IL')} יחידות</span>
                          </div>
                          <Button 
                            variant="outline" 
                            className="w-full group-hover:border-primary group-hover:text-primary group-hover:bg-primary/5 transition-all"
                            onClick={(e) => e.preventDefault()}
                          >
                            <span className="flex items-center gap-2 flex-row-reverse">
                              לפרטים נוספים
                              <ArrowLeft className="h-4 w-4" />
                            </span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  צריך עזרה בבחירה?
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                נשמח לעזור לך לבחור את המוצר המושלם לאירוע שלך
              </p>
              <Button 
                variant="hero" 
                size="lg"
                className="flex items-center gap-2 mx-auto flex-row-reverse"
                onClick={() => window.open('https://wa.me/9720559753446?text=היי, אני צריך עזרה בבחירת המוצר המתאים לאירוע שלי', '_blank')}
              >
                <span>דברו איתנו ב-WhatsApp</span>
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


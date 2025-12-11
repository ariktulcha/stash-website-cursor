import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shirt, Palette, ImageIcon, Tag, Shield } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "צמידי בד",
      description: "צמידים עמידים ואיכותיים מבד ממותג",
      icon: Shirt,
      href: "/fabric-wristbands",
      gradient: "from-primary to-primary-glow"
    },
    {
      id: 2,
      name: "צמידי נייר צבעוני",
      description: "צמידי נייר בצבעים חזקים ומגוונים",
      icon: Palette,
      href: "/colored-paper-wristbands",
      gradient: "from-secondary to-accent"
    },
    {
      id: 3,
      name: "צמידי נייר + גרפיקה",
      description: "צמידי נייר לבן עם עיצוב גרפי מותאם",
      icon: ImageIcon,
      href: "/paper-graphic-wristbands",
      gradient: "from-accent to-primary"
    },
    {
      id: 4,
      name: "צמידי ויניל",
      description: "צמידים עמידים וחזקים מויניל איכותי",
      icon: Shield,
      href: "/vinyl-wristbands",
      gradient: "from-primary to-secondary"
    },
    {
      id: 5,
      name: "תגי הפקה",
      description: "תגים מעוצבים להפקות ואירועים מקצועיים",
      icon: Tag,
      href: "/production-tags",
      gradient: "from-warning to-secondary"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              המוצרים שלנו
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            פתרונות מקצועיים לכל סוג של אירוע - מהדפסה איכותית ועיצוב מושלם
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <Card 
                key={product.id} 
                variant="product"
                className="group hover:scale-105 transition-all duration-300"
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${product.gradient} flex items-center justify-center shadow-glow`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    variant="outline" 
                    asChild 
                    className="group-hover:border-primary group-hover:text-primary transition-all"
                  >
                    <Link to={product.href}>
                      <ArrowLeft className="h-4 w-4" />
                      לפרטים
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
import { useState, useMemo, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Calculator, MessageCircle, TrendingDown } from "lucide-react";
import pricingData from "@/data/pricing.json";

interface PriceCalculatorProps {
  productId: string;
}

export const PriceCalculator = ({ productId }: PriceCalculatorProps) => {
  const productPricing = pricingData[productId as keyof typeof pricingData];
  const [quantity, setQuantity] = useState(productPricing?.minQuantity || 500);

  const priceCalculation = useMemo(() => {
    if (!productPricing) return null;

    // Find the appropriate tier
    const tier = productPricing.tiers.find(
      (t) => quantity >= t.min && (t.max === null || quantity <= t.max)
    );

    if (!tier) return null;

    const unitPrice = tier.pricePerUnit;
    const totalPrice = quantity * unitPrice;

    // Calculate savings compared to minimum tier
    const minTier = productPricing.tiers[0];
    const minTierPrice = quantity * minTier.pricePerUnit;
    const savings = minTierPrice - totalPrice;
    const savingsPercent = minTierPrice > 0 ? (savings / minTierPrice) * 100 : 0;

    return {
      unitPrice,
      totalPrice,
      quantity,
      tier: tier,
      savings,
      savingsPercent,
    };
  }, [quantity, productPricing]);

  useEffect(() => {
    if (productPricing) {
      setQuantity(productPricing.minQuantity);
    }
  }, [productPricing]);

  if (!productPricing || !priceCalculation) return null;

  const handleQuantityChange = (value: number) => {
    const newValue = Math.max(productPricing.minQuantity, value);
    setQuantity(newValue);
  };

  const maxSliderValue = Math.max(
    productPricing.minQuantity * 10,
    10000
  );

  return (
    <Card variant="gradient" className="mt-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 flex-row-reverse">
          <Calculator className="h-5 w-5" />
          מחשבון מחיר
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="quantity" className="mb-2 block text-base text-right">
              כמות יחידות
            </Label>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
              <Input
                id="quantity"
                type="number"
                min={productPricing.minQuantity}
                value={quantity}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (!isNaN(val) && val >= productPricing.minQuantity) {
                    handleQuantityChange(val);
                  }
                }}
                className="text-lg font-semibold text-center sm:flex-1"
                dir="ltr"
              />
              <span className="text-sm text-muted-foreground text-right sm:text-right whitespace-nowrap">
                מינימום: {productPricing.minQuantity.toLocaleString('he-IL')}
              </span>
            </div>
            <Slider
              value={[quantity]}
              onValueChange={([value]) => handleQuantityChange(value)}
              min={productPricing.minQuantity}
              max={maxSliderValue}
              step={productPricing.minQuantity >= 500 ? 50 : 25}
              className="mt-4"
            />
          </div>

          {/* Price Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t">
            <div className="text-right">
              <div className="text-sm text-muted-foreground mb-1">
                מחיר ליחידה
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-primary">
                ₪{priceCalculation.unitPrice.toFixed(2)}
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground mb-1">
                מחיר כולל
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-accent">
                ₪{priceCalculation.totalPrice.toLocaleString('he-IL')}
              </div>
            </div>
          </div>

          {/* Savings Display */}
          {priceCalculation.savings > 0 && (
            <div className="bg-success/10 border border-success/20 rounded-lg p-3 flex items-center gap-2 flex-row-reverse">
              <TrendingDown className="h-4 w-4 text-success flex-shrink-0" />
              <div className="text-sm text-right">
                <span className="font-semibold text-success">
                  חיסכון של ₪{priceCalculation.savings.toLocaleString('he-IL')}
                </span>
                <span className="text-muted-foreground mr-1">
                  ({priceCalculation.savingsPercent.toFixed(0)}%) בהשוואה לכמות מינימלית
                </span>
              </div>
            </div>
          )}

          {/* Price Tiers Info */}
          <div className="bg-muted/30 rounded-lg p-4">
            <div className="text-sm font-semibold mb-2 text-right">טבלת מחירים:</div>
            <div className="space-y-1 text-xs">
              {productPricing.tiers.map((tier, index) => {
                const isActive = 
                  quantity >= tier.min && 
                  (tier.max === null || quantity <= tier.max);
                
                return (
                  <div
                    key={index}
                    className={`flex justify-between items-center py-1 px-2 rounded flex-row-reverse ${
                      isActive ? "bg-primary/10 font-semibold" : ""
                    }`}
                  >
                    <span className="text-right">
                      {tier.min.toLocaleString('he-IL')}
                      {tier.max ? ` - ${tier.max.toLocaleString('he-IL')}` : "+"}
                    </span>
                    <span className={`text-right ${isActive ? "text-primary" : ""}`}>
                      ₪{tier.pricePerUnit.toFixed(2)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <Button
            variant="hero"
            size="lg"
            className="w-full flex items-center justify-center gap-2 flex-row-reverse"
            onClick={() => {
              const message = `היי, אני מעוניין ב-${quantity.toLocaleString('he-IL')} יחידות.\n\nהמחיר שהמחשבון הציג:\n• מחיר ליחידה: ₪${priceCalculation.unitPrice.toFixed(2)}\n• מחיר כולל: ₪${priceCalculation.totalPrice.toLocaleString('he-IL')}`;
              window.open(
                `https://wa.me/9720559753446?text=${encodeURIComponent(message)}`,
                "_blank"
              );
            }}
          >
            <MessageCircle className="h-5 w-5" />
            שלחו לי הצעת מחיר
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};


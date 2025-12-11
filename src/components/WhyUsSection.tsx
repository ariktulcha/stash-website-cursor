import { Headphones, Award, Clock, DollarSign, Lightbulb } from "lucide-react";

const WhyUsSection = () => {
  const features = [
    {
      icon: Headphones,
      title: "באים מהשטח",
      description: "אנחנו אנשי חיי הלילה - מכירים את הצרכים מקרוב",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Award,
      title: "איכות ללא פשרות",
      description: "בדקנו מעל 100 ספקים למצוא את האיכות הטובה ביותר",
      gradient: "from-secondary to-accent"
    },
    {
      icon: Clock,
      title: "שירות מהיר",
      description: "אספקה מהירה ללא פגיעה באיכות",
      gradient: "from-accent to-primary"
    },
    {
      icon: DollarSign,
      title: "מחירים תחרותיים",
      description: "איכות פרמיום במחיר הוגן - בלי להתחכם",
      gradient: "from-success to-accent"
    },
    {
      icon: Lightbulb,
      title: "חשיבה עיצובית",
      description: "כל מוצר מעוצב בקפידה ומותאם אישית לאירוע שלכם",
      gradient: "from-warning to-secondary"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">למה </span>
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              אנחנו?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            מה הופך אותנו לבחירה הטובה ביותר עבור האירוע שלכם
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-glow group-hover:shadow-intense transition-all duration-300`}>
                  <IconComponent className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
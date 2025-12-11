import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "9720559753446";
  const defaultMessage = "היי, יש לי שאלה על המוצרים שלכם";
  
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group gads-conversion-whatsapp-floating"
      aria-label="צור קשר ב-WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </button>
  );
};

export default WhatsAppButton;


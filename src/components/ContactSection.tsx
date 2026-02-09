import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-20 md:py-32 bg-forest relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <span className="text-gold font-jakarta text-sm tracking-widest uppercase font-semibold">
          Get Started
        </span>
        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-cream font-bold mt-3 mb-6">
          Ready for the
          <br />
          <span className="text-gold">Green Escape?</span>
        </h2>
        <p className="text-cream/70 font-jakarta text-lg max-w-xl mx-auto mb-10">
          Let our concierge team craft your perfect Bulgarian journey. Reach out
          today for a bespoke travel experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            asChild
            className="bg-whatsapp hover:bg-whatsapp-hover text-cream font-bold px-10 py-6 rounded-full text-lg transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--whatsapp)/0.4)] hover:scale-105"
          >
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-cream/60">
          <Phone className="h-4 w-4" />
          <span className="font-jakarta">+971 50 123 4567</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

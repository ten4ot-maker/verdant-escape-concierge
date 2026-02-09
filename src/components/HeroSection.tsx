import { ArrowRight, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bulgaria.jpg";

const stats = [
  { icon: "✈️", label: "5h Flight" },
  { icon: "☀️", label: "24°C Summer" },
  { icon: "🍽️", label: "Halal Food" },
  { icon: "🛂", label: "Schengen Visa" },
];

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/50 to-forest" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-40 text-center">
        {/* Floating badge */}
        <div className="inline-flex items-center gap-2 glass-gold rounded-full px-5 py-2.5 mb-8 animate-float">
          <Plane className="h-4 w-4 text-gold" />
          <span className="text-gold font-jakarta text-sm font-medium tracking-wide">
            Direct Flights from DXB / AUH
          </span>
        </div>

        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-cream font-bold leading-tight mb-6">
          The Hidden Gem
          <br />
          <span className="text-gold">of Europe</span>
        </h1>

        <p className="font-jakarta text-cream/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Discover Bulgaria's breathtaking mountains, ancient cities, and luxury
          retreats — curated exclusively for discerning travelers from the Gulf.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollTo("#packages")}
            className="bg-gold hover:bg-gold-glow text-forest font-bold px-10 py-6 rounded-full text-lg transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--gold)/0.5)] hover:scale-105"
          >
            Explore Packages
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-cream/30 text-cream hover:bg-cream/10 hover:border-cream/50 px-10 py-6 rounded-full text-lg backdrop-blur-sm transition-all duration-300"
          >
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
            >
              Plan My Trip
            </a>
          </Button>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="container mx-auto px-6 pb-8">
          <div className="glass rounded-2xl px-8 py-5 flex flex-wrap justify-center md:justify-between items-center gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-2xl">{stat.icon}</span>
                <span className="text-cream font-jakarta text-sm md:text-base font-medium tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

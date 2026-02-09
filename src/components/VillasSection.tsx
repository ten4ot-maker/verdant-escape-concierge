import { Home, Droplets, Mountain, ChefHat, Download, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import villaImg from "@/assets/villa-exterior.jpg";

const features = [
  { icon: Home, label: "Private" },
  { icon: Droplets, label: "Thermal Pools" },
  { icon: Mountain, label: "Mountain Views" },
  { icon: ChefHat, label: "Private Chef" },
];

const VillasSection = () => {
  return (
    <section id="villas" className="py-20 md:py-32 bg-forest overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text side */}
          <div>
            <span className="text-gold font-jakarta text-sm tracking-widest uppercase font-semibold">
              Exclusive Retreat
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-cream font-bold mt-3 mb-6">
              VAIA Heights Villas
            </h2>
            <p className="text-cream/70 font-jakarta text-lg leading-relaxed mb-10">
              Nestled in the Rhodope Mountains, VAIA Heights offers an
              unparalleled luxury experience with private villas, thermal mineral
              pools, and panoramic views that stretch across untouched Bulgarian
              wilderness.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {features.map((feat) => (
                <div key={feat.label} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl glass-gold flex items-center justify-center">
                    <feat.icon className="h-5 w-5 text-gold" />
                  </div>
                  <span className="text-cream font-jakarta font-medium">
                    {feat.label}
                  </span>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="bg-gold hover:bg-gold-glow text-forest font-bold px-8 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--gold)/0.4)]"
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download Brochure
              </a>
            </Button>
          </div>

          {/* Image side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={villaImg}
                alt="VAIA Heights Villa exterior with mountain views"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Testimonial overlay */}
            <div className="absolute -bottom-8 left-4 md:left-auto md:-right-8 max-w-sm glass rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-cream font-jakarta text-sm italic leading-relaxed mb-3">
                "An extraordinary escape. The villas are world-class, and the
                mountain views took our breath away. Already planning our
                return."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold font-bold text-sm">AK</span>
                </div>
                <div>
                  <p className="text-cream font-jakarta font-semibold text-sm">
                    Ahmed K.
                  </p>
                  <p className="text-cream/50 font-jakarta text-xs">
                    Dubai, UAE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillasSection;

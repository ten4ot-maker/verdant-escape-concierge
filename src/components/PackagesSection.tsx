import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import sofiaImg from "@/assets/sofia.jpg";
import banskoImg from "@/assets/bansko.jpg";
import katarinoImg from "@/assets/katarino.jpg";

const packages = [
  {
    name: "Sofia & Culture",
    duration: "4 Days / 3 Nights",
    image: sofiaImg,
    highlights: [
      "City walking tour",
      "Ottoman heritage sites",
      "Fine dining experience",
      "Airport transfers",
    ],
    price: "From AED 3,500",
  },
  {
    name: "Mountain Retreat",
    duration: "5 Days / 4 Nights",
    image: banskoImg,
    highlights: [
      "VAIA Heights villa stay",
      "Forest safari adventure",
      "Horse riding excursion",
      "Private chef meals",
    ],
    price: "From AED 5,200",
  },
  {
    name: "Wellness Escape",
    duration: "6 Days / 5 Nights",
    image: katarinoImg,
    highlights: [
      "Thermal spa treatments",
      "Mountain yoga sessions",
      "Organic farm visits",
      "Mineral pool access",
    ],
    price: "From AED 6,800",
  },
];

const PackagesSection = () => {
  return (
    <section id="packages" className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-jakarta text-sm tracking-widest uppercase font-semibold">
            Packages
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-forest font-bold mt-3">
            Curated for You
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-playfair text-2xl text-cream font-bold">
                    {pkg.name}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-gold mb-4">
                  <Clock className="h-4 w-4" />
                  <span className="font-jakarta text-sm font-medium">
                    {pkg.duration}
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {pkg.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 font-jakarta text-sm text-card-foreground/70"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <p className="font-playfair text-xl text-card-foreground font-bold mb-4">
                  {pkg.price}
                </p>

                <Button
                  asChild
                  className="w-full bg-forest hover:bg-forest/90 text-cream font-bold rounded-full transition-all duration-300"
                >
                  <a
                    href="https://wa.me/971501234567"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;

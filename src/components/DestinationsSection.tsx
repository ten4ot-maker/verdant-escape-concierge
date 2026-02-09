import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import sofiaImg from "@/assets/sofia.jpg";
import plovdivImg from "@/assets/plovdiv.jpg";
import banskoImg from "@/assets/bansko.jpg";
import katarinoImg from "@/assets/katarino.jpg";

const destinations = [
  {
    name: "Sofia",
    description:
      "A vibrant capital blending Ottoman, Soviet, and European heritage",
    image: sofiaImg,
    topPick: false,
  },
  {
    name: "Plovdiv",
    description:
      "Europe's oldest continuously inhabited city with a stunning old town",
    image: plovdivImg,
    topPick: false,
  },
  {
    name: "Bansko",
    description:
      "Premier ski resort town nestled at the foot of the Pirin Mountains",
    image: banskoImg,
    topPick: false,
  },
  {
    name: "Katarino",
    description:
      "Exclusive spa resort with thermal pools and mountain panoramas",
    image: katarinoImg,
    topPick: true,
  },
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-jakarta text-sm tracking-widest uppercase font-semibold">
            Destinations
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-forest font-bold mt-3">
            Select Your Vibe
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/30 to-transparent" />

              {dest.topPick && (
                <Badge className="absolute top-4 right-4 bg-gold text-forest font-bold border-0 px-3 py-1 text-xs">
                  TOP PICK
                </Badge>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-gold" />
                  <h3 className="font-playfair text-2xl text-cream font-bold">
                    {dest.name}
                  </h3>
                </div>
                <p className="text-cream/70 font-jakarta text-sm leading-relaxed">
                  {dest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;

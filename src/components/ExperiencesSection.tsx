import forestSafariImg from "@/assets/forest-safari.jpg";
import horseRidingImg from "@/assets/horse-riding.jpg";
import villaPoolImg from "@/assets/villa-pool.jpg";
import banskoImg from "@/assets/bansko.jpg";

const experiences = [
  {
    name: "Forest Safari",
    description: "Explore ancient forests teeming with wildlife",
    image: forestSafariImg,
  },
  {
    name: "Hunting",
    description: "Traditional Bulgarian hunting excursions",
    image: banskoImg,
  },
  {
    name: "Horse Riding",
    description: "Mountain trail rides through pristine valleys",
    image: horseRidingImg,
  },
  {
    name: "Mineral Healing",
    description: "Natural thermal springs and spa rituals",
    image: villaPoolImg,
  },
];

const ExperiencesSection = () => {
  return (
    <section id="experiences" className="py-20 md:py-32 bg-forest">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-jakarta text-sm tracking-widest uppercase font-semibold">
            Experiences
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-cream font-bold mt-3">
            Curated Adventures
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {/* Forest Safari — large, spans 2 rows */}
          <div className="group relative rounded-2xl overflow-hidden md:row-span-2 cursor-pointer">
            <img
              src={experiences[0].image}
              alt={experiences[0].name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-playfair text-2xl md:text-3xl text-cream font-bold mb-2">
                {experiences[0].name}
              </h3>
              <p className="text-cream/70 font-jakarta text-sm">
                {experiences[0].description}
              </p>
            </div>
          </div>

          {/* Hunting */}
          <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
            <img
              src={experiences[1].image}
              alt={experiences[1].name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-playfair text-xl text-cream font-bold mb-1">
                {experiences[1].name}
              </h3>
              <p className="text-cream/70 font-jakarta text-sm">
                {experiences[1].description}
              </p>
            </div>
          </div>

          {/* Horse Riding */}
          <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
            <img
              src={experiences[2].image}
              alt={experiences[2].name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-playfair text-xl text-cream font-bold mb-1">
                {experiences[2].name}
              </h3>
              <p className="text-cream/70 font-jakarta text-sm">
                {experiences[2].description}
              </p>
            </div>
          </div>

          {/* Mineral Healing — wide, spans 2 columns */}
          <div className="group relative rounded-2xl overflow-hidden md:col-span-2 cursor-pointer">
            <img
              src={experiences[3].image}
              alt={experiences[3].name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-playfair text-2xl text-cream font-bold mb-1">
                {experiences[3].name}
              </h3>
              <p className="text-cream/70 font-jakarta text-sm">
                {experiences[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;

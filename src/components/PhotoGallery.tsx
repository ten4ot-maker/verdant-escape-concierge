import { useState } from "react";
import Lightbox from "@/components/Lightbox";
import sofiaImg from "@/assets/sofia.jpg";
import plovdivImg from "@/assets/plovdiv.jpg";
import banskoImg from "@/assets/bansko.jpg";
import katarinoImg from "@/assets/katarino.jpg";
import villaImg from "@/assets/villa-exterior.jpg";
import villaPoolImg from "@/assets/villa-pool.jpg";

const galleryImages = [
  villaImg,
  sofiaImg,
  villaPoolImg,
  plovdivImg,
  banskoImg,
  katarinoImg,
];

const PhotoGallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-jakarta text-sm tracking-widest uppercase font-semibold">
            Gallery
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-forest font-bold mt-3">
            Moments Captured
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              onClick={() => setLightboxIndex(i)}
              className={`group relative rounded-xl overflow-hidden cursor-pointer ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  i === 0 ? "h-64 md:h-full" : "h-48 md:h-64"
                }`}
              />
              <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-jakarta text-sm tracking-wider uppercase">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
};

export default PhotoGallery;

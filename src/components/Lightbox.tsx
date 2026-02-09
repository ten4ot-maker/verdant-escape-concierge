import { useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const Lightbox = ({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) => {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goNext = useCallback(() => {
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, goNext, goPrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-forest/95 backdrop-blur-xl flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-cream/70 hover:text-cream transition-colors z-10"
      >
        <X className="h-8 w-8" />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        className="absolute left-4 md:left-8 text-cream/70 hover:text-gold transition-colors z-10"
      >
        <ChevronLeft className="h-10 w-10" />
      </button>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        className="absolute right-4 md:right-8 text-cream/70 hover:text-gold transition-colors z-10"
      >
        <ChevronRight className="h-10 w-10" />
      </button>

      {/* Image */}
      <div
        className="max-w-5xl max-h-[85vh] px-16"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="max-w-full max-h-[85vh] object-contain rounded-lg"
        />
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(i);
            }}
            className={`h-2 rounded-full transition-all ${
              i === currentIndex
                ? "bg-gold w-6"
                : "bg-cream/30 hover:bg-cream/50 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Lightbox;

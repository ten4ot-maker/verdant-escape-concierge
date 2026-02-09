import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Villas", href: "#villas" },
  { label: "Experiences", href: "#experiences" },
  { label: "Packages", href: "#packages" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-forest/95 backdrop-blur-xl shadow-2xl border-b border-gold/10"
          : "bg-gradient-to-b from-forest/80 to-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-playfair text-2xl tracking-wide text-cream"
        >
          CONCIERGE<span className="font-bold text-gold">ONE</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-cream/70 hover:text-gold transition-colors duration-300 font-jakarta text-sm tracking-widest uppercase"
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => scrollTo("#packages")}
            className="bg-gold hover:bg-gold-glow text-forest font-bold px-8 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--gold)/0.4)]"
          >
            Book VIP
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="text-cream p-2 hover:text-gold transition-colors">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-forest border-l-gold/20 w-80"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-8 mt-16">
              <span className="font-playfair text-2xl text-cream mb-4">
                CONCIERGE<span className="font-bold text-gold">ONE</span>
              </span>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-cream/70 hover:text-gold transition-colors duration-300 font-jakarta text-lg tracking-widest uppercase text-left"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollTo("#packages")}
                className="bg-gold hover:bg-gold-glow text-forest font-bold rounded-full mt-4 transition-all duration-300"
              >
                Book VIP
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;

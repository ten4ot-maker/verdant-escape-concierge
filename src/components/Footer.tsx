const Footer = () => {
  return (
    <footer className="bg-forest border-t border-gold/10 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-playfair text-xl text-cream"
          >
            CONCIERGE<span className="font-bold text-gold">ONE</span>
          </a>
          <p className="text-cream/40 font-jakarta text-sm">
            © {new Date().getFullYear()} Concierge One. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

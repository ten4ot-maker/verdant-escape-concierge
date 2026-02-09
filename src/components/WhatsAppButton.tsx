import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/971501234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-cream rounded-full px-4 py-4 shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--whatsapp)/0.5)] hover:pr-6"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-[100px] transition-all duration-300 whitespace-nowrap font-jakarta font-semibold text-sm">
        Chat Now
      </span>
    </a>
  );
};

export default WhatsAppButton;

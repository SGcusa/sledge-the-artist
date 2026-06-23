export default function WhatsAppButton() {
  // Replace this with your actual WhatsApp number (include country code, omit the '+')
  // Example: '27812345678' for a South African number
  const phoneNumber = "YOUR_PHONE_NUMBER_HERE"; 
  const message = "Hi Sledge! I'm interested in commissioning some work."; // Optional default message

  const whatsappUrl = `https://wa.me/${+27653620916}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[99] flex items-center justify-center text-white rounded-full shadow-2xl hover:scale-110 hover:bg-[#20b858] transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip that shows on hover (Desktop only) */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-ink-900 text-cream text-xs font-bold uppercase tracking-widest rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden md:block border border-white/10 shadow-xl">
        Let's Chat
      </span>

      {/* WhatsApp SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 md:w-9 md:h-9"
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z" />
        <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.77.465 3.486 1.349 5.01L2 22l5.086-1.328A9.957 9.957 0 0012.031 22c5.535 0 10.03-4.495 10.03-10.031C22.061 6.495 17.566 2 12.031 2zm0 18.256c-1.464 0-2.898-.383-4.156-1.107l-.298-.172-3.087.809.824-3.003-.189-.3A8.254 8.254 0 013.743 12.03c0-4.576 3.724-8.3 8.29-8.3 4.566 0 8.29 3.724 8.29 8.3 0 4.576-3.724 8.3-8.29 8.3z" />
      </svg>
    </a>
  );
}
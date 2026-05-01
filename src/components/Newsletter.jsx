import React from 'react';

export default function Newsletter() {
  return (
    <div className="w-full max-w-2xl mx-auto my-16 p-12 bg-blueprint-blue-deep border border-white/10 rounded-sm shadow-2xl relative overflow-hidden group text-left">
      {/* Accent corner */}
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-blueprint-gold/30 group-hover:border-blueprint-gold transition-colors duration-500"></div>
      
      <div className="relative z-10">
        <h2 className="text-3xl font-black text-blueprint-white mb-4 tracking-tight uppercase">
          <span className="text-blueprint-gold mr-2">/</span>Soberanía Digital
        </h2>
        <p className="text-blueprint-gray mb-10 text-lg leading-relaxed font-mono">
          Sistemas para dueños de su propio tiempo. Únete a la lista de transmisión de SimonHL para recibir protocolos de alto rendimiento.
        </p>
        
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/simonhl"
          method="post"
          target="popupwindow"
          className="flex flex-col sm:flex-row gap-4"
        >
          <input
            type="email"
            name="email"
            placeholder="ID@PROTOCOLO.COM"
            required
            className="flex-1 px-6 py-4 bg-blueprint-blue border border-white/20 rounded-sm text-blueprint-white placeholder:text-blueprint-gray/50 focus:border-blueprint-gold outline-none transition-all font-mono"
          />
          <input type="hidden" value="1" name="embed" />
          <button
            type="submit"
            className="bg-blueprint-gold text-blueprint-blue font-black px-10 py-4 rounded-sm uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-lg"
          >
            Suscribirme
          </button>
        </form>
        <p className="mt-4 text-xs text-blueprint-gray/40 font-mono">
          [ PRIVACIDAD TOTAL // SIN SPAM ]
        </p>
      </div>
    </div>
  );
}
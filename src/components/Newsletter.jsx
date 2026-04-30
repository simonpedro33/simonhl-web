import React from 'react';

export default function Newsletter() {
  return (
    <div className="w-full max-w-xl mx-auto my-12 p-10 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm">
      <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">
        Soberanía Digital
      </h2>
      <p className="text-slate-600 mb-8 text-lg leading-relaxed">
        Sistemas para dueños de su propio tiempo. Únete a la lista de SimonHL.
      </p>
      
      {/* Reemplaza TU_USUARIO por el tuyo de Buttondown */}
<form
  action="https://buttondown.email/api/emails/embed-subscribe/simonhl"
  method="post"
  target="popupwindow"
  onsubmit="window.open('https://buttondown.email/simonhl', 'popupwindow')"
  className="flex flex-col sm:flex-row gap-4"
>
        <input
          type="email"
          name="email"
          placeholder="tu@correo.com"
          required
          className="flex-1 px-6 py-4 rounded-2xl border border-slate-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-lg"
        />
        <input type="hidden" value="1" name="embed" />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-blue-200 active:scale-95"
        >
          Suscribirme
        </button>
      </form>
    </div>
  );
}
'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedSandwich, setSelectedSandwich] = useState(null);

  const menu = [
    { name: "Classic Jambon", price: 7.5, desc: "Ham, butter, cornichons, fresh baguette", img: "https://picsum.photos/id/1080/600/400" },
    { name: "Spicy Salami", price: 8.5, desc: "Spicy salami, provolone, roasted peppers, arugula", img: "https://picsum.photos/id/292/600/400" },
    { name: "Chicken Pesto", price: 9, desc: "Grilled chicken, basil pesto, mozzarella, tomato", img: "https://picsum.photos/id/431/600/400" },
    { name: "Roast Beef Supreme", price: 9.5, desc: "Rare roast beef, horseradish cream, caramelized onions", img: "https://picsum.photos/id/1060/600/400" },
    { name: "Veggie Deluxe", price: 7.8, desc: "Falafel, hummus, cucumber, pickled red onion", img: "https://picsum.photos/id/292/600/400" },
  ];

  return (
    <>
      {/* HERO - MOVING SANDWICH VIDEO BACKGROUND */}
        <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
          
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-90 scale-110"
          >
            {/* <source src="/sandwiches-loop-08.mp4" type="video/mp4" /> */}
            <source src="/kruimeltje2.mp4" type="video/mp4" />
          </video>

          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-10 text-center px-6 max-w-5xl">
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-6 leading-none drop-shadow-2xl">
              't Kruimeltje
            </h1>
            <p className="text-2xl md:text-3xl text-amber-100 mb-10 drop-shadow-xl">
              Handgemaakte Broodjes • Verse Groentjes • Zelfgemaakte Soep
            </p>
            <a 
              href="#menu" 
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white text-xl px-12 py-5 rounded-full transition text-lg font-medium"
            >
              Verken het Menu →
            </a>
          </div>

          {/* Subtle scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 text-sm flex flex-col items-center">
            <span>Scroll to discover</span>
            <div className="w-5 h-8 border-2 border-white/50 roundegd-full mt-2 flex items-center justify-center">
              <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>

      {/* BUILD YOUR OWN */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Hoogstraat 18 , Gistel (8470)</h2>
          <p className="text-2xl mb-12 text-gray-600">059/27.45.65</p>
          <a 
            href="/build" 
            className="inline-block bg-black text-white text-2xl px-12 py-6 rounded-2xl hover:bg-gray-800 transition"
          >
            Reserveer nu
          </a>
        </div>
      </section> */}

      {/* LOCATION SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left: Info */}
            <div>
              <h2 className="text-5xl font-bold mb-8">Kom gerust langs!</h2>
              
              <div className="space-y-8">
                <div>
                  <p className="text-amber-600 font-medium text-lg">📍 Addres</p>
                  <p className="text-2xl font-semibold mt-2">Hoogstraat 18</p>
                  <p className="text-2xl font-semibold">8470 Gistel</p>
                </div>

                <div>
                  <p className="text-amber-600 font-medium text-lg">🕒 Openingsuren</p>
                  <p className="text-xl mt-2">Maandag – Zaterdag: 07:30 – 14:30</p>
                  <p className="text-xl">Zondag Gesloten</p>
                </div>

                <div>
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=Hoogstraat+18%2C+Gistel+8470+Belgium" 
                    target="_blank"
                    className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition text-lg"
                  >
                    Reserveer Nu →
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Google Maps Embed */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2502.393503696797!2d2.9629143775339166!3d51.15653443627349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcade3ed773459%3A0xf8459199d0330a61!2sHoogstraat%2018%2C%208470%20Gistel!5e0!3m2!1sen!2sbe!4v1778433455035!5m2!1sen!2sbe" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-[#F9F5F0]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Openingsuren:</h2>
          <p className="text-xl leading-relaxed text-gray-700">
            
            <p>maandag	07:30–14:30</p>
            <p>dinsdag	07:30–14:30</p>
            <p>woensdag	07:30–14:30</p>
            <p>donderdag 07:30–14:30</p>
            <p>vrijdag	07:30–14:30</p>
            <p>zaterdag	09:30–13:30</p>
            <p>zondag	Gesloten</p>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-3xl font-bold mb-2">'t Kruimeltje</p>
          <p className="text-gray-400">Open maandag-zaterdag • 07:30 – 14:30</p>
          <p className="mt-8 text-sm text-gray-500">Hand-coded by Noedel</p>
        </div>
      </footer>
    </>
  );
}
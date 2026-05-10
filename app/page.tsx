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

{/* NAVBAR */}
      {/* <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🥖</span>
            <h1 className="font-bold text-2xl tracking-tight">'t Kruimeltje</h1>
          </div>

          <div className="flex gap-8 text-lg">
            <a href="#home" className="hover:text-amber-600 transition">Home</a>
            <button 
              onClick={() => { window.location.hash = 'location'; }}
              className="hover:text-amber-600 transition"
            >
              Contact / Locatie
            </button>
          </div>

          <a 
            href="#menu"
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition"
          >
            Bestel Nu
          </a>
        </div>
      </nav> */}

      {/* TRANSPARENT NAVBAR */}
      {/* <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center 
                        bg-black/40 backdrop-blur-lg border-b border-white/10">
          
          <div className="flex items-center gap-3">
            <span className="text-3xl drop-shadow-md">🥖</span>
            <h1 className="font-bold text-2xl tracking-tight text-white drop-shadow-md">
              't Kruimeltje
            </h1>
          </div>

          

          <div className="flex gap-8 text-lg text-white">
              <button 
              // onClick={() => scrollToSection('location')}
              onClick={() => { window.location.hash = 'menu'; }}
              className="hover:text-amber-400 transition"
            >
              Menu
            </button>
            <button 
              // onClick={() => scrollToSection('location')}
              onClick={() => { window.location.hash = 'location'; }}
              className="hover:text-amber-400 transition"
            >
              Contact / Locatie
            </button>
          </div>

          <a 
            href="#menu"
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition"
          >
            Bestel Nu
          </a>
        </div>
      </nav> */}

      {/* FULL-WIDTH TRANSPARENT NAVBAR */}

      {/* FULL-WIDTH TRANSPARENT NAVBAR with Real Logo */}
<nav className="fixed top-0 left-0 right-0 z-50">
  <div className="w-full bg-black/40 backdrop-blur-lg border-b border-white/10">
    <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
      
      {/* Logo */}
      <a href="#" className="flex items-center gap-3 group">
        <img 
          src="/logo2.png" 
          alt="'t Kruimeltje" 
          className="h-32 w-auto drop-shadow-md transition-transform group-hover:scale-105"
        />
            <h1 className="font-bold text-3xl tracking-tight text-white drop-shadow-md">
              
            </h1>
      </a>

      {/* Menu Links */}
      <div className="flex gap-40 text-lg text-white bold">
        <a href="#menu" className="hover:text-amber-400 transition">Broodjes</a>
        <button 
          onClick={() => { window.location.hash = 'location'; }}
          className="hover:text-amber-400 transition"
        >
          Locatie
        </button>
        <a href="#opening-hours" className="hover:text-amber-400 transition">Openingsuren</a>
      </div>

      {/* Order Button */}
      <a 
        href="#menu"
        className="bg-amber-600 hover:bg-amber-700 text-white px-7 py-3 rounded-full text-sm font-medium transition"
      >
        Bestel nu
      </a>

    </div>
  </div>
</nav>


      {/* HERO - MOVING SANDWICH VIDEO BACKGROUND */}
        <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black" id="home">
          
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
            <span>Scroll om te ontdekken</span>
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

      {/* MENU SECTION - Based on your real menu */}
<section id="menu" className="py-24 bg-[#F9F5F0]">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold mb-4">Onze Broodjes</h2>
      <p className="text-xl text-gray-600">
        Alle broodjes zijn vers gemaakt • Prijzen in €
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
      
      {/* LEFT COLUMN */}
      <div className="space-y-8">
        <div>
          <h3 className="text-amber-600 font-semibold text-lg mb-4">CLASSICS &amp; FAVORITES</h3>
          <div className="space-y-4 text-lg">
            <div className="flex justify-between">
              <span>Broodje Kip Honing Mosterd</span>
              <span className="font-semibold">€4,90</span>
            </div>
            <div className="flex justify-between">
              <span>Broodje Zalm &amp; Kruidenkaas</span>
              <span className="font-semibold">€5,90</span>
            </div>
            <div className="flex justify-between">
              <span>Broodje Haring sla</span>
              <span className="font-semibold">€5,20</span>
            </div>
            <div className="flex justify-between">
              <span>Broodje Garnaal</span>
              <span className="font-semibold">€5,90</span>
            </div>
            <div className="flex justify-between">
              <span>Broodje Hesp</span>
              <span className="font-semibold">€4,30</span>
            </div>
            <div className="flex justify-between">
              <span>Broodje Haas</span>
              <span className="font-semibold">€4,30</span>
            </div>
            <div className="flex justify-between">
              <span>Broodje Haas - Hesp</span>
              <span className="font-semibold">€4,80</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-amber-600 font-semibold text-lg mb-4">SPECIALTIES</h3>
          <div className="space-y-4 text-lg">
            <div className="flex justify-between">
              <span>Broodje Tonijn Pika</span>
              <span className="font-semibold">€5,20</span>
            </div>
            <div className="flex justify-between">
              <span>Broodje Scampi Look</span>
              <span className="font-semibold">€5,80</span>
            </div>
            <div className="flex justify-between">
              <span>Broodje Brique Honing Sla</span>
              <span className="font-semibold">€5,70</span>
            </div>
            <div className="flex justify-between">
              <span>Broodje Martino Special</span>
              <span className="font-semibold">€5,30</span>
            </div>
            <div className="flex justify-between">
              <span>Italiaanse Martino</span>
              <span className="font-semibold">€5,90</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="space-y-8">
        <div>
          <h3 className="text-amber-600 font-semibold text-lg mb-4">HOT &amp; TASTY</h3>
          <div className="space-y-4 text-lg">
            <div className="flex justify-between">
              <span>Broodje Kroketje</span>
              <span className="font-semibold">€5,00</span>
            </div>
            <div className="flex justify-between">
              <span>Broodje Vegi Curryworst</span>
              <span className="font-semibold">€4,50</span>
            </div>
            <div className="flex justify-between">
              <span>Broodje Noorse Zalm</span>
              <span className="font-semibold">€5,70</span>
            </div>
            <div className="flex justify-between">
              <span>Broodje Kaaskroket (2st)</span>
              <span className="font-semibold">€6,10</span>
            </div>
            <div className="flex justify-between">
              <span>Broodje Curryworst Special</span>
              <span className="font-semibold">€4,70</span>
            </div>
            <div className="flex justify-between">
              <span>Broodje Long Chicken</span>
              <span className="font-semibold">€4,90</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-amber-600 font-semibold text-lg mb-4">MORE DELICIOUS OPTIONS</h3>
          <div className="space-y-4 text-lg">
            <div className="flex justify-between">
              <span>Broodje Calamares</span>
              <span className="font-semibold">€6,40</span>
            </div>
            <div className="flex justify-between">
              <span>Broodje Carpaccio</span>
              <span className="font-semibold">€6,90</span>
            </div>
            <div className="flex justify-between">
              <span>Broodje Bicky Martino</span>
              <span className="font-semibold">€5,90</span>
            </div>
            <div className="flex justify-between">
              <span>Broodje Lekkerbekje</span>
              <span className="font-semibold">€5,60</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p className="text-center text-sm text-gray-500 mt-16">
      Spaar bij elke 10 broodjes een gratis broodje bij elkaar!<br />
      Vraag ons naar onze dagelijkse soep!<br />
    </p>
  </div>
</section>

      {/* LOCATION SECTION */}
      <section className="py-20 bg-white" id="location">
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
{/* OPENING HOURS SECTION */}
<section className="py-20 bg-[#F9F5F0]" id="opening-hours">
  <div className="max-w-2xl mx-auto px-6">
    <h2 className="text-5xl font-bold text-center mb-12">Openingsuren</h2>
    
    <div className="bg-white rounded-3xl shadow-xl p-10">
      <div className="space-y-4 text-lg">
        
        <div className="flex justify-between items-center border-b border-gray-100 pb-4">
          <span className="font-medium">Maandag</span>
          <span className="font-semibold text-right">07:30 – 14:30</span>
        </div>

        <div className="flex justify-between items-center border-b border-gray-100 pb-4">
          <span className="font-medium">Dinsdag</span>
          <span className="font-semibold text-right">07:30 – 14:30</span>
        </div>

        <div className="flex justify-between items-center border-b border-gray-100 pb-4">
          <span className="font-medium">Woensdag</span>
          <span className="font-semibold text-right">07:30 – 14:30</span>
        </div>

        <div className="flex justify-between items-center border-b border-gray-100 pb-4">
          <span className="font-medium">Donderdag</span>
          <span className="font-semibold text-right">07:30 – 14:30</span>
        </div>

        <div className="flex justify-between items-center border-b border-gray-100 pb-4">
          <span className="font-medium">Vrijdag</span>
          <span className="font-semibold text-right">07:30 – 14:30</span>
        </div>

        <div className="flex justify-between items-center border-b border-gray-100 pb-4">
          <span className="font-medium">Zaterdag</span>
          <span className="font-semibold text-right">09:30 – 13:30</span>
        </div>

        <div className="flex justify-between items-center pt-2">
          <span className="font-medium text-red-600">Zondag</span>
          <span className="font-semibold text-red-600">Gesloten</span>
        </div>

      </div>
    </div>

    <p className="text-center text-gray-500 mt-8 text-sm">
      Hoogstraat 18, 8470 Gistel
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
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
      {/* HERO - Updated with your photo */}
      <div className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
        <img 
          src="/hero-sandwiches.jpg"   // ← we'll add this
          alt="Fresh Ham & Cheese Baguettes" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-6 leading-none drop-shadow-xl">
            't Kruimeltje
          </h1>
          <p className="text-2xl md:text-3xl text-amber-100 mb-10 drop-shadow-md">
            Ham & Kaas • Verse Groentjes • Zelfgemaakte Soep
          </p>
          <a href="#menu" className="inline-block bg-amber-600 hover:bg-amber-700 text-white text-xl px-12 py-5 rounded-full transition text-lg">
            Verken het Menu →
          </a>
        </div>
      </div>

      {/* MENU SECTION */}
      <section id="menu" className="py-20 bg-[#F9F5F0]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4">Onze Huisgemaakte Baguettes</h2>
          <p className="text-center text-xl text-gray-600 mb-12">Gemaakt met liefde, en de beste ingrediënten</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menu.map((sandwich, i) => (
              <div 
                key={i}
                
                className="sandwich-card bg-white rounded-3xl overflow-hidden cursor-pointer shadow-xl"
              >
                <img src={sandwich.img} alt={sandwich.name} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-semibold">{sandwich.name}</h3>
                    <span className="text-2xl font-bold text-amber-600">€{sandwich.price}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{sandwich.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILD YOUR OWN */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Hoogstraat 18 , Gistel (8470)</h2>
          <p className="text-2xl mb-12 text-gray-600">059 27 45 65</p>
          <a 
            href="/build" 
            className="inline-block bg-black text-white text-2xl px-12 py-6 rounded-2xl hover:bg-gray-800 transition"
          >
            Reserveer nu
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-[#F9F5F0]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Openingstijden:</h2>
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
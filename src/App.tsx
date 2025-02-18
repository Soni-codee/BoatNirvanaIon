import React from 'react';
import { Battery, Bluetooth, Volume2, Wifi, Music2, Timer } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const features = [
    { icon: <Battery className="w-6 h-6" />, title: "Endless Power", desc: "I'll keep going for 120 hours with my charging case. That's like 5 days of non-stop music!" },
    { icon: <Bluetooth className="w-6 h-6" />, title: "Crystal Clear Connection", desc: "With my Bluetooth 5.2, I'll never miss a beat. Your music stays perfect, always." },
    { icon: <Volume2 className="w-6 h-6" />, title: "Your Personal Sanctuary", desc: "I can block out up to 30dB of noise. It's just you and your music, nothing else." },
    { icon: <Wifi className="w-6 h-6" />, title: "Gaming Champion", desc: "Feel the action in real-time with my 40ms low latency mode. No lag, just pure gaming bliss." },
    { icon: <Music2 className="w-6 h-6" />, title: "Sound Mastery", desc: "My 13mm drivers deliver bass that you can feel and highs that'll give you goosebumps." },
    { icon: <Timer className="w-6 h-6" />, title: "Quick Boost", desc: "Running low? Give me 10 minutes, and I'll give you 2 hours of pure musical joy." },
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <header className="h-screen relative overflow-hidden hero-gradient">
        <div className="relative z-20 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="container mx-auto px-4 hero-content"
          >
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-7xl md:text-9xl font-bold mb-8 tracking-tight"
              >
                <span className="gradient-text">Nirvana</span>{" "}
                <span className="text-white">Ion</span>
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
              >
                Hey there! I'm Nirvana Ion, boAt's most advanced TWS earbuds. Let me take you on a journey to audio enlightenment.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Product Image Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <img
              src="https://i.ibb.co/Qj1Qxr7/boat-nirvana-ion.png"
              alt="boAt Nirvana Ion TWS Earbuds"
              className="w-full h-auto object-contain mix-blend-lighten"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Let Me Show You What I Can <span className="gradient-text">Do</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="feature-card p-8 rounded-xl border border-red-900/30 hover:border-red-600/50 transition-colors relative"
              >
                <div className="text-red-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              What Makes Me <span className="gradient-text">Special</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <motion.div 
                  className="p-4 feature-card rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-red-600 font-semibold mb-2">My Heart</h3>
                  <p className="text-gray-300">13mm Dynamic Drivers that make every beat count</p>
                </motion.div>
                <motion.div 
                  className="p-4 feature-card rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-red-600 font-semibold mb-2">My Stamina</h3>
                  <p className="text-gray-300">120 hours of non-stop entertainment</p>
                </motion.div>
                <motion.div 
                  className="p-4 feature-card rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-red-600 font-semibold mb-2">My Connection</h3>
                  <p className="text-gray-300">Bluetooth 5.2 with BEAST™ Mode for perfect sync</p>
                </motion.div>
              </div>
              <div className="space-y-4">
                <motion.div 
                  className="p-4 feature-card rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-red-600 font-semibold mb-2">My Strength</h3>
                  <p className="text-gray-300">IPX4 rated - I don't mind a little sweat or rain</p>
                </motion.div>
                <motion.div 
                  className="p-4 feature-card rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-red-600 font-semibold mb-2">My Intelligence</h3>
                  <p className="text-gray-300">Smart touch controls with voice assistant support</p>
                </motion.div>
                <motion.div 
                  className="p-4 feature-card rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-red-600 font-semibold mb-2">My Energy</h3>
                  <p className="text-gray-300">Type-C fast charging for quick power-ups</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Experience <span className="gradient-text">Me</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. I'll be your perfect companion for music, gaming, and everything in between.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <span className="text-2xl font-bold text-white">
                bo<span className="gradient-text">A</span>t
              </span>
            </div>
            <div>
              © {new Date().getFullYear()} boAt Lifestyle. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
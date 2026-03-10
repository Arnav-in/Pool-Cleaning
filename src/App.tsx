import React, { useState } from 'react';
import { Star, Phone, ShieldCheck, CheckCircle2, MapPin, Droplets, Waves, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-sky-200 selection:text-sky-900">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 px-4 md:px-8 pt-4">
        <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-xl border border-white/20 rounded-full h-16 flex items-center justify-between px-6 shadow-sm">
          <div className="flex items-center gap-2 text-sky-600">
            <Waves className="h-6 w-6" />
            <span className="font-serif text-xl font-bold tracking-tight text-slate-900">Oasis</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
            <a href="#services" className="hover:text-sky-600 transition-colors">Services</a>
            <a href="#pricing" className="hover:text-sky-600 transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-sky-600 transition-colors">Reviews</a>
            <a href="#areas" className="hover:text-sky-600 transition-colors">Areas</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="tel:+15551234567" className="hidden lg:flex items-center gap-2 text-slate-600 font-medium text-sm hover:text-sky-600 transition-colors">
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
            </a>
            <a href="#quote" className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
              Get Free Quote
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=2000" 
            alt="Crystal clear pool at golden hour" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/80" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-8"
          >
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
            </div>
            <span className="text-white text-xs font-medium uppercase tracking-wider">5.0 Average Rating</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-[5.5rem] font-serif text-white leading-[1.05] tracking-tight mb-6 max-w-4xl"
          >
            Dive into a <span className="italic font-light">perfectly</span> clean pool.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 font-light"
          >
            Professional, reliable, and transparent pool maintenance. We handle the chemistry and cleaning, so you can just swim.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#quote" className="inline-flex items-center justify-center bg-white text-slate-900 text-base font-medium px-8 py-4 rounded-full hover:bg-sky-50 transition-colors">
              Get Your Free Quote
            </a>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-3 font-serif text-xl text-slate-900">
              <ShieldCheck className="h-6 w-6" />
              Licensed & Insured
            </div>
            <div className="flex items-center gap-3 font-serif text-xl text-slate-900">
              <Droplets className="h-6 w-6" />
              CPO Certified
            </div>
            <div className="flex items-center gap-3 font-serif text-xl text-slate-900">
              <Sparkles className="h-6 w-6" />
              100% Satisfaction
            </div>
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section id="pricing" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tight">Transparent Pricing. <br className="hidden md:block" />No Surprises.</h2>
            <p className="text-lg text-slate-500 font-light">Choose the plan that fits your pool's needs. All plans include our satisfaction guarantee and detailed post-visit reports.</p>
          </div>

          {/* Pricing Navbar / Toggle */}
          <div className="flex justify-center mb-16">
            <div className="bg-slate-200/50 p-1.5 rounded-full inline-flex items-center relative">
              <button 
                onClick={() => setBillingCycle('monthly')}
                className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${billingCycle === 'monthly' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Monthly Billing
              </button>
              <button 
                onClick={() => setBillingCycle('annual')}
                className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${billingCycle === 'annual' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Annual Billing <span className={`ml-1 text-xs font-bold px-2 py-0.5 rounded-full ${billingCycle === 'annual' ? 'bg-sky-100 text-sky-600' : 'bg-slate-200 text-slate-500'}`}>Save 15%</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Plan 1 */}
            <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-slate-100">
              <h3 className="text-2xl font-serif text-slate-900 mb-2">Chemical Only</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-light text-slate-900">${billingCycle === 'monthly' ? '85' : '72'}</span>
                <span className="text-slate-400 text-sm">/month</span>
              </div>
              <ul className="space-y-5 mb-10">
                <li className="flex items-start gap-3 text-slate-600 font-light">
                  <CheckCircle2 className="h-5 w-5 text-sky-500 shrink-0" />
                  <span>Weekly water testing & balancing</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 font-light">
                  <CheckCircle2 className="h-5 w-5 text-sky-500 shrink-0" />
                  <span>All basic chemicals included</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 font-light">
                  <CheckCircle2 className="h-5 w-5 text-sky-500 shrink-0" />
                  <span>Empty skimmer & pump baskets</span>
                </li>
              </ul>
              <a href="#quote" className="block w-full text-center bg-slate-50 text-slate-900 font-medium py-4 rounded-full hover:bg-slate-100 transition-colors">Select Plan</a>
            </div>

            {/* Plan 2 */}
            <div className="bg-slate-900 rounded-[2rem] p-10 shadow-2xl relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sky-500 text-white px-4 py-1 rounded-full text-xs font-medium tracking-widest uppercase">Most Popular</div>
              <h3 className="text-2xl font-serif text-white mb-2">Full Service</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-light text-white">${billingCycle === 'monthly' ? '145' : '123'}</span>
                <span className="text-slate-400 text-sm">/month</span>
              </div>
              <ul className="space-y-5 mb-10">
                <li className="flex items-start gap-3 text-slate-300 font-light">
                  <CheckCircle2 className="h-5 w-5 text-sky-400 shrink-0" />
                  <span>Everything in Chemical Only</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300 font-light">
                  <CheckCircle2 className="h-5 w-5 text-sky-400 shrink-0" />
                  <span>Skim water surface</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300 font-light">
                  <CheckCircle2 className="h-5 w-5 text-sky-400 shrink-0" />
                  <span>Brush walls, steps, and tile line</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300 font-light">
                  <CheckCircle2 className="h-5 w-5 text-sky-400 shrink-0" />
                  <span>Vacuum pool floor</span>
                </li>
              </ul>
              <a href="#quote" className="block w-full text-center bg-white text-slate-900 font-medium py-4 rounded-full hover:bg-sky-50 transition-colors">Select Plan</a>
            </div>

            {/* Plan 3 */}
            <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-slate-100">
              <h3 className="text-2xl font-serif text-slate-900 mb-2">Premium Care</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-light text-slate-900">${billingCycle === 'monthly' ? '195' : '165'}</span>
                <span className="text-slate-400 text-sm">/month</span>
              </div>
              <ul className="space-y-5 mb-10">
                <li className="flex items-start gap-3 text-slate-600 font-light">
                  <CheckCircle2 className="h-5 w-5 text-sky-500 shrink-0" />
                  <span>Everything in Full Service</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 font-light">
                  <CheckCircle2 className="h-5 w-5 text-sky-500 shrink-0" />
                  <span>Filter cleaning (2x/year)</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 font-light">
                  <CheckCircle2 className="h-5 w-5 text-sky-500 shrink-0" />
                  <span>Salt cell cleaning (as needed)</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 font-light">
                  <CheckCircle2 className="h-5 w-5 text-sky-500 shrink-0" />
                  <span>Priority storm cleanup</span>
                </li>
              </ul>
              <a href="#quote" className="block w-full text-center bg-slate-50 text-slate-900 font-medium py-4 rounded-full hover:bg-slate-100 transition-colors">Select Plan</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tight">Loved by Homeowners</h2>
            <p className="text-lg text-slate-500 font-light">Don't just take our word for it.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Jenkins",
                location: "Coral Gables",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
                text: "Oasis completely turned our green pool around. Their communication is top-notch, and I love getting the email report after every visit."
              },
              {
                name: "Michael Chen",
                location: "Pinecrest",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
                text: "Reliable, professional, and our pool has literally never looked better. The full service plan is worth every penny for the peace of mind."
              },
              {
                name: "Emily Rodriguez",
                location: "Coconut Grove",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
                text: "Finally, a pool company that actually shows up on time! The technicians are friendly and always make sure the gate is locked behind them."
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-slate-50 rounded-[2rem] p-10 border border-slate-100">
                <div className="flex text-yellow-400 mb-8">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-slate-700 text-lg mb-10 font-serif italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover grayscale" />
                  <div>
                    <h4 className="font-medium text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500 font-light">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="py-32 bg-sky-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tight">Local Experts, <br />Neighborhood Service.</h2>
              <p className="text-slate-600 text-lg mb-10 max-w-md font-light leading-relaxed">We proudly serve the greater metro area with dedicated routes, ensuring prompt and consistent service every single week.</p>
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                {["Coral Gables", "Pinecrest", "Coconut Grove", "South Miami", "Palmetto Bay", "Kendall"].map((area, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-800">
                    <MapPin className="h-5 w-5 text-sky-500" />
                    <span className="font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full max-w-md bg-white rounded-[2rem] p-10 text-slate-900 shadow-xl border border-slate-100">
              <h3 className="text-2xl font-serif mb-3">Check Availability</h3>
              <p className="text-slate-500 mb-8 font-light">Enter your zip code to see if we service your area.</p>
              <form className="flex flex-col gap-4">
                <input type="text" placeholder="Zip Code" className="w-full bg-slate-50 border border-slate-200 rounded-full px-6 py-4 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all" />
                <button type="button" className="w-full bg-slate-900 text-white px-6 py-4 rounded-full font-medium hover:bg-slate-800 transition-colors">Check Now</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-slate-500 py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 text-sky-600 mb-6">
              <Waves className="h-6 w-6" />
              <span className="font-serif text-xl font-bold tracking-tight text-slate-900">Oasis</span>
            </div>
            <p className="text-sm mb-6 font-light leading-relaxed">Making pool ownership effortless with professional, reliable, and transparent maintenance services.</p>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-medium mb-6">Services</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-sky-600 transition-colors">Chemical Balancing</a></li>
              <li><a href="#" className="hover:text-sky-600 transition-colors">Full Service Cleaning</a></li>
              <li><a href="#" className="hover:text-sky-600 transition-colors">Filter Maintenance</a></li>
              <li><a href="#" className="hover:text-sky-600 transition-colors">Green Pool Recovery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-medium mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-sky-600 transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-sky-600 transition-colors">Reviews</a></li>
              <li><a href="#" className="hover:text-sky-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-sky-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-medium mb-6">Contact</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-slate-400" />
                <a href="tel:+15551234567" className="hover:text-sky-600 transition-colors">(555) 123-4567</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-slate-400" />
                Miami, FL
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-slate-100 text-sm font-light flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2026 Oasis Pool Care. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

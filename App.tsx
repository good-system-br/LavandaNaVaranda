
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GalleryCarousel from './components/GalleryCarousel';
import SunsetSection from './components/SunsetSection';
import TestimonialCarousel from './components/TestimonialCarousel';
import { PACKAGES, MASSAGES_LIST, CONTACT_INFO } from './constants';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Estilo reutilizável para títulos "flutuantes" e elegantes
  const elegantTitleClass = "bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent drop-shadow-sm pb-1";

  return (
    <div className="bg-white min-h-screen font-sans relative">
      <Navbar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      <Hero />

      {/* Sobre Section */}
      <section id="sobre" className="py-32 px-6 md:px-10 lg:px-14 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-18 items-center">
            <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-strong text-primary font-bold rounded-full text-[11px] uppercase tracking-[0.22em]">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Boas-vindas
                </div>
                <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black leading-tight ${elegantTitleClass}`}>
                    Você é a sua melhor escolha!
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                    Vamos lhe receber com um delicioso <strong>chá de boas-vindas</strong>, acolher suas sensações, emoções e pontos de tensão para identificar quais óleos essenciais preparar. 
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                    Criamos uma <strong>Sinergia Personalizada</strong> que toca a sua alma e escolhemos a Terapia que melhor atenda seu momento presente. O fim de ano está chegando com um convite especial ao seu equilíbrio.
                </p>
                
                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-neutral-200">
                    <div className="text-primary font-black text-xl">{CONTACT_INFO.therapist}</div>
                    <div className="text-gray-400">|</div>
                    <div className="text-gray-500 font-semibold">Terapeuta Holística</div>
                </div>
            </div>
            
            <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-xl blur-2xl"></div>
                {/* Imagem Local Original */}
                <img src="/assets/IMG-20251203-WA0032.jpg" alt="Massagem Craniana" className="relative rounded-2xl shadow-[0_20px_60px_-30px_rgba(29,10,61,0.45)] w-full object-cover h-[420px] bg-neutral-100" />
                <div className="absolute -bottom-6 -left-6 bg-white/95 p-6 rounded-2xl shadow-card max-w-xs hidden md:block transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-default border border-white/50">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary/10 rounded-full text-primary">
                            <span className="material-symbols-outlined text-xl">favorite</span>
                        </div>
                        <p className="text-primary font-bold leading-tight">Atendimento<br/>Personalizado</p>
                    </div>
                    <p className="text-xs text-gray-500 pl-1">Respeitando a sua individualidade</p>
                </div>
            </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="bg-neutral-100 py-32 px-6">
        <div className="max-w-5xl mx-auto bg-white/90 rounded-2xl shadow-card overflow-hidden md:flex">
            <div className="md:w-1/2 h-64 md:h-auto relative bg-neutral-100 flex items-center justify-center">
                {/* Imagem Local Original */}
                <img src="/assets/IMG-20251203-WA0034.jpg" alt="Pedras Quentes" className="w-full h-full object-contain" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/35 to-transparent"></div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center gap-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">bem-estar completo</div>
                <h3 className={`text-2xl md:text-3xl font-black ${elegantTitleClass}`}>Experiência de Bem-Estar</h3>
                <p className="text-gray-600">
                    Inclui o chá de boas-vindas, conversa acolhedora, sinergia personalizada de óleos essenciais e a massagem escolhida para melhor atender suas buscas internas.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white rounded-xl border border-neutral-200 transition-all hover:shadow-md cursor-default">
                        <span className="block text-[11px] text-gray-500 uppercase tracking-[0.15em]">Individual</span>
                        <span className="block text-2xl font-black text-primary">R$ 280</span>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl border border-neutral-200 transition-all hover:shadow-md cursor-default">
                        <span className="block text-[11px] text-gray-500 uppercase tracking-[0.15em]">Casal</span>
                        <span className="block text-2xl font-black text-primary">R$ 560</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="pacotes" className="py-28 px-6 md:px-10 lg:px-14 max-w-7xl mx-auto bg-slate-50 rounded-[2.5rem]">
        <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-strong text-primary font-bold rounded-full text-[11px] uppercase tracking-[0.22em]">Renove suas energias</span>
            <h2 className={`text-3xl md:text-5xl font-black mt-3 mb-3 ${elegantTitleClass}`}>
                Experiências Essenciais <span className="text-primary/90">Fim de Ano</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Um encontro de bem-estar e conexão com a natureza para vivenciar momentos especialmente preparados para seus novos sonhos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PACKAGES.map((pkg, idx) => (
                <article key={idx} className={`bg-white rounded-2xl p-6 shadow-card hover:shadow-[0_20px_60px_-30px_rgba(29,10,61,0.35)] transition-all duration-300 hover:-translate-y-1 border border-neutral-200/70 flex flex-col justify-between ${pkg.cor}`}>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-black text-gray-900">{pkg.titulo}</h3>
                            <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-gray-400 flex items-center gap-1">
                                <span className="material-symbols-outlined text-[16px] text-primary">schedule</span>
                                {pkg.duracao}
                            </span>
                        </div>
                        <ul className="mb-2">
                            {pkg.itens.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-600 text-sm mb-2">
                                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="pt-4 mt-2 border-t border-neutral-200 flex justify-between gap-3 text-sm font-semibold text-gray-600">
                        <div className="flex flex-col">
                            <span className="text-[12px] uppercase tracking-[0.12em] text-gray-500">Individual</span>
                            <span className="text-lg font-black text-primary">R$ {pkg.precoInd}</span>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-[12px] uppercase tracking-[0.12em] text-gray-500">Casal</span>
                            <span className="text-lg font-black text-primary">R$ {pkg.precoCasal}</span>
                        </div>
                    </div>
                </article>
            ))}
        </div>
      </section>

      {/* Massage Menu */}
      <section id="menu-massagens" className="py-28 text-white px-6" style={{ backgroundColor: '#361268' }}>
        <div className="max-w-6xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white font-bold rounded-full text-[11px] uppercase tracking-[0.22em]">menu terapêutico</div>
            <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-sm">
                    Menu de Massagens Disponíveis
                </h2>
                <p className="text-white/80 max-w-3xl mx-auto text-lg">Escolha a técnica que mais combina com o momento do seu corpo e mente.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
                {MASSAGES_LIST.map((m, i) => (
                    <span key={i} className="px-6 py-3 bg-white text-gray-900 rounded-xl shadow-md hover:bg-gray-100 hover:scale-105 transition-all duration-300 cursor-default font-bold tracking-wide hover:-translate-y-1">
                        {m}
                    </span>
                ))}
            </div>
        </div>
      </section>

      {/* Sunset Section */}
      <SunsetSection />

      {/* Gallery Section with Carousel */}
      <GalleryCarousel />

      {/* Testimonials Carousel */}
      <TestimonialCarousel />

      {/* Location Section */}
      <section id="localizacao" className="py-32 px-6 md:px-10 lg:px-14 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-18 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-strong text-primary font-bold rounded-full text-[11px] uppercase tracking-[0.22em] mb-4">
                <span className="material-symbols-outlined text-sm">location_on</span>
                Como Chegar
              </span>
              <h2 className={`text-4xl md:text-5xl font-black leading-tight ${elegantTitleClass}`}>
                Localização
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/70 shadow-sm hover:shadow-md transition-all">
                <p className="text-gray-700 text-lg font-semibold mb-4">{CONTACT_INFO.address}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="https://maps.google.com/?q=Rua+Beija-flor,+161+-+Centro,+Monte+Verde/MG" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <span className="material-symbols-outlined">map</span>
                    Abrir no Google Maps
                  </a>
                  <a 
                    href="https://waze.com/ul?place=ChIJIQBpAG2C4JQRfSnqrH_EmLI&ll=-22.31&lngLon=-45.45" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <span className="material-symbols-outlined">near_me</span>
                    Abrir no Waze
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-primary/20 hover:shadow-lg hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 cursor-default">
                  <p className="text-sm text-gray-600 uppercase tracking-wider font-bold mb-2">Distância</p>
                  <p className="text-2xl font-black text-primary">5 min</p>
                  <p className="text-xs text-gray-500 mt-1">do Centro</p>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-primary/20 hover:shadow-lg hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 cursor-default">
                  <p className="text-sm text-gray-600 uppercase tracking-wider font-bold mb-2">Estacionamento</p>
                  <p className="text-xl font-black text-primary">Privativo</p>
                  <p className="text-xs text-gray-500 mt-1">Gratuito</p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Content */}
          <div className="order-first md:order-last relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 hover:shadow-2xl transition-all duration-300 hover:border-primary/40 group">
            <video 
              src="/assets/localizacao.mp4" 
              className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
              controls
              playsInline
              controlsList="nodownload"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none group-hover:from-black/10 transition-all duration-300"></div>
          </div>
        </div>
      </section>

      {/* Footer Enhanced */}
      <footer className="bg-white border-t border-neutral-200 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 mb-12">
            
            {/* Brand Column */}
            <div className="md:col-span-4 space-y-4">
                <div className="flex items-center gap-2 text-primary">
                    <img src="/assets/Logo.png" alt="Lavandas na Varanda" className="h-10 w-auto" />
                    <span className="font-black text-2xl tracking-tight">Lavandas na Varanda</span>
                </div>
                <p className="text-gray-500 leading-relaxed">
                    Um refúgio em Monte Verde para reconectar corpo e alma através de terapias holísticas e massagens personalizadas.
                </p>
            </div>

            {/* Contact Column */}
            <div className="md:col-span-4 space-y-5">
                <h4 className="font-bold text-gray-900 text-lg">Contato & Localização</h4>
                
                <div className="flex items-start gap-4 group">
                    <div className="bg-primary/10 p-2 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-xl">location_on</span>
                    </div>
                    <div>
                        <p className="text-gray-600 leading-tight mb-1">{CONTACT_INFO.address}</p>
                        <a href="https://maps.google.com/?q=Rua+Beija-flor,+161+-+Centro,+Monte+Verde/MG" target="_blank" rel="noreferrer" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                            Ver no Google Maps <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                        </a>
                    </div>
                </div>

                <div className="flex items-center gap-4 group">
                     <div className="bg-primary/10 p-2 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </div>
                    <a href="https://instagram.com/lavandas_na_varanda" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-primary font-medium transition-colors">
                        @lavandas_na_varanda
                    </a>
                </div>
            </div>

            {/* Info Column */}
            <div className="md:col-span-4 space-y-5">
                <h4 className="font-bold text-gray-900 text-lg">Informações</h4>
                
                <div className="flex items-center gap-4 group">
                    <div className="bg-primary/10 p-2 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-xl">person</span>
                    </div>
                    <div>
                        <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">Terapeuta</span>
                        <p className="text-gray-600 font-medium">{CONTACT_INFO.therapist}</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                    <div className="bg-primary/10 p-2 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-xl">schedule</span>
                    </div>
                    <div>
                         <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">Horário</span>
                        <p className="text-gray-600 font-medium">Mediante agendamento prévio</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="border-t border-neutral-100 pt-8 text-center">
             <p className="text-gray-400 text-xs">
                © 2025 Lavandas na Varanda. Todos os direitos reservados.
            </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button - Hide if menu is open */}
      <a 
        href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá! Vim pelo site e gostaria de agendar.`}
        target="_blank"
        rel="noreferrer"
        className={`fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-green-300/50 hover:scale-110 transition-all duration-300 items-center justify-center group ${isMobileMenuOpen ? 'hidden' : 'flex'}`}
        aria-label="Falar no WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current group-hover:animate-pulse" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

    </div>
  );
};

export default App;

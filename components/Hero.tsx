import React, { useEffect, useState } from 'react';
import { HERO_IMAGES, CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div id="inicio" className="relative w-full h-[78vh] md:h-[86vh] overflow-hidden bg-gray-900 flex items-center justify-center">
            {/* Background blur effect */}
            <div
                className="absolute inset-0 w-full h-full blur-2xl scale-110 opacity-30"
                style={{ 
                    backgroundImage: `url('${HERO_IMAGES[currentSlide]}')`
                }}
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"></div>
            
            {/* Main images with object-cover */}
            {HERO_IMAGES.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover z-0"
                    />
                </div>
            ))}
            
            <div className="absolute inset-0 flex items-center">
                <div className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-14 z-10">
                    <div className="max-w-3xl flex flex-col gap-6 bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-[0_25px_80px_-40px_rgba(0,0,0,0.65)]">
                        <div className="flex items-center gap-3 text-white/80 text-sm font-semibold uppercase tracking-[0.18em]">
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            Spa & Terapias Exclusivas
                        </div>
                        <h1 className="text-white text-4xl md:text-6xl font-black leading-tight drop-shadow-xl">
                            Um oásis de paz e conexão
                        </h1>
                        <p className="text-gray-100 text-lg md:text-xl font-medium leading-relaxed">
                            Experiência sensorial com atendimento terapêutico personalizado, aromas, amor e toques que cuidam do seu corpo e das suas emoções.
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-2">
                            <a href="#pacotes" className="inline-flex items-center justify-center gap-2 bg-white text-primary px-7 py-3 rounded-full font-extrabold text-base shadow-card hover:bg-neutral-200 transition-all hover:translate-y-[-1px]">
                                Ver experiências
                                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </a>
                            <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 text-white border border-white/60 px-7 py-3 rounded-full font-bold text-base hover:bg-white/10 transition-all">
                                Agendar agora
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {HERO_IMAGES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white scale-110' : 'bg-white/50'}`}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;
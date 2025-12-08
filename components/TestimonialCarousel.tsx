import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';

const TestimonialCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    return (
        <section id="depoimentos" className="py-20 bg-neutral-100 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-white text-primary font-bold rounded-full text-[11px] uppercase tracking-[0.22em]">Depoimentos</span>
                    <h2 className="text-3xl md:text-5xl font-black mt-3 mb-2 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent drop-shadow-sm pb-1">
                        Histórias de relaxamento
                    </h2>
                    <p className="text-gray-500">Leia as experiências de quem já visitou nosso espaço.</p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Botão Anterior */}
                    <button 
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white text-primary p-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition-all z-10"
                    >
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>

                    {/* Área do Card */}
                    <div className="overflow-hidden px-4">
                        <div 
                            className="flex transition-transform duration-500 ease-in-out" 
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {TESTIMONIALS.map((t, idx) => (
                                <div key={idx} className="w-full flex-shrink-0 px-2 md:px-8">
                                    <article className="bg-white p-8 md:p-12 rounded-3xl shadow-card flex flex-col items-center text-center gap-6 border border-white/50 relative">
                                        <div className="absolute top-6 left-8 text-primary/10 select-none font-serif text-8xl leading-none">“</div>
                                        
                                        <div className="flex text-primary gap-1">
                                            {[1,2,3,4,5].map(star => <span key={star} className="material-symbols-outlined filled">star</span>)}
                                        </div>
                                        <p className="text-gray-700 leading-relaxed text-lg md:text-xl font-medium italic relative z-10">
                                            {t.text}
                                        </p>
                                        <div className="mt-2">
                                            <p className="text-base font-bold text-gray-900">{t.author} {t.location && <span className="text-gray-400 font-normal mx-1">|</span>} <span className="text-gray-500 font-medium">{t.location}</span></p>
                                            <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-bold">TripAdvisor • {t.date}</p>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Botão Próximo */}
                    <button 
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white text-primary p-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition-all z-10"
                    >
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>

                    {/* Indicadores */}
                    <div className="flex justify-center gap-2 mt-8">
                        {TESTIMONIALS.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-primary/20 hover:bg-primary/40'}`}
                                aria-label={`Ver depoimento ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialCarousel;
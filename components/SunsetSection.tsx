import React, { useState, useEffect } from 'react';
import { SUNSET_IMAGES, CONTACT_INFO } from '../constants';

const SunsetSection: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SUNSET_IMAGES.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-orange-50 to-purple-50">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                
                {/* Texto */}
                <div className="order-2 md:order-1 space-y-8 relative z-10">
                    <div>
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-600 font-bold rounded-full text-[11px] uppercase tracking-[0.22em] mb-4">
                            <span className="material-symbols-outlined text-sm">wb_twilight</span>
                            Golden Hour
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black leading-tight bg-gradient-to-r from-orange-600 via-red-500 to-purple-600 bg-clip-text text-transparent drop-shadow-sm pb-1">
                            Massagem ao<br/>Pôr do Sol
                        </h2>
                    </div>
                    
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Imagine-se sendo cuidado enquanto o céu se pinta de dourado e violeta. 
                        Nossa sala envidraçada oferece uma vista privilegiada para o espetáculo da natureza em Monte Verde.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        A <strong className="text-orange-600">Sinergia Crepúsculo</strong>, preparada com óleos essenciais de Laranja Doce e Lavanda, 
                        harmoniza suas emoções enquanto o dia se despede, trazendo uma paz profunda para sua noite.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá! Gostaria de saber mais sobre a Massagem ao Pôr do Sol.`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-orange-200/50 hover:scale-105 transition-all">
                            Agendar Pôr do Sol
                        </a>
                    </div>
                </div>

                {/* Carrossel Exclusivo */}
                <div className="order-1 md:order-2 relative h-[450px] w-full rounded-[2rem] overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 border-4 border-white/50">
                    {SUNSET_IMAGES.map((img, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
                            style={{ backgroundImage: `url('${img}')` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                    ))}
                    
                    {/* Indicadores do Carrossel */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                        {SUNSET_IMAGES.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Elementos decorativos de fundo */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-100/30 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl pointer-events-none"></div>
        </section>
    );
};

export default SunsetSection;
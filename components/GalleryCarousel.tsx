import React, { useState, useRef, useEffect } from 'react';
import { GALLERY_IMAGES, CONTACT_INFO } from '../constants';

const GalleryCarousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    };

    // Auto-scroll the thumbnail strip to keep active item in view
    useEffect(() => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const activeThumbnail = container.children[activeIndex] as HTMLElement;
            
            if (activeThumbnail) {
                const scrollLeft = activeThumbnail.offsetLeft - (container.clientWidth / 2) + (activeThumbnail.clientWidth / 2);
                container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
            }
        }
    }, [activeIndex]);

    return (
        <section id="galeria" className="py-20 px-6 bg-gradient-to-br from-secondary/20 to-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Nosso Espaço</span>
                    <h2 className="text-3xl md:text-5xl font-black mt-2 mb-4 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent drop-shadow-sm pb-1">
                        Galeria de <span className="text-primary">Momentos</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Conheça nosso ambiente acolhedor e as experiências que preparamos especialmente para você.
                    </p>
                </div>

                {/* Main Featured Image - Large Carousel with Blur Background */}
                <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-2xl bg-neutral-100 shadow-2xl mb-8 group">
                    {/* 1. Imagem de Fundo (Borrada para preencher o espaço) */}
                    <div 
                        className="absolute inset-0 w-full h-full bg-cover bg-center blur-2xl scale-110 opacity-40 transition-all duration-500 group-hover:scale-125"
                        style={{ backgroundImage: `url('${GALLERY_IMAGES[activeIndex].url}')` }}
                    ></div>

                    {/* 2. Imagem da Frente (Inteira, sem cortes) */}
                    <img
                        src={GALLERY_IMAGES[activeIndex].url}
                        alt={GALLERY_IMAGES[activeIndex].title || `Imagem da galeria ${activeIndex + 1}`}
                        className="relative w-full h-full object-contain z-10 transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                    {/* Degradê sutil na parte inferior */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-20 pointer-events-none"></div>
                </div>

                {/* Thumbnails Strip */}
                <div className="relative">
                    <div 
                        ref={scrollContainerRef}
                        className="flex gap-4 overflow-x-auto py-4 px-2 no-scrollbar snap-x items-center"
                    >
                        {GALLERY_IMAGES.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`flex-shrink-0 relative w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden transition-all duration-300 snap-center ${
                                    idx === activeIndex 
                                    ? 'ring-4 ring-primary ring-offset-2 scale-105 z-10 shadow-xl' 
                                    : 'opacity-70 hover:opacity-100 hover:scale-105 grayscale hover:grayscale-0'
                                }`}
                            >
                                <img src={img.url} alt="" className="w-full h-full object-contain" />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-primary-dark transition-all transform hover:scale-105">
                        <span className="material-symbols-outlined">calendar_today</span>
                        Agende sua Visita
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GalleryCarousel;
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

                {/* Main Featured Image - Large Carousel */}
                <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl mb-8 group">
                    <div 
                        className="w-full h-full bg-cover bg-center transition-all duration-700 ease-in-out transform hover:scale-105"
                        style={{ backgroundImage: `url('${GALLERY_IMAGES[activeIndex].url}')` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8 md:p-12" aria-hidden="true"> 
                            {/* título removido intencionalmente - decoração visual preservada */}
                        </div>
                    </div>

                    {/* Navigation Buttons - Always visible and enhanced */}
                    <button 
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-3 rounded-full shadow-lg transition-all hover:scale-110 z-20"
                        aria-label="Imagem anterior"
                    >
                        <span className="material-symbols-outlined text-3xl font-bold">chevron_left</span>
                    </button>
                    <button 
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-3 rounded-full shadow-lg transition-all hover:scale-110 z-20"
                        aria-label="Próxima imagem"
                    >
                        <span className="material-symbols-outlined text-3xl font-bold">chevron_right</span>
                    </button>
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
                                <img src={img.url} alt="" className="w-full h-full object-cover" />
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
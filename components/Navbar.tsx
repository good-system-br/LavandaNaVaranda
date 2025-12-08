
import React from 'react';
import { CONTACT_INFO } from '../constants';

interface NavbarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, setIsOpen }) => {
    const menuItems = [
        { label: 'Início', href: '#inicio' },
        { label: 'Sobre', href: '#sobre' },
        { label: 'Fim de Ano', href: '#pacotes' },
        { label: 'Massagens', href: '#menu-massagens' },
        { label: 'Galeria', href: '#galeria' },
        { label: 'Depoimentos', href: '#depoimentos' },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">
                <a href="#inicio" className="flex items-center gap-3">
                   {/* Logo Original */}
                   <img src="/assets/Logo.png" alt="Lavandas na Varanda" className="h-10 md:h-12 w-auto drop-shadow-sm" />
                    <div className="hidden sm:flex flex-col leading-tight">
                        <span className="text-[11px] uppercase tracking-[0.22em] text-gray-400 font-bold">Spa & Terapias</span>
                        <span className="text-sm md:text-base font-extrabold text-gray-800 tracking-tight">Lavandas na Varanda</span>
                    </div>
                </a>
                
                <div className="hidden md:flex gap-8 font-semibold text-sm text-gray-600 items-center">
                    {menuItems.map((item) => (
                        <a key={item.label} href={item.href} className="hover:text-primary transition-colors hover:bg-gray-50 px-3 py-1.5 rounded-full">
                            {item.label}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lift hover:shadow-card hover:bg-primary-dark transition-all transform hover:-translate-y-0.5">
                        <span className="material-symbols-outlined text-sm">chat</span>
                        Agendar
                    </a>

                    {/* Botão Mobile - Ícone Limpo */}
                    <button 
                        onClick={() => setIsOpen(true)} 
                        className="md:hidden text-gray-700 p-2 focus:outline-none"
                        aria-label="Abrir menu"
                    >
                        <span className="material-symbols-outlined text-3xl">menu</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay - Estilo Limpo conforme Referência */}
            <div className={`fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Header do Menu */}
                <div className="flex justify-between items-center p-6 border-b border-gray-50">
                     <div className="flex items-center gap-2">
                        <img src="/assets/Logo.png" alt="Lavandas na Varanda" className="h-12 w-auto" />
                    </div>
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="text-gray-500 hover:text-gray-800 p-2 transition-colors"
                    >
                        <span className="material-symbols-outlined text-3xl">close</span>
                    </button>
                </div>

                {/* Lista de Links */}
                <div className="flex flex-col px-8 py-8 gap-6 overflow-y-auto">
                    {menuItems.map((item) => (
                        <a 
                            key={item.label}
                            href={item.href} 
                            className="text-gray-700 hover:text-primary font-bold text-xl transition-colors text-left"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                    
                    {/* Botão de Ação Destacado */}
                    <div className="mt-6">
                        <a 
                            href={`https://wa.me/${CONTACT_INFO.whatsapp}`} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="flex items-center justify-center w-full bg-[#9c30e8] text-white font-bold text-lg py-4 rounded-full shadow-lg hover:bg-[#7a22b8] transition-colors"
                        >
                            Agendar pelo WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

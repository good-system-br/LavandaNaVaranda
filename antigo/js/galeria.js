// Galeria de Imagens - Script
const images = [
    'assets/Imagem do WhatsApp de 2025-12-03 à(s) 07.57.17_3ce3aa7e.jpg',
    'assets/IMG-20251203-WA0024.jpg',
    'assets/IMG-20251203-WA0025.jpg',
    'assets/IMG-20251203-WA0026.jpg',
    'assets/IMG-20251203-WA0027.jpg',
    'assets/IMG-20251203-WA0028.jpg',
    'assets/IMG-20251203-WA0029.jpg',
    'assets/IMG-20251203-WA0030.jpg',
    'assets/IMG-20251203-WA0031.jpg',
    'assets/IMG-20251203-WA0032.jpg',
    'assets/IMG-20251203-WA0033.jpg',
    'assets/IMG-20251203-WA0034.jpg',
    'assets/IMG-20251203-WA0035.jpg',
    'assets/IMG-20251203-WA0036.jpg',
    'assets/IMG-20251203-WA0037.jpg',
];

let currentImageIndex = 0;

// Carregar galeria
function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    images.forEach((imagePath, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item group relative';
        galleryItem.innerHTML = `
            <img src="${imagePath}" alt="Galeria de Lavanda na Varanda - Imagem ${index + 1}" loading="lazy">
            <div class="gallery-icon">
                <span class="material-symbols-outlined text-5xl">image_search</span>
            </div>
        `;
        
        galleryItem.addEventListener('click', () => openModal(index));
        galleryGrid.appendChild(galleryItem);
    });
}

// Abrir modal
function openModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalImage');
    const imageCounter = document.getElementById('imageCounter');
    
    modalImage.src = images[currentImageIndex];
    imageCounter.textContent = `${currentImageIndex + 1} / ${images.length}`;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Fechar modal
function closeGalleryModal() {
    const modal = document.getElementById('galleryModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Navegação de imagens
function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateModal();
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateModal();
}

function updateModal() {
    const modalImage = document.getElementById('modalImage');
    const imageCounter = document.getElementById('imageCounter');
    
    modalImage.src = images[currentImageIndex];
    imageCounter.textContent = `${currentImageIndex + 1} / ${images.length}`;
}

// Event listeners
document.getElementById('closeModal').addEventListener('click', closeGalleryModal);
document.getElementById('prevImage').addEventListener('click', showPrevImage);
document.getElementById('nextImage').addEventListener('click', showNextImage);

// Fechar modal ao clicar fora da imagem
document.getElementById('galleryModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('galleryModal')) {
        closeGalleryModal();
    }
});

// Navegação com teclado
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('galleryModal');
    if (!modal.classList.contains('hidden')) {
        if (e.key === 'ArrowLeft') showPrevImage();
        if (e.key === 'ArrowRight') showNextImage();
        if (e.key === 'Escape') closeGalleryModal();
    }
});

// Carregar galeria quando a página carrega
document.addEventListener('DOMContentLoaded', loadGallery);

// Menu responsivo
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenuBtn = document.getElementById('closeMenuBtn');
if (menuBtn && mobileMenu && closeMenuBtn) {
    menuBtn.onclick = () => mobileMenu.classList.remove('hidden');
    closeMenuBtn.onclick = () => mobileMenu.classList.add('hidden');
}
function closeMenu() {
    mobileMenu.classList.add('hidden');
}
// Botão WhatsApp já está inline, mas pode ser movido para cá se desejar centralizar lógica.

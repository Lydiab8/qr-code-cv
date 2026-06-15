
document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('btn-close');
    const popup = document.getElementById('popup');

    // Quand on clique sur le bouton, on ajoute la classe 'active' pour afficher le pop-up
    closeBtn.addEventListener('click', () => {
        popup.classList.add('active');
    });
});

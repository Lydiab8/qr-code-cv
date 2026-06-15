document.addEventListener('DOMContentLoaded', () => {
    const cvLink = document.getElementById('cv-link');
    const closeBtn = document.getElementById('btn-close');
    const popup = document.getElementById('popup');

    // 1. Quand on clique sur le bouton vert du CV
    cvLink.addEventListener('click', () => {
        // On attend un tout petit peu que le PDF s'ouvre, puis on fait apparaître le bouton bleu
        setTimeout(() => {
            closeBtn.classList.remove('hidden');
        }, 500);
    });

    // 2. Quand on clique sur le bouton bleu "Terminer la visite"
    closeBtn.addEventListener('click', () => {
        popup.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cvLink = document.getElementById('cv-link');
    const popup = document.getElementById('popup');

    // Dès que le recruteur clique pour ouvrir le PDF
    cvLink.addEventListener('click', () => {
        // On active immédiatement le message de remerciement en arrière-plan
        setTimeout(() => {
            popup.classList.add('active');
        }, 300);
    });
});

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-fr], [data-en]');
    elements.forEach(element => {
        if (lang === 'fr') {
            element.textContent = element.getAttribute('data-fr');
        } else if (lang === 'en') {
            element.textContent = element.getAttribute('data-en');
        }
    });
}
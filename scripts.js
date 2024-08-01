document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('header a, section ul li a, footer a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#ffd740';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#ffca28';
        });
    });
});

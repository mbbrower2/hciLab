document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-toggle').forEach((toggle) => {
        const nav = toggle.closest('nav');
        const links = nav ? nav.querySelector('.nav-links') : null;
        if (!links) return;

        const closeMenu = () => {
            links.classList.remove('open');
            toggle.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        };

        toggle.addEventListener('click', () => {
            const isOpen = links.classList.toggle('open');
            toggle.classList.toggle('open', isOpen);
            toggle.setAttribute('aria-expanded', String(isOpen));
        });

        links.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', closeMenu);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.expandable').forEach((card) => {
        const label = card.querySelector('.toggle-label');

        const toggle = () => {
            const open = card.classList.toggle('is-open');
            card.setAttribute('aria-expanded', String(open));
            if (label) label.textContent = open ? 'Hide bio' : 'Read bio';
        };

        card.addEventListener('click', (e) => {
            if (e.target.closest('a')) return;
            toggle();
        });

        card.addEventListener('keydown', (e) => {
            if (e.target.closest('a')) return;
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle();
            }
        });
    });
});

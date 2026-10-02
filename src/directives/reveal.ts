import type { Directive } from 'vue';

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            (entry.target as HTMLElement).dataset.reveal = 'visible';
            observer.unobserve(entry.target);
        });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
);

export const vReveal: Directive<HTMLElement, number | undefined> = {
    mounted(element, { value: delayInMilliseconds = 0 }) {
        element.dataset.reveal = 'hidden';
        element.style.setProperty('--reveal-delay', `${delayInMilliseconds}ms`);
        revealObserver.observe(element);
    },
    unmounted(element) {
        revealObserver.unobserve(element);
    },
};

import type { Directive } from 'vue';

let revealObserver: IntersectionObserver | undefined;

// Created on first use, so the module stays safe to import during server-side rendering.
function getRevealObserver() {
    revealObserver ??= new IntersectionObserver(
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

    return revealObserver;
}

const vReveal: Directive<HTMLElement, number | undefined> = {
    mounted(element, { value: delayInMilliseconds = 0 }) {
        element.dataset.reveal = 'hidden';
        element.style.setProperty('--reveal-delay', `${delayInMilliseconds}ms`);
        getRevealObserver().observe(element);
    },
    unmounted(element) {
        revealObserver?.unobserve(element);
    },
    // Prerendered in the hidden state so content does not flash before hydration (a <noscript> style shows it without JS).
    getSSRProps: ({ value: delayInMilliseconds = 0 }) => ({
        'data-reveal': 'hidden',
        style: { '--reveal-delay': `${delayInMilliseconds}ms` },
    }),
};

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('reveal', vReveal);
});

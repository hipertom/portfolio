import tailwindcss from '@tailwindcss/vite';

const siteUrl = 'https://tomgrootjans.nl/';
const description = 'Runner, lifter and padel enthusiast from Zoetermeer who builds software for a living.';

export default defineNuxtConfig({
    compatibilityDate: '2026-10-01',
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    vite: {
        plugins: [tailwindcss()],
    },
    // A single static page: prerendered at build time (`npm run generate`).
    nitro: {
        prerender: { routes: ['/'] },
    },
    app: {
        head: {
            htmlAttrs: { lang: 'en' },
            title: 'Tom Grootjans · Runner, padel player and software engineer',
            meta: [
                { name: 'description', content: `Hi, I'm Tom Grootjans. ${description}` },
                { name: 'theme-color', content: '#fbf7f1' },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: siteUrl },
                { property: 'og:title', content: 'Tom Grootjans' },
                { property: 'og:description', content: description },
                { property: 'og:image', content: `${siteUrl}og-image.jpg` },
                { property: 'og:image:width', content: '1200' },
                { property: 'og:image:height', content: '630' },
                { name: 'twitter:card', content: 'summary_large_image' },
            ],
            link: [
                { rel: 'canonical', href: siteUrl },
                { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
                { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
            ],
            // Without JavaScript the reveal directive never runs, so show its content straight away.
            noscript: [{ innerHTML: "<style>[data-reveal='hidden'] { opacity: 1; translate: none; }</style>" }],
        },
    },
});

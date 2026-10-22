const siteUrl = 'https://tomgrootjans.nl/';
const description = 'Runner, lifter and padel enthusiast from Zoetermeer who builds software for a living.';

export default defineNuxtConfig({
    // Warm Sorbet: the shared design system (theme, fonts, Ui* components, v-reveal).
    // See node_modules/warm-sorbet/docs/design-system.md.
    extends: ['warm-sorbet'],
    compatibilityDate: '2026-10-01',
    devtools: { enabled: true },
    modules: ['@vercel/speed-insights'],
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
        },
    },
});

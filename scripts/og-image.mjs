// Retakes public/og-image.jpg: a 1200×630 screenshot of the hero, taken with the local Chrome against a running
// dev server (`npm run dev`). Usage: npm run og-image [-- <url>]
import { chromium } from 'playwright-core';

const url = process.argv[2] ?? 'http://localhost:5174/';
const output = new URL('../public/og-image.jpg', import.meta.url).pathname;

async function isReachable(address) {
    try {
        const response = await fetch(address);

        return response.ok;
    } catch {
        return false;
    }
}

if (!(await isReachable(url))) {
    console.error(`No page at ${url}. Start the dev server first (npm run dev) or pass a URL.`);
    process.exit(1);
}

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
    reducedMotion: 'reduce',
});

await page.goto(url, { waitUntil: 'networkidle' });
await page.addStyleTag({
    content: 'nav, #nuxt-devtools-container { display: none !important; } #top { padding-top: 4.5rem !important; }',
});
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(800);
await page.screenshot({ path: output, type: 'jpeg', quality: 85 });
await browser.close();

console.log(`Saved ${output}`);

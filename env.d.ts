/// <reference types="vite/client" />

import type { vReveal } from './src/directives/reveal';

declare module 'vue' {
    interface GlobalDirectives {
        vReveal: typeof vReveal;
    }
}

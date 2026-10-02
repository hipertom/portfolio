<script setup lang="ts">
import SiteFooter from '@/components/layout/SiteFooter.vue';
import SiteNav from '@/components/layout/SiteNav.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
</script>

<template>
    <a
        href="#main"
        class="sr-only z-[60] rounded-full bg-ink px-4 py-2 text-cream focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
    >
        Skip to content
    </a>
    <SiteNav />
    <main id="main">
        <HeroSection />
        <AboutSection />
    </main>
    <SiteFooter />
</template>

<script setup lang="ts">
import { ArrowUp } from 'lucide-vue-next';
import SocialLinks from '@/components/ui/SocialLinks.vue';
import { heroSectionId } from '@/data/navigation';
import { profile } from '@/data/profile';

const currentYear = new Date().getFullYear();
</script>

<template>
    <footer class="mt-24 rounded-t-[2.5rem] bg-ink text-cream sm:mt-32">
        <div class="page-container py-14 sm:py-20">
            <div class="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                <div v-reveal class="max-w-md">
                    <p class="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                        Thanks for stopping by<span class="text-accent">.</span>
                    </p>
                    <p class="mt-4 text-cream/70">Say hi on any of these, or come find me on the padel court.</p>
                </div>
                <SocialLinks v-reveal="100" inverted />
            </div>

            <div
                class="mt-14 flex flex-col-reverse gap-4 border-t border-cream/10 pt-6 text-sm text-cream/60 sm:flex-row sm:items-center sm:justify-between"
            >
                <p>&copy; {{ currentYear }} {{ profile.fullName }} &middot; Made in {{ profile.city }}</p>
                <a
                    :href="`#${heroSectionId}`"
                    class="group inline-flex items-center gap-2 self-start font-medium text-cream/80 hover:text-cream"
                >
                    Back to top
                    <ArrowUp class="size-4 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
                </a>
            </div>
        </div>
    </footer>
</template>

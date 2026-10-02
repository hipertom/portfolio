<script setup lang="ts">
import { ArrowDown } from 'lucide-vue-next';
import portraitUrl from '@/assets/images/tom-grootjans.jpeg';
import RotatingBadge from '@/components/ui/RotatingBadge.vue';
import SocialLinks from '@/components/ui/SocialLinks.vue';
import { heroSectionId, navigationItems } from '@/data/navigation';
import { profile } from '@/data/profile';

const [firstNavigationItem] = navigationItems;
</script>

<template>
    <section :id="heroSectionId" aria-labelledby="hero-title" class="relative overflow-x-clip pt-32 pb-16 sm:pt-40">
        <div
            class="pointer-events-none absolute -top-40 -right-32 size-[34rem] rounded-full bg-peach/50 blur-3xl"
            aria-hidden="true"
        />
        <div
            class="pointer-events-none absolute top-1/2 -left-48 size-[28rem] rounded-full bg-butter/50 blur-3xl"
            aria-hidden="true"
        />

        <div class="relative page-container grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
            <div class="lg:col-span-7">
                <p v-reveal class="inline-flex items-center gap-2 text-lg font-medium text-ink-soft">
                    <span class="inline-block origin-[70%_70%] animate-wave" aria-hidden="true">👋</span>
                    Hi there, I'm
                </p>

                <h1 id="hero-title" v-reveal="80" class="mt-3 text-display font-semibold">
                    <span class="relative inline-block">
                        {{ profile.firstName }}
                        <svg
                            class="absolute -bottom-[0.12em] left-0 h-[0.22em] w-full text-accent"
                            viewBox="0 0 200 20"
                            preserveAspectRatio="none"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M3 14 C 40 4, 70 4, 100 11 S 165 18, 197 6"
                                stroke="currentColor"
                                stroke-width="6"
                                stroke-linecap="round"
                                pathLength="1"
                                stroke-dasharray="1"
                                class="animate-draw"
                            />
                        </svg>
                    </span>
                    <br />
                    {{ profile.lastName }}
                </h1>

                <p v-reveal="160" class="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
                    {{ profile.intro }}
                </p>

                <div v-reveal="240" class="mt-10 flex flex-wrap items-center gap-x-4 gap-y-6">
                    <a
                        v-if="firstNavigationItem"
                        :href="`#${firstNavigationItem.sectionId}`"
                        class="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-medium text-cream shadow-soft transition duration-300 ease-(--ease-bounce) hover:-translate-y-0.5 hover:shadow-lift"
                    >
                        Get to know me
                        <ArrowDown class="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
                    </a>
                    <SocialLinks />
                </div>
            </div>

            <div v-reveal="200" class="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
                <div
                    class="absolute inset-0 translate-x-4 translate-y-4 rotate-3 rounded-arch bg-butter"
                    aria-hidden="true"
                />
                <div class="relative aspect-[4/5] overflow-hidden rounded-arch bg-peach">
                    <img
                        :src="portraitUrl"
                        :alt="`Portrait of ${profile.fullName}, smiling`"
                        width="900"
                        height="900"
                        fetchpriority="high"
                        class="size-full object-cover object-[50%_30%] mix-blend-multiply"
                    />
                </div>

                <RotatingBadge
                    text="run • lift • padel • repeat • "
                    class="absolute -top-4 -right-2 size-28 sm:-right-6 sm:size-32"
                />

                <span
                    class="absolute top-[8%] -left-4 inline-flex -rotate-6 animate-float items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm font-semibold shadow-soft sm:top-[42%] sm:-left-10"
                >
                    <span aria-hidden="true">📍</span> {{ profile.city }}, NL
                </span>
                <span
                    class="absolute -right-2 bottom-10 inline-flex rotate-3 animate-float items-center gap-2 rounded-2xl bg-sage px-4 py-2.5 text-sm font-semibold shadow-soft [animation-delay:-3s] sm:-right-8"
                >
                    {{ profile.role }}
                </span>
            </div>
        </div>
    </section>
</template>

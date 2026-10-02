<script setup lang="ts">
import { BriefcaseBusiness, Heart, Languages, MapPin } from 'lucide-vue-next';
import BentoTile from '@/components/ui/BentoTile.vue';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder.vue';
import SectionHeading from '@/components/ui/SectionHeading.vue';
import { profile } from '@/data/profile';
import { calculateAge } from '@/utils/calculateAge';

const age = calculateAge(profile.birthDate);
</script>

<template>
    <section id="about" aria-labelledby="about-title" class="page-container py-20 sm:py-28">
        <SectionHeading id="about-title" eyebrow="About me" title="Nice to meet you." tone="peach" />

        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            <BentoTile v-reveal class="justify-between gap-6 sm:col-span-2 lg:row-span-2">
                <div class="space-y-4 text-lg leading-relaxed text-ink-soft">
                    <p v-for="paragraph in profile.bio" :key="paragraph" class="first:text-xl first:text-ink">
                        {{ paragraph }}
                    </p>
                </div>
            </BentoTile>

            <div v-reveal="80" class="overflow-hidden rounded-[2rem] sm:row-span-2">
                <img
                    v-if="profile.aboutPhotoUrl"
                    :src="profile.aboutPhotoUrl"
                    :alt="`${profile.fullName} outside`"
                    loading="lazy"
                    class="size-full object-cover"
                />
                <ImagePlaceholder v-else tone="sage" class="aspect-[4/3] size-full sm:aspect-auto" />
            </div>

            <BentoTile
                v-reveal="120"
                tone="butter"
                label="Currently"
                :icon="BriefcaseBusiness"
                class="justify-between gap-6"
            >
                <p class="font-display text-2xl leading-tight font-semibold">
                    {{ profile.role }}
                    <span class="block text-base font-medium text-ink-soft">at {{ profile.employer }}</span>
                </p>
            </BentoTile>

            <BentoTile v-reveal="160" tone="peach" label="Based in" :icon="MapPin" class="justify-between gap-6">
                <p class="font-display text-2xl leading-tight font-semibold">
                    {{ profile.city }}
                    <span class="block text-base font-medium text-ink-soft">{{ profile.country }}</span>
                </p>
            </BentoTile>

            <BentoTile v-reveal="80" tone="cream" label="Things I love" :icon="Heart" class="gap-5 sm:col-span-2">
                <ul class="flex flex-wrap gap-2">
                    <li
                        v-for="(interest, index) in profile.interests"
                        :key="interest"
                        class="rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-soft transition-transform duration-300 ease-(--ease-bounce) hover:-rotate-3"
                        :class="index % 2 === 0 ? 'rotate-1' : '-rotate-1'"
                    >
                        {{ interest }}
                    </li>
                </ul>
            </BentoTile>

            <BentoTile v-reveal="120" tone="sage" label="Speaks" :icon="Languages" class="justify-between gap-6">
                <p class="font-display text-2xl leading-tight font-semibold">{{ profile.languages.join(' & ') }}</p>
            </BentoTile>

            <BentoTile v-reveal="160" tone="ink" class="justify-between gap-6">
                <p class="font-display text-6xl font-semibold tracking-tight">
                    {{ age }}<span class="text-accent">.</span>
                </p>
                <p class="text-sm font-medium text-cream/70">trips around the sun, and counting</p>
            </BentoTile>
        </div>
    </section>
</template>

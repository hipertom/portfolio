<script setup lang="ts">
import { BriefcaseBusiness, Heart, Languages, MapPin } from '@lucide/vue';
import { profile } from '~/data/profile';

const age = calculateAge(profile.birthDate);
</script>

<template>
    <section id="about" aria-labelledby="about-title" class="page-container py-12">
        <LocalSectionHeading id="about-title" eyebrow="About me" title="Nice to meet you." tone="peach" />

        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            <UiTile
                v-reveal
                spacious
                interactive
                tone="white"
                class="justify-between gap-6 sm:col-span-2 lg:row-span-2"
            >
                <div class="space-y-4 text-lg leading-relaxed text-ink-soft">
                    <p v-for="paragraph in profile.bio" :key="paragraph" class="first:text-xl first:text-ink">
                        {{ paragraph }}
                    </p>
                </div>
            </UiTile>

            <div v-reveal="80" class="relative overflow-hidden rounded-[2rem] sm:row-span-2">
                <img
                    v-if="profile.aboutPhotoUrl"
                    :src="profile.aboutPhotoUrl"
                    :alt="`${profile.fullName} giving a thumbs up during a run`"
                    loading="lazy"
                    class="aspect-[4/3] size-full object-cover object-[50%_35%] sm:absolute sm:inset-0 sm:aspect-auto"
                />
                <LocalImagePlaceholder v-else tone="sage" class="aspect-[4/3] size-full sm:aspect-auto" />
            </div>

            <UiTile
                v-reveal="120"
                spacious
                interactive
                tone="butter"
                label="Currently"
                :icon="BriefcaseBusiness"
                class="justify-between gap-6"
            >
                <p class="font-display text-2xl leading-tight font-semibold">
                    {{ profile.role }}
                    <span class="block text-base font-medium text-ink-soft">at {{ profile.employer }}</span>
                </p>
            </UiTile>

            <UiTile
                v-reveal="160"
                spacious
                interactive
                tone="peach"
                label="Based in"
                :icon="MapPin"
                class="justify-between gap-6"
            >
                <p class="font-display text-2xl leading-tight font-semibold">
                    {{ profile.city }}
                    <span class="block text-base font-medium text-ink-soft">{{ profile.country }}</span>
                </p>
            </UiTile>

            <UiTile
                v-reveal="80"
                spacious
                interactive
                tone="cream"
                label="Things I love"
                :icon="Heart"
                class="gap-5 sm:col-span-2"
            >
                <ul class="flex flex-wrap gap-2">
                    <li
                        v-for="interest in profile.interests"
                        :key="interest"
                        class="rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-soft"
                    >
                        {{ interest }}
                    </li>
                </ul>
            </UiTile>

            <UiTile
                v-reveal="120"
                spacious
                interactive
                tone="sage"
                label="Speaks"
                :icon="Languages"
                class="justify-between gap-6"
            >
                <p class="font-display text-2xl leading-tight font-semibold">{{ profile.languages.join(' & ') }}</p>
            </UiTile>

            <UiTile v-reveal="160" spacious interactive tone="ink" class="justify-between gap-6">
                <p class="font-display text-6xl font-semibold tracking-tight">
                    {{ age }}<span class="text-accent">.</span>
                </p>
                <p class="text-sm font-medium text-cream/70">trips around the sun, and counting</p>
            </UiTile>
        </div>
    </section>
</template>

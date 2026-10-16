<script setup lang="ts">
import { MapPin } from '@lucide/vue';
import { experiences } from '~/data/experience';

function formatPeriod(startDate: string, endDate: string | null): string {
    return `${formatMonthYear(startDate)} – ${endDate ? formatMonthYear(endDate) : 'Now'}`;
}

const timelineItems = experiences.map((experience) => ({
    at: formatPeriod(experience.startDate, experience.endDate),
    title: experience.roles.join(' + '),
    meta: experience.company,
    current: experience.endDate === null,
    transition: experience.continuationNote,
    experience,
}));
</script>

<template>
    <section id="experience" aria-labelledby="experience-title" class="page-container py-12">
        <div class="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div class="lg:col-span-5">
                <div class="lg:sticky lg:top-32">
                    <LocalSectionHeading
                        id="experience-title"
                        eyebrow="Experience"
                        title="Where I've worked."
                        tone="sage"
                    >
                        Almost a decade of building things, most of it with the same great team. Here's the short
                        version.
                    </LocalSectionHeading>
                </div>
            </div>

            <UiTimeline
                v-reveal
                :items="timelineItems"
                spacious
                surface="cream"
                line-style="dashed"
                class="lg:col-span-7"
            >
                <template #default="{ item: { at, experience }, current }">
                    <article
                        class="rounded-3xl p-6 transition duration-500 sm:p-7"
                        :class="current ? 'bg-white shadow-soft ring-1 ring-ink/5' : 'hover:bg-white/70'"
                    >
                        <div class="flex flex-wrap items-center justify-between gap-3">
                            <p class="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-soft">
                                <span class="font-semibold text-ink">{{ at }}</span>
                                <span>{{ formatTenure(experience.startDate, experience.endDate) }}</span>
                            </p>
                            <UiPill v-if="current" tone="butter">Current</UiPill>
                        </div>
                        <h3 class="mt-3 text-2xl leading-tight font-semibold">
                            {{ experience.roles[0] }}
                            <span
                                v-for="additionalRole in experience.roles.slice(1)"
                                :key="additionalRole"
                                class="mt-1 block text-lg font-medium text-ink-soft"
                            >
                                + {{ additionalRole }}
                            </span>
                        </h3>
                        <p class="mt-2 flex flex-wrap items-center gap-x-2 font-medium text-ink-soft">
                            {{ experience.company }}
                            <span class="inline-flex items-center gap-1 text-sm">
                                <MapPin class="size-3.5" aria-hidden="true" />
                                {{ experience.location }}
                            </span>
                        </p>
                        <p class="mt-4 leading-relaxed text-ink-soft">{{ experience.description }}</p>
                    </article>
                </template>
            </UiTimeline>
        </div>
    </section>
</template>

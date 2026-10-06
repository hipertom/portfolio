<script setup lang="ts">
import { ArrowUp, MapPin } from 'lucide-vue-next';
import SectionHeading from '@/components/ui/SectionHeading.vue';
import TagPill from '@/components/ui/TagPill.vue';
import { experiences } from '@/data/experience';
import type { Experience } from '@/types/experience';
import { formatMonthYear, formatTenure } from '@/utils/formatDate';

function formatPeriod(startDate: string, endDate: string | null): string {
    return `${formatMonthYear(startDate)} – ${endDate ? formatMonthYear(endDate) : 'Now'}`;
}

function isCurrent(experience: Experience): boolean {
    return experience.endDate === null;
}

function isPartOfSameTeam(index: number): boolean {
    return Boolean(experiences[index]?.continuationNote || experiences[index - 1]?.continuationNote);
}

function markerClasses(experience: Experience, index: number): string {
    if (isCurrent(experience)) {
        return 'bg-accent';
    }

    return isPartOfSameTeam(index) ? 'bg-sage-deep' : 'bg-ink/30';
}
</script>

<template>
    <section id="experience" aria-labelledby="experience-title" class="page-container py-12">
        <div class="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div class="lg:col-span-5">
                <div class="lg:sticky lg:top-32">
                    <SectionHeading id="experience-title" eyebrow="Experience" title="Where I've worked." tone="sage">
                        Almost a decade of building things, most of it with the same great team. Here's the short
                        version.
                    </SectionHeading>
                </div>
            </div>

            <ol class="relative lg:col-span-7">
                <li
                    v-for="(experience, index) in experiences"
                    :key="`${experience.company}-${experience.startDate}`"
                    v-reveal="index * 60"
                    class="relative pb-4 pl-10 last:pb-0 sm:pl-12"
                >
                    <span
                        v-if="index < experiences.length - 1"
                        class="absolute top-10 -bottom-10 left-3 -translate-x-1/2"
                        :class="
                            experience.continuationNote
                                ? 'w-[3px] rounded-full bg-sage-deep'
                                : 'border-l-2 border-dashed border-ink/15'
                        "
                        aria-hidden="true"
                    />
                    <span class="absolute top-7 left-0 z-10 grid size-6 place-items-center" aria-hidden="true">
                        <span
                            v-if="isCurrent(experience)"
                            class="absolute size-full animate-glow rounded-full bg-accent/50"
                        />
                        <span
                            class="relative size-3 rounded-full ring-4 ring-cream"
                            :class="markerClasses(experience, index)"
                        />
                    </span>

                    <article
                        class="rounded-3xl p-6 transition duration-500 sm:p-7"
                        :class="isCurrent(experience) ? 'bg-white shadow-soft ring-1 ring-ink/5' : 'hover:bg-white/70'"
                    >
                        <div class="flex flex-wrap items-center justify-between gap-3">
                            <p class="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-soft">
                                <span class="font-semibold text-ink">
                                    {{ formatPeriod(experience.startDate, experience.endDate) }}
                                </span>
                                <span>{{ formatTenure(experience.startDate, experience.endDate) }}</span>
                            </p>
                            <TagPill v-if="isCurrent(experience)" tone="butter">Current</TagPill>
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

                    <p
                        v-if="experience.continuationNote"
                        class="relative my-3 pl-6 text-sm leading-relaxed text-ink-soft sm:pl-7"
                    >
                        <span
                            class="absolute top-1/2 -left-10 z-10 grid size-6 -translate-y-1/2 place-items-center rounded-full bg-sage-soft text-ink ring-4 ring-cream sm:-left-12"
                            aria-hidden="true"
                        >
                            <ArrowUp class="size-3.5" />
                        </span>
                        {{ experience.continuationNote }}
                    </p>
                </li>
            </ol>
        </div>
    </section>
</template>

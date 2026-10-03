<script setup lang="ts">
import { MapPin } from 'lucide-vue-next';
import SectionHeading from '@/components/ui/SectionHeading.vue';
import { experiences } from '@/data/experience';
import { formatMonthYear, formatTenure } from '@/utils/formatDate';

function formatPeriod(startDate: string, endDate: string | null): string {
    return `${formatMonthYear(startDate)} – ${endDate ? formatMonthYear(endDate) : 'Now'}`;
}
</script>

<template>
    <section id="experience" aria-labelledby="experience-title" class="page-container py-12">
        <div class="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div class="lg:col-span-5">
                <div class="lg:sticky lg:top-32">
                    <SectionHeading id="experience-title" eyebrow="Experience" title="Where I've worked." tone="sage">
                        Almost a decade of building things with great people. Here's the short version.
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
                        class="absolute top-8 bottom-0 left-[0.6875rem] w-px bg-ink/15"
                        aria-hidden="true"
                    />
                    <span class="absolute top-7 left-0 grid size-6 place-items-center" aria-hidden="true">
                        <span
                            v-if="!experience.endDate"
                            class="absolute size-full animate-ping rounded-full bg-accent/40"
                        />
                        <span
                            class="relative size-3 rounded-full ring-4 ring-cream"
                            :class="experience.endDate ? 'bg-ink/30' : 'bg-accent'"
                        />
                    </span>

                    <article
                        class="rounded-3xl p-6 transition duration-500 sm:p-7"
                        :class="experience.endDate ? 'hover:bg-white/70' : 'bg-white shadow-soft ring-1 ring-ink/5'"
                    >
                        <p class="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-soft">
                            <span class="font-semibold text-ink">
                                {{ formatPeriod(experience.startDate, experience.endDate) }}
                            </span>
                            <span>{{ formatTenure(experience.startDate, experience.endDate) }}</span>
                        </p>
                        <h3 class="mt-3 text-2xl leading-tight font-semibold">
                            {{ experience.role }}
                        </h3>
                        <p class="mt-1 flex flex-wrap items-center gap-x-2 font-medium text-ink-soft">
                            {{ experience.company }}
                            <span class="inline-flex items-center gap-1 text-sm">
                                <MapPin class="size-3.5" aria-hidden="true" />
                                {{ experience.location }}
                            </span>
                        </p>
                        <p class="mt-4 leading-relaxed text-ink-soft">{{ experience.description }}</p>
                    </article>
                </li>
            </ol>
        </div>
    </section>
</template>

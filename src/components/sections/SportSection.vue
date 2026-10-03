<script setup lang="ts">
import { RotateCcw } from 'lucide-vue-next';
import { computed, ref } from 'vue';
import ActivityCard from '@/components/sport/ActivityCard.vue';
import RaceCard from '@/components/sport/RaceCard.vue';
import StatTile from '@/components/sport/StatTile.vue';
import BrandIcon from '@/components/ui/BrandIcon.vue';
import SectionHeading from '@/components/ui/SectionHeading.vue';
import { useSportOverview } from '@/composables/useSportOverview';
import { socialLinks } from '@/data/socialLinks';
import type { TotalsPeriod } from '@/types/sport';
import { formatKilometres } from '@/utils/formatDistance';
import { formatHours } from '@/utils/formatDuration';

const { overview, isLoading, hasError, reload } = useSportOverview();

const stravaLink = socialLinks.find(({ brand }) => brand === 'strava');

const totalsPeriods: { period: TotalsPeriod; label: string }[] = [
    { period: 'month', label: 'This month' },
    { period: 'year', label: 'This year' },
];
const selectedPeriod = ref<TotalsPeriod>('month');

const statTiles = computed(() => {
    if (!overview.value) {
        return [];
    }

    const totals = overview.value.totals[selectedPeriod.value];

    return [
        { label: 'Running', value: formatKilometres(totals.runDistanceInMeters, 0), unit: 'km', tone: 'peach' },
        { label: 'Time active', value: formatHours(totals.activeTimeInSeconds), unit: 'hrs', tone: 'butter' },
        { label: 'Padel sessions', value: String(totals.padelSessionCount), tone: 'white' },
        { label: 'Gym sessions', value: String(totals.strengthSessionCount), tone: 'ink' },
    ] as const;
});

const hasActivities = computed(() => Boolean(overview.value?.recentActivities.length));
</script>

<template>
    <section id="sport" aria-labelledby="sport-title" class="page-container py-12">
        <div class="rounded-[2.5rem] bg-sage-soft px-5 py-14 sm:px-10 sm:py-20 lg:px-14">
            <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <SectionHeading id="sport-title" eyebrow="Off the clock" title="Happiest when I'm moving." tone="white">
                    Sport is how I clear my head. Running gives me headspace, the gym keeps me strong and padel is where
                    my competitive side comes out. Here's what I've been up to lately.
                </SectionHeading>
                <a
                    v-if="stravaLink"
                    v-reveal="100"
                    :href="stravaLink.url"
                    target="_blank"
                    rel="noopener"
                    class="group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-accent px-6 py-3 font-semibold text-ink shadow-soft transition duration-300 ease-(--ease-bounce) hover:-translate-y-0.5 hover:shadow-lift lg:self-auto"
                >
                    <BrandIcon brand="strava" class="size-4 transition-transform group-hover:rotate-[-8deg]" />
                    Follow me on Strava
                </a>
            </div>

            <div v-if="isLoading" class="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-busy="true">
                <span class="sr-only">Loading activities…</span>
                <div v-for="index in 4" :key="index" class="h-36 animate-pulse rounded-3xl bg-white/60" />
                <div
                    v-for="index in 3"
                    :key="`card-${index}`"
                    class="h-44 animate-pulse rounded-3xl bg-white/60 lg:col-span-1"
                    :class="{ 'lg:col-span-2': index === 1 }"
                />
            </div>

            <div
                v-else-if="hasError"
                class="mt-14 flex flex-col items-start gap-4 rounded-3xl bg-white p-8 shadow-soft sm:flex-row sm:items-center sm:justify-between"
                role="alert"
            >
                <div>
                    <p class="font-display text-xl font-semibold">Strava is taking a breather.</p>
                    <p class="mt-1 text-ink-soft">I couldn't load my latest activities. Give it another go?</p>
                </div>
                <button
                    type="button"
                    class="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-medium text-cream transition hover:-translate-y-0.5"
                    @click="reload"
                >
                    <RotateCcw class="size-4" aria-hidden="true" />
                    Try again
                </button>
            </div>

            <template v-else-if="overview">
                <div class="mt-14">
                    <div
                        class="inline-flex rounded-full bg-white/70 p-1 ring-1 ring-ink/5"
                        role="group"
                        aria-label="Totals period"
                    >
                        <button
                            v-for="option in totalsPeriods"
                            :key="option.period"
                            type="button"
                            :aria-pressed="selectedPeriod === option.period"
                            class="rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300"
                            :class="
                                selectedPeriod === option.period ? 'bg-ink text-cream' : 'text-ink-soft hover:text-ink'
                            "
                            @click="selectedPeriod = option.period"
                        >
                            {{ option.label }}
                        </button>
                    </div>

                    <div class="mt-5 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
                        <StatTile
                            v-for="(tile, index) in statTiles"
                            :key="tile.label"
                            v-reveal="index * 60"
                            v-bind="tile"
                        />
                    </div>
                </div>

                <div v-if="overview.recentRaces.length" class="mt-16">
                    <h3 class="text-2xl font-semibold">Race results</h3>
                    <ul
                        class="-mx-5 mt-4 flex snap-x snap-mandatory scroll-px-5 [scrollbar-width:none] gap-5 overflow-x-auto px-5 py-3 sm:-mx-10 sm:scroll-px-10 sm:px-10 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0"
                    >
                        <li
                            v-for="(race, index) in overview.recentRaces"
                            :key="race.id"
                            v-reveal="index * 80"
                            class="w-72 shrink-0 snap-start sm:w-80 lg:w-auto"
                        >
                            <RaceCard :race="race" />
                        </li>
                    </ul>
                </div>

                <div class="mt-16">
                    <h3 class="text-2xl font-semibold">Latest activities</h3>
                    <ul
                        v-if="hasActivities"
                        class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-sm:[&>li:nth-child(n+5)]:hidden"
                    >
                        <li
                            v-for="(activity, index) in overview.recentActivities"
                            :key="activity.id"
                            v-reveal="index * 60"
                        >
                            <ActivityCard :activity="activity" />
                        </li>
                    </ul>
                    <p v-else class="mt-6 rounded-3xl bg-white/70 p-8 text-ink-soft">
                        Nothing logged yet. Probably resting, or out on a run without a watch.
                    </p>
                </div>
            </template>
        </div>
    </section>
</template>

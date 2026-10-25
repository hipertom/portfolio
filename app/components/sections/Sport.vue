<script setup lang="ts">
import { socialLinks } from '~/data/socialLinks';
import type { TotalsPeriod } from '#shared/types/sport';

const { overview, isLoading, hasError, reload } = useSportOverview();

const stravaLink = socialLinks.find(({ brand }) => brand === 'strava');
const poweredByStravaLogoUrl = '/strava/api_logo_pwrdBy_strava_horiz_orange.svg';

const totalsPeriods: { value: TotalsPeriod; label: string }[] = [
    { value: 'month', label: 'This month' },
    { value: 'year', label: 'This year' },
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
        <div class="rounded-[2.5rem] bg-sage-soft px-5 py-10 sm:px-10 sm:py-12 lg:px-14">
            <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <LocalSectionHeading
                    id="sport-title"
                    eyebrow="Off the clock"
                    title="Happiest when I'm moving."
                    tone="white"
                >
                    Sport is how I clear my head. Running gives me headspace, the gym keeps me strong and padel is where
                    my competitive side comes out. Here's what I've been up to lately.
                </LocalSectionHeading>
                <UiButton
                    v-if="stravaLink"
                    v-reveal="100"
                    :to="stravaLink.url"
                    target="_blank"
                    variant="accent"
                    :icon="brandIcons.strava"
                    class="shrink-0 self-start lg:self-auto"
                >
                    Follow me on Strava
                </UiButton>
            </div>

            <div v-if="isLoading" class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-busy="true">
                <span class="sr-only">Loading activities…</span>
                <UiSkeleton v-for="index in 3" :key="index" :lines="index === 1 ? 3 : 2" />
            </div>

            <UiErrorState
                v-else-if="hasError"
                class="mt-12"
                role="alert"
                title="Strava is taking a breather."
                retry-label="Try again"
                @retry="reload"
            >
                I couldn't load my latest activities. Give it another go?
            </UiErrorState>

            <template v-else-if="overview">
                <div class="mt-12">
                    <UiSegmented v-model="selectedPeriod" :options="totalsPeriods" label="Totals period" />

                    <div class="mt-5 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
                        <UiStatTile
                            v-for="(tile, index) in statTiles"
                            :key="tile.label"
                            v-reveal="index * 60"
                            v-bind="tile"
                        />
                    </div>
                </div>

                <div v-if="overview.recentRaces.length" class="mt-12">
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
                            <SportRaceCard :race="race" />
                        </li>
                    </ul>
                </div>

                <div class="mt-12">
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
                            <SportActivityCard :activity="activity" />
                        </li>
                    </ul>
                    <p v-else class="mt-6 rounded-3xl bg-white/70 p-8 text-ink-soft">
                        Nothing logged yet. Probably resting, or out on a run without a watch.
                    </p>
                </div>

                <img
                    :src="poweredByStravaLogoUrl"
                    alt="Powered by Strava"
                    width="365"
                    height="37"
                    class="mt-10 ml-auto block h-4 w-auto sm:mt-12"
                />
            </template>
        </div>
    </section>
</template>

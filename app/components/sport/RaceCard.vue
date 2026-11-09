<script setup lang="ts">
import type { Activity } from '#shared/types/sport';

const { race } = defineProps<{ race: Activity }>();

const pinPositions = ['top-3 left-3', 'top-3 right-3', 'bottom-3 left-3', 'bottom-3 right-3'];

const raceDistance = computed(() => getRaceDistance(race.distanceInMeters));
const results = computed(() => {
    const { officialTimeInSeconds, movingTimeInSeconds, averageHeartRate } = race;
    const timeInSeconds = officialTimeInSeconds ?? movingTimeInSeconds;
    const timeAndPace = [
        {
            label: officialTimeInSeconds === null ? 'Strava time' : 'Official time',
            value: formatClockTime(timeInSeconds),
        },
        { label: 'Pace', value: formatPace(raceDistance.value.distanceInMeters, timeInSeconds) },
    ];

    const distance = { label: 'Distance', value: `${formatKilometres(raceDistance.value.distanceInMeters)} km` };

    if (averageHeartRate === null) {
        return [...timeAndPace, distance];
    }

    return [...timeAndPace, { label: 'Avg HR', value: formatHeartRate(averageHeartRate) }, distance];
});
</script>

<template>
    <article
        class="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-ink/5 transition duration-500 ease-(--ease-bounce) hover:shadow-lift"
    >
        <span
            v-for="position in pinPositions"
            :key="position"
            class="absolute size-2.5 rounded-full bg-sage-soft ring-1 ring-ink/10"
            :class="position"
            aria-hidden="true"
        />
        <header class="bg-accent px-8 pt-6 pb-4 text-ink">
            <p class="text-xs font-semibold tracking-[0.2em] uppercase">
                <time :datetime="race.startDate">{{ formatShortDate(race.startDate) }}</time>
            </p>
            <h4 class="mt-1 truncate font-display text-xl font-semibold">{{ race.name }}</h4>
        </header>
        <div class="flex flex-1 flex-col items-start px-8 pt-5 pb-7">
            <!-- A fixed height, so the results line up whether the name takes one line or two. -->
            <p class="flex h-15 items-end font-display font-bold tracking-tight">
                <span
                    v-if="raceDistance.name"
                    :class="raceDistance.name.length > 4 ? 'text-3xl/none' : 'text-6xl/none'"
                >
                    {{ raceDistance.name }}
                </span>
                <span v-else class="flex items-baseline gap-1.5">
                    <span class="text-6xl/none tabular-nums">{{
                        formatKilometres(raceDistance.distanceInMeters)
                    }}</span>
                    <span class="text-2xl font-semibold">km</span>
                </span>
            </p>

            <dl class="mt-5 grid w-full grid-cols-2 gap-4 border-t border-ink/10 pt-4">
                <div v-for="result in results" :key="result.label">
                    <dt class="text-xs font-medium text-ink-soft">{{ result.label }}</dt>
                    <dd class="mt-0.5 font-display text-xl font-bold tabular-nums">{{ result.value }}</dd>
                </div>
            </dl>
            <SportStravaLink :activity-id="race.id" class="mt-auto pt-5" />
        </div>
    </article>
</template>

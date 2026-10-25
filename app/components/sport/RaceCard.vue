<script setup lang="ts">
import type { Activity } from '#shared/types/sport';

const { race } = defineProps<{ race: Activity }>();

const pinPositions = ['top-3 left-3', 'top-3 right-3', 'bottom-3 left-3', 'bottom-3 right-3'];

const distanceName = computed(() => getRaceDistanceName(race.distanceInMeters));
const results = computed(() => {
    const finishTimeAndPace = [
        { label: 'Finish time', value: formatClockTime(race.movingTimeInSeconds) },
        { label: 'Pace', value: formatPace(race.distanceInMeters, race.movingTimeInSeconds) },
    ];

    if (race.averageHeartRate === null) {
        return finishTimeAndPace;
    }

    return [...finishTimeAndPace, { label: 'Avg HR', value: formatHeartRate(race.averageHeartRate) }];
});
</script>

<template>
    <article
        class="relative overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-ink/5 transition duration-500 ease-(--ease-bounce) hover:shadow-lift"
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
        <div class="px-8 pt-5 pb-7">
            <p class="flex items-baseline gap-1.5 font-display">
                <span class="text-6xl font-bold tracking-tight tabular-nums">
                    {{ formatKilometres(race.distanceInMeters) }}
                </span>
                <span class="text-2xl font-semibold">km</span>
            </p>
            <UiPill v-if="distanceName" tone="butter" class="mt-2">{{ distanceName }}</UiPill>

            <dl class="mt-5 grid grid-cols-2 gap-4 border-t border-ink/10 pt-4">
                <div v-for="result in results" :key="result.label">
                    <dt class="text-xs font-medium text-ink-soft">{{ result.label }}</dt>
                    <dd class="mt-0.5 font-display text-xl font-bold tabular-nums">{{ result.value }}</dd>
                </div>
            </dl>
            <SportStravaLink :activity-id="race.id" class="mt-5 inline-block" />
        </div>
    </article>
</template>

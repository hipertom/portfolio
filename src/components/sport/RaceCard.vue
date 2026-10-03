<script setup lang="ts">
import type { Activity } from '@/types/sport';
import { formatKilometres } from '@/utils/formatDistance';
import { formatClockTime } from '@/utils/formatDuration';
import { formatShortDate } from '@/utils/formatDate';
import { formatPace } from '@/utils/formatPace';

defineProps<{ race: Activity }>();

const pinPositions = ['top-3 left-3', 'top-3 right-3', 'bottom-3 left-3', 'bottom-3 right-3'];
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
            <p class="text-xs font-medium text-ink-soft">Finish time</p>
            <p class="font-display text-5xl font-bold tracking-tight tabular-nums">
                {{ formatClockTime(race.movingTimeInSeconds) }}
            </p>
            <p class="mt-3 text-sm font-medium text-ink-soft">
                {{ formatKilometres(race.distanceInMeters) }} km &middot;
                {{ formatPace(race.distanceInMeters, race.movingTimeInSeconds) }}
            </p>
        </div>
    </article>
</template>

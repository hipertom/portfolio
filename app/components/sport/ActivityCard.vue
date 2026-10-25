<script setup lang="ts">
import type { Activity } from '#shared/types/sport';

const { activity } = defineProps<{ activity: Activity }>();

const category = computed(() => getSportCategory(activity.sportType));
const sportTypeLabel = computed(() => getSportTypeLabel(activity.sportType));
const isRun = computed(() => category.value === 'running');
const title = computed(() => (isRun.value ? activity.name : sportTypeLabel.value));

const metrics = computed(() => {
    const duration = { label: 'Time', value: formatDuration(activity.movingTimeInSeconds) };

    if (isRun.value) {
        return [
            { label: 'Distance', value: `${formatKilometres(activity.distanceInMeters)} km` },
            { label: 'Pace', value: formatPace(activity.distanceInMeters, activity.movingTimeInSeconds) },
            duration,
        ];
    }

    if (activity.averageHeartRate === null) {
        return [duration];
    }

    return [duration, { label: 'Avg heart rate', value: formatHeartRate(activity.averageHeartRate) }];
});
</script>

<template>
    <article
        class="flex h-full flex-col gap-6 rounded-3xl bg-white p-5 shadow-soft ring-1 ring-ink/5 transition duration-500 ease-(--ease-bounce) hover:-translate-y-1 hover:shadow-lift"
    >
        <header class="flex items-start gap-4">
            <span
                class="grid size-12 shrink-0 place-items-center rounded-2xl"
                :class="TONE_SURFACE[sportCategoryTones[category]]"
            >
                <SportIcon :category="category" class="size-6" />
            </span>
            <div class="min-w-0">
                <h4 class="truncate font-display text-lg font-semibold">{{ title }}</h4>
                <p class="text-sm text-ink-soft">
                    <template v-if="isRun">{{ sportTypeLabel }} &middot; </template>
                    <time :datetime="activity.startDate">{{ formatRelativeDay(activity.startDate) }}</time>
                </p>
            </div>
        </header>

        <dl class="mt-auto grid grid-cols-3 gap-3 border-t border-ink/5 pt-4">
            <div v-for="metric in metrics" :key="metric.label">
                <dt class="text-xs text-ink-soft">{{ metric.label }}</dt>
                <dd class="mt-0.5 font-semibold tabular-nums">{{ metric.value }}</dd>
            </div>
        </dl>

        <SportStravaLink :activity-id="activity.id" class="-mt-2 self-start" />
    </article>
</template>

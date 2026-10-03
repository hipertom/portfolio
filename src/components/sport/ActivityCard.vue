<script setup lang="ts">
import { computed } from 'vue';
import SportIcon from '@/components/sport/SportIcon.vue';
import type { Activity } from '@/types/sport';
import { formatKilometres } from '@/utils/formatDistance';
import { formatDuration } from '@/utils/formatDuration';
import { formatRelativeDay } from '@/utils/formatDate';
import { formatPace } from '@/utils/formatPace';
import { getSportCategory, sportCategoryDetails } from '@/utils/sportCategories';
import { toneSurfaceClasses } from '@/utils/toneClasses';

const { activity } = defineProps<{ activity: Activity }>();

const category = computed(() => getSportCategory(activity.sportType));
const categoryDetails = computed(() => sportCategoryDetails[category.value]);

const metrics = computed(() => {
    const duration = { label: 'Time', value: formatDuration(activity.movingTimeInSeconds) };

    if (activity.distanceInMeters === 0) {
        return [duration];
    }

    return [
        { label: 'Distance', value: `${formatKilometres(activity.distanceInMeters)} km` },
        { label: 'Pace', value: formatPace(activity.distanceInMeters, activity.movingTimeInSeconds) },
        duration,
    ];
});
</script>

<template>
    <article
        class="flex h-full flex-col gap-6 rounded-3xl bg-white p-5 shadow-soft ring-1 ring-ink/5 transition duration-500 ease-(--ease-bounce) hover:-translate-y-1 hover:shadow-lift"
    >
        <header class="flex items-start gap-4">
            <span
                class="grid size-12 shrink-0 place-items-center rounded-2xl"
                :class="toneSurfaceClasses[categoryDetails.tone]"
            >
                <SportIcon :category="category" class="size-6" />
            </span>
            <div class="min-w-0">
                <h4 class="truncate font-display text-lg font-semibold">{{ activity.name }}</h4>
                <p class="text-sm text-ink-soft">
                    {{ categoryDetails.label }} &middot;
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
    </article>
</template>

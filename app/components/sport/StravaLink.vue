<script setup lang="ts">
const { activityId } = defineProps<{ activityId: number }>();
</script>

<template>
    <a
        :href="`https://www.strava.com/activities/${activityId}`"
        target="_blank"
        rel="noopener noreferrer"
        class="relative z-10 text-sm font-semibold underline underline-offset-4 hover:text-accent-ink"
    >
        View on Strava
    </a>
</template>

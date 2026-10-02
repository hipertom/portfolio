<script setup lang="ts">
import type { Tone } from '@/types/tone';
import { toneSurfaceClasses } from '@/utils/toneClasses';

withDefaults(defineProps<{ value: string; unit?: string; label: string; tone?: Tone }>(), { tone: 'white' });
</script>

<template>
    <div class="flex flex-col justify-between gap-6 rounded-3xl p-5 sm:p-6" :class="toneSurfaceClasses[tone]">
        <p class="text-sm font-medium opacity-70">{{ label }}</p>
        <p class="font-display text-4xl font-semibold tracking-tight tabular-nums sm:text-5xl">
            {{ value }}<span v-if="unit" class="ml-1 text-lg font-medium opacity-60">{{ unit }}</span>
        </p>
    </div>
</template>

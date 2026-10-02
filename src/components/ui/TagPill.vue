<script setup lang="ts">
import type { Tone } from '@/types/tone';
import { toneSurfaceClasses } from '@/utils/toneClasses';

withDefaults(defineProps<{ tone?: Tone }>(), { tone: 'white' });
</script>

<template>
    <span
        class="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide"
        :class="toneSurfaceClasses[tone]"
    >
        <slot />
    </span>
</template>

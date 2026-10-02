<script setup lang="ts">
import { Camera } from 'lucide-vue-next';
import type { Component } from 'vue';
import type { Tone } from '@/types/tone';
import { toneSurfaceClasses } from '@/utils/toneClasses';

withDefaults(defineProps<{ tone?: Tone; label?: string; icon?: Component }>(), {
    tone: 'sage',
    label: 'Photo coming soon',
    icon: () => Camera,
});
</script>

<template>
    <div
        class="relative grid place-items-center overflow-hidden"
        :class="toneSurfaceClasses[tone]"
        role="img"
        :aria-label="label"
    >
        <div class="absolute -right-10 -bottom-10 size-40 rounded-full bg-white/30" aria-hidden="true" />
        <div class="absolute -top-6 -left-8 size-24 rounded-full bg-white/20" aria-hidden="true" />
        <div class="relative flex flex-col items-center gap-3 text-ink/60">
            <component :is="icon" class="size-8" stroke-width="1.5" aria-hidden="true" />
            <span class="text-sm font-medium">{{ label }}</span>
        </div>
    </div>
</template>

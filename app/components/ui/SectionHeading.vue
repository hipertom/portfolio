<script setup lang="ts">
import type { Tone } from '~/types/tone';

withDefaults(defineProps<{ id: string; eyebrow: string; title: string; tone?: Tone }>(), { tone: 'butter' });
</script>

<template>
    <header v-reveal class="max-w-2xl">
        <UiTagPill :tone="tone">{{ eyebrow }}</UiTagPill>
        <h2 :id="id" class="mt-4 text-heading font-semibold">{{ title }}</h2>
        <div v-if="$slots.default" class="mt-5 text-lg leading-relaxed text-ink-soft">
            <slot />
        </div>
    </header>
</template>

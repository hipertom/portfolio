<script setup lang="ts">
withDefaults(defineProps<{ id: string; eyebrow: string; title: string; tone?: Tone; wide?: boolean }>(), {
    tone: 'butter',
    wide: false,
});
</script>

<template>
    <header v-reveal :class="!wide && 'max-w-2xl'">
        <div class="flex flex-wrap items-center justify-between gap-4">
            <UiPill :tone="tone">{{ eyebrow }}</UiPill>
            <slot name="action" />
        </div>
        <h2 :id="id" class="mt-4 max-w-2xl text-heading font-semibold">{{ title }}</h2>
        <div v-if="$slots.default" class="mt-5 text-lg leading-relaxed text-ink-soft">
            <slot />
        </div>
    </header>
</template>

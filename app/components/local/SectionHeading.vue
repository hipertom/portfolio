<script setup lang="ts">
withDefaults(defineProps<{ id: string; eyebrow: string; title: string; tone?: Tone }>(), { tone: 'butter' });
</script>

<template>
    <header v-reveal class="max-w-2xl">
        <UiPill :tone="tone">{{ eyebrow }}</UiPill>
        <h2 :id="id" class="mt-4 text-heading font-semibold">{{ title }}</h2>
        <div v-if="$slots.default" class="mt-5 text-lg leading-relaxed text-ink-soft">
            <slot />
        </div>
    </header>
</template>

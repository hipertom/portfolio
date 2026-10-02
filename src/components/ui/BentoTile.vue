<script setup lang="ts">
import type { Component } from 'vue';
import type { Tone } from '@/types/tone';
import { toneSurfaceClasses } from '@/utils/toneClasses';

withDefaults(defineProps<{ tone?: Tone; label?: string; icon?: Component }>(), { tone: 'white' });
</script>

<template>
    <div
        class="flex flex-col rounded-[2rem] p-6 transition duration-500 ease-(--ease-bounce) hover:-translate-y-1 sm:p-7"
        :class="[toneSurfaceClasses[tone], tone === 'white' ? 'shadow-soft ring-1 ring-ink/5' : '']"
    >
        <p v-if="label" class="flex items-center gap-2 text-sm font-medium opacity-70">
            <component :is="icon" v-if="icon" class="size-4" aria-hidden="true" />
            {{ label }}
        </p>
        <slot />
    </div>
</template>

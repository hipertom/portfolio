<script setup lang="ts">
import { useId } from 'vue';

defineProps<{ text: string }>();

const circlePathId = useId();
</script>

<template>
    <div class="grid place-items-center rounded-full bg-accent text-ink shadow-soft" aria-hidden="true">
        <svg viewBox="0 0 100 100" class="col-start-1 row-start-1 size-full animate-[spin_16s_linear_infinite]">
            <defs>
                <path :id="circlePathId" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
            </defs>
            <text class="fill-current font-display text-[10.5px] font-semibold tracking-[0.12em] uppercase">
                <textPath :href="`#${circlePathId}`">{{ text }}</textPath>
            </text>
        </svg>
        <span class="col-start-1 row-start-1 text-2xl">🏃</span>
    </div>
</template>

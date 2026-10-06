<script setup lang="ts">
import type { ProjectArtwork } from '@/types/project';

defineProps<{ artwork: ProjectArtwork }>();

const groundLine = 186;

const arches = [
    { x: 58, width: 52, height: 96, fillClass: 'fill-white' },
    { x: 122, width: 64, height: 128, fillClass: 'fill-butter' },
    { x: 198, width: 52, height: 82, fillClass: 'fill-none stroke-ink' },
    { x: 262, width: 64, height: 112, fillClass: 'fill-white' },
    { x: 338, width: 44, height: 70, fillClass: 'fill-ink' },
];

function archPath({ x, width, height }: { x: number; width: number; height: number }): string {
    const radius = width / 2;
    const shoulder = groundLine - height + radius;

    return `M ${x} ${groundLine} V ${shoulder} A ${radius} ${radius} 0 0 1 ${x + width} ${shoulder} V ${groundLine} Z`;
}

const elevationLine =
    'M -10 172 C 30 168, 50 150, 80 152 S 120 128, 150 120 S 190 62, 222 58 S 262 104, 292 98 S 340 132, 410 126';
</script>

<template>
    <svg
        viewBox="0 0 400 225"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
    >
        <g v-if="artwork === 'overlap'">
            <circle cx="164" cy="112" r="68" class="fill-white" />
            <circle cx="236" cy="112" r="68" class="stroke-ink" stroke-width="3" stroke-dasharray="2 9" />
            <circle cx="200" cy="56" r="7" class="fill-accent" />
            <g class="fill-ink/25">
                <circle v-for="column in 4" :key="`dot-${column}`" :cx="22 + column * 14" cy="196" r="2.5" />
                <circle v-for="column in 4" :key="`dot-row-${column}`" :cx="22 + column * 14" cy="182" r="2.5" />
            </g>
        </g>

        <g v-else-if="artwork === 'arches'">
            <circle cx="330" cy="54" r="22" class="fill-white" />
            <path v-for="arch in arches" :key="arch.x" :d="archPath(arch)" :class="arch.fillClass" stroke-width="3" />
            <rect x="206" y="150" width="10" height="16" rx="5" class="fill-accent" />
            <path :d="`M 24 ${groundLine} H 376`" class="stroke-ink" stroke-width="3" />
        </g>

        <g v-else-if="artwork === 'squiggle'">
            <circle cx="292" cy="96" r="58" class="fill-white" />
            <circle cx="292" cy="96" r="84" class="stroke-ink/20" stroke-width="2" />
            <path
                d="M 44 150 C 92 102, 132 102, 170 132 S 250 176, 300 120 S 350 84, 372 96"
                class="stroke-accent"
                stroke-width="10"
            />
            <circle cx="72" cy="62" r="6" class="fill-ink" />
            <circle cx="96" cy="62" r="6" class="stroke-ink" stroke-width="2.5" />
        </g>

        <g v-else-if="artwork === 'elevation'">
            <circle cx="96" cy="66" r="26" class="fill-peach" />
            <path :d="`${elevationLine} V 240 H -10 Z`" class="fill-sage" />
            <path :d="elevationLine" class="stroke-ink" stroke-width="3" />
            <path d="M 222 58 V 22" class="stroke-ink" stroke-width="3" />
            <path d="M 224 22 L 252 30 L 224 38 Z" class="fill-accent" />
            <path d="M 34 206 H 366" class="stroke-ink/20" stroke-width="2" stroke-dasharray="1 10" />
        </g>
    </svg>
</template>

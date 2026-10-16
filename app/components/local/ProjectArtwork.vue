<script setup lang="ts">
import type { ProjectArtwork } from '~/types/project';

defineProps<{ artwork: ProjectArtwork }>();

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
        <g v-if="artwork === 'squiggle'">
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

        <g v-else-if="artwork === 'parcels'">
            <circle cx="300" cy="52" r="20" class="fill-white" />
            <path
                d="M 40 184 C 120 184, 140 122, 214 128 S 312 168, 352 104"
                class="stroke-ink/30"
                stroke-width="3"
                stroke-dasharray="1 10"
            />
            <rect x="70" y="118" width="84" height="66" rx="10" class="fill-white stroke-ink" stroke-width="3" />
            <path d="M 112 118 V 184" class="stroke-ink" stroke-width="3" />
            <rect x="88" y="80" width="54" height="38" rx="8" class="fill-butter stroke-ink" stroke-width="3" />
            <path d="M 352 104 L 342.4 85.2 A 12 12 0 1 1 361.6 85.2 Z" class="fill-accent" />
            <circle cx="352" cy="78" r="4" class="fill-white" />
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

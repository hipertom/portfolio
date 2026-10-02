<script setup lang="ts">
import BrandIcon from '@/components/ui/BrandIcon.vue';
import { socialLinks } from '@/data/socialLinks';

withDefaults(defineProps<{ inverted?: boolean }>(), { inverted: false });
</script>

<template>
    <ul class="flex flex-wrap gap-2">
        <li v-for="link in socialLinks" :key="link.brand">
            <a
                :href="link.url"
                target="_blank"
                rel="noopener"
                class="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ring-1 transition duration-300 ease-(--ease-bounce) hover:-translate-y-0.5"
                :class="
                    inverted
                        ? 'text-cream ring-cream/20 hover:bg-cream hover:text-ink'
                        : 'bg-white/70 text-ink ring-ink/10 hover:bg-ink hover:text-cream'
                "
            >
                <BrandIcon :brand="link.brand" class="size-4 transition-transform group-hover:rotate-[-8deg]" />
                {{ link.label }}
            </a>
        </li>
    </ul>
</template>

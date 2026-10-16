<script setup lang="ts">
import { socialLinks } from '~/data/socialLinks';

const { inverted = false } = defineProps<{ inverted?: boolean }>();
</script>

<template>
    <ul class="flex flex-wrap gap-2">
        <li v-for="link in socialLinks" :key="link.brand">
            <UiButton
                :to="link.url"
                target="_blank"
                :variant="inverted ? 'inverted' : 'secondary'"
                size="sm"
                :icon="brandIcons[link.brand]"
            >
                {{ link.label }}
            </UiButton>
        </li>
    </ul>
</template>

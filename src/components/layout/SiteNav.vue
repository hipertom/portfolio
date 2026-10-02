<script setup lang="ts">
import { useActiveSection } from '@/composables/useActiveSection';
import { heroSectionId, navigationItems } from '@/data/navigation';

const { activeSectionId } = useActiveSection([heroSectionId, ...navigationItems.map(({ sectionId }) => sectionId)]);
</script>

<template>
    <nav aria-label="Main" class="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <div
            class="flex items-center gap-1 rounded-full bg-cream/80 p-1.5 shadow-soft ring-1 ring-ink/10 backdrop-blur-md"
        >
            <a
                :href="`#${heroSectionId}`"
                class="hidden size-9 place-items-center rounded-full bg-ink font-display text-sm font-bold text-cream transition-transform duration-300 ease-(--ease-bounce) hover:rotate-[-8deg] sm:grid"
                aria-label="Back to top"
            >
                TG
            </a>
            <a
                v-for="item in navigationItems"
                :key="item.sectionId"
                :href="`#${item.sectionId}`"
                :aria-current="activeSectionId === item.sectionId ? 'location' : undefined"
                class="rounded-full px-3 py-2 text-[0.8125rem] font-medium transition-colors duration-300 sm:px-4 sm:text-sm"
                :class="
                    activeSectionId === item.sectionId
                        ? 'bg-ink text-cream'
                        : 'text-ink-soft hover:bg-ink/5 hover:text-ink'
                "
            >
                {{ item.label }}
            </a>
        </div>
    </nav>
</template>

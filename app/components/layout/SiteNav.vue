<script setup lang="ts">
import { useResizeObserver } from '@vueuse/core';
import type { ComponentPublicInstance } from 'vue';
import { heroSectionId, navigationItems } from '~/data/navigation';

// The active item is an ink pill that slides to the current section, like UiSegmented.
// Until the items are measured (server render, first paint) the active item carries the pill itself.
const { activeSectionId } = useActiveSection([heroSectionId, ...navigationItems.map(({ sectionId }) => sectionId)]);

const container = useTemplateRef<HTMLDivElement>('container');
const links = new Map<string, HTMLAnchorElement>();
const indicator = ref<{ left: number; top: number; width: number; height: number } | null>(null);
const isIndicatorVisible = ref(false);

function linkRef(sectionId: string) {
    return (element: Element | ComponentPublicInstance | null) => {
        if (element instanceof HTMLAnchorElement) {
            links.set(sectionId, element);
        } else {
            links.delete(sectionId);
        }
    };
}

function isActive(sectionId: string) {
    return activeSectionId.value === sectionId;
}

function measureIndicator() {
    const activeLink = activeSectionId.value ? links.get(activeSectionId.value) : undefined;

    // No active section, or its item is hidden (the monogram on small screens): fade the pill out where it is.
    if (!activeLink || activeLink.offsetWidth === 0) {
        isIndicatorVisible.value = false;

        return;
    }

    indicator.value = {
        left: activeLink.offsetLeft,
        top: activeLink.offsetTop,
        width: activeLink.offsetWidth,
        height: activeLink.offsetHeight,
    };
    isIndicatorVisible.value = true;
}

onMounted(measureIndicator);
useResizeObserver(container, measureIndicator);
watch(activeSectionId, measureIndicator, { flush: 'post' });
</script>

<template>
    <nav aria-label="Main" class="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <div
            ref="container"
            class="relative flex items-center gap-1 rounded-full bg-cream/80 p-1.5 shadow-soft ring-1 ring-ink/10 backdrop-blur-md"
        >
            <span
                v-if="indicator"
                class="absolute top-0 left-0 rounded-full bg-ink transition-[translate,width,height,opacity] duration-500 ease-gentle"
                :class="isIndicatorVisible ? 'opacity-100' : 'opacity-0'"
                :style="{
                    width: `${indicator.width}px`,
                    height: `${indicator.height}px`,
                    translate: `${indicator.left}px ${indicator.top}px`,
                }"
                aria-hidden="true"
            />
            <a
                :ref="linkRef(heroSectionId)"
                :href="`#${heroSectionId}`"
                :aria-current="isActive(heroSectionId) ? 'location' : undefined"
                class="relative hidden size-9 place-items-center rounded-full font-display text-sm font-bold transition-[color,background-color,rotate] duration-300 ease-(--ease-bounce) hover:rotate-[-8deg] sm:grid"
                :class="[
                    isActive(heroSectionId) ? 'text-cream' : 'text-ink-soft hover:bg-ink/5 hover:text-ink',
                    isActive(heroSectionId) && !indicator && 'bg-ink',
                ]"
                aria-label="Back to top"
            >
                TG
            </a>
            <a
                v-for="item in navigationItems"
                :key="item.sectionId"
                :ref="linkRef(item.sectionId)"
                :href="`#${item.sectionId}`"
                :aria-current="isActive(item.sectionId) ? 'location' : undefined"
                class="relative rounded-full px-3 py-2 text-[0.8125rem] font-medium transition-colors duration-300 ease-gentle sm:px-4 sm:text-sm"
                :class="[
                    isActive(item.sectionId) ? 'text-cream' : 'text-ink-soft hover:bg-ink/5 hover:text-ink',
                    isActive(item.sectionId) && !indicator && 'bg-ink',
                ]"
            >
                {{ item.label }}
            </a>
        </div>
    </nav>
</template>

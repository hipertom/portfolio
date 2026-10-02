import { onMounted, ref, shallowRef } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

export function useActiveSection(sectionIds: string[]) {
    const activeSectionId = ref<string | null>(null);
    const sectionElements = shallowRef<HTMLElement[]>([]);

    onMounted(() => {
        sectionElements.value = sectionIds
            .map((sectionId) => document.getElementById(sectionId))
            .filter((element): element is HTMLElement => element !== null);
    });

    useIntersectionObserver(
        sectionElements,
        (entries) => {
            const visibleEntry = entries.find((entry) => entry.isIntersecting);

            if (!visibleEntry) {
                return;
            }

            activeSectionId.value = visibleEntry.target.id;
        },
        { rootMargin: '-45% 0px -50% 0px' },
    );

    return { activeSectionId };
}

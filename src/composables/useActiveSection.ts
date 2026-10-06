import { onMounted, ref } from 'vue';
import { useEventListener, useThrottleFn } from '@vueuse/core';

export function useActiveSection(sectionIds: string[], probeLineRatio = 0.4) {
    const activeSectionId = ref<string | null>(null);

    function updateActiveSection() {
        const probeLine = window.innerHeight * probeLineRatio;
        const activeSection = sectionIds
            .map((sectionId) => document.getElementById(sectionId))
            .find((section) => {
                if (!section) {
                    return false;
                }

                const { top, bottom } = section.getBoundingClientRect();

                return top <= probeLine && bottom > probeLine;
            });

        activeSectionId.value = activeSection?.id ?? null;
    }

    const throttledUpdate = useThrottleFn(updateActiveSection, 100, true);

    useEventListener(window, 'scroll', throttledUpdate, { passive: true });
    useEventListener(window, 'resize', throttledUpdate, { passive: true });
    onMounted(updateActiveSection);

    return { activeSectionId };
}

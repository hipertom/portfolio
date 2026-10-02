import { onMounted, ref, shallowRef } from 'vue';
import { sportOverviewProvider } from '@/services/sport';
import type { SportOverviewProvider } from '@/services/sport/SportOverviewProvider';
import type { SportOverview } from '@/types/sport';

export function useSportOverview(provider: SportOverviewProvider = sportOverviewProvider) {
    const overview = shallowRef<SportOverview | null>(null);
    const isLoading = ref(true);
    const hasError = ref(false);

    async function loadOverview() {
        isLoading.value = true;
        hasError.value = false;

        try {
            overview.value = await provider.fetchSportOverview();
        } catch {
            hasError.value = true;
        } finally {
            isLoading.value = false;
        }
    }

    onMounted(loadOverview);

    return { overview, isLoading, hasError, reload: loadOverview };
}

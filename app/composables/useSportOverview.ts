import type { SportOverview } from '#shared/types/sport';

export function useSportOverview() {
    const {
        data: overview,
        status,
        error,
        refresh,
    } = useFetch<SportOverview>('/api/sport-overview', {
        key: 'sport-overview',
    });

    const isLoading = computed(() => status.value === 'pending');
    const hasError = computed(() => Boolean(error.value));

    return { overview, isLoading, hasError, reload: refresh };
}

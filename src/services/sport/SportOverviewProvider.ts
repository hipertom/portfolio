import type { SportOverview } from '@/types/sport';

export interface SportOverviewProvider {
    fetchSportOverview(): Promise<SportOverview>;
}

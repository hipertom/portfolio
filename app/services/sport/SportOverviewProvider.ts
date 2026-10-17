import type { SportOverview } from '#shared/types/sport';

export interface SportOverviewProvider {
    fetchSportOverview(): Promise<SportOverview>;
}

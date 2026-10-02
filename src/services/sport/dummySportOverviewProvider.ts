import { createDummySportOverview } from '@/data/dummySportOverview';
import type { SportOverviewProvider } from '@/services/sport/SportOverviewProvider';

const simulatedLatencyInMilliseconds = 500;

export const dummySportOverviewProvider: SportOverviewProvider = {
    async fetchSportOverview() {
        await new Promise((resolve) => setTimeout(resolve, simulatedLatencyInMilliseconds));

        return createDummySportOverview();
    },
};

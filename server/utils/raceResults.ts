import type { Activity } from '#shared/types/sport';
import { parseOfficialTimeInSeconds } from '#shared/utils/officialTime';
import { fetchStravaActivityDescription } from './stravaApi';

// The description is only part of the detailed activity, so this costs one request per race. A race whose description
// cannot be read keeps its Strava time.
export async function addOfficialTimes(accessToken: string, races: Activity[]): Promise<Activity[]> {
    return await Promise.all(
        races.map(async (race) => {
            const description = await fetchStravaActivityDescription(accessToken, race.id).catch(() => null);

            return { ...race, officialTimeInSeconds: parseOfficialTimeInSeconds(description) };
        }),
    );
}

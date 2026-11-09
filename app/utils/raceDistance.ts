// Race distances measured by a watch run a little long or short. Within the tolerance of a standard race distance the
// race counts as that distance and gets its name; the nearest one wins where two overlap. Other distances keep the
// measured distance and have no name.
export interface RaceDistance {
    distanceInMeters: number;
    name: string | null;
}

const standardRaceDistances: RaceDistance[] = [
    { distanceInMeters: 5_000, name: '5K' },
    { distanceInMeters: 8_046.72, name: '5 miles' },
    { distanceInMeters: 10_000, name: '10K' },
    { distanceInMeters: 15_000, name: '15K' },
    { distanceInMeters: 16_093.44, name: '10 miles' },
    { distanceInMeters: 20_000, name: '20K' },
    { distanceInMeters: 21_097.5, name: 'Half marathon' },
    { distanceInMeters: 30_000, name: '30K' },
    { distanceInMeters: 42_195, name: 'Marathon' },
];

const tolerance = 0.05;

function relativeDifference(measuredInMeters: number, standardInMeters: number): number {
    return Math.abs(measuredInMeters - standardInMeters) / standardInMeters;
}

export function getRaceDistance(measuredInMeters: number): RaceDistance {
    const nearestStandardDistance = standardRaceDistances
        .filter(({ distanceInMeters }) => relativeDifference(measuredInMeters, distanceInMeters) <= tolerance)
        .sort(
            (first, second) =>
                relativeDifference(measuredInMeters, first.distanceInMeters) -
                relativeDifference(measuredInMeters, second.distanceInMeters),
        )[0];

    return nearestStandardDistance ?? { distanceInMeters: measuredInMeters, name: null };
}

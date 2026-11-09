// Race distances measured by a watch run a little long or short. Within the tolerance of a standard race distance the
// race counts as that distance; the nearest one wins where two overlap. The label only names distances whose number
// says too little on its own (miles, half and full marathon).
export interface RaceDistance {
    distanceInMeters: number;
    label: string | null;
}

const standardRaceDistances: RaceDistance[] = [
    { distanceInMeters: 5_000, label: null },
    { distanceInMeters: 8_046.72, label: '5 miles' },
    { distanceInMeters: 10_000, label: null },
    { distanceInMeters: 15_000, label: null },
    { distanceInMeters: 16_093.44, label: '10 miles' },
    { distanceInMeters: 20_000, label: null },
    { distanceInMeters: 21_097.5, label: 'Half marathon' },
    { distanceInMeters: 30_000, label: null },
    { distanceInMeters: 42_195, label: 'Marathon' },
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

    return nearestStandardDistance ?? { distanceInMeters: measuredInMeters, label: null };
}

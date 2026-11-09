import { formatKilometres } from './formatDistance';

// Race distances measured by a watch run a little long or short. Within the tolerance of a standard race distance the
// race counts as that distance; the nearest one wins where two overlap. The headline is a large value with a small unit
// behind it, like the kilometres of other distances: "10K", "10 miles", "Half marathon".
interface RaceDistanceHeadline {
    value: string;
    unit: string | null;
}

export interface RaceDistance {
    distanceInMeters: number;
    headline: RaceDistanceHeadline;
}

const standardRaceDistances: RaceDistance[] = [
    { distanceInMeters: 5_000, headline: { value: '5K', unit: null } },
    { distanceInMeters: 8_046.72, headline: { value: '5', unit: 'miles' } },
    { distanceInMeters: 10_000, headline: { value: '10K', unit: null } },
    { distanceInMeters: 15_000, headline: { value: '15K', unit: null } },
    { distanceInMeters: 16_093.44, headline: { value: '10', unit: 'miles' } },
    { distanceInMeters: 20_000, headline: { value: '20K', unit: null } },
    { distanceInMeters: 21_097.5, headline: { value: 'Half', unit: 'marathon' } },
    { distanceInMeters: 30_000, headline: { value: '30K', unit: null } },
    { distanceInMeters: 42_195, headline: { value: 'Full', unit: 'marathon' } },
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

    return (
        nearestStandardDistance ?? {
            distanceInMeters: measuredInMeters,
            headline: { value: formatKilometres(measuredInMeters), unit: 'km' },
        }
    );
}

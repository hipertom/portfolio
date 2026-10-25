const standardRaceDistances = [
    { name: 'Marathon', distanceInMeters: 42_195 },
    { name: 'Half marathon', distanceInMeters: 21_097.5 },
    { name: '10K', distanceInMeters: 10_000 },
    { name: '5K', distanceInMeters: 5_000 },
];

const gpsTolerance = 0.03;

export function getRaceDistanceName(distanceInMeters: number): string | null {
    const standardDistance = standardRaceDistances.find(
        (raceDistance) =>
            Math.abs(distanceInMeters - raceDistance.distanceInMeters) / raceDistance.distanceInMeters <= gpsTolerance,
    );

    return standardDistance?.name ?? null;
}

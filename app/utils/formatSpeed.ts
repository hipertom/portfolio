export function formatSpeed(distanceInMeters: number, movingTimeInSeconds: number): string {
    if (movingTimeInSeconds === 0) {
        return '–';
    }

    const kilometresPerHour = distanceInMeters / 1000 / (movingTimeInSeconds / 3600);

    return `${new Intl.NumberFormat('en-GB', { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(kilometresPerHour)} km/h`;
}

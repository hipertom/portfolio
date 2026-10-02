import { formatClockTime } from '@/utils/formatDuration';

export function formatPace(distanceInMeters: number, movingTimeInSeconds: number): string {
    if (distanceInMeters === 0) {
        return '–';
    }

    const secondsPerKilometre = movingTimeInSeconds / (distanceInMeters / 1000);

    return `${formatClockTime(secondsPerKilometre)} /km`;
}

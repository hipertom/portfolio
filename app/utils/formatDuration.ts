function splitSeconds(totalSeconds: number) {
    return {
        hours: Math.floor(totalSeconds / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: Math.round(totalSeconds % 60),
    };
}

export function formatDuration(totalSeconds: number): string {
    const { hours, minutes } = splitSeconds(totalSeconds);

    if (hours === 0) {
        return `${minutes}m`;
    }

    return minutes === 0 ? `${hours}h` : `${hours}h ${minutes}m`;
}

export function formatClockTime(totalSeconds: number): string {
    const { hours, minutes, seconds } = splitSeconds(totalSeconds);
    const paddedSeconds = String(seconds).padStart(2, '0');

    if (hours === 0) {
        return `${minutes}:${paddedSeconds}`;
    }

    return `${hours}:${String(minutes).padStart(2, '0')}:${paddedSeconds}`;
}

export function formatHours(totalSeconds: number): string {
    return new Intl.NumberFormat('en-GB', { maximumFractionDigits: 0 }).format(totalSeconds / 3600);
}

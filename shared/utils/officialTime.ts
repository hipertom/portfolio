// Reads the official race time from a Strava description: an "Official time:" line followed by the time on the same
// line or the next one. Two parts are minutes and seconds (52:23), three parts hours, minutes and seconds (2:06:26).
const officialTimePattern = /official time:[ \t]*\r?\n?[ \t]*(\d{1,2}(?::\d{2}){1,2})\b/i;

export function parseOfficialTimeInSeconds(description: string | null | undefined): number | null {
    const time = description?.match(officialTimePattern)?.[1];

    if (!time) {
        return null;
    }

    return time
        .split(':')
        .map(Number)
        .reduce((seconds, part) => seconds * 60 + part, 0);
}

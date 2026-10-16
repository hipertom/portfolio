export function formatKilometres(distanceInMeters: number, fractionDigits = 1): string {
    const kilometres = distanceInMeters / 1000;

    return new Intl.NumberFormat('en-GB', { maximumFractionDigits: fractionDigits }).format(kilometres);
}

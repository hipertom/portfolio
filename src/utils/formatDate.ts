const millisecondsPerDay = 24 * 60 * 60 * 1000;
const relativeDayFormatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
const shortDateFormatter = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
const dayMonthFormatter = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short' });
const monthYearFormatter = new Intl.DateTimeFormat('en-GB', { month: 'short', year: 'numeric' });

function startOfDay(date: Date): number {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
}

export function formatRelativeDay(isoDate: string, today = new Date()): string {
    const date = new Date(isoDate);
    const daysAgo = Math.round((startOfDay(today) - startOfDay(date)) / millisecondsPerDay);

    if (daysAgo < 7) {
        return relativeDayFormatter.format(-daysAgo, 'day');
    }

    return dayMonthFormatter.format(date);
}

export function formatShortDate(isoDate: string): string {
    return shortDateFormatter.format(new Date(isoDate));
}

export function formatMonthYear(yearMonth: string): string {
    return monthYearFormatter.format(new Date(`${yearMonth}-01`));
}

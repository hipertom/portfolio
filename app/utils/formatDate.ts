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

function pluralise(count: number, singular: string, plural: string): string {
    return `${count} ${count === 1 ? singular : plural}`;
}

export function formatTenure(startYearMonth: string, endYearMonth: string | null, today = new Date()): string {
    const [startYear = 0, startMonth = 1] = startYearMonth.split('-').map(Number);
    const [endYear, endMonth] = endYearMonth
        ? endYearMonth.split('-').map(Number)
        : [today.getFullYear(), today.getMonth() + 1];
    const totalMonths = Math.max(
        1,
        ((endYear ?? startYear) - startYear) * 12 + ((endMonth ?? startMonth) - startMonth),
    );
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years === 0) {
        return pluralise(months, 'mo', 'mos');
    }

    if (months === 0) {
        return pluralise(years, 'yr', 'yrs');
    }

    return `${pluralise(years, 'yr', 'yrs')} ${pluralise(months, 'mo', 'mos')}`;
}

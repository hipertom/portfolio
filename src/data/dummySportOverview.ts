import type { Activity, SportOverview } from '@/types/sport';

function daysAgo(days: number, hour: number): string {
    const date = new Date();
    date.setDate(date.getDate() - days);
    date.setHours(hour, 0, 0, 0);

    return date.toISOString();
}

function createActivity(activity: Omit<Activity, 'elevationGainInMeters' | 'isRace'> & Partial<Activity>): Activity {
    return { elevationGainInMeters: 0, isRace: false, ...activity };
}

export function createDummySportOverview(): SportOverview {
    return {
        totals: {
            month: {
                runDistanceInMeters: 86_400,
                activeTimeInSeconds: 18 * 3600 + 25 * 60,
                padelSessionCount: 6,
                strengthSessionCount: 8,
            },
            year: {
                runDistanceInMeters: 912_300,
                activeTimeInSeconds: 196 * 3600 + 40 * 60,
                padelSessionCount: 54,
                strengthSessionCount: 88,
            },
        },
        recentRaces: [
            createActivity({
                id: 101,
                name: 'Autumn 10K',
                sportType: 'Run',
                startDate: daysAgo(24, 10),
                distanceInMeters: 10_000,
                movingTimeInSeconds: 47 * 60 + 52,
                isRace: true,
            }),
            createActivity({
                id: 102,
                name: 'Spring Half Marathon',
                sportType: 'Run',
                startDate: daysAgo(152, 11),
                distanceInMeters: 21_097,
                movingTimeInSeconds: 3600 + 49 * 60 + 30,
                isRace: true,
            }),
            createActivity({
                id: 103,
                name: 'Summer Night 5K',
                sportType: 'Run',
                startDate: daysAgo(86, 21),
                distanceInMeters: 5_000,
                movingTimeInSeconds: 22 * 60 + 41,
                isRace: true,
            }),
        ],
        recentActivities: [
            createActivity({
                id: 1,
                name: 'Easy morning run',
                sportType: 'Run',
                startDate: daysAgo(0, 7),
                distanceInMeters: 8_420,
                movingTimeInSeconds: 44 * 60 + 10,
                elevationGainInMeters: 24,
            }),
            createActivity({
                id: 2,
                name: 'Padel with the boys',
                sportType: 'Padel',
                startDate: daysAgo(1, 20),
                distanceInMeters: 0,
                movingTimeInSeconds: 90 * 60,
            }),
            createActivity({
                id: 3,
                name: 'Upper body day',
                sportType: 'WeightTraining',
                startDate: daysAgo(2, 18),
                distanceInMeters: 0,
                movingTimeInSeconds: 58 * 60,
            }),
            createActivity({
                id: 4,
                name: 'Intervals 6 × 800m',
                sportType: 'Run',
                startDate: daysAgo(3, 19),
                distanceInMeters: 10_200,
                movingTimeInSeconds: 52 * 60 + 30,
                elevationGainInMeters: 18,
            }),
            createActivity({
                id: 5,
                name: 'Evening walk',
                sportType: 'Walk',
                startDate: daysAgo(5, 20),
                distanceInMeters: 5_200,
                movingTimeInSeconds: 58 * 60,
            }),
            createActivity({
                id: 6,
                name: 'Long Sunday run',
                sportType: 'TrailRun',
                startDate: daysAgo(7, 9),
                distanceInMeters: 18_600,
                movingTimeInSeconds: 3600 + 42 * 60 + 5,
                elevationGainInMeters: 112,
            }),
        ],
    };
}

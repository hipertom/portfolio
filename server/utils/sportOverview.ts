import type { Activity, SportOverview, SportTotals } from '#shared/types/sport';
import { getSportCategory } from '#shared/utils/sportCategory';
import type { StravaSummaryActivity } from './stravaApi';

const siteTimeZone = 'Europe/Amsterdam';
const recentRaceCount = 3;
const recentActivityCount = 6;
const raceWorkoutTypes = new Set([1, 11]);

interface DatedActivity {
    activity: Activity;
    localDate: string;
}

export function startOfPreviousYear(now = new Date()): Date {
    return new Date(Date.UTC(now.getUTCFullYear() - 1, 0, 1));
}

export function buildSportOverview(stravaActivities: StravaSummaryActivity[], now = new Date()): SportOverview {
    const datedActivities = stravaActivities
        .map(toDatedActivity)
        .sort((first, second) => second.activity.startDate.localeCompare(first.activity.startDate));
    const currentMonth = localYearMonth(now);
    const currentYear = currentMonth.slice(0, 4);
    const activities = datedActivities.map(({ activity }) => activity);

    return {
        totals: {
            month: sumTotals(datedActivities.filter(({ localDate }) => localDate.startsWith(currentMonth))),
            year: sumTotals(datedActivities.filter(({ localDate }) => localDate.startsWith(currentYear))),
        },
        recentRaces: activities.filter(({ isRace }) => isRace).slice(0, recentRaceCount),
        recentActivities: activities.slice(0, recentActivityCount),
    };
}

function toDatedActivity(stravaActivity: StravaSummaryActivity): DatedActivity {
    return {
        activity: {
            id: stravaActivity.id,
            name: stravaActivity.name,
            sportType: stravaActivity.sport_type,
            startDate: stravaActivity.start_date,
            distanceInMeters: stravaActivity.distance,
            movingTimeInSeconds: stravaActivity.moving_time,
            elevationGainInMeters: stravaActivity.total_elevation_gain,
            isRace: raceWorkoutTypes.has(stravaActivity.workout_type ?? -1),
        },
        localDate: stravaActivity.start_date_local,
    };
}

function sumTotals(datedActivities: DatedActivity[]): SportTotals {
    return datedActivities.reduce<SportTotals>(
        (totals, { activity }) => {
            const category = getSportCategory(activity.sportType);

            return {
                runDistanceInMeters:
                    totals.runDistanceInMeters + (category === 'running' ? activity.distanceInMeters : 0),
                activeTimeInSeconds: totals.activeTimeInSeconds + activity.movingTimeInSeconds,
                padelSessionCount: totals.padelSessionCount + (category === 'padel' ? 1 : 0),
                strengthSessionCount: totals.strengthSessionCount + (category === 'strength' ? 1 : 0),
            };
        },
        { runDistanceInMeters: 0, activeTimeInSeconds: 0, padelSessionCount: 0, strengthSessionCount: 0 },
    );
}

function localYearMonth(date: Date): string {
    return new Intl.DateTimeFormat('en-CA', { timeZone: siteTimeZone, year: 'numeric', month: '2-digit' }).format(date);
}

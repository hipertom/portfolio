import { describe, expect, it } from 'vitest';
import { buildSportOverview, startOfPreviousYear } from './sportOverview';
import type { StravaSummaryActivity } from './stravaApi';

const now = new Date('2026-10-17T12:00:00Z');

function stravaActivity(overrides: Partial<StravaSummaryActivity>): StravaSummaryActivity {
    return {
        id: 1,
        name: 'Morning run',
        sport_type: 'Run',
        start_date: '2026-10-10T07:00:00Z',
        start_date_local: '2026-10-10T09:00:00Z',
        distance: 10_000,
        moving_time: 3_000,
        total_elevation_gain: 20,
        workout_type: null,
        ...overrides,
    };
}

describe('buildSportOverview', () => {
    it('maps Strava activities to the sport overview contract', () => {
        const { recentActivities } = buildSportOverview([stravaActivity({ id: 42, name: 'Easy run' })], now);

        expect(recentActivities).toEqual([
            {
                id: 42,
                name: 'Easy run',
                sportType: 'Run',
                startDate: '2026-10-10T07:00:00Z',
                distanceInMeters: 10_000,
                movingTimeInSeconds: 3_000,
                elevationGainInMeters: 20,
                isRace: false,
            },
        ]);
    });

    it('lists the latest six activities, newest first', () => {
        const activities = Array.from({ length: 8 }, (_, index) =>
            stravaActivity({ id: index + 1, start_date: `2026-10-0${index + 1}T07:00:00Z` }),
        );

        const { recentActivities } = buildSportOverview(activities, now);

        expect(recentActivities.map(({ id }) => id)).toEqual([8, 7, 6, 5, 4, 3]);
    });

    it('treats run and ride races as races and keeps the latest three', () => {
        const activities = [
            stravaActivity({ id: 1, workout_type: 1, start_date: '2026-01-01T07:00:00Z' }),
            stravaActivity({ id: 2, workout_type: 11, sport_type: 'Ride', start_date: '2026-02-01T07:00:00Z' }),
            stravaActivity({ id: 3, workout_type: 2, start_date: '2026-03-01T07:00:00Z' }),
            stravaActivity({ id: 4, workout_type: 1, start_date: '2026-04-01T07:00:00Z' }),
            stravaActivity({ id: 5, workout_type: 1, start_date: '2025-05-01T07:00:00Z' }),
        ];

        const { recentRaces } = buildSportOverview(activities, now);

        expect(recentRaces.map(({ id }) => id)).toEqual([4, 2, 1]);
    });

    it('sums monthly and yearly totals by local date', () => {
        const activities = [
            stravaActivity({ id: 1, distance: 5_000, moving_time: 1_500 }),
            stravaActivity({ id: 2, sport_type: 'TrailRun', distance: 12_000, moving_time: 4_000 }),
            stravaActivity({ id: 3, sport_type: 'Pickleball', distance: 0, moving_time: 5_400 }),
            stravaActivity({ id: 4, sport_type: 'WeightTraining', distance: 0, moving_time: 3_600 }),
            stravaActivity({ id: 5, sport_type: 'Walk', distance: 4_000, moving_time: 2_400 }),
            stravaActivity({
                id: 6,
                start_date: '2026-09-30T22:30:00Z',
                start_date_local: '2026-10-01T00:30:00Z',
                distance: 1_000,
                moving_time: 300,
            }),
            stravaActivity({
                id: 7,
                start_date: '2026-03-10T07:00:00Z',
                start_date_local: '2026-03-10T08:00:00Z',
                distance: 21_097,
                moving_time: 6_570,
            }),
            stravaActivity({
                id: 8,
                start_date: '2025-12-31T10:00:00Z',
                start_date_local: '2025-12-31T11:00:00Z',
                distance: 8_000,
            }),
        ];

        const { totals } = buildSportOverview(activities, now);

        expect(totals.month).toEqual({
            runDistanceInMeters: 18_000,
            activeTimeInSeconds: 17_200,
            padelSessionCount: 1,
            strengthSessionCount: 1,
        });
        expect(totals.year).toEqual({
            runDistanceInMeters: 39_097,
            activeTimeInSeconds: 23_770,
            padelSessionCount: 1,
            strengthSessionCount: 1,
        });
    });
});

describe('startOfPreviousYear', () => {
    it('returns the first of January of the previous year in UTC', () => {
        expect(startOfPreviousYear(now).toISOString()).toBe('2025-01-01T00:00:00.000Z');
    });
});

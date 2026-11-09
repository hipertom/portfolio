export type SportCategory = 'running' | 'padel' | 'strength' | 'cycling' | 'walking' | 'other';

export type TotalsPeriod = 'month' | 'year';

export interface Activity {
    id: number;
    name: string;
    sportType: string;
    startDate: string;
    distanceInMeters: number;
    movingTimeInSeconds: number;
    elevationGainInMeters: number;
    averageHeartRate: number | null;
    isRace: boolean;
    /** The official race time from the Strava description; only filled in for recent races. */
    officialTimeInSeconds: number | null;
}

export interface SportTotals {
    runDistanceInMeters: number;
    activeTimeInSeconds: number;
    padelSessionCount: number;
    strengthSessionCount: number;
}

export interface SportOverview {
    totals: Record<TotalsPeriod, SportTotals>;
    recentRaces: Activity[];
    recentActivities: Activity[];
}

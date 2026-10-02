export type SportType = 'Run' | 'TrailRun' | 'Padel' | 'WeightTraining' | 'Workout';

export type SportCategory = 'running' | 'padel' | 'strength';

export type TotalsPeriod = 'month' | 'year';

export interface Activity {
    id: number;
    name: string;
    sportType: SportType;
    startDate: string;
    distanceInMeters: number;
    movingTimeInSeconds: number;
    elevationGainInMeters: number;
    isRace: boolean;
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

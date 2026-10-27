import type { SportCategory } from '#shared/types/sport';

const sportCategoryBySportType: Record<string, SportCategory> = {
    Run: 'running',
    TrailRun: 'running',
    VirtualRun: 'running',
    Padel: 'padel',
    Pickleball: 'padel',
    WeightTraining: 'strength',
    Workout: 'strength',
    Crossfit: 'strength',
    Ride: 'cycling',
    GravelRide: 'cycling',
    MountainBikeRide: 'cycling',
    EBikeRide: 'cycling',
    VirtualRide: 'cycling',
    Walk: 'walking',
    Hike: 'walking',
};

export function getSportCategory(sportType: string): SportCategory {
    return sportCategoryBySportType[sportType] ?? 'other';
}

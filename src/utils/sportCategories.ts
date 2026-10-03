import type { SportCategory, SportType } from '@/types/sport';
import type { Tone } from '@/types/tone';

interface SportCategoryDetails {
    label: string;
    tone: Tone;
}

const sportCategoryBySportType: Record<SportType, SportCategory> = {
    Run: 'running',
    TrailRun: 'running',
    Padel: 'padel',
    WeightTraining: 'strength',
    Workout: 'strength',
    Ride: 'cycling',
    Walk: 'walking',
    Hike: 'walking',
};

export const sportCategoryDetails: Record<SportCategory, SportCategoryDetails> = {
    running: { label: 'Run', tone: 'peach' },
    padel: { label: 'Padel', tone: 'butter' },
    strength: { label: 'Strength', tone: 'sage' },
    cycling: { label: 'Ride', tone: 'peach' },
    walking: { label: 'Walk', tone: 'sage' },
};

export function getSportCategory(sportType: SportType): SportCategory {
    return sportCategoryBySportType[sportType];
}

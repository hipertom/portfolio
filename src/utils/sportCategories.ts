import type { SportCategory, SportType } from '@/types/sport';
import type { Tone } from '@/types/tone';

interface SportCategoryDetails {
    label: string;
    emoji: string;
    tone: Tone;
}

const sportCategoryBySportType: Record<SportType, SportCategory> = {
    Run: 'running',
    TrailRun: 'running',
    Padel: 'padel',
    WeightTraining: 'strength',
    Workout: 'strength',
};

export const sportCategoryDetails: Record<SportCategory, SportCategoryDetails> = {
    running: { label: 'Run', emoji: '🏃', tone: 'peach' },
    padel: { label: 'Padel', emoji: '🎾', tone: 'butter' },
    strength: { label: 'Strength', emoji: '🏋️', tone: 'sage' },
};

export function getSportCategory(sportType: SportType): SportCategory {
    return sportCategoryBySportType[sportType];
}

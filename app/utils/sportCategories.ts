import type { SportCategory } from '#shared/types/sport';

const sportTypeLabelOverrides: Record<string, string> = {
    Pickleball: 'Padel',
};

export const sportCategoryTones: Record<SportCategory, Tone> = {
    running: 'peach',
    padel: 'butter',
    strength: 'sage',
    cycling: 'peach',
    walking: 'sage',
    other: 'cream',
};

export function getSportTypeLabel(sportType: string): string {
    return sportTypeLabelOverrides[sportType] ?? splitIntoWords(sportType);
}

function splitIntoWords(sportType: string): string {
    const words = sportType.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();

    return words.charAt(0).toUpperCase() + words.slice(1);
}

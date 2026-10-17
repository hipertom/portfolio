import type { SportCategory } from '#shared/types/sport';

interface SportCategoryDetails {
    label: string;
    tone: Tone;
}

export const sportCategoryDetails: Record<Exclude<SportCategory, 'other'>, SportCategoryDetails> = {
    running: { label: 'Run', tone: 'peach' },
    padel: { label: 'Padel', tone: 'butter' },
    strength: { label: 'Strength', tone: 'sage' },
    cycling: { label: 'Ride', tone: 'peach' },
    walking: { label: 'Walk', tone: 'sage' },
};

export function getSportCategoryDetails(sportType: string): SportCategoryDetails {
    const category = getSportCategory(sportType);

    if (category === 'other') {
        return { label: humanizeSportType(sportType), tone: 'cream' };
    }

    return sportCategoryDetails[category];
}

function humanizeSportType(sportType: string): string {
    const words = sportType.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();

    return words.charAt(0).toUpperCase() + words.slice(1);
}

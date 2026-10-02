import type { Tone } from '@/types/tone';

export const toneSurfaceClasses: Record<Tone, string> = {
    white: 'bg-white text-ink',
    cream: 'bg-cream-deep text-ink',
    peach: 'bg-peach text-ink',
    sage: 'bg-sage text-ink',
    butter: 'bg-butter text-ink',
    ink: 'bg-ink text-cream',
};

export const toneSoftSurfaceClasses: Record<Tone, string> = {
    white: 'bg-white text-ink',
    cream: 'bg-cream text-ink',
    peach: 'bg-peach-soft text-ink',
    sage: 'bg-sage-soft text-ink',
    butter: 'bg-butter-soft text-ink',
    ink: 'bg-ink/90 text-cream',
};

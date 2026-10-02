import type { Tone } from '@/types/tone';

export type ProjectKind = 'work' | 'personal' | 'sport';

export interface Project {
    title: string;
    kind: ProjectKind;
    description: string;
    tags: string[];
    tone: Tone;
    emoji: string;
    url?: string;
    imageUrl?: string;
}

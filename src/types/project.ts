import type { Tone } from '@/types/tone';

export type ProjectKind = 'work' | 'personal' | 'sport';

export type ProjectArtwork = 'overlap' | 'arches' | 'squiggle' | 'elevation';

export interface Project {
    title: string;
    kind: ProjectKind;
    description: string;
    tags: string[];
    tone: Tone;
    artwork: ProjectArtwork;
    url?: string;
    imageUrl?: string;
}

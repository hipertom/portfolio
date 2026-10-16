import type { Project } from '~/types/project';

export const projects: Project[] = [
    {
        title: 'This website',
        kind: 'personal',
        description:
            'A calm little home on the internet. Designed from scratch and built with Nuxt on top of my own design system.',
        tags: ['Nuxt', 'Tailwind CSS', 'TypeScript'],
        tone: 'butter',
        artwork: 'squiggle',
    },
    {
        title: 'Package tracker',
        kind: 'personal',
        description:
            'One overview for all my parcels: tracking codes, orders that arrive in several shipments, status, expected delivery and pickup point.',
        tags: ['Nuxt', 'TypeScript', 'Ship24'],
        tone: 'peach',
        artwork: 'parcels',
        url: 'https://packages.tomgrootjans.nl',
    },
    {
        title: 'Next big goal',
        kind: 'sport',
        description: 'Placeholder: a race or challenge I am training towards. Swap this for the real thing.',
        tags: ['Running'],
        tone: 'cream',
        artwork: 'elevation',
    },
];

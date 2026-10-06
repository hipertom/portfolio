import type { Project } from '@/types/project';

export const projects: Project[] = [
    {
        title: "What's nep",
        kind: 'work',
        description:
            "A playful social battle for parents and kids. Together you discover what's real and what's fake in the online world your children grow up in.",
        tags: ['Laravel', 'React'],
        tone: 'peach',
        artwork: 'overlap',
        url: 'https://whatsnep.nl/',
    },
    {
        title: 'onsaanbod.nl',
        kind: 'work',
        description:
            'A property platform where estate agents showcase their listings, built to be fast to browse and easy to keep up to date.',
        tags: ['Drupal'],
        tone: 'sage',
        artwork: 'arches',
        url: 'https://www.onsaanbod.nl/',
    },
    {
        title: 'This website',
        kind: 'personal',
        description:
            'A calm little home on the internet. Designed from scratch, built with Vue and Tailwind and soon connected to Strava.',
        tags: ['Vue', 'Tailwind CSS', 'TypeScript'],
        tone: 'butter',
        artwork: 'squiggle',
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

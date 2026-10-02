import type { Profile } from '@/types/profile';

const firstName = 'Tom';
const lastName = 'Grootjans';

export const profile: Profile = {
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    role: 'Senior Backend Developer',
    employer: 'Valicare',
    city: 'Zoetermeer',
    country: 'The Netherlands',
    birthDate: '1994-07-06',
    languages: ['Dutch', 'English'],
    intro: "Runner, lifter and padel enthusiast from Zoetermeer. By day I build software at Valicare, the rest of the time you'll probably find me outside, chasing a new personal best.",
    bio: [
        "I'm Tom, a Zoetermeer local who likes things that are simple, honest and built to last. That goes for the software I write and for my training schedule.",
        "I've spent most of my working life building the engine room of websites and platforms. I enjoy small teams, helping colleagues grow and keeping things calm when deadlines aren't.",
        "Outside of work you'll find me on the padel court, in the gym or out on a run, usually with a new goal on the horizon.",
    ],
    interests: ['Running', 'Padel', 'Strength training', 'Building things'],
};

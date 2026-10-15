export type Brand = 'github' | 'linkedin' | 'strava';

export interface SocialLink {
    label: string;
    url: string;
    brand: Brand;
}

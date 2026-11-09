import { describe, expect, it } from 'vitest';
import { getRaceDistance } from './raceDistance';

describe('getRaceDistance', () => {
    it('rounds a measured distance to the standard race distance within 5%', () => {
        expect(getRaceDistance(10_152.7)).toEqual({ distanceInMeters: 10_000, headline: { value: '10K', unit: null } });
        expect(getRaceDistance(10_076)).toEqual({ distanceInMeters: 10_000, headline: { value: '10K', unit: null } });
        expect(getRaceDistance(21_075.6)).toEqual({
            distanceInMeters: 21_097.5,
            headline: { value: 'Half', unit: 'marathon' },
        });
        expect(getRaceDistance(43_900)).toEqual({
            distanceInMeters: 42_195,
            headline: { value: 'Full', unit: 'marathon' },
        });
    });

    it('picks the nearest standard distance where two overlap', () => {
        expect(getRaceDistance(15_400).headline.value).toBe('15K');
        expect(getRaceDistance(15_900).headline).toEqual({ value: '10', unit: 'miles' });
        expect(getRaceDistance(20_400).headline.value).toBe('20K');
        expect(getRaceDistance(20_700).headline).toEqual({ value: 'Half', unit: 'marathon' });
    });

    it('keeps distances that are not close to a standard race distance', () => {
        expect(getRaceDistance(12_600)).toEqual({ distanceInMeters: 12_600, headline: { value: '12.6', unit: 'km' } });
        expect(getRaceDistance(10_600).distanceInMeters).toBe(10_600);
    });
});

import { describe, expect, it } from 'vitest';
import { getRaceDistance } from './raceDistance';

describe('getRaceDistance', () => {
    it('rounds a measured distance to the standard race distance within 5%', () => {
        expect(getRaceDistance(10_152.7)).toEqual({ distanceInMeters: 10_000, name: '10K' });
        expect(getRaceDistance(10_076)).toEqual({ distanceInMeters: 10_000, name: '10K' });
        expect(getRaceDistance(21_075.6)).toEqual({ distanceInMeters: 21_097.5, name: 'Half marathon' });
        expect(getRaceDistance(43_900)).toEqual({ distanceInMeters: 42_195, name: 'Marathon' });
    });

    it('picks the nearest standard distance where two overlap', () => {
        expect(getRaceDistance(15_400)).toEqual({ distanceInMeters: 15_000, name: '15K' });
        expect(getRaceDistance(15_900)).toEqual({ distanceInMeters: 16_093.44, name: '10 miles' });
        expect(getRaceDistance(20_400)).toEqual({ distanceInMeters: 20_000, name: '20K' });
        expect(getRaceDistance(20_700)).toEqual({ distanceInMeters: 21_097.5, name: 'Half marathon' });
    });

    it('keeps distances that are not close to a standard race distance', () => {
        expect(getRaceDistance(12_600)).toEqual({ distanceInMeters: 12_600, name: null });
        expect(getRaceDistance(10_600)).toEqual({ distanceInMeters: 10_600, name: null });
    });
});

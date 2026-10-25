import { describe, expect, it } from 'vitest';
import { getRaceDistanceName } from './raceDistance';

describe('getRaceDistanceName', () => {
    it('recognises standard distances within GPS tolerance', () => {
        expect(getRaceDistanceName(21_140)).toBe('Half marathon');
        expect(getRaceDistanceName(10_120)).toBe('10K');
        expect(getRaceDistanceName(42_600)).toBe('Marathon');
    });

    it('returns null for other distances', () => {
        expect(getRaceDistanceName(15_000)).toBeNull();
    });
});

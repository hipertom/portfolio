import { describe, expect, it } from 'vitest';
import { getSportCategory } from './sportCategory';

describe('getSportCategory', () => {
    it('counts Pickleball as padel', () => {
        expect(getSportCategory('Pickleball')).toBe('padel');
    });

    it('falls back to other for sport types without a category', () => {
        expect(getSportCategory('Yoga')).toBe('other');
    });
});

import { describe, expect, it } from 'vitest';
import { formatSpeed } from './formatSpeed';

describe('formatSpeed', () => {
    it('shows kilometres per hour with one decimal', () => {
        expect(formatSpeed(16_000, 3600)).toBe('16.0 km/h');
        expect(formatSpeed(12_345, 2700)).toBe('16.5 km/h');
    });
});

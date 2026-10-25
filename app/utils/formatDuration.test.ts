import { describe, expect, it } from 'vitest';
import { formatDuration, formatWholeHoursRoundedUp } from './formatDuration';

describe('formatDuration', () => {
    it('rounds up to the next whole minute', () => {
        expect(formatDuration(51 * 60 + 41)).toBe('52m');
        expect(formatDuration(3600 + 24 * 60 + 1)).toBe('1h 25m');
    });

    it('keeps whole minutes as they are', () => {
        expect(formatDuration(30 * 60)).toBe('30m');
        expect(formatDuration(59 * 60 + 30)).toBe('1h');
    });
});

describe('formatWholeHoursRoundedUp', () => {
    it('rounds total time up to whole hours', () => {
        expect(formatWholeHoursRoundedUp(18 * 3600 + 60)).toBe('19');
        expect(formatWholeHoursRoundedUp(2 * 3600)).toBe('2');
    });
});

import { describe, expect, it } from 'vitest';
import { formatClockTime, formatDuration, formatWholeHoursRoundedUp } from './formatDuration';

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

describe('formatClockTime', () => {
    it('carries rounded seconds over to the next minute', () => {
        expect(formatClockTime(359.6)).toBe('6:00');
        expect(formatClockTime(3599.7)).toBe('1:00:00');
    });

    it('pads minutes and seconds', () => {
        expect(formatClockTime(2 * 3600 + 6 * 60 + 5)).toBe('2:06:05');
    });
});

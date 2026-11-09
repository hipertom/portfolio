import { describe, expect, it } from 'vitest';
import { parseOfficialTimeInSeconds } from './officialTime';

describe('parseOfficialTimeInSeconds', () => {
    it('reads minutes and seconds on the same line', () => {
        expect(parseOfficialTimeInSeconds('10km race\n\nOfficial time: 52:23')).toBe(52 * 60 + 23);
    });

    it('reads hours, minutes and seconds on the next line', () => {
        expect(parseOfficialTimeInSeconds('Half marathon\n\nOfficial time:\n02:06:26\nGun time\n02:07:30')).toBe(
            2 * 3600 + 6 * 60 + 26,
        );
    });

    it('ignores case and Windows line endings', () => {
        expect(parseOfficialTimeInSeconds('Plan\r\n\r\nofficial TIME:\r\n1:52:34')).toBe(3600 + 52 * 60 + 34);
    });

    it('returns null without an official time line', () => {
        expect(parseOfficialTimeInSeconds('53:12 official time')).toBeNull();
        expect(parseOfficialTimeInSeconds('Official time:\n\n52:23')).toBeNull();
        expect(parseOfficialTimeInSeconds(null)).toBeNull();
    });
});

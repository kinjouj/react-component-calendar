import { buildCalendarData } from '../../src/utils/buildCalendarData';
import type { CalendarDate } from '../../src/types/calendar-date.type';

describe('useCalendarDays', () => {
  test('2026/2 test', () => {
    const weeks: (CalendarDate | null)[][] = buildCalendarData(new Date(2026, 1));
    expect(weeks).toHaveLength(4);

    const firstWeek = weeks[0];
    const firstDay = firstWeek[0];
    expect(firstDay).toEqual({ date: new Date(2026, 1, 1), isHoliday: false, holidayName: null });

    const lastWeek = weeks.at(-1) ?? null;

    if (lastWeek === null) {
      throw new Error('lastWeek is null');
    }

    const lastDay = lastWeek[6];
    expect(lastDay).toEqual({ date: new Date(2026, 1, 28), isHoliday: false, holidayName: null });
  });
});

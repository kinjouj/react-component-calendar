import { buildCalendarData } from '../../src/utils/buildCalendarData';

describe('useCalendarDays', () => {
  test('2026/2 test', () => {
    const weeks = buildCalendarData(new Date(2026, 1));
    expect(weeks).toHaveLength(4);

    const firstWeek = weeks[0];
    expect(firstWeek[0]).toEqual({ date: new Date(2026, 1, 1), isHoliday: false });

    const lastWeek = weeks.at(-1) ?? null;

    if (lastWeek === null) {
      throw new Error('lastWeek is null');
    }

    expect(lastWeek[6]).toEqual({ date: new Date(2026, 1, 28), isHoliday: false });
  });
});

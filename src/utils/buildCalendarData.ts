import { between as holidayBetween } from '@holiday-jp/holiday_jp';
import type { CalendarDate } from '../types/calendar-date.type';

const getHolidayName = (date: Date): string | null => {
  const lists = holidayBetween(date, date);
  return lists[0]?.name ?? null;
};

export const buildCalendarData = (currentDate: Date): (CalendarDate | null)[][] => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const lastDay = new Date(year, month + 1, 0).getDate();
  const weeks: (CalendarDate | null)[][] = [];
  let week: (CalendarDate | null)[] = Array.from({ length: new Date(year, month, 1).getDay() }, () => null);

  for (let day = 1; day <= lastDay; day++) {
    const date = new Date(year, month, day);
    const holidayName = getHolidayName(date);
    week.push({ date, holidayName, isHoliday: holidayName !== null });

    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }

  if (week.length > 0) {
    weeks.push([...week, ...Array.from({ length: 7 - week.length }, () => null)]);
  }

  return weeks;
};

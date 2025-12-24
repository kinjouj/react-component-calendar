import { isHoliday } from 'holiday-jp';
import type { CalendarDate } from '../types/calendar-date.type';

export const buildCalendarData = (currentDate: Date): (CalendarDate | null)[][] => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const lastDay = new Date(year, month + 1, 0).getDate();
  const weeks: (CalendarDate | null)[][] = [];
  let week: (CalendarDate | null)[] = Array.from({ length: new Date(year, month, 1).getDay() }, () => null);

  for (let day = 1; day <= lastDay; day++) {
    const date = new Date(year, month, day);
    week.push({ date, isHoliday: isHoliday(date) });

    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }

  if (week.length > 0) {
    while (week.length < 7) {
      week.push(null);
    }

    weeks.push(week);
  }

  return weeks;
};

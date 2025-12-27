import type { CalendarDate } from '../../types/calendar-date.type';

const WEEKDAY_CLASS_MAP = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

const buildClasses = (calendar: CalendarDate | null): string => {
  if (!calendar) {
    return 'calendar-body__cell';
  }

  const { date, isHoliday } = calendar;
  const dayClass = WEEKDAY_CLASS_MAP[date.getDay()];

  return [
    'calendar-body__cell',
    `calendar-body__cell--${dayClass}`,
    isHoliday && 'calendar-body__cell--holiday',
  ].filter(Boolean).join(' ');
};

const Cell = ({ calendar}: { calendar: CalendarDate | null }): React.JSX.Element => {
  const title = calendar?.holidayName ?? undefined;
  const classes = buildClasses(calendar);

  return (
    <td className={classes} title={title}>
      {calendar?.date.getDate()}
    </td>
  );
};

export default Cell;

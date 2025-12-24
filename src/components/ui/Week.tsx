import type { CalendarDate } from '../../types/calendar-date.type';

const WEEKDAY_CLASS_MAP = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

const createKey = (calendar: CalendarDate | null, index: number): string => {
  if (calendar !== null) {
    const date = calendar.date;
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  }

  return `empty-${index}`;
};

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

const Week = ({ week }: { week: (CalendarDate | null)[] }): React.JSX.Element => {
  return (
    <tr className="calendar-body__row">
      {week.map((calendar, index) => {
        const key = createKey(calendar, index);
        const classes = buildClasses(calendar);

        return (
          <td key={key} className={classes} data-key={key}>
            {calendar?.date.getDate()}
          </td>
        );
      })}
    </tr>
  );
};

export default Week;

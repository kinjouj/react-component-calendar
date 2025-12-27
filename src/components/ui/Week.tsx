import Cell from './Cell';
import type { CalendarDate } from '../../types/calendar-date.type';

const createKey = (calendar: CalendarDate | null, index: number): string => {
  if (calendar !== null) {
    const date = calendar.date;
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  }

  return `empty-${index}`;
};

const Week = ({ week }: { week: (CalendarDate | null)[] }): React.JSX.Element => {
  return (
    <tr className="calendar-body__row">
      {week.map((calendar, index) => {
        const key = createKey(calendar, index);

        return (
          <Cell key={key} calendar={calendar} />
        );
      })}
    </tr>
  );
};

export default Week;

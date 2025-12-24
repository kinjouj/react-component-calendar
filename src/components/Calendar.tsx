import { useCallback, useState } from 'react';
import { buildCalendarData } from '../utils/buildCalendarData';
import { Header, Week } from './ui';

const Calendar = ({ initialDate }: { initialDate: Date }): React.JSX.Element => {
  const [date, setDate] = useState(() => initialDate);
  const weeks = buildCalendarData(date);

  const onPrevClick = useCallback(() => {
    setDate((currentDate) => {
      return new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    });
  }, []);

  const onNextClick = useCallback(() => {
    setDate((currentDate) => {
      return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    });
  }, []);

  return (
    <table className="calendar">
      <thead className="calendar-header">
        <Header date={date} onPrevClick={onPrevClick} onNextClick={onNextClick} />
      </thead>
      <tbody className="calendar-body">
        {weeks.map((week, index) => {
          const key = `${date.getFullYear()}-${date.getMonth()}-${index}`;
          return <Week key={key} week={week} />;
        })}
      </tbody>
    </table>
  );
};

export default Calendar;

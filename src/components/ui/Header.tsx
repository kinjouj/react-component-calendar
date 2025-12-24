interface HeaderProps {
  date: Date
  onPrevClick: () => void
  onNextClick: () => void
}

const Header = ({ date, onPrevClick, onNextClick }: HeaderProps): React.JSX.Element => {
  return (
    <tr className="calendar-header__row">
      <th className="calendar-header__cell">
        <button
          type="button"
          className="calendar-header__button calendar-header__button--prev"
          aria-label="prev button"
          onClick={onPrevClick}
        >
          &lt;
        </button>
      </th>
      <th className="calendar-header__cell calendar-header__cell--text" colSpan={5}>
        {date.getFullYear()}
        /
        {date.getMonth() + 1}
      </th>
      <th className="calendar-header__cell">
        <button
          type="button"
          className="calendar-header__button calendar-header__button--next"
          aria-label="next button"
          onClick={onNextClick}
        >
          &gt;
        </button>
      </th>
    </tr>
  );
};

export default Header;

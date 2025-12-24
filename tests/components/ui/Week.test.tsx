import { render, screen } from '@testing-library/react';
import Week from '../../../src/components/ui/Week';

describe('Week', () => {
  test('render test', async () => {
    const week = [
      { date: new Date(2025, 11, 1), isHoliday: false },
      { date: new Date(2025, 11, 2), isHoliday: false },
      { date: new Date(2025, 11, 3), isHoliday: false },
    ];

    render(
      <table>
        <tbody>
          <Week week={week} />
        </tbody>
      </table>
    );

    expect(await screen.findAllByRole('cell')).toHaveLength(3);
  });
});

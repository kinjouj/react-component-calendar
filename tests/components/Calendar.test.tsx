import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Calendar from '../../src/components/Calendar';
import '@testing-library/jest-dom';

describe('Calendar', () => {
  test('render test', async () => {
    const now = new Date(2025, 1, 1);
    render(
      <Calendar initialDate={now} />
    );
    expect(await screen.findByText('2025/2')).toBeInTheDocument();
    const user = userEvent.setup();

    const prevButton = screen.getByRole('button', { name: 'prev button' });
    await user.click(prevButton);
    await waitFor(async () => expect(await screen.findByText('2025/1')).toBeInTheDocument());

    const nextButton = screen.getByRole('button', { name: 'next button' });
    await user.click(nextButton);
    expect(await screen.findByText('2025/2')).toBeInTheDocument();
  });
});

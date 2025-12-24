import { render, screen } from '@testing-library/react';
import Header from '../../../src/components/ui/Header';
import '@testing-library/jest-dom';

const onPrevClick = (): void => undefined;
const onNextClick = (): void => undefined;

describe('Header', () => {
  test('render test', async () => {
    const date = new Date(2025, 11, 1);
    render(
      <table>
        <thead>
          <Header date={date} onPrevClick={onPrevClick} onNextClick={onNextClick} />
        </thead>
      </table>
    );

    expect(await screen.findByText('2025/12')).toBeInTheDocument();
  });
});

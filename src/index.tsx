import React from 'react';
import { createRoot } from 'react-dom/client';
import Calendar from './components/Calendar';

const App = (): React.JSX.Element => {
  const date = new Date();

  return (
    <React.StrictMode>
      <Calendar initialDate={date} />
    </React.StrictMode>
  );
};

const container = createRoot(document.getElementById('root')!); // eslint-disable-line
container.render(<App />);

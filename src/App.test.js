import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title in header', () => {
  render(<App />);
  const titleElement = screen.getByText(/MyTodoList/i);
  expect(titleElement).toBeInTheDocument();
});

import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import usePreviousValue from '../../src/hooks/use-previous-value';

describe('usePreviousValue', () => {
  const TestComponent = () => {
    const [count, setCount] = React.useState(0);
    const previousCount = usePreviousValue(count);
    const incrementButton = React.createElement(
      'button',
      {
        onClick: () => setCount((previousCount) => previousCount + 1),
      },
      'Increment',
    );
    return React.createElement(
      'div',
      null,
      `count: ${count}`,
      `previousCount: ${previousCount}`,
      incrementButton,
    );
  };

  it('previous value matches current value on initial render', () => {
    render(React.createElement(TestComponent));
    const currentCount = screen.getByText(/count: 0/i);
    const previousCount = screen.getByText(/previousCount: 0/i);
    expect(currentCount).toBeInTheDocument();
    expect(previousCount).toBeInTheDocument();
  });

  it('previous value does not change when state changes once', () => {
    render(React.createElement(TestComponent));
    let previousCount = screen.getByText(/previousCount: 0/i);
    let currentCount = screen.getByText(/count: 0/i);
    expect(previousCount).toBeInTheDocument();
    expect(currentCount).toBeInTheDocument();

    fireEvent.click(screen.getByText(/increment/i));

    currentCount = screen.getByText(/count: 1/i);
    previousCount = screen.getByText(/previousCount: 0/i);
    expect(currentCount).toBeInTheDocument();
    expect(previousCount).toBeInTheDocument();
  });

  it('previous value changes to last value of current value when state changes twice', () => {
    render(React.createElement(TestComponent));
    let previousCount = screen.getByText(/previousCount: 0/i);
    let currentCount = screen.getByText(/count: 0/i);
    expect(previousCount).toBeInTheDocument();
    expect(currentCount).toBeInTheDocument();

    fireEvent.click(screen.getByText(/increment/i));
    fireEvent.click(screen.getByText(/increment/i));

    currentCount = screen.getByText(/count: 2/i);
    previousCount = screen.getByText(/previousCount: 1/i);
    expect(currentCount).toBeInTheDocument();
    expect(previousCount).toBeInTheDocument();
  });
});

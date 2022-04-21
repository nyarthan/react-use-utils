import * as React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import useRenderCount from '../../src/hooks/use-render-count';
import useRerender from '../../src/hooks/use-rerender';

describe('useRerender', () => {
  const TestComponent = () => {
    const [renderCount] = useRenderCount();
    const rerender = useRerender();
    const rerenderButton = React.createElement(
      'button',
      {
        onClick: rerender,
      },
      'Rerender',
    );
    return React.createElement('div', null, renderCount, rerenderButton);
  };

  it('forces a rerender', () => {
    render(React.createElement(TestComponent));
    expect(screen.getByText('1')).toBeInTheDocument();
    fireEvent.click(screen.getByText(/rerender/i));
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});

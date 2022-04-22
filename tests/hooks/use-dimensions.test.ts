import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import useDimensions from '../../src/hooks/use-dimensions';

describe('useDimensions', () => {
  const TestComponent = () => {
    const [ref, dimensions, { reMeasure }] = useDimensions();
    const reMeasureButton = React.createElement(
      'button',
      { onClick: reMeasure },
      'ReMeasure',
    );
    return React.createElement(
      'div',
      { ref },
      JSON.stringify(dimensions),
      reMeasureButton,
    );
  };

  const originalGetBoundingClientRect = Element.prototype.getBoundingClientRect;

  const mockGetBoundingClientRect = (fn: () => Partial<DOMRect>) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Element.prototype.getBoundingClientRect = fn as any;
  };

  const resetGetBoundingClientRectMock = () => {
    Element.prototype.getBoundingClientRect = originalGetBoundingClientRect;
  };

  afterEach(resetGetBoundingClientRectMock);

  it('returns dimensions for element', () => {
    const expectedDOMRect = {
      x: 1,
      y: 2,
      top: 3,
      bottom: 4,
      left: 5,
      right: 6,
      width: 7,
      height: 8,
    };
    mockGetBoundingClientRect(() => expectedDOMRect);
    render(React.createElement(TestComponent));
    expect(
      screen.getByText(JSON.stringify(expectedDOMRect)),
    ).toBeInTheDocument();
  });

  it('does not change when DOMRect is updated', () => {
    const expectedDOMRect = {
      x: 1,
      y: 2,
      top: 3,
      bottom: 4,
      left: 5,
      right: 6,
      width: 7,
      height: 8,
    };
    mockGetBoundingClientRect(() => expectedDOMRect);
    render(React.createElement(TestComponent));
    expect(
      screen.getByText(JSON.stringify(expectedDOMRect)),
    ).toBeInTheDocument();
    act(() =>
      mockGetBoundingClientRect(() => ({ ...expectedDOMRect, top: 100 })),
    );
    expect(
      screen.getByText(JSON.stringify(expectedDOMRect)),
    ).toBeInTheDocument();
  });

  it('changes when DOMRect is updated and `remeasure` is called', () => {
    const expectedDOMRect = {
      x: 1,
      y: 2,
      top: 3,
      bottom: 4,
      left: 5,
      right: 6,
      width: 7,
      height: 8,
    };
    mockGetBoundingClientRect(() => expectedDOMRect);
    render(React.createElement(TestComponent));
    expect(
      screen.getByText(JSON.stringify(expectedDOMRect)),
    ).toBeInTheDocument();
    const updatedDOMRect = { ...expectedDOMRect, top: 100 };
    act(() => mockGetBoundingClientRect(() => updatedDOMRect));
    fireEvent.click(screen.getByText(/remeasure/i));
    expect(
      screen.getByText(JSON.stringify(updatedDOMRect)),
    ).toBeInTheDocument();
  });
});

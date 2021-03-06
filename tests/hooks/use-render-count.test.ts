import { act, renderHook } from '@testing-library/react';
import useRenderCount from '../../src/hooks/use-render-count';

describe('useRenderCount', () => {
  it('initial count is 1', () => {
    const INITIAL_COUNT = 1;
    const { result } = renderHook(useRenderCount);
    const [count] = result.current;
    expect(count).toBe(INITIAL_COUNT);
  });

  it('different initial count can be passed as argument', () => {
    const INITIAL_COUNT = 0;
    const { result } = renderHook(() => useRenderCount(INITIAL_COUNT));
    const [count] = result.current;
    expect(count).toBe(INITIAL_COUNT);
  });

  it('increments count if component rerenders', () => {
    const INITIAL_COUNT = 1;
    const { result, rerender } = renderHook(useRenderCount);
    expect(result.current[0]).toBe(INITIAL_COUNT);
    rerender();
    expect(result.current[0]).toBe(INITIAL_COUNT + 1);
  });

  it('resets count to initial value', () => {
    const INITIAL_COUNT = 1;
    const { result, rerender } = renderHook(useRenderCount);
    rerender();
    act(() => result.current[1].reset());
    expect(result.current[0]).toBe(INITIAL_COUNT);
  });

  it('resets count to inital value with custom initial count', () => {
    const INITIAL_COUNT = 0;
    const { result, rerender } = renderHook(() =>
      useRenderCount(INITIAL_COUNT),
    );
    rerender();
    act(() => result.current[1].reset());
    expect(result.current[0]).toBe(INITIAL_COUNT);
  });

  it('resets count to specified value', () => {
    const RESET_TO = 10;
    const { result, rerender } = renderHook(useRenderCount);
    rerender();
    act(() => result.current[1].reset(RESET_TO));
    expect(result.current[0]).toBe(RESET_TO);
  });
});

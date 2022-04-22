import { renderHook } from '@testing-library/react';
import useCallbackRef from '../../src/hooks/use-callback-ref';

describe('useCallbackRef', () => {
  it('returns the same instance of a function', () => {
    const callback = () => ({});
    const { result } = renderHook(() => useCallbackRef(callback));
    expect(result.current).toBe(callback);
  });

  it('returns the same instance of a function after a rerender', () => {
    const callback = () => ({});
    const { result, rerender } = renderHook(() => useCallbackRef(callback));
    rerender();
    expect(result.current).toBe(callback);
  });

  it.skip('returns the instance of a new function if the argument is updated', () => {
    const initialCallback = () => ({});
    const updatedCallback = () => ({});
    const { result, rerender } = renderHook(() =>
      useCallbackRef(initialCallback),
    );
    rerender(updatedCallback);
    expect(result.current).not.toBe(initialCallback);
    expect(result.current).toBe(updatedCallback);
  });
});

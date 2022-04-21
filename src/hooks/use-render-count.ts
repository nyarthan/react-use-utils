import { useEffect, useRef } from 'react';
import useRerender from './use-rerender';

type ReturnValue = [number, { reset(to?: number): void }];

const useRenderCount = (initialValue?: number): ReturnValue => {
  const initialRenderCount = initialValue ?? 1;

  const renderCount = useRef(initialRenderCount);
  const rerender = useRerender();

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const reset = (to?: number): void => {
    const value = typeof to === 'number' ? to : initialRenderCount;
    renderCount.current = value;
    rerender();
  };

  return [renderCount.current, { reset }];
};

export default useRenderCount;

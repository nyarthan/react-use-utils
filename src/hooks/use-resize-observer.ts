import { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react';
import { throttle } from '../util';

type ReturnValue<Element extends HTMLElement> = [
  MutableRefObject<Element>,
  DOMRectReadOnly | undefined,
];

interface Options {
  delay: number;
  onResize?(dimensions: DOMRectReadOnly): void;
}

const DEFAULT_OPTIONS: Options = {
  delay: 100,
};

const useResizeObserver = <Element extends HTMLElement = HTMLElement>(
  options: Partial<Options> = DEFAULT_OPTIONS,
): ReturnValue<Element> => {
  const elementRef = useRef<Element>(null);
  const [dimensions, setDimensions] = useState<DOMRectReadOnly>();

  const { delay, onResize } = options;

  const resizeObserver = useMemo(
    () =>
      new ResizeObserver(
        throttle<ResizeObserverCallback>((entries) => {
          for (const { contentRect } of entries) {
            setDimensions(contentRect);
            onResize?.(contentRect);
          }
        }, delay),
      ),
    [delay],
  );

  useEffect(() => {
    if (!elementRef.current) return;

    resizeObserver.observe(elementRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return [elementRef, dimensions];
};

export default useResizeObserver;

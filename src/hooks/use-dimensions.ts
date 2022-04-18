import {
  MutableRefObject,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

type ReturnValue<Element extends HTMLElement> = [
  MutableRefObject<Element>,
  DOMRectReadOnly,
  { reMeasure(): void },
];

const useDimensions = <
  Element extends HTMLElement = HTMLElement,
>(): ReturnValue<Element> => {
  const elementRef = useRef<Element>(null);
  const [dimensions, setDimensions] = useState<DOMRectReadOnly>();

  const measure = (element: Element) => element.getBoundingClientRect();

  const reMeasure = useCallback((): void => {
    setDimensions(measure(elementRef.current));
  }, []);

  useLayoutEffect(() => {
    if (!elementRef.current) return;
    reMeasure();
  }, [reMeasure]);

  return [elementRef, dimensions, { reMeasure }];
};

export default useDimensions;

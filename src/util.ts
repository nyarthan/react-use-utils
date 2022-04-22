import { AnyFunction } from './types';

export const throttle = <Callback extends AnyFunction>(
  fn: Callback,
  delay: number,
): ((...args: Parameters<Callback>) => ReturnType<Callback>) => {
  let timeoutId = 0;
  return function (...args: Parameters<Callback>): ReturnType<Callback> {
    clearTimeout(timeoutId);
    // @ts-expect-error node timeout return type is different from browser
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
    return undefined;
  };
};

export const isChildOf = (parent: Element, child: Element): boolean =>
  child.parentNode === parent;

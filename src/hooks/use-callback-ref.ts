import { useLayoutEffect, useRef } from 'react';
import { AnyFunction } from '../types';

const useCallbackRef = <Callback extends AnyFunction>(
  callback: Callback,
): Callback => {
  const callbackRef = useRef(callback);

  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  return callbackRef.current;
};

export default useCallbackRef;

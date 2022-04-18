/**
 * if div with id `portalRootId` is child of body return it
 * if div with id `portalRootId` is not child of body create new div with id `portalRootId` append to body and return it
 * if `portalRootId` is changed remove old portalRoot create new div with new `portalRootId` append to body and return it
 * if component is unmounted remove portalRoot from body
 */
import { useLayoutEffect, useRef, useState } from 'react';
import { isChildOf } from '../util';
import usePreviousValue from './use-previous-value';

const usePortalRoot = (portalRootId = 'portalRoot'): Element => {
  const isValidId = (id: string): boolean =>
    typeof id === 'string' && id.length > 0;

  const getPortalRoot = (): Element => {
    if (!isValidId(portalRootId)) return undefined;

    const existingPortalRoot = document.querySelector(`#${portalRootId}`);

    if (!existingPortalRoot || !isChildOf(document.body, existingPortalRoot))
      return undefined;
    return existingPortalRoot;
  };

  const [portalRoot, setPortalRoot] = useState<Element>(getPortalRoot());
  const previousPortalRootId = usePreviousValue(portalRootId);

  const portalRootRef = useRef(portalRoot);
  useLayoutEffect(() => {
    portalRootRef.current = portalRoot;
  });

  useLayoutEffect(() => {
    if (previousPortalRootId === portalRootRef.current?.id) return undefined;
    if (!isValidId(previousPortalRootId)) return undefined;
    const previousPortalRootElement = document.querySelector(
      `#${previousPortalRootId}`,
    );
    console.debug(previousPortalRootElement?.id);
    if (
      portalRootRef.current &&
      isChildOf(document.body, previousPortalRootElement)
    ) {
      document.body.removeChild(previousPortalRootElement);
    }
  }, [previousPortalRootId]);

  console.debug({ previousPortalRootId, currentPortalRootId: portalRoot?.id });

  useLayoutEffect(() => {
    if (portalRootRef.current?.id === portalRootId) return undefined;
    const newPortalRoot = document.createElement('div');
    newPortalRoot.id = portalRootId;
    document.body.append(newPortalRoot);
    setPortalRoot(newPortalRoot);
  }, [portalRootId]);

  return portalRoot;
};

export default usePortalRoot;

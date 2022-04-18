import { useState } from 'react';
import {
  useRenderCount,
  useRerender,
  useDimensions,
  useResizeObserver,
  usePortalRoot,
} from 'react-use-utils';

function App() {
  const [portalRootId, setPortalRootId] = useState<string>();
  const [renderCount, { reset }] = useRenderCount(0);
  const rerender = useRerender();
  const [ref, dimensions, { reMeasure }] = useDimensions<HTMLTextAreaElement>();
  const [observerRef, observerDimensions] =
    useResizeObserver<HTMLTextAreaElement>({
      onResize: (dim) => console.debug(dim),
    });
  const portalRoot = usePortalRoot(portalRootId);

  return (
    <div className="App">
      <p>Render Count: {renderCount}</p>
      <button onClick={rerender}>Rerender</button>
      <br />
      <button onClick={reset}>Reset Render Count</button>
      <br />
      <textarea ref={ref} placeholder="useDimensions" />
      <p>Dimensions: {JSON.stringify(dimensions)}</p>
      <button onClick={reMeasure}>Re Measure</button>
      <br />
      <textarea ref={observerRef} placeholder="useResizeObserver" />
      <p>Dimensions: {JSON.stringify(observerDimensions)}</p>
      <br />
      <button onClick={() => setPortalRootId('asd')}>Change PortalRoot</button>
    </div>
  );
}

export default App;

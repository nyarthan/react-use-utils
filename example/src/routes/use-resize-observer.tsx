import { useResizeObserver } from 'react-use-utils-coverage';

const UseResizeObserverRoute = () => {
  const [ref, dimensions] = useResizeObserver<HTMLTextAreaElement>();

  return (
    <div id="useDimensionsRoute">
      <textarea ref={ref} value={JSON.stringify(dimensions)} />
    </div>
  );
};

export default UseResizeObserverRoute;

import { useDimensions } from 'react-use-utils-coverage';

const UseDimensionsRoute = () => {
  const [ref, dimensions, { reMeasure }] = useDimensions<HTMLTextAreaElement>();

  return (
    <div id="useDimensionsRoute">
      <textarea ref={ref} value={JSON.stringify(dimensions)} />
      <br />
      <button onClick={reMeasure}>Re-Measure</button>
    </div>
  );
};

export default UseDimensionsRoute;

import { useState } from 'react';

const useRerender = () => {
  const [_, updateState] = useState(false);

  const rerender = (): void => {
    updateState((previousState) => !previousState);
  };

  return rerender;
};

export default useRerender;

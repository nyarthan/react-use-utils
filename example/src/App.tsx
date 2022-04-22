import { Route, Routes } from 'react-router-dom';
import UseDimensionsRoute from './routes/use-dimensions';
import UseResizeObserverRoute from './routes/use-resize-observer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/use-dimensions" element={<UseDimensionsRoute />} />
        <Route
          path="/use-resize-observer"
          element={<UseResizeObserverRoute />}
        />
      </Routes>
    </div>
  );
}

export default App;

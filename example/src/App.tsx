import { Route, Routes } from 'react-router-dom';
import UseDimensionsRoute from './routes/use-dimensions';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/use-dimensions" element={<UseDimensionsRoute />} />
      </Routes>
    </div>
  );
}

export default App;

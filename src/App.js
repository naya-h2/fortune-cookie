import { Route, Routes } from 'react-router-dom';
import MainPage from './page/main';
import ResultPage from './page/result';

function App() {
  return (
    <main className="mobile_layout relative">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </main>
  );
}

export default App;

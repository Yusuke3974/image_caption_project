import './App.css';
import Form from './components/templetes/Form';
import { Routes, Route } from 'react-router-dom';
import Submit from './components/pages/Submit';
import Result from './components/pages/Result';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Submit />} />
      <Route path="/result" element={<Result />} />
    </Routes>
      </>
  );
}

export default App;

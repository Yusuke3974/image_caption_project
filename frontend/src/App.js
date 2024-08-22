import './App.css';
import Form from './components/templetes/Form';
import { Routes, Route } from 'react-router-dom';
import Submit from './components/pages/Submit';
import Result from './components/pages/Result';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import LoginFailed from './components/pages/LoginFailed';
import Resister from './components/pages/Resister';
import NotFound from './components/pages/NotFound';
import { LoginUserProvider } from './components/provider/LoginUserProvider';

function App() {
  return (
    <>
    <Routes>
      <LoginUserProvider>
        <div className="App">
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginfailed" element={<LoginFailed />} />
          <Route path='/form' element={<Form />} />
          <Route path="/resister" element={<Resister />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/result" element={<Result />} />
        </div>
      </LoginUserProvider>
    </Routes>
      </>
  );
}

export default App;

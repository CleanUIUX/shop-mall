import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { TopNavigationBar } from './components/header/topNavigationBar/topNavigationBar';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <TopNavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

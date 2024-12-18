import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import MainView from './View/MainView.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/webTPS/MainView' exact element={<MainView/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Main from "./views/Main"
import Edit from "./components/Edit"
import Location from "./components/Location"
import Enigma from "./components/Enigma"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/Location' element={ <Location /> } />
          <Route path='/Enigma' element={ <Enigma /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

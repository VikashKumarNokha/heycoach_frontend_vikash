import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import  Home  from "./pages/Home"
import UpdateRestarant from './pages/UpdateRestarant';
import AddRestarant from './pages/AddRestarant';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home/>  } />
          <Route path="/updaterestarant" element={<UpdateRestarant/>  } />
          <Route path="/addrestarant" element={<AddRestarant/>  } />
       </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;

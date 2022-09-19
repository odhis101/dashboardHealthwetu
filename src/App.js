import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NewAmbulance from "./pages/NewAmbulance/NewAmbulance";
import Revenue from "./pages/revenue/Revenue";
import TripsMade from "./pages/TripsMade/TripsMade";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" >
        <Route path=":home" element={<Home />} />
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path="newAmbulance" >
            <Route index element={<NewAmbulance />} />
            </Route>
            <Route path="TripsMade" >
            <Route index element={<TripsMade />} />
            </Route>
            <Route path="revenue" >
            <Route index element={<Revenue />} />
            </Route>
        </Route>
      </Routes>

   
  </Router>

  );
}

export default App;

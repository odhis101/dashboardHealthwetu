import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
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
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path="users" >
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
            </Route>
            <Route path="products" >
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New />} />
            </Route>
        </Route>
      </Routes>

   
  </Router>

  );
}

export default App;

import { Routes, Route, Outlet } from "react-router-dom";

import Blackjack from "./components/Blackjack";

function App() {

  return (<>
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route path="/blackjack" element={<Blackjack />} ></Route>
      </Route>
    </Routes>
  </>);
}

export default App;

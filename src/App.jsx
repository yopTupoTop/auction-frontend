import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Functionality from "./pages/Functionality/Functionality";
import Auction from "./pages/Auction/Auction";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="functionality" element={<Functionality />} />
        <Route path="auction" element={<Auction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

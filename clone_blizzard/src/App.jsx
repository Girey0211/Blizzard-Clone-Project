import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Overwatch2 from "./pages/Overwatch2";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overwatch2" element={<Overwatch2 />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;

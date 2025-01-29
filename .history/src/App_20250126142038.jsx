import { BrowserRouter, Route, Routes } from "react-router-dom";
import product from "./product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="product" element={product} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

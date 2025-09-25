import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ImageUploader from "./components/ImageUploader";
import Contacto from "./components/Contacto";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ImageUploader />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;

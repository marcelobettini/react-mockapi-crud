import About from "./pages/About";
import UsersList from "./componets/UsersList";
import UserDetails from "./pages/UserDetails";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/about" element={<About />} />
          <Route path="/details" element={<UserDetails />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>);
}
export default App;

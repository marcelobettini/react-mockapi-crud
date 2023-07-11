import About from "./pages/About";
import UsersList from "./componets/UsersList";
import UserDetails from "./pages/UserDetails";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from "./componets/Footer";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/about" element={<About />} />
          <Route path="/details" element={<UserDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>);
}
export default App;

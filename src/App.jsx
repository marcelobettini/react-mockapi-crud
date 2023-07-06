import UsersList from "./componets/UsersList";
import UserDetails from "./componets/UserDetails";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/details" element={<UserDetails />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>);
}
export default App;

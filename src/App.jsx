import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import RestaurantForm from "./pages/RestaurantForm";
import { Toaster } from "react-hot-toast";
import SinglePage from "./pages/SinglePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditRestaurant from "./pages/EditRestaurant";

function App() {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<RestaurantForm />} />
          <Route path="/single/:id" element={<SinglePage />} />
          <Route path="/edit/:id" element={<EditRestaurant />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

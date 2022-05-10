import "./App.css";
import { Footer, Navbar, RequiresAuth } from "./components";
import { Home, Products, Signup, Login, Profile } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" />
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Private Routes */}
        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

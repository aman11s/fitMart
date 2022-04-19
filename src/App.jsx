import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

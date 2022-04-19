import "./App.css";
import { Footer, Navbar } from "./components";
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

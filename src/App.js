import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;

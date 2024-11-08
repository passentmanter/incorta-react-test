import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";

import Home from "./pages/Home";
import Navbar from "./components/navbar";

import "./App.css";

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </AppProvider>
  );
};

export default App;

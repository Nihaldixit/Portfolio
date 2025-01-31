import { useState } from "react";
import "./App.css";
import Nav from "./navigation/nav.jsx";
import MainContent from "./mainContent.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
      <div className="container">
        <div className="nav">
          <Nav />
        </div>
        <div className="content">
          <MainContent />
        </div>
      </div>

  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import { css } from "@emotion/react";
import Navbar from "./Components/Navbar";
import PropagateLoader from "react-spinners/PropagateLoader";
import Home from "./Components/Home";
import Product from "./Components/Product";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  const [loading, setloading] = useState(false);

  const override = css`
    display: block;
    border-color: #ff0505;
    margin-top: 20%;
  `;

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <PropagateLoader
          color={"#3d2514 "}
          Loading={loading}
          css={override}
          size={40}
        />
      ) : (
        <>
          <Navbar />
          <Home />
          <Product />
          <About />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router";
import { NavBar } from "./components/Navbar";
import { WelcomePage } from "./components/WelcomePage";
import { Articles } from "./components/Articles";

function App() {
  return (
    <>
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;

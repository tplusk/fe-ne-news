import "./App.css";
import { Routes, Route } from "react-router";
import NavBar from "./components/Navbar";
import WelcomePage from "./components/welcomePage";

function App() {
  return (
    <>
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;

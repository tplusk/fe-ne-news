import "./App.css";
import { Routes, Route } from "react-router";
import { Layout } from "./components/Layout";
import { NavBar } from "./components/Navbar";
import { WelcomePage } from "./components/WelcomePage";
import { Articles } from "./components/Articles";
import { NoPage } from "./components/NoPage";

function App() {
  return (
    <>
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<WelcomePage />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;

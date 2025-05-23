import "./App.css";
import { Routes, Route } from "react-router";
import { Layout } from "./components/Layout";
import { WelcomePage } from "./components/WelcomePage";
import { Articles } from "./components/Articles";
import { Topics } from "./components/Topics";
import { NoPage } from "./components/NoPage";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<WelcomePage />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;

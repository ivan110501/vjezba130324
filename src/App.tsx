import Header from "./components/header";
import Layout from "./components/layout";
import { Route, Routes } from "react-router";
import "./styles/style.scss";
import Home from "./pages/home";
import Blogs from "./pages/blog";
import NoMatch from "./pages/no-match";
import About from "./pages/about";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blogs />} />
          <Route path="about" element={<About />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      This is Git exercise
    </>
  );
}

export default App;

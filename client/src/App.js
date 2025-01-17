import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Description from "./projects/Description";
import ProjectContainer from "./projects/ProjectContainer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Main />
                <Projects />
                <Skills />
                <Stack />
                <Experience />
                <Footer />
              </>
            }
          ></Route>
          <Route path="/project/:id" element={<ProjectContainer />} />
          <Route path="/description/:id" element={<Description />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

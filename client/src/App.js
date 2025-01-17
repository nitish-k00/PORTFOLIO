import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy load components
const NavBar = lazy(() => import("./components/NavBar"));
const Main = lazy(() => import("./components/Main"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Stack = lazy(() => import("./components/Stack"));
const Experience = lazy(() => import("./components/Experience"));
const Footer = lazy(() => import("./components/Footer"));
const Description = lazy(() => import("./projects/Description"));
const ProjectContainer = lazy(() => import("./projects/ProjectContainer"));

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
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
            />
            <Route path="/project/:id" element={<ProjectContainer />} />
            <Route path="/description/:id" element={<Description />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

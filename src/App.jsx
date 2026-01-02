import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/Aboutme";
import Contact from "./pages/Contactme";
import ScrollToTopButton from "./assets/button/Scrollbtn";

import AdminLayout from "./admin-card/admin/AdminLayout";
import AdminHome from "./admin-card/admin/pages/AdminHome";
import AdminProjects from "./admin-card/admin/pages/AdminProjects";
import AdminStats from "./admin-card/admin/pages/AdminStats";
// import AdminEmails from "./admin-card/admin/pages/AdminEmails";
import AdminMessages from "./admin-card/admin/pages/AdminMessages";

// import Tictactoe from "./pages/projects/tictactoe";
// import Sefactory from "./pages/projects/sefactory";
// import Weatherapp from "./pages/projects/Weatherapp";
import ScrollProgress from "./component/ScrollProgress";
import Portfolioweb from "./pages/projects/portfolioweb";
import ProjectDetails from "./pages/projects/projectDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ScrollProgress />
              <Navbar />
              <Home />
              <Projects />
              <AboutMe />
              <Contact />
            </>
            // putting main page inside an element(<></>) with empty route to render alone
          }
        />

        {/* <Route path="/tictactoe" element={<Tictactoe />} /> */}
        {/* <Route path="/sefactory" element={<Sefactory />} /> */}
        {/* <Route path="/weatherapp" element={<Weatherapp />} /> */}
        {/* <Route path="/portfolioweb" element={<Portfolioweb />} /> */}
        <Route path="/projects/:slug" element={<ProjectDetails />} />

        {/* projects routes inside main page renders on a page alone */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="stats" element={<AdminStats />} />
          {/* <Route path="emails" element={<AdminEmails />} /> */}
          <Route path="messages" element={<AdminMessages />} />
          {/* admin routes */}
        </Route>
      </Routes>

      <Footer />
      <ScrollToTopButton />
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const GamesettingsOne = React.lazy(() => import("pages/GamesettingsOne"));
const Gamesettings = React.lazy(() => import("pages/Gamesettings"));
const GamesettingsTwo = React.lazy(() => import("pages/GamesettingsTwo"));
const GamesettingsThree = React.lazy(() => import("pages/GamesettingsThree"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const OnboardingFour = React.lazy(() => import("pages/OnboardingFour"));
const OnboardingThree = React.lazy(() => import("pages/OnboardingThree"));
const OnboardingTwo = React.lazy(() => import("pages/OnboardingTwo"));
const OnboardingOne = React.lazy(() => import("pages/OnboardingOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} /> */}
          <Route path="/" element={<OnboardingOne />} />
          <Route path="/onboardingtwo" element={<OnboardingTwo />} />
          <Route path="/onboardingthree" element={<OnboardingThree />} />
          <Route path="/onboardingfour" element={<OnboardingFour />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gamesettingsthree" element={<GamesettingsThree />} />
          <Route path="/gamesettingstwo" element={<GamesettingsTwo />} />
          <Route path="/gamesettings" element={<Gamesettings />} />
          <Route path="/gamesettingsone" element={<GamesettingsOne />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

import {
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import CompaniesPage from "./pages/CompaniesPage";
import PlacementRecordPage from "./pages/PlacementRecordPage";

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Navbar />

      {/* Fixed Navbar Space */}
      <div className="w-full pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/jobs" element={<JobsPage />} />

          <Route path="/companies" element={<CompaniesPage />} />

          <Route
            path="/placement-record"
            element={<PlacementRecordPage />}
          />
        </Routes>
      </div>

      <div
        id="contact"
        className="scroll-mt-24"
      >
        <Footer />
      </div>

      <ScrollToTop />
    </div>
  );
}

export default App;
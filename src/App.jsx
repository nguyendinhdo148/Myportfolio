import { BrowserRouter, Routes,Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import Project from "./component/Project";

// Import các trang detail từ thư mục components
import JobPortalWeb from "./component/JobPortalWeb";
import JobPortalMobie from "./component/JobPortalMobie";
import P2PFileShare from "./component/P2PFileShare";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Trang chính */}
        <Route index element={<Home />} />

        {/* Trang danh sách project */}
        <Route path="/projects" element={<Project />} />

        {/* Trang chi tiết tĩnh cho từng project */}
        <Route path="/project-detail/job-portal-web" element={<JobPortalWeb />} />
        <Route path="/project-detail/job-portal-mobile" element={<JobPortalMobie />} />

        <Route path="/project-detail/p2p-file-share" element={<P2PFileShare />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

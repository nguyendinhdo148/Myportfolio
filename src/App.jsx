import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import Project from "./component/Project";

// Import các trang detail cũ từ thư mục components
import JobPortalWeb from "./component/JobPortalWeb";
import JobPortalMobie from "./component/JobPortalMobie";
import P2PFileShare from "./component/P2PFileShare";

// Import 5 trang detail mới (Lưu ý dùng ngoặc nhọn vì lúc nãy mình dùng export const)
import { HRManagementDetail } from "./component/HRManagementDetail";
import { FuguDiningDetail } from "./component/FuguDiningDetail";
import { EldokoRestaurantDetail } from "./component/EldokoRestaurantDetail";
import { FinanceManagementDetail } from "./component/FinanceManagementDetail";
import { VietourBookingDetail } from "./component/VietourBookingDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Trang chính */}
        <Route index element={<Home />} />

        {/* Trang danh sách project */}
        <Route path="/projects" element={<Project />} />

        {/* Trang chi tiết tĩnh cho từng project cũ */}
        <Route path="/project-detail/job-portal-web" element={<JobPortalWeb />} />
        <Route path="/project-detail/job-portal-mobile" element={<JobPortalMobie />} />
        <Route path="/project-detail/p2p-file-share" element={<P2PFileShare />} />

        {/* Trang chi tiết tĩnh cho 5 project mới */}
        <Route path="/project-detail/hr-management-system" element={<HRManagementDetail />} />
        <Route path="/project-detail/fugu-dining-lounge" element={<FuguDiningDetail />} />
        <Route path="/project-detail/eldoko-restaurant" element={<EldokoRestaurantDetail />} />
        <Route path="/project-detail/finance-management" element={<FinanceManagementDetail />} />
        <Route path="/project-detail/vietour-booking" element={<VietourBookingDetail />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
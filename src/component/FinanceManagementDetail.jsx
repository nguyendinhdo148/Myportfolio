import React, { useEffect } from "react";
import { ArrowLeft, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export const FinanceManagementDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = {
    id: "finance-management",
    title: "Hệ Thống Báo Cáo Tài Chính",
    category: "Ứng dụng Web / Dashboard",
    status: "Đang hoạt động",
    year: "2026",
    description: "Phần mềm quản lý tài chính nội bộ, theo dõi dòng tiền, thu chi và xuất báo cáo tự động.",
    longDescription: "Hệ thống quản trị tài chính nội bộ dành riêng cho doanh nghiệp. Cho phép theo dõi sát sao dòng tiền vào ra, phân loại các khoản thu chi, và tự động tạo các báo cáo tài chính trực quan thông qua hệ thống biểu đồ chi tiết.",
    liveUrl: "https://pm-privatee.onrender.com/",
    platform: "Web",
    videoDemo: "https://drive.google.com/file/d/1mL-hEZR36jc2keUYHOvP21CZSmiqlDEA/preview", // Chèn link video demo vào đây
  };

  return (
    <div className="min-h-screen from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              <span className="hidden sm:inline">Trở về</span>
            </Link>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">Xem trực tiếp</span>
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  {project.status}
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm font-medium">
                  {project.year}
                </span>
                <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 rounded-full text-sm font-medium">
                  💻 {project.platform}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Trạng thái</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">{project.status}</div>
              </div>
              <div className="from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Năm</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">{project.year}</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Video Demo</h3>
            <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden border-2 border-gray-800 dark:border-gray-700 shadow-2xl bg-black">
              {project.videoDemo ? (
                <iframe
                  src={project.videoDemo}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay"
                  referrerPolicy="no-referrer"
                  title="Demo Video"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Đang cập nhật video demo...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
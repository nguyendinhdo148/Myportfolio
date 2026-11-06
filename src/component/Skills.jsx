import React, { useState, useEffect } from "react";

export const Skills = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(timer);
    };
  }, []);

  // Công cụ và công nghệ
  const technicalSkills = [
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "VS Code", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/960px-Visual_Studio_Code_1.35_icon.svg.png" },
    { name: "StarUML", logo: "staruml.png" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Balsamiq", logo: "https://www.vectorlogo.zone/logos/balsamiq/balsamiq-icon.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "Draw.io", logo: "drawio.png" },
    { name: "Office", logo: "https://maychufpt.com.vn/wp-content/uploads/2020/10/png-clipart-logo-office-365-microsoft-office-2010-microsoft-corporation-logo-microsoft-office-text-trademark-thumbnail-removebg-preview.png" },
    { name: "Visual Studio 2022", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
  ];

  // Các mảng chuyên môn và nghiệp vụ đã thực hiện
  const baCoreSkills = [
    {
      title: "Phát Triển & Quản Trị Website",
      description: "Xây dựng, cập nhật và quản trị website doanh nghiệp; triển khai SEO để cải thiện khả năng hiển thị trên công cụ tìm kiếm.",
      techniques: ["React / Website", "SEO On-page", "Sitemap", "Canonical", "Schema Markup", "Google Indexing"]
    },
    {
      title: "IT Helpdesk & Hỗ Trợ Kỹ Thuật",
      description: "Tiếp nhận và xử lý các vấn đề IT thường ngày, hỗ trợ người dùng, thiết bị văn phòng, phần mềm và hệ thống làm việc.",
      techniques: ["User Support", "Troubleshooting", "Cài đặt phần mềm", "Máy tính & máy in", "Hỗ trợ thiết bị", "Xử lý sự cố"]
    },
    {
      title: "Báo Giá & Quản Lý Đề Xuất",
      description: "Tổng hợp thông tin hàng hóa, dịch vụ và yêu cầu từ các bộ phận; lập, cập nhật và theo dõi báo giá phục vụ hoạt động kinh doanh.",
      techniques: ["Quotation", "Tổng hợp chi phí", "Đối chiếu sản phẩm", "Theo dõi báo giá"]
    },
    {
      title: "Doanh Thu & Hóa Đơn",
      description: "Theo dõi doanh thu, tổng hợp báo cáo, kiểm tra số liệu và hỗ trợ quản lý hóa đơn điện tử.",
      techniques: ["Doanh thu", "Báo cáo", "Hóa đơn điện tử", "Đối soát dữ liệu"]
    },
    {
      title: "Quản Lý Công Nợ",
      description: "Theo dõi các khoản phải thu, phải trả; cập nhật tình trạng thanh toán, đối chiếu dữ liệu và tổng hợp thông tin công nợ.",
      techniques: ["Accounts Receivable", "Accounts Payable", "Đối chiếu công nợ", "Theo dõi thanh toán"]
    },
    {
      title: "Hồ Sơ Nhân Sự & Phần Mềm",
      description: "Hỗ trợ cập nhật, sắp xếp và quản lý hồ sơ nhân sự; phối hợp sử dụng, hướng dẫn và hỗ trợ các phần mềm phục vụ vận hành.",
      techniques: ["Employee Records", "Quản lý dữ liệu", "Cập nhật hồ sơ", "User Training", "Software Support"]
    },
    {
      title: "Thiết Bị Văn Phòng & Máy In",
      description: "Tư vấn, cung cấp và hỗ trợ thiết bị văn phòng, máy in hóa đơn, máy in/quét mã vạch, máy chấm công và thiết bị POS.",
      techniques: ["Máy chấm công", "Máy quét mã vạch", "Máy in mã vạch", "Máy in bill", "Thiết bị POS"]
    },
    {
      title: "Bảo Trì & Xử Lý Thiết Bị",
      description: "Hỗ trợ kiểm tra, vệ sinh, bảo dưỡng và xử lý các sự cố thiết bị văn phòng; phối hợp thay thế linh kiện khi cần.",
      techniques: ["Bảo trì định kỳ", "Vệ sinh máy", "Xử lý kẹt giấy", "Kiểm tra phần cứng", "Thay thế linh kiện"]
    },
  ];

  // Skeleton loader cho mobile
  if (isLoading && isMobile) {
    return (
      <section id="skills" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-lg w-64 mx-auto mb-8 animate-pulse"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg w-40 mb-4 animate-pulse"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg w-40 mb-6 animate-pulse"></div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4">
              {Array.from({ length: technicalSkills.length }, (_, index) => (
                <div key={index} className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground/80 mb-4">
            Kỹ Năng & Chuyên Môn
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Kết hợp kỹ năng công nghệ, quản trị website, hỗ trợ IT và nghiệp vụ vận hành doanh nghiệp.
          </p>
        </div>

        {/* Nghiệp vụ và chuyên môn */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground/80 mb-10 text-center">
            Chuyên Môn & Nghiệp Vụ
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
            {baCoreSkills.map((skill, index) => (
              <div
                key={skill.title}
                className="min-w-0 bg-gray-50 dark:bg-gray-800 p-2 sm:p-4 rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-md"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-xs sm:text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h4 className="text-[11px] leading-tight sm:text-base font-semibold text-gray-900 dark:text-white mb-1.5 break-words">
                    {skill.title}
                  </h4>
                  <p className="text-[10px] leading-snug sm:text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-3">
                    {skill.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.techniques.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`${techIndex > 1 ? "hidden sm:inline-flex" : "inline-flex"} px-1.5 py-0.5 sm:px-2.5 sm:py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-[9px] sm:text-[11px] rounded-full leading-tight`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Công cụ và công nghệ */}
        {/* <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground/80 mb-10 text-center">
            Công Cụ & Công Nghệ
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4">
            {technicalSkills.map((skill) => (
              <div key={skill.name} className="group relative">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 flex flex-col items-center justify-center aspect-square hover:shadow-lg dark:hover:shadow-blue-900/20">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-12 h-12 mb-3 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center leading-tight">
                    {skill.name}
                  </span>
                </div>
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-10">
                  {skill.name}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900 dark:border-t-gray-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;

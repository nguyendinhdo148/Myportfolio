import React, { useState, useEffect } from "react";

export const Skills = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

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

  const baTools = [
    { 
      name: "ERD Diagrams", 
      description: "Thiết kế mô hình thực thể-quan hệ cho cơ sở dữ liệu" 
    },
    { 
      name: "Sequence Diagrams", 
      description: "Mô hình hóa luồng tương tác giữa các thành phần hệ thống" 
    },
    { 
      name: "Use Case Diagrams", 
      description: "Xác định chức năng hệ thống từ góc nhìn người dùng" 
    },
    { 
      name: "BPMN", 
      description: "Mô hình hóa quy trình nghiệp vụ với ký hiệu tiêu chuẩn" 
    },
    { 
      name: "User Stories", 
      description: "Đặc tả yêu cầu theo format: Là <role>, tôi muốn <feature> để <benefit>" 
    },
    { 
      name: "Wireframes", 
      description: "Thiết kế layout và flow giao diện người dùng" 
    },
  ];

  const baCoreSkills = [
    {
      title: "Requirements Elicitation",
      description: "Phỏng vấn stakeholders, workshops, brainstorming để thu thập yêu cầu",
      techniques: ["Interviews", "Workshops", "Questionnaires", "Observation"]
    },
    {
      title: "Requirements Analysis",
      description: "Phân tích, làm rõ và ưu tiên hóa yêu cầu nghiệp vụ",
      techniques: ["MoSCoW", "SWOT", "Gap Analysis", "Root Cause"]
    },
    {
      title: "Solution Design",
      description: "Thiết kế giải pháp đáp ứng yêu cầu và constraints",
      techniques: ["Process Modeling", "Data Modeling", "Interface Design"]
    },
    {
      title: "Stakeholder Management",
      description: "Quản lý communication và expectations của các bên liên quan",
      techniques: ["RACI Matrix", "Communication Plan", "Status Reporting"]
    },
  ];

  const methodologies = [
    { name: "Agile/Scrum", description: "Phát triển lặp và tăng trưởng" },
    { name: "Waterfall", description: "Phát triển tuần tự theo phases" },
    { name: "Kanban", description: "Quản lý workflow trực quan" },
    { name: "Lean", description: "Tối ưu hóa và loại bỏ lãng phí" },
  ];

  // Skeleton loader cho mobile
  if (isLoading && isMobile) {
    return (
      <section id="skills" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Skeleton */}
          <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-lg w-48 mx-auto mb-8 animate-pulse"></div>
          
          {/* Skills Grid Skeleton */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6"
              >
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg w-32 mb-4 animate-pulse"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Skills Skeleton */}
          <div className="mb-12">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg w-40 mb-6 animate-pulse"></div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((item) => (
                <div key={item} className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
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
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground/80 mb-4">
            Kỹ Năng Chuyên Môn
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Tổng hợp các kỹ năng và công cụ thiết yếu của một Business Analyst trong lĩnh vực IT
          </p>
        </div>

        {/* Core BA Skills */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground/80 mb-10 text-center">
            Core Business Analysis Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {baCoreSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-900/20"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {skill.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {skill.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.techniques.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills with Logos */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground/80 mb-10 text-center">
            Công Cụ & Công Nghệ
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="group relative"
              >
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
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {skill.name}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900 dark:border-t-gray-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BA Tools & Techniques */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground/80 mb-10 text-center">
            Công Cụ Mô Hình Hóa
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {baTools.map((tool, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-lg dark:hover:shadow-purple-900/20"
              >
                <div className="flex items-start gap-4">
                  <div className=" ">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {tool.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodologies */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground/80 mb-10 text-center">
            Phương Pháp Luận
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((method, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full ${
                    index === 0 ? 'bg-blue-500' :
                    index === 1 ? 'bg-green-500' :
                    index === 2 ? 'bg-purple-500' : 'bg-yellow-500'
                  }`}></div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {method.name}
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Deliverables */}
        <div className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground/80 mb-8 text-center">
            Key Deliverables
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">BRD</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Business Requirements Document</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">FRD</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Functional Requirements Document</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">SRS</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Software Requirements Specification</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">UAT</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">User Acceptance Testing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
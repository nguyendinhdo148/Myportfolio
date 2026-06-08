import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Github, Globe, Smartphone, Cpu, Database, Shield, SmartphoneIcon, Lock, ArrowUp, ExternalLink, Award } from "lucide-react";

// Component cho mobile skeleton
const MobileSkeleton = () => (
  <div className="md:hidden space-y-4">
    {[1, 2, 3].map((item) => (
      <div key={item} className="bg-card rounded-xl border overflow-hidden shadow-sm animate-pulse">
        <div className="h-48 bg-muted"></div>
        <div className="p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-muted rounded-lg"></div>
            <div className="flex-1">
              <div className="h-5 bg-muted rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <div className="h-4 bg-muted rounded w-full"></div>
            <div className="h-4 bg-muted rounded w-2/3"></div>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 h-10 bg-muted rounded-lg"></div>
            <div className="flex-1 h-10 bg-muted rounded-lg"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const Project = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Thêm event listener để hiển thị nút back to top
  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    
    // Giả lập loading cho mobile
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Dữ liệu dự án đầy đủ
  const projectData = [
    {
      id: "job-portal-web",
      title: "VieJobs - Website tìm kiếm việc làm",
      category: "Ứng dụng Web",
      status: "Đang hoạt động",
      year: "2024",
      description: "Ứng dụng web tìm kiếm việc làm với AI matching từ OpenAI/Gemini, thông báo thời gian thực và Cloudinary media hosting.",
      longDescription: "Job Portal là nền tảng tìm kiếm việc làm thế hệ mới sử dụng MERN stack với tích hợp AI từ OpenAI và Gemini. Hệ thống hỗ trợ thông báo thời gian thực, tìm kiếm nâng cao với bộ lọc đa chiều, Cloudinary cho tải lên media và hệ thống theo dõi ứng tuyển từ A đến Z.",
      imageUrl: "/posterViejob-web.jpg",
      videoDemo: "/WebsiteFindJob.mp4",
      liveUrl: "https://vie-jobs.vercel.app/",
      techStack: [
        { name: "React", icon: "⚛️", color: "bg-blue-100 dark:bg-blue-900/30" },
        { name: "Node.js", icon: "🟢", color: "bg-green-100 dark:bg-green-900/30" },
        { name: "MongoDB", icon: "🍃", color: "bg-emerald-100 dark:bg-emerald-900/30" },
        { name: "Express.js", icon: "🚂", color: "bg-gray-100 dark:bg-gray-800" },
        { name: "Cloudinary", icon: "☁️", color: "bg-sky-100 dark:bg-sky-900/30" },
        { name: "OpenAI API", icon: "🧠", color: "bg-purple-100 dark:bg-purple-900/30" },
        { name: "Gemini AI", icon: "🌟", color: "bg-yellow-100 dark:bg-yellow-900/30" }
      ],
      features: [
        "Kết hợp việc làm bằng AI",
        "Thông báo thời gian thực",
        "Quản lý media với Cloudinary",
        "Công cụ tìm kiếm nâng cao",
        "Mô phỏng phỏng vấn",
        "Bảng điều khiển phân tích"
      ],
      challenges: [
        "Độ phức tạp tích hợp AI",
        "Khả năng mở rộng thời gian thực",
        "Hiệu suất xử lý media"
      ],
      platform: "Web",
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: "job-portal-mobile",
      title: "VieJobs - Ứng dụng tìm kiếm việc làm",
      category: "Ứng dụng Di động",
      status: "Đang phát triển",
      year: "2024",
      description: "Ứng dụng di động tìm việc làm với Flutter, tích hợp AI recommendations, định vị và push notifications.",
      longDescription: "Ứng dụng di động xây dựng với Flutter và Dart, kết nối với MERN backend. Ứng dụng hỗ trợ tìm kiếm việc làm theo vị trí, push notifications, chế độ offline và AI chat assistant. Tích hợp OpenAI và Gemini AI cho job recommendations cá nhân hóa.",
      imageUrl: "/mobieHome.jpg",
      videoDemo: "/videos/job-portal-mobile-demo.mp4",
      liveUrl: "https://expo.dev/@yourusername/job-portal-mobile",
      techStack: [
        { name: "Flutter", icon: "📱", color: "bg-blue-100 dark:bg-blue-900/30" },
        { name: "Dart", icon: "🎯", color: "bg-cyan-100 dark:bg-cyan-900/30" },
        { name: "React", icon: "⚛️", color: "bg-indigo-100 dark:bg-indigo-900/30" },
        { name: "Node.js", icon: "🟢", color: "bg-green-100 dark:bg-green-900/30" },
        { name: "OpenAI API", icon: "🧠", color: "bg-purple-100 dark:bg-purple-900/30" },
        { name: "Gemini AI", icon: "🌟", color: "bg-yellow-100 dark:bg-yellow-900/30" },
      ],
      features: [
        "Tìm kiếm theo vị trí",
        "Trợ lý nghề nghiệp AI",
        "Thông báo đẩy",
        "Chế độ offline",
        "Tham quan công ty AR",
        "Tìm kiếm bằng giọng nói"
      ],
      challenges: [
        "Hiệu suất đa nền tảng",
        "Cập nhật vị trí thời gian thực",
        "Tối ưu hóa mô hình AI"
      ],
      platform: "Mobile",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      id: "hr-management-system",
      title: "Hệ Thống Quản Lý Nhân Sự",
      category: "Ứng dụng Web / HRM",
      status: "Đang hoạt động",
      year: "2026",
      description: "Phần mềm đồng bộ máy chấm công, tự động hóa tính lương, OT, thuế TNCN, BHXH và gửi phiếu lương tự động.",
      longDescription: "Hệ thống quản lý nhân sự toàn diện cho phép đẩy dữ liệu trực tiếp từ máy chấm công. Tự động hóa quá trình chấm công, tính OT (Overtime) và Clear OT. Hệ thống tự động tính toán bảo hiểm xã hội (BHXH), thuế thu nhập cá nhân (TNCN), đồng thời tự động gửi phiếu lương hàng tháng qua email và lưu trữ thông tin hồ sơ nhân viên an toàn.",
      imageUrl: "/hr-management-cover.png",
      videoDemo: "",
      liveUrl: "https://quan-ly-nhan-su-yzpf.onrender.com/",
      techStack: [
        { name: "React", icon: "⚛️", color: "bg-blue-100 dark:bg-blue-900/30" },
        { name: "Node.js", icon: "🟢", color: "bg-green-100 dark:bg-green-900/30" },
        { name: "MongoDB", icon: "🍃", color: "bg-emerald-100 dark:bg-emerald-900/30" },
        { name: "Express", icon: "🚂", color: "bg-gray-100 dark:bg-gray-800" },
        { name: "Nodemailer", icon: "📧", color: "bg-red-100 dark:bg-red-900/30" }
      ],
      features: [
        "Đồng bộ máy chấm công",
        "Tự động tính OT / Clear OT",
        "Gửi phiếu lương qua email",
        "Tính toán BHXH & TNCN",
        "Quản lý hồ sơ nhân sự",
        "Phân quyền bảo mật"
      ],
      challenges: [
        "Xử lý khối lượng lớn dữ liệu chấm công",
        "Logic tính lương và thuế phức tạp",
        "Đồng bộ dữ liệu thời gian thực"
      ],
      platform: "Web",
      icon: <Database className="w-6 h-6" />
    },
    {
      id: "fugu-dining-lounge",
      title: "Fugu Dining Lounge",
      category: "Landing Page / Web",
      status: "Đang hoạt động",
      year: "2025",
      description: "Website giới thiệu nhà hàng cao cấp Fugu Dining Lounge với giao diện sang trọng, tối ưu trải nghiệm.",
      longDescription: "Website giới thiệu thương hiệu nhà hàng cao cấp Fugu Dining Lounge. Tập trung mạnh vào UI/UX sang trọng, thiết kế hình ảnh sắc nét, mượt mà nhằm thu hút thực khách và tối ưu hóa SEO trên các công cụ tìm kiếm.",
      imageUrl: "/fugu/fugu-cover.png",
      videoDemo: "",
      liveUrl: "https://fugudininglounge.vercel.app/",
      techStack: [
        { name: "React", icon: "⚛️", color: "bg-blue-100 dark:bg-blue-900/30" },
        { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-100 dark:bg-cyan-900/30" },
        { name: "Vercel", icon: "▲", color: "bg-gray-200 dark:bg-gray-700" }
      ],
      features: [
        "Thiết kế sang trọng, hiện đại",
        "Tối ưu UI/UX",
        "Hiệu ứng cuộn mượt mà",
        "Tương thích mọi thiết bị di động"
      ],
      challenges: [
        "Tối ưu hình ảnh dung lượng lớn",
        "Tăng tốc độ tải trang"
      ],
      platform: "Web",
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: "eldoko-restaurant",
      title: "Eldoko Restaurant",
      category: "Landing Page / Web",
      status: "Đang hoạt động",
      year: "2025",
      description: "Website giới thiệu nhà hàng Eldoko, thể hiện thực đơn độc đáo và không gian đặc trưng của quán.",
      longDescription: "Trang web chính thức của nhà hàng Eldoko. Hiển thị thực đơn trực quan, phòng trưng bày không gian quán và cung cấp thông tin liên hệ, đặt bàn một cách dễ dàng và nhanh chóng nhất cho khách hàng.",
      imageUrl: "/eldoko-cover.png",
      videoDemo: "",
      liveUrl: "https://eldoko.vercel.app/",
      techStack: [
        { name: "React", icon: "⚛️", color: "bg-blue-100 dark:bg-blue-900/30" },
        { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-100 dark:bg-cyan-900/30" },
        { name: "Vercel", icon: "▲", color: "bg-gray-200 dark:bg-gray-700" }
      ],
      features: [
        "Trưng bày thực đơn đặc sắc",
        "Thư viện hình ảnh sắc nét",
        "Tích hợp bản đồ & liên hệ",
        "Responsive trên mọi màn hình"
      ],
      challenges: [
        "Thiết kế mang tính bản sắc thương hiệu",
        "SEO Onpage"
      ],
      platform: "Web",
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: "finance-management",
      title: "Hệ Thống Báo Cáo Tài Chính",
      category: "Ứng dụng Web / Dashboard",
      status: "Đang hoạt động",
      year: "2026",
      description: "Phần mềm quản lý tài chính nội bộ, theo dõi dòng tiền, thu chi và xuất báo cáo tự động.",
      longDescription: "Hệ thống quản trị tài chính nội bộ dành riêng cho doanh nghiệp. Cho phép theo dõi sát sao dòng tiền vào ra, phân loại các khoản thu chi, và tự động tạo các báo cáo tài chính trực quan thông qua hệ thống biểu đồ chi tiết.",
      imageUrl: "/finance-cover.png",
      videoDemo: "",
      liveUrl: "https://pm-privatee.onrender.com/",
      techStack: [
        { name: "React", icon: "⚛️", color: "bg-blue-100 dark:bg-blue-900/30" },
        { name: "Node.js", icon: "🟢", color: "bg-green-100 dark:bg-green-900/30" },
        { name: "MongoDB", icon: "🍃", color: "bg-emerald-100 dark:bg-emerald-900/30" },
        { name: "Chart.js", icon: "📊", color: "bg-pink-100 dark:bg-pink-900/30" }
      ],
      features: [
        "Dashboard tổng quan tài chính",
        "Quản lý thu / chi chi tiết",
        "Tạo báo cáo tự động",
        "Biểu đồ phân tích dữ liệu",
        "Phân quyền nội bộ bảo mật"
      ],
      challenges: [
        "Bảo mật và toàn vẹn dữ liệu tài chính",
        "Hiển thị biểu đồ dữ liệu lớn mượt mà"
      ],
      platform: "Web",
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: "vietour-booking",
      title: "Vietour - Nền tảng Đặt bàn Nhà hàng",
      category: "Ứng dụng Web",
      status: "Đang hoạt động",
      year: "2026",
      description: "Website chuyên cung cấp dịch vụ tìm kiếm, đánh giá và đặt bàn tại các hệ thống quán ăn, nhà hàng.",
      longDescription: "Vietour là nền tảng kết nối thực khách với các nhà hàng, quán ăn. Cung cấp các tính năng tìm kiếm theo khu vực, xem menu trực tuyến, đánh giá từ khách hàng và đặc biệt là hệ thống booking đặt chỗ trước vô cùng tiện lợi.",
      imageUrl: "/vietour-cover.png",
      videoDemo: "",
      liveUrl: "https://vietour-fe.onrender.com/",
      techStack: [
        { name: "React", icon: "⚛️", color: "bg-blue-100 dark:bg-blue-900/30" },
        { name: "Node.js", icon: "🟢", color: "bg-green-100 dark:bg-green-900/30" },
        { name: "Express", icon: "🚂", color: "bg-gray-100 dark:bg-gray-800" },
        { name: "MongoDB", icon: "🍃", color: "bg-emerald-100 dark:bg-emerald-900/30" }
      ],
      features: [
        "Tìm kiếm và lọc nhà hàng",
        "Hệ thống đặt bàn trực tuyến",
        "Chức năng review, đánh giá",
        "Quản lý trạng thái Booking cho chủ nhà hàng"
      ],
      challenges: [
        "Xử lý xung đột lịch đặt bàn",
        "Tối ưu trải nghiệm tìm kiếm"
      ],
      platform: "Web",
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: "p2p-file-share",
      title: "VieCloud - Lưu trữ và chia sẻ file P2P",
      category: "Ứng dụng Web",
      status: "Tạm dừng",
      year: "2024",
      description: "Nền tảng chia sẻ file peer-to-peer với mã hóa end-to-end, Java Spring Boot backend và React frontend.",
      longDescription: "Nền tảng chia sẻ file sử dụng WebRTC cho kết nối P2P trực tiếp, với Spring Boot backend và React frontend. Hệ thống hỗ trợ mã hóa end-to-end và theo dõi chuyển dữ liệu thời gian thực.",
      imageUrl: "/dashViecloud.jpg",
      videoDemo: "/videos/p2p-file-share-demo.mp4",
      liveUrl: "https://p2p-fileshare-demo.vercel.app",
      techStack: [
        { name: "Java", icon: "☕", color: "bg-red-100 dark:bg-red-900/30" },
        { name: "Spring Boot", icon: "🌱", color: "bg-green-100 dark:bg-green-900/30" },
        { name: "React", icon: "⚛️", color: "bg-blue-100 dark:bg-blue-900/30" },
        { name: "Node.js", icon: "🟢", color: "bg-green-100 dark:bg-green-900/30" },
        { name: "WebRTC", icon: "📡", color: "bg-purple-100 dark:bg-purple-900/30" },
        { name: "MongoDB", icon: "🍃", color: "bg-emerald-100 dark:bg-emerald-900/30" }
      ],
      features: [
        "Mã hóa end-to-end",
        "Chuyển P2P trực tiếp",
        "Xác minh blockchain",
        "Theo dõi thời gian thực",
        "Không giới hạn kích thước",
        "Chữ ký số"
      ],
      challenges: [
        "Độ phức tạp NAT Traversal",
        "Độ tin cậy chuyển dữ liệu",
        "Triển khai bảo mật"
      ],
      platform: "Web",
      icon: <Lock className="w-6 h-6" />
    }
  ];

  // Lọc dự án dựa trên tab đang chọn
  const filteredProjects = activeTab === "all" 
    ? projectData 
    : projectData.filter(project => 
        activeTab === "web" ? project.platform === "Web" :
        activeTab === "mobile" ? project.platform === "Mobile" : true
      );

  // Tính toán số liệu thống kê
  const liveProjectsCount = projectData.filter(p => p.status === 'Đang hoạt động').length;
  const webProjectsCount = projectData.filter(p => p.platform === 'Web').length;
  const mobileProjectsCount = projectData.filter(p => p.platform === 'Mobile').length;

  // Hàm scroll về đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Hàm scroll đến section dự án
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Component cho Project Card trên mobile
  const MobileProjectCard = ({ project }) => (
    <div className="mb-6 bg-card rounded-xl border overflow-hidden shadow-sm">
      {/* Hình ảnh dự án */}
      <div className="relative h-48">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
            project.status === 'Đang hoạt động' 
              ? 'bg-green-500 text-white' 
              : project.status === 'Đang phát triển' ? 'bg-yellow-500 text-white' : 'bg-gray-500 text-white'
          }`}>
            {project.status === 'Đang hoạt động' ? '🚀 Đang chạy' : project.status === 'Đang phát triển' ? '🛠️ Đang phát triển' : '⏸️ Tạm dừng'}
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full flex items-center gap-1">
            {project.platform === 'Mobile' ? '📱 Di động' : '💻 Web'}
          </span>
        </div>
      </div>

      {/* Nội dung dự án */}
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            {project.icon}
          </div>
          <div>
            <h3 className="font-bold text-foreground">{project.title}</h3>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-xs text-muted-foreground">{project.category}</span>
              <span className="text-muted-foreground mx-1">•</span>
              <span className="text-xs text-muted-foreground">{project.year}</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

        {/* Tech Stack cho mobile */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {project.techStack.slice(0, 3).map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-muted text-xs rounded flex items-center gap-1"
              >
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Xem trước tính năng cho mobile */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {project.features.slice(0, 2).map((feature, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded flex items-center gap-1"
              >
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Nút hành động cho mobile */}
        <div className="flex gap-2">
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2.5 bg-primary text-primary-foreground text-sm rounded-lg transition-all active:scale-95"
            >
              <Globe className="w-4 h-4" />
              <span>Demo</span>
            </a>
          )}
          
          <Link 
            to={`/project-detail/${project.id}`}
            className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2.5 bg-accent text-foreground text-sm rounded-lg transition-all active:scale-95"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Chi tiết</span>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Nút Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Về đầu trang"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* Header với section ID để có thể scroll từ navbar */}
      <section id="projects" className="scroll-mt-20">
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-4xl font-bold text-foreground">
                  Dự Án Của Tôi
                </h1>
                <p className="text-sm md:text-base text-muted-foreground mt-1 md:mt-2">
                  Ứng dụng full-stack với công nghệ hiện đại 
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={scrollToProjects}
                  className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-muted hover:bg-muted/80 text-foreground text-sm md:text-base font-medium rounded-lg transition-all hover:shadow-lg active:scale-95"
                >
                  <span>Xem Dự Án</span>
                </button>
                <a 
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm md:text-base font-medium rounded-lg transition-all hover:shadow-lg active:scale-95"
                >
                  <Github className="w-4 h-4" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </header>
      </section>

      {/* Hero Section - Giới thiệu */}
      <section className="py-8 md:py-12 from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
              Kiến Tạo Trải Nghiệm Số
            </h2>
          </div>

          {/* Thống kê tổng quan - Responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="bg-card rounded-xl p-4 md:p-6 border shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-foreground">
                    {liveProjectsCount}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">Dự Án Đang Chạy</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-4 md:p-6 border shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-foreground">
                    {webProjectsCount}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">Ứng Dụng Web</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-4 md:p-6 border shadow-sm hover:shadow-lg transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-foreground">
                    {mobileProjectsCount}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">Ứng Dụng Di Động</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 md:py-8 bg-background border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 md:mb-8">
            <h3 className="text-lg md:text-2xl font-bold text-foreground mb-3 md:mb-4">Lọc Theo Danh Mục</h3>
            <div className="flex flex-wrap gap-2 mb-4 md:mb-6 overflow-x-auto pb-2">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-medium transition-all flex-shrink-0 ${
                  activeTab === "all"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                Tất Cả ({projectData.length})
              </button>
              <button
                onClick={() => setActiveTab("web")}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-medium transition-all flex-shrink-0 flex items-center gap-2 ${
                  activeTab === "web"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>Web ({webProjectsCount})</span>
              </button>
              <button
                onClick={() => setActiveTab("mobile")}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-medium transition-all flex-shrink-0 flex items-center gap-2 ${
                  activeTab === "mobile"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <SmartphoneIcon className="w-4 h-4" />
                <span>Di động ({mobileProjectsCount})</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Nội dung chính - Grid dự án */}
      <section id="projects-section" className="py-8 md:py-12 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Thông báo khi không có dự án nào */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-8 md:py-12">
              <div className="w-16 h-16 md:w-24 md:h-24 mx-auto bg-muted rounded-full flex items-center justify-center mb-4 md:mb-6">
                <SmartphoneIcon className="w-8 h-8 md:w-12 md:h-12 text-muted-foreground" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                Không Có Dự Án
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 max-w-md mx-auto">
                Hiện tại không có dự án trong danh mục này. 
                Hãy quay lại sau để xem các bổ sung mới!
              </p>
              <button
                onClick={() => setActiveTab("all")}
                className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-primary hover:bg-primary/90 text-primary-foreground text-sm md:text-base font-medium rounded-lg transition-all"
              >
                Xem Tất Cả Dự Án
              </button>
            </div>
          ) : (
            <>
              {/* Desktop view - Grid dự án */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="group relative bg-card rounded-2xl overflow-hidden border shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Header dự án */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Badge trạng thái */}
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                          project.status === 'Đang hoạt động' 
                            ? 'bg-green-500/90 text-white' 
                            : project.status === 'Đang phát triển' ? 'bg-yellow-500/90 text-white' : 'bg-gray-500/90 text-white'
                        }`}>
                          {project.status === 'Đang hoạt động' ? '🚀 Đang chạy' : project.status === 'Đang phát triển' ? '🛠️ Đang phát triển' : '⏸️ Tạm dừng'}
                        </span>
                      </div>

                      {/* Badge nền tảng */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full backdrop-blur-sm flex items-center gap-1">
                          {project.platform === 'Mobile' ? '📱 Di động' : '💻 Web'}
                        </span>
                      </div>
                    </div>

                    {/* Nội dung dự án */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            {project.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                              {project.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-sm text-muted-foreground">{project.year}</span>
                              <span className="text-muted-foreground">•</span>
                              <span className="text-sm text-muted-foreground">{project.category}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Công Nghệ Sử Dụng</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.slice(0, 4).map((tech, index) => (
                            <span 
                              key={index}
                              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium ${tech.color}`}
                            >
                              <span>{tech.icon}</span>
                              <span>{tech.name}</span>
                            </span>
                          ))}
                          {project.techStack.length > 4 && (
                            <span className="px-3 py-1.5 bg-muted text-muted-foreground text-xs font-medium rounded-lg">
                              +{project.techStack.length - 4} công nghệ khác
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Xem trước tính năng */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Tính Năng Chính</h4>
                        <div className="space-y-2">
                          {project.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="w-5 h-5 bg-primary/10 rounded flex items-center justify-center mt-0.5">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              </div>
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Nút hành động */}
                      <div className="flex flex-col gap-3">
                        <div className="flex gap-3">
                          {project.liveUrl && (
                            <a 
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 group/live inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 active:scale-95"
                            >
                              <Globe className="w-4 h-4 transition-transform group-hover/live:scale-110" />
                              <span>Demo Trực Tuyến</span>
                            </a>
                          )}
                        </div>
                        
                        <Link 
                          to={`/project-detail/${project.id}`}
                          className="w-full group/detail inline-flex items-center justify-center gap-2 px-4 py-3 bg-transparent hover:bg-accent text-foreground font-medium rounded-lg border transition-all duration-300 hover:border-primary active:scale-95"
                        >
                          <span>Xem Chi Tiết Dự Án</span>
                          <svg className="w-4 h-4 transition-transform group-hover/detail:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile view cho Project Cards */}
              <div className="md:hidden">
                {isLoading ? (
                  <MobileSkeleton />
                ) : (
                  filteredProjects.map((project) => (
                    <MobileProjectCard key={project.id} project={project} />
                  ))
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Project;
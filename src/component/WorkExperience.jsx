import React, { useState, useEffect } from "react";
import { 
  Building, 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle, 
  Users, 
  BookOpen,
  Briefcase,
  Target,
  Zap,
  Star,
  ChevronDown,
  ChevronUp,
  Globe,
  Smartphone,
  Database,
  FileText,
  DollarSign,
  BarChart,
  Settings,
  Image,
  Link as LinkIcon,
  Trello
} from "lucide-react";
import { Link } from "react-router-dom";

// Component cho Experience Card
const ExperienceCard = ({ experience, isExpanded, onToggleExpand }) => (
  <div className="bg-card rounded-xl sm:rounded-2xl border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
    {/* Header */}
    <div className="p-4 sm:p-6 border-b">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${experience.logoColor} flex items-center justify-center shadow-md flex-shrink-0`}>
            <div className="text-white">
              {experience.icon}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 truncate">
              {experience.position}
            </h3>
            <p className="text-foreground/80 font-medium text-sm sm:text-base truncate">
              {experience.company}
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2">
              <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="truncate max-w-[150px] sm:max-w-none">{experience.location}</span>
              </div>
              <div className="flex items-center gap-1 text-xs sm:text-sm">
                <span className={`px-2 py-0.5 sm:px-2 sm:py-1 rounded-full ${
                  experience.type === "Tester" 
                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                }`}>
                  {experience.type}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <button
          onClick={() => onToggleExpand(experience.id)}
          className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors self-start mt-1 sm:mt-0"
        >
          <span className="text-xs sm:text-sm font-medium">
            {isExpanded ? "Thu gọn" : "Xem chi tiết"}
          </span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>
      
      <p className="text-muted-foreground text-sm sm:text-base mt-3 sm:mt-4">
        {experience.description}
      </p>
    </div>

    {/* Expanded Content */}
    {isExpanded && (
      <div className="p-4 sm:p-6 bg-muted/30 border-t">
        {/* Full Description */}
        <div className="mb-4 sm:mb-6">
          <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
            <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            Mô Tả Công Việc
          </h4>
          <p className="text-foreground/80 text-sm sm:text-base">
            {experience.fullDescription}
          </p>
        </div>

        {/* Hình ảnh minh họa */}
        {experience.images && experience.images.length > 0 && (
          <div className="mb-4 sm:mb-6">
            <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
              <Image className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
              Hình Ảnh Minh Họa
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {experience.images.map((img, idx) => (
                <div key={idx} className="bg-card border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <img 
                      src={img.url} 
                      alt={img.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs sm:text-sm font-medium text-foreground mb-1">{img.title}</p>
                    <p className="text-xs text-muted-foreground">{img.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tính năng sản phẩm cho công ty cây xanh */}
        {experience.id === "tester-intern" && (
          <div className="mb-4 sm:mb-6">
            <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
              <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
              Tính Năng Sản Phẩm Đã Test
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-card border rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-green-500" />
                  <h5 className="font-medium text-foreground text-sm">Kế Toán & Tài Chính</h5>
                </div>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    Quản lý thu chi, công nợ
                  </li>
                  <li className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    Báo cáo tài chính tự động
                  </li>
                  <li className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    Quyết toán thuế
                  </li>
                </ul>
              </div>

              <div className="bg-card border rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-blue-500" />
                  <h5 className="font-medium text-foreground text-sm">Hành Chính</h5>
                </div>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    Quản lý hợp đồng, văn bản
                  </li>
                  <li className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    Chấm công, tính lương
                  </li>
                  <li className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    Quản lý tài sản công ty
                  </li>
                </ul>
              </div>

              <div className="bg-card border rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart className="w-4 h-4 text-purple-500" />
                  <h5 className="font-medium text-foreground text-sm">Báo Cáo & Thống Kê</h5>
                </div>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    Dashboard real-time
                  </li>
                  <li className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    Báo cáo tổng hợp đa chiều
                  </li>
                  <li className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    Xuất Excel/PDF tự động
                  </li>
                </ul>
              </div>
            </div>

            {/* Platform support và liên kết */}
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Globe className="w-3 h-3" />
                <span>Web Application</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Smartphone className="w-3 h-3" />
                <span>Mobile App</span>
              </div>
              {experience.website && (
                <a 
                  href={experience.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-primary hover:underline"
                >
                  
                </a>
              )}
            </div>
          </div>
        )}

        {/* Các mảng công việc tại Maxim Saigon */}
        {experience.id === "maxim-operations" && (
          <div className="mb-4 sm:mb-6">
            <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
              <Database className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
              Phạm Vi Công Việc
            </h4>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4">
              <div className="bg-card border rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-4 h-4 text-blue-500" />
                  <h5 className="font-medium text-foreground text-sm">Website & SEO</h5>
                </div>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• Xây dựng và quản trị website</li>
                  <li>• Tối ưu SEO On-page</li>
                  <li>• Sitemap, canonical, Schema</li>
                  <li>• Theo dõi Google indexing</li>
                </ul>
                <a
                  href="https://www.maximsaigon.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-xs text-primary hover:underline"
                >
                  <LinkIcon className="w-3 h-3" />
                  maximsaigon.vn
                </a>
              </div>

              <div className="bg-card border rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-green-500" />
                  <h5 className="font-medium text-foreground text-sm">Báo Giá</h5>
                </div>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• Tổng hợp thông tin hàng hóa, dịch vụ</li>
                  <li>• Đối chiếu báo giá nhà cung cấp</li>
                  <li>• Theo dõi và cập nhật dữ liệu báo giá</li>
                </ul>
              </div>

              <div className="bg-card border rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Settings className="w-4 h-4 text-purple-500" />
                  <h5 className="font-medium text-foreground text-sm">IT Helpdesk</h5>
                </div>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• Hỗ trợ máy tính và thiết bị văn phòng</li>
                  <li>• Xử lý lỗi phần mềm cơ bản</li>
                  <li>• Hỗ trợ tài khoản và kết nối</li>
                </ul>
              </div>

              <div className="bg-card border rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart className="w-4 h-4 text-orange-500" />
                  <h5 className="font-medium text-foreground text-sm">Doanh Thu & Báo Cáo</h5>
                </div>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• Tổng hợp dữ liệu doanh thu</li>
                  <li>• Theo dõi báo cáo vận hành</li>
                  <li>• Hỗ trợ kiểm tra số liệu</li>
                </ul>
              </div>

              <div className="bg-card border rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-cyan-500" />
                  <h5 className="font-medium text-foreground text-sm">Công Nợ</h5>
                </div>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• Theo dõi dữ liệu công nợ</li>
                  <li>• Đối chiếu và cập nhật thông tin</li>
                  <li>• Hỗ trợ tổng hợp báo cáo liên quan</li>
                </ul>
              </div>

              <div className="bg-card border rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-pink-500" />
                  <h5 className="font-medium text-foreground text-sm">Hồ Sơ Nhân Sự</h5>
                </div>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• Cập nhật thông tin hồ sơ nhân sự</li>
                  <li>• Sắp xếp và quản lý dữ liệu</li>
                  <li>• Hỗ trợ tra cứu thông tin nội bộ</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-300 font-medium mb-1">
                    Địa điểm làm việc:
                  </p>
                  <p className="text-xs text-blue-700 dark:text-blue-400">
                    {experience.workLocation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {/* Trách nhiệm */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
              <Target className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
              Trách Nhiệm Chính
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {experience.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-1"></div>
                  </div>
                  <span className="text-foreground/80 text-xs sm:text-sm">
                    {resp}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Thành tựu */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
              Thành Tựu Đạt Được
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {experience.achievements.map((ach, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 mt-0.5" />
                  </div>
                  <span className="text-foreground/80 text-xs sm:text-sm">
                    {ach}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Kỹ năng - ĐÃ SỬA: Bỏ phần trăm */}
        <div className="mb-4 sm:mb-6">
          <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
            Kỹ Năng Áp Dụng
          </h4>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {experience.skills.map((skill, idx) => (
              <div key={idx} className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-muted/50 rounded-lg border hover:bg-muted transition-colors">
                {skill.icon && (
                  <div className="text-muted-foreground">
                    {skill.icon}
                  </div>
                )}
                <span className="text-xs sm:text-sm font-medium text-foreground/80">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Dự án liên quan */}
        <div className="mb-4 sm:mb-6">
          <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500" />
            Dự Án Tham Gia
          </h4>
          <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
            {experience.projects.map((project, idx) => (
              <div key={idx} className="bg-card border rounded-lg sm:rounded-xl p-3 sm:p-4">
                <h5 className="font-semibold text-foreground text-sm sm:text-base mb-1 sm:mb-2">
                  {project.name}
                </h5>
                <p className="text-muted-foreground text-xs sm:text-sm mb-2">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 sm:px-2 sm:py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {project.role}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {experience.period.split(' - ')[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  </div>
);

export const WorkExperience = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedItems, setExpandedItems] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Dữ liệu kinh nghiệm làm việc - ĐÃ SỬA: skills với icons
  const experiences = [
    {
      id: "tester-intern",
      company: "Công Ty Cây Xanh Công Minh",
      position: "Thực Tập Sinh Tester",
      period: "06/2023 - 09/2023",
      location: "223/8 Đặng Thuỳ Trâm, Bình Thạnh, TP.HCM",
      workLocation: "223/8 Đặng Thuỳ Trâm, Phường 13, Quận Bình Thạnh, TP.HCM",
      type: "Tester",
      description: "Thực tập tại công ty phần mềm, tham gia kiểm thử hệ thống ERP tích hợp đa chức năng: kế toán, hành chính, tài chính và báo cáo.",
      fullDescription: "Thực tập tại Công Ty Cây Xanh Công Minh - công ty phát triển phần mềm ERP chuyên về quản lý cây xanh đô thị. Sản phẩm là hệ thống ERP tích hợp với các module: Kế toán tài chính, Hành chính nhân sự, Quản lý tài sản, Báo cáo tổng hợp. Hệ thống hỗ trợ cả web và mobile, phục vụ các đô thị lớn trên toàn quốc.",
      website: "https://www.example-cayxanh.com",
      responsibilities: [
        "Kiểm thử manual các tính năng kế toán: quản lý thu chi, công nợ, báo cáo tài chính",
        "Test các module hành chính: chấm công, tính lương, quản lý hợp đồng",
        "Kiểm thử tính năng báo cáo tổng hợp và dashboard thống kê",
        "Viết và thực thi test case cho giao diện web và mobile",
        "Báo cáo bug trên hệ thống Trello, theo dõi quy trình fix bug",
        "Tham gia review requirements và đóng góp ý kiến từ góc độ QA"
      ],
      achievements: [
        "Hoàn thành test 120+ test cases cho 5 module chính của hệ thống",
        "Phát hiện 60+ bug (trong đó có 15 bug critical/major)",
        "Được đánh giá cao về chất lượng test cases và khả năng tìm edge cases",
        "Góp phần cải thiện độ ổn định của phiên bản release"
      ],
      skills: [
        { name: "Manual Testing", icon: <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "Test Case Design", icon: <FileText className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "Bug Reporting", icon: <Settings className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "Trello", icon: <Trello className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "Agile Methodology", icon: <Zap className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "ERP System Testing", icon: <Database className="w-3 h-3 sm:w-4 sm:h-4" /> }
      ],
      projects: [
        {
          name: "Hệ Thống ERP Quản Lý Cây Xanh Đô Thị",
          description: "ERP tích hợp kế toán, hành chính, tài chính, báo cáo - hỗ trợ web & mobile",
          role: "Tester thực tập"
        }
      ],
      images: [
        {
          url: "/cxcm/1.png",
          title: "Văn phòng công ty Cây Xanh Công Minh",
          description: "Môi trường làm việc chuyên nghiệp và hiện đại"
        },
        {
          url: "/cxcm/3.png",
          title: "Phòng họp và thảo luận dự án",
          description: "Không gian làm việc tập trung và sáng tạo"
        },
        {
          url: "/cxcm/2.png",
          title: "Phòng họp và thảo luận dự án",
          description: "Nơi diễn ra các buổi review requirements và test plan"
        }
      ],
      logoColor: "from-green-500 to-emerald-600",
      icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      id: "maxim-operations",
      company: "Maxim Saigon",
      position: "Nhân viên tổng hợp vận hành",
      period: "2025 - Hiện tại",
      location: "Quận 1, TP.HCM",
      workLocation: "Maxim Saigon - 13-15-17 Đồng Khởi, Bến Nghé, Quận 1, TP.HCM",
      type: "Operations & Digital",
      description: "Phụ trách các công việc vận hành tổng hợp, quản trị website và triển khai SEO; hỗ trợ IT, báo giá và các phần mềm quản lý nội bộ.",
      fullDescription: "Tham gia công việc tổng hợp vận hành tại Maxim Saigon, trực tiếp xây dựng và quản trị website https://www.maximsaigon.vn/, triển khai các hạng mục SEO và theo dõi tình trạng hiển thị trên công cụ tìm kiếm. Bên cạnh đó, phụ trách hỗ trợ báo giá, xử lý các yêu cầu IT cơ bản và hỗ trợ sử dụng phần mềm phục vụ quản lý doanh thu, công nợ và hồ sơ nhân sự.",
      website: "https://www.maximsaigon.vn/",
      responsibilities: [
        "Trực tiếp xây dựng, cập nhật nội dung và quản trị website https://www.maximsaigon.vn/",
        "Triển khai SEO On-page: tối ưu nội dung, tiêu đề, mô tả, liên kết và cấu trúc trang",
        "Thiết lập và kiểm tra sitemap, canonical, structured data (Schema) và hỗ trợ lập chỉ mục trên Google",
        "Chuẩn bị, tổng hợp và theo dõi các hạng mục báo giá, thông tin sản phẩm và nhà cung cấp",
        "Hỗ trợ IT nội bộ: xử lý sự cố máy tính, phần mềm, thiết bị văn phòng và các vấn đề kỹ thuật thường gặp",
        "Sử dụng và hỗ trợ phần mềm quản lý, tổng hợp dữ liệu doanh thu và báo cáo vận hành",
        "Theo dõi dữ liệu công nợ, hồ sơ nhân sự và cập nhật thông tin trên hệ thống quản lý",
        "Phối hợp với các bộ phận để xử lý công việc phát sinh và cải thiện quy trình vận hành"
      ],
      achievements: [
        "Trực tiếp xây dựng và đưa website Maxim Saigon vào hoạt động",
        "Triển khai các cấu hình SEO kỹ thuật và SEO On-page cho website",
        "Hỗ trợ chuẩn hóa, tổng hợp thông tin báo giá và dữ liệu vận hành",
        "Hỗ trợ các bộ phận xử lý những vấn đề IT và phần mềm trong quá trình làm việc"
      ],
      skills: [
        { name: "Website Management", icon: <Globe className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "SEO On-page", icon: <Target className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "Technical SEO", icon: <Settings className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "IT Support", icon: <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "Quotation & Procurement Support", icon: <FileText className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "Revenue & Debt Tracking", icon: <DollarSign className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "HR Records Management", icon: <Users className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "Business Operations", icon: <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" /> }
      ],
      projects: [
        {
          name: "Website & SEO - Maxim Saigon",
          description: "Xây dựng, quản trị website và triển khai các hạng mục SEO cho website doanh nghiệp",
          role: "Website & SEO"
        },
        {
          name: "Hỗ trợ hệ thống vận hành nội bộ",
          description: "Hỗ trợ báo giá, IT và dữ liệu trên các phần mềm quản lý doanh thu, công nợ, hồ sơ nhân sự",
          role: "Operations Support"
        }
      ],
      images: [
        {
          url: "/fugu/4.png",
          title: "Không gian nhà hàng",
          description: "Hình ảnh môi trường hoạt động thuộc hệ thống nhà hàng"
        },
        {
          url: "/fugu/1.png",
          title: "Giao diện phần mềm quản lý",
          description: "Minh họa công việc sử dụng phần mềm trong vận hành"
        }
      ],
      logoColor: "from-blue-500 to-cyan-600",
      icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
    }
  ];

  const filteredExperiences = activeTab === "all" 
    ? experiences 
    : experiences.filter(exp => exp.type === activeTab);



  return (
    <div id="Work-experience" className="min-h-screen scroll-mt-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div>
              <h1 className="text-xl sm:text-3xl font-bold text-foreground">
                Kinh Nghiệm Làm Việc
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground mt-1 sm:mt-2">
                Kết hợp kinh nghiệm kiểm thử phần mềm và vận hành doanh nghiệp
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <Link 
                to="/"
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary text-primary-foreground font-medium rounded-lg transition-all hover:shadow-lg active:scale-95 text-xs sm:text-sm"
              >
                <span>Về Trang Chủ</span>
              </Link>
            </div>
          </div>
        </div>
      </header>


      {/* Filter Section */}
      <section className="py-4 sm:py-6 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 sm:mb-6">
            <h3 className="text-base sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
              Lọc Theo Chuyên Môn
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 overflow-x-auto pb-2">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex-shrink-0 ${
                  activeTab === "all"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                Tất Cả ({experiences.length})
              </button>
              <button
                onClick={() => setActiveTab("Tester")}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex-shrink-0 flex items-center gap-1.5 ${
                  activeTab === "Tester"
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Kinh Nghiệm Tester</span>
              </button>
              <button
                onClick={() => setActiveTab("Operations & Digital")}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex-shrink-0 flex items-center gap-1.5 ${
                  activeTab === "Operations & Digital"
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Vận Hành & Digital</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 sm:py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="space-y-4 sm:space-y-6">
              {[1, 2].map((item) => (
                <div key={item} className="bg-card rounded-xl border p-4 sm:p-6 animate-pulse">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-muted rounded-lg"></div>
                    <div className="flex-1">
                      <div className="h-5 sm:h-6 bg-muted rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-muted rounded w-1/2 mb-3"></div>
                      <div className="h-4 bg-muted rounded w-full mb-2"></div>
                      <div className="h-4 bg-muted rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredExperiences.length === 0 ? (
            <div className="text-center py-8 sm:py-12">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-muted rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                Không Có Kinh Nghiệm Phù Hợp
              </h3>
              <p className="text-sm text-muted-foreground mb-4 sm:mb-6 max-w-md mx-auto">
                Hiện không có kinh nghiệm nào thuộc chuyên môn này.
              </p>
              <button
                onClick={() => setActiveTab("all")}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg transition-all hover:shadow-lg text-sm"
              >
                Xem Tất Cả Kinh Nghiệm
              </button>
            </div>
          ) : (
            <div className="space-y-4 sm:space-y-6">
              {filteredExperiences.map((experience) => (
                <ExperienceCard 
                  key={experience.id} 
                  experience={experience}
                  isExpanded={expandedItems[experience.id]}
                  onToggleExpand={toggleExpand}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default WorkExperience;
import React, { useState, useEffect } from "react";
import { Download, Eye, ExternalLink, Calendar, Award, FileText, BookOpen, Sparkles, ChevronRight, ArrowUp, Clock, Users, Trophy, Star, Maximize2, FileCheck, UserCheck, Brain, Target } from "lucide-react";

// Modal component for image preview
const ImageModal = ({ isOpen, onClose, imageUrl, title, issuer }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
      <div className="relative max-w-4xl max-h-[90vh] w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="bg-card rounded-xl overflow-hidden">
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">Cấp bởi: {issuer}</p>
          </div>
          
          <div className="relative h-[70vh] overflow-auto">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-auto object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          
          <div className="p-4 border-t flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              Click vào ảnh để xem chi tiết
            </span>
            <a
              href={imageUrl}
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              Tải ảnh
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mobile Skeleton Component
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

export const Certificate = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [imageLoaded, setImageLoaded] = useState({});
  const [activeSection, setActiveSection] = useState("certificates");
  const [modalState, setModalState] = useState({
    isOpen: false,
    imageUrl: "",
    title: "",
    issuer: ""
  });

  // Simulate loading for mobile
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Thêm event listener để hiển thị nút back to top
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hàm scroll về đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Hàm scroll đến sections
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle image load
  const handleImageLoad = (id) => {
    setImageLoaded(prev => ({ ...prev, [id]: true }));
  };

  // Open image modal
  const openImageModal = (imageUrl, title, issuer) => {
    setModalState({
      isOpen: true,
      imageUrl,
      title,
      issuer
    });
  };

  // Close image modal
  const closeImageModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  // Data chứng chỉ chính thức
  const certificatesData = [
    {
      id: "english-b2",
      title: "Chứng chỉ tiếng Anh B2",
      issuer: "Đại học HUTECH",
      issueDate: "2024",
      description: "Chứng chỉ tiếng Anh trình độ B2 đánh giá khả năng sử dụng tiếng Anh độc lập trong các tình huống đa dạng.",
      imageUrl: "/english-b2.jpg",
      skills: ["Tiếng Anh", "Giao tiếp", "Đọc hiểu", "Nghe hiểu", "Viết"],
      type: "language",
      level: "B2",
      duration: "2 năm"
    },
    {
      id: "teamwork",
      title: "Chứng chỉ Làm việc nhóm",
      issuer: "HUTECH University",
      issueDate: "2023",
      description: "Chứng nhận kỹ năng làm việc nhóm hiệu quả, hợp tác và phối hợp trong các dự án học thuật và thực tế.",
      imageUrl: "/teamwork.jpg",
      skills: ["Teamwork", "Collaboration", "Communication", "Leadership", "Project Management"],
      type: "soft-skill",
      level: "Advanced",
      duration: "1 năm"
    }
  ];

  // Data giấy chứng nhận (workshops, training, awards)
  const recognitionsData = [
    {
      id: "full-business-analyst",
      title: "Certificate Full Business Analyst",
      issuer: "FPT Aptech",
      issueDate: "Tháng 11, 2024",
      description: "Hoàn thành khóa học Full Business Analyst với các kỹ năng phân tích nghiệp vụ, quản lý yêu cầu và tư vấn giải pháp công nghệ.",
      imageUrl: "/FULLBA.jpg",
      skills: ["Business Analysis", "Requirement Analysis", "UML", "BPMN", "SQL"],
      type: "certificate",
      level: "Completion",
      duration: "6 tháng",
      achievement: "Hoàn thành xuất sắc"
    },
    {
      id: "it-got-talent",
      title: "IT Got Talent",
      issuer: "HUTECH IT Club",
      issueDate: "Tháng 10, 2024",
      description: "Giải thưởng dành cho sinh viên có tài năng và đóng góp xuất sắc trong lĩnh vực Công nghệ Thông tin.",
      imageUrl: "/ITGOTTAILENT.jpg",
      skills: ["IT Skills", "Innovation", "Technical Excellence", "Leadership"],
      type: "award",
      level: "Excellence",
      duration: "1 năm",
      achievement: "Giải thưởng tài năng"
    },
    {
      id: "agile-scrum-workshop",
      title: "Quy trình quản lý dự án Agile & Scrum",
      issuer: "DXC Technology",
      issueDate: "Tháng 9, 2024",
      description: "Tham gia hội thảo về quy trình quản lý dự án Agile và Scrum do DXC Technology tổ chức.",
      imageUrl: "/AGILE&SCRUM.jpg",
      skills: ["Agile", "Scrum", "Project Management", "SDLC"],
      type: "workshop",
      level: "Participation",
      duration: "4 giờ",
      achievement: "Tham gia tích cực"
    },
    {
      id: "business-data-analyst-workshop",
      title: "Business & Data Analyst - Career Development Roadmap",
      issuer: "HUTECH University",
      issueDate: "Tháng 8, 2024",
      description: "Hội thảo về lộ trình phát triển nghề nghiệp cho Business Analyst và Data Analyst.",
      imageUrl: "/WorkShopBA&DA.jpg",
      skills: ["Career Development", "Business Analyst", "Data Analyst", "Roadmap"],
      type: "workshop",
      level: "Participation",
      duration: "3 giờ",
      achievement: "Hoàn thành workshop"
    },
    {
      id: "hutech-net-cracking",
      title: "HUTECH'S Net Cracking Challenges 2024",
      issuer: "HUTECH University",
      issueDate: "Tháng 5, 2024",
      description: "Tham gia cuộc thi Net Cracking Challenges 2024 với các thử thách về bảo mật mạng và hacking có đạo đức.",
      imageUrl: "/NETCRAKING.jpg",
      skills: ["Cybersecurity", "Networking", "Ethical Hacking", "Problem Solving"],
      type: "competition",
      level: "Participant",
      duration: "1 ngày",
      achievement: "Top 20 thí sinh"
    },
    {
      id: "teamwork-ai-workshop",
      title: "Làm việc Nhóm hiệu quả hơn với AI tích hợp",
      issuer: "HUTECH AI Club",
      issueDate: "Tháng 4, 2024",
      description: "Workshop về ứng dụng AI trong việc nâng cao hiệu quả làm việc nhóm và cộng tác.",
      imageUrl: "/WorkShopTeamWork.jpg",
      skills: ["AI Integration", "Team Collaboration", "Productivity Tools", "AI Applications"],
      type: "workshop",
      level: "Participation",
      duration: "3 giờ",
      achievement: "Hoàn thành workshop"
    }
  ];

  // CV Data với Google Drive link
  const cvData = {
    viewUrl: "https://drive.google.com/file/d/1MChc_8u8wOE9gQRZxKS68vVMUPGp1ZkZ/view?usp=drive_link",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1MChc_8u8wOE9gQRZxKS68vVMUPGp1ZkZ",
    lastUpdated: "Tháng 12, 2024",
    experience: "< 1 năm",
    skills: ["Business Analysis", "Data Analysis", "Project Management", "Team Collaboration"]
  };

  // Thống kê
  const totalCertificates = certificatesData.length;
  const totalRecognitions = recognitionsData.length;
  const languageCerts = certificatesData.filter(c => c.type === "language").length;

  // Component cho Certificate Card
  const CertificateCard = ({ item, isRecognition = false }) => (
    <div className="group bg-card rounded-2xl overflow-hidden border shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Certificate Image */}
      <div className="relative h-48 overflow-hidden">
        {!imageLoaded[item.id] && (
          <div className="absolute inset-0 bg-muted animate-pulse"></div>
        )}
        <img 
          src={item.imageUrl} 
          alt={item.title}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
            !imageLoaded[item.id] ? 'opacity-0' : 'opacity-100'
          }`}
          loading="lazy"
          onLoad={() => handleImageLoad(item.id)}
        />
        <div className="absolute inset-0 from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Level Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
            item.level === 'Excellence' || item.level === 'First Prize' ? 'bg-purple-500/90 text-white' :
            item.level === 'Advanced' || item.level === 'B2' ? 'bg-blue-500/90 text-white' :
            item.level === 'Completion' ? 'bg-green-500/90 text-white' :
            'bg-yellow-500/90 text-white'
          }`}>
            {item.level}
          </span>
        </div>

        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full backdrop-blur-sm">
            {isRecognition ? (
              item.type === 'certificate' ? '📜 Chứng nhận' :
              item.type === 'award' ? '🏆 Giải thưởng' :
              item.type === 'workshop' ? '🎯 Workshop' :
              item.type === 'competition' ? '🥇 Cuộc thi' :
              '📚 Đào tạo'
            ) : (
              item.type === 'language' ? '🌐 Ngôn ngữ' :
              item.type === 'soft-skill' ? '🤝 Kỹ năng mềm' :
              '💻 Kỹ thuật'
            )}
          </span>
        </div>

        {/* Duration/Info */}
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-black/60 text-white text-xs font-medium rounded-full backdrop-blur-sm flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {item.duration}
          </span>
        </div>
      </div>

      {/* Certificate Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              {isRecognition ? (
                item.type === 'award' ? <Trophy className="w-5 h-5 text-primary" /> :
                item.type === 'competition' ? <Star className="w-5 h-5 text-primary" /> :
                item.type === 'workshop' ? <Users className="w-5 h-5 text-primary" /> :
                <Award className="w-5 h-5 text-primary" />
              ) : (
                item.type === 'language' ? <BookOpen className="w-5 h-5 text-primary" /> :
                <Users className="w-5 h-5 text-primary" />
              )}
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-muted-foreground">{item.issuer}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{item.issueDate}</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-foreground/80 mb-6 leading-relaxed line-clamp-3">
          {item.description}
        </p>

        {/* Achievement for recognitions */}
        {isRecognition && item.achievement && (
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium rounded-lg">
              <Sparkles className="w-4 h-4" />
              <span>{item.achievement}</span>
            </div>
          </div>
        )}

        {/* Skills */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-3">Kỹ năng liên quan</h4>
          <div className="flex flex-wrap gap-2">
            {item.skills.slice(0, 4).map((skill, index) => (
              <span 
                key={index}
                className="px-3 py-1.5 bg-muted text-muted-foreground text-xs font-medium rounded-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          
          
          <a 
            href={item.imageUrl}
            download
            className="flex-1 group/download inline-flex items-center justify-center gap-2 px-4 py-3 bg-muted hover:bg-muted/80 text-foreground font-medium rounded-lg border transition-all duration-300 hover:shadow-lg active:scale-95"
          >
            <Download className="w-4 h-4 transition-transform group-hover/download:scale-110" />
            <span>Tải về</span>
          </a>
        </div>
      </div>
    </div>
  );

  // Component cho Mobile Certificate Card
  const MobileCertificateCard = ({ item, isRecognition = false }) => (
    <div className="mb-6 bg-card rounded-xl border overflow-hidden shadow-sm">
      {/* Certificate Image với skeleton */}
      <div className="relative h-48">
        {!imageLoaded[item.id] && (
          <div className="absolute inset-0 bg-muted animate-pulse"></div>
        )}
        <img 
          src={item.imageUrl} 
          alt={item.title}
          className={`w-full h-full object-cover ${
            !imageLoaded[item.id] ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'
          }`}
          loading="lazy"
          onLoad={() => handleImageLoad(item.id)}
        />
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
            item.level === 'Excellence' || item.level === 'First Prize' ? 'bg-purple-500 text-white' :
            item.level === 'Advanced' || item.level === 'B2' ? 'bg-blue-500 text-white' :
            'bg-green-500 text-white'
          }`}>
            {item.level}
          </span>
        </div>
      </div>

      {/* Certificate Content */}
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            {isRecognition ? (
              item.type === 'award' ? <Trophy className="w-4 h-4 text-primary" /> :
              item.type === 'competition' ? <Star className="w-4 h-4 text-primary" /> :
              item.type === 'workshop' ? <Users className="w-4 h-4 text-primary" /> :
              <Award className="w-4 h-4 text-primary" />
            ) : (
              item.type === 'language' ? <BookOpen className="w-4 h-4 text-primary" /> :
              <Users className="w-4 h-4 text-primary" />
            )}
          </div>
          <div>
            <h3 className="font-bold text-foreground">{item.title}</h3>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-xs text-muted-foreground">{item.issuer}</span>
              <span className="text-muted-foreground mx-1">•</span>
              <Calendar className="w-3 h-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground ml-1">{item.issueDate}</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-foreground/80 mb-4">{item.description}</p>

        {/* Achievement for recognitions */}
        {isRecognition && item.achievement && (
          <div className="mb-3">
            <div className="inline-flex items-center gap-1 px-2 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-medium rounded">
              <Sparkles className="w-3 h-3" />
              <span>{item.achievement}</span>
            </div>
          </div>
        )}

        {/* Skills */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {item.skills.slice(0, 3).map((skill, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded"
              >
                {skill}
              </span>
            ))}
            {item.skills.length > 3 && (
              <span className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded">
                +{item.skills.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons cho mobile */}
        <div className="flex gap-3">
          <button
            onClick={() => openImageModal(item.imageUrl, item.title, item.issuer)}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium rounded-lg transition-all active:scale-95"
          >
            <Maximize2 className="w-4 h-4" />
            <span className="truncate">Phóng to</span>
          </button>
          
          <a 
            href={item.imageUrl}
            download
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-muted hover:bg-muted/80 text-foreground text-sm font-medium rounded-lg transition-all active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span className="truncate">Tải</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Image Modal */}
      <ImageModal
        isOpen={modalState.isOpen}
        onClose={closeImageModal}
        imageUrl={modalState.imageUrl}
        title={modalState.title}
        issuer={modalState.issuer}
      />

      {/* Nút Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* Header với section ID */}
      <section id="certificates" className="scroll-mt-20">
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  Chứng chỉ & Giấy chứng nhận
                </h1>
                <p className="text-muted-foreground mt-2">
                  Hồ sơ năng lực, bằng cấp và thành tích chuyên môn
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={() => scrollToSection('certificates-section')}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 text-foreground font-medium rounded-lg transition-all hover:shadow-lg active:scale-95"
                >
                  <span>Xem Chứng chỉ</span>
                </button>
                <a 
                  href={cvData.downloadUrl}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-all hover:shadow-lg active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>Tải CV</span>
                </a>
              </div>
            </div>
          </div>
        </header>
      </section>

      {/* Hero Section */}
      <section className="py-12 from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Bằng cấp & Thành tích
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bộ sưu tập các chứng chỉ chuyên môn và giấy chứng nhận đạt được, 
              phản ánh quá trình học tập và rèn luyện không ngừng.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    {totalCertificates}
                  </div>
                  <div className="text-muted-foreground">Chứng chỉ chính thức</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    {totalRecognitions}
                  </div>
                  <div className="text-muted-foreground">Giấy chứng nhận</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    {languageCerts}
                  </div>
                  <div className="text-muted-foreground">Chứng chỉ Ngôn ngữ</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    {cvData.experience}
                  </div>
                  <div className="text-muted-foreground">Kinh nghiệm</div>
                </div>
              </div>
            </div>
          </div>

          {/* CV Section được làm ngầu hơn */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 border shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg">
                      <FileCheck className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        Hồ sơ CV Chuyên nghiệp
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">
                          Business Analyst
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full">
                          Data Analyst
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    CV chi tiết thể hiện kiến thức, kỹ năng và quá trình học tập trong lĩnh vực 
                    phân tích nghiệp vụ và công nghệ thông tin. Được cập nhật mới nhất vào <span className="font-semibold text-primary">{cvData.lastUpdated}</span>.
                  </p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    <div className="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                      <UserCheck className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">Chuyên nghiệp</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                      <Target className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-medium">Mục tiêu rõ ràng</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                      <Brain className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium">Tư duy phân tích</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                      <Users className="w-4 h-4 text-purple-500" />
                      <span className="text-sm font-medium">Teamwork</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <a 
                    href={cvData.viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-95 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <Eye className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Xem CV trực tuyến</span>
                  </a>
                  <a 
                    href={cvData.downloadUrl}
                    download="CV-Nguyen-Dinh-Do.pdf"
                    className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 dark:bg-black/20 backdrop-blur-sm border border-primary/20 text-foreground font-medium rounded-lg transition-all hover:shadow-lg active:scale-95 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <Download className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Tải CV (PDF)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs - Được di chuyển xuống dưới CV section */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setActiveSection("certificates")}
                className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  activeSection === "certificates"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <Award className="w-4 h-4" />
                Chứng chỉ Chính thức ({totalCertificates})
              </button>
              <button
                onClick={() => setActiveSection("recognitions")}
                className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  activeSection === "recognitions"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <Trophy className="w-4 h-4" />
                Giấy chứng nhận ({totalRecognitions})
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Grid Section */}
      <section id="certificates-section" className="py-12 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Chứng chỉ Chính thức */}
          {activeSection === "certificates" && (
            <>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <Award className="w-6 h-6" />
                  Chứng chỉ Chính thức ({totalCertificates})
                </h3>
                <p className="text-muted-foreground">
                  Các chứng chỉ ngôn ngữ và kỹ năng chuyên môn từ các tổ chức giáo dục
                </p>
              </div>
              
              {certificatesData.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center mb-6">
                    <Award className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Không tìm thấy chứng chỉ
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Hiện không có chứng chỉ nào thuộc loại này.
                  </p>
                </div>
              ) : (
                <>
                  {/* Desktop view */}
                  <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {certificatesData.map((cert) => (
                      <CertificateCard key={cert.id} item={cert} />
                    ))}
                  </div>

                  {/* Mobile view */}
                  <div className="md:hidden">
                    {isLoading ? (
                      <MobileSkeleton />
                    ) : (
                      certificatesData.map((cert) => (
                        <MobileCertificateCard key={cert.id} item={cert} />
                      ))
                    )}
                  </div>
                </>
              )}
            </>
          )}

          {/* Giấy chứng nhận */}
          {activeSection === "recognitions" && (
            <>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <Trophy className="w-6 h-6" />
                  Giấy chứng nhận & Thành tích ({totalRecognitions})
                </h3>
                <p className="text-muted-foreground">
                  Các giấy chứng nhận tham gia, giải thưởng và thành tích đạt được trong học tập và hoạt động
                </p>
              </div>
              
              {recognitionsData.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center mb-6">
                    <Trophy className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Không tìm thấy giấy chứng nhận
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Hiện không có giấy chứng nhận nào thuộc loại này.
                  </p>
                </div>
              ) : (
                <>
                  {/* Desktop view */}
                  <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recognitionsData.map((rec) => (
                      <CertificateCard key={rec.id} item={rec} isRecognition={true} />
                    ))}
                  </div>

                  {/* Mobile view */}
                  <div className="md:hidden">
                    {isLoading ? (
                      <MobileSkeleton />
                    ) : (
                      recognitionsData.map((rec) => (
                        <MobileCertificateCard key={rec.id} item={rec} isRecognition={true} />
                      ))
                    )}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Certificate;
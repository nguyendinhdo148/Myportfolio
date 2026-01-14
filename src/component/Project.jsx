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
    
    // Simulate loading for mobile
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Project data với 3 project đầy đủ
  const projectData = [
    {
      id: "job-portal-web",
      title: "VieJobs - Website tìm kiếm việc làm",
      category: "Web Application",
      status: "Live",
      year: "2024",
      description: "Ứng dụng web tìm kiếm việc làm với AI matching từ OpenAI/Gemini, real-time notifications và Cloudinary media hosting.",
      longDescription: "Job Portal là nền tảng tìm kiếm việc làm thế hệ mới sử dụng MERN stack với AI integration từ OpenAI và Gemini. Hệ thống hỗ trợ real-time notifications, advanced search với filter đa chiều, Cloudinary cho media upload, và hệ thống tracking ứng tuyển từ A đến Z.",
      imageUrl: "/posterViejob-web.jpg",
      videoDemo: "/WebsiteFindJob.mp4",
      liveUrl: "https://vie-jobs.vercel.app/",
      repoUrl: "https://github.com/nguyendinhdo148/Nhom3-DACS-CNPM-WebsiteTimKiemViecLam",
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
        "AI-powered job matching",
        "Real-time notifications",
        "Cloudinary media management",
        "Advanced search engine",
        "Interview simulation",
        "Analytics dashboard"
      ],
      challenges: [
        "AI Integration Complexity",
        "Real-time Scalability",
        "Media Processing Performance"
      ],
      platform: "Web",
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: "job-portal-mobile",
      title: "VieJobs - Ứng dụng tìm kiếm việc làm",
      category: "Mobile Application",
      status: "In Development",
      year: "2024",
      description: "Ứng dụng di động tìm việc làm với Flutter, tích hợp AI recommendations, geolocation và push notifications.",
      longDescription: "Mobile application built với Flutter và Dart, kết nối với MERN backend. Ứng dụng hỗ trợ location-based job search, push notifications, offline mode, và AI chat assistant. Tích hợp OpenAI và Gemini AI cho personalized job recommendations.",
      imageUrl: "/mobieHome.jpg",
      videoDemo: "/videos/job-portal-mobile-demo.mp4",
      liveUrl: "https://expo.dev/@yourusername/job-portal-mobile",
      repoUrl: "https://github.com/username/job-portal-mobile-flutter",
      techStack: [
        { name: "Flutter", icon: "📱", color: "bg-blue-100 dark:bg-blue-900/30" },
        { name: "Dart", icon: "🎯", color: "bg-cyan-100 dark:bg-cyan-900/30" },
        { name: "React", icon: "⚛️", color: "bg-indigo-100 dark:bg-indigo-900/30" },
        { name: "Node.js", icon: "🟢", color: "bg-green-100 dark:bg-green-900/30" },
        { name: "OpenAI API", icon: "🧠", color: "bg-purple-100 dark:bg-purple-900/30" },
        { name: "Gemini AI", icon: "🌟", color: "bg-yellow-100 dark:bg-yellow-900/30" },
      ],
      features: [
        "Location-based search",
        "AI Career Assistant",
        "Push notifications",
        "Offline mode",
        "AR company tours",
        "Voice search"
      ],
      challenges: [
        "Cross-platform Performance",
        "Real-time Location Updates",
        "AI Model Optimization"
      ],
      platform: "Mobile",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      id: "p2p-file-share",
      title: "VieCloud - Lưu trữ và chia sẻ file P2P",
      category: "Web Application",
      status: "Live",
      year: "2024",
      description: "Nền tảng chia sẻ file peer-to-peer với end-to-end encryption, Java Spring Boot backend và React frontend.",
      longDescription: "Platform chia sẻ file sử dụng WebRTC cho direct P2P connections, với Spring Boot backend và React frontend. Hệ thống hỗ trợ end-to-end encryption, và real-time transfer tracking.",
      imageUrl: "/dashViecloud.jpg",
      videoDemo: "/videos/p2p-file-share-demo.mp4",
      liveUrl: "https://p2p-fileshare-demo.vercel.app",
      repoUrl: "https://github.com/username/p2p-file-share-system",
      techStack: [
        { name: "Java", icon: "☕", color: "bg-red-100 dark:bg-red-900/30" },
        { name: "Spring Boot", icon: "🌱", color: "bg-green-100 dark:bg-green-900/30" },
        { name: "React", icon: "⚛️", color: "bg-blue-100 dark:bg-blue-900/30" },
        { name: "Node.js", icon: "🟢", color: "bg-green-100 dark:bg-green-900/30" },
        { name: "WebRTC", icon: "📡", color: "bg-purple-100 dark:bg-purple-900/30" },
        { name: "MongoDB", icon: "🍃", color: "bg-emerald-100 dark:bg-emerald-900/30" }
      ],
      features: [
        "End-to-end encryption",
        "Direct P2P transfer",
        "Blockchain verification",
        "Real-time tracking",
        "No size limits",
        "Digital signatures"
      ],
      challenges: [
        "NAT Traversal Complexity",
        "Transfer Reliability",
        "Security Implementation"
      ],
      platform: "Web",
      icon: <Lock className="w-6 h-6" />
    }
  ];

  // Filter projects based on active tab
  const filteredProjects = activeTab === "all" 
    ? projectData 
    : projectData.filter(project => 
        activeTab === "web" ? project.platform === "Web" :
        activeTab === "mobile" ? project.platform === "Mobile" : true
      );

  // Tính toán số liệu thống kê
  const liveProjectsCount = projectData.filter(p => p.status === 'Live').length;
  const webProjectsCount = projectData.filter(p => p.platform === 'Web').length;
  const mobileProjectsCount = projectData.filter(p => p.platform === 'Mobile').length;

  // Hàm scroll về đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Hàm scroll đến projects section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Component cho Project Card trên mobile
  const MobileProjectCard = ({ project }) => (
    <div className="mb-6 bg-card rounded-xl border overflow-hidden shadow-sm">
      {/* Project Image */}
      <div className="relative h-48">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
            project.status === 'Live' 
              ? 'bg-green-500 text-white' 
              : 'bg-yellow-500 text-white'
          }`}>
            {project.status === 'Live' ? '🚀 Live' : '🛠️ In Progress'}
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full flex items-center gap-1">
            {project.platform === 'Mobile' ? '📱 Mobile' : '💻 Web'}
          </span>
        </div>
      </div>

      {/* Project Content */}
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

        {/* Features Preview cho mobile */}
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

        {/* Action Buttons cho mobile */}
        <div className="flex gap-2">
          <a 
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2.5 bg-muted text-foreground text-sm rounded-lg transition-all active:scale-95"
          >
            <Github className="w-4 h-4" />
            <span>Code</span>
          </a>
          
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
            <span>Details</span>
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
          aria-label="Back to top"
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
                  My Projects
                </h1>
                <p className="text-sm md:text-base text-muted-foreground mt-1 md:mt-2">
                  Full-stack applications với modern technologies 
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={scrollToProjects}
                  className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-muted hover:bg-muted/80 text-foreground text-sm md:text-base font-medium rounded-lg transition-all hover:shadow-lg active:scale-95"
                >
                  <span>View Projects</span>
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
              Crafting Digital Experiences
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my portfolio of full-stack applications built with modern technologies,
              featuring AI integration, real-time features, and scalable architectures.
            </p>
          </div>

          {/* Stats Overview - Responsive grid */}
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
                  <div className="text-sm md:text-base text-muted-foreground">Live Projects</div>
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
                  <div className="text-sm md:text-base text-muted-foreground">Web Applications</div>
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
                  <div className="text-sm md:text-base text-muted-foreground">Mobile Applications</div>
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
            <h3 className="text-lg md:text-2xl font-bold text-foreground mb-3 md:mb-4">Filter by Category</h3>
            <div className="flex flex-wrap gap-2 mb-4 md:mb-6 overflow-x-auto pb-2">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-medium transition-all flex-shrink-0 ${
                  activeTab === "all"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                All ({projectData.length})
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
                <span>Mobile ({mobileProjectsCount})</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Projects Grid */}
      <section id="projects-section" className="py-8 md:py-12 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Message khi không có project nào */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-8 md:py-12">
              <div className="w-16 h-16 md:w-24 md:h-24 mx-auto bg-muted rounded-full flex items-center justify-center mb-4 md:mb-6">
                <SmartphoneIcon className="w-8 h-8 md:w-12 md:h-12 text-muted-foreground" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                No Mobile Projects Available
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 max-w-md mx-auto">
                Currently, there are no mobile projects in the portfolio. 
                Check back later for new additions!
              </p>
              <button
                onClick={() => setActiveTab("all")}
                className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-primary hover:bg-primary/90 text-primary-foreground text-sm md:text-base font-medium rounded-lg transition-all"
              >
                View All Projects
              </button>
            </div>
          ) : (
            <>
              {/* Desktop view - Projects Grid */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="group relative bg-card rounded-2xl overflow-hidden border shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Project Header */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                          project.status === 'Live' 
                            ? 'bg-green-500/90 text-white' 
                            : 'bg-yellow-500/90 text-white'
                        }`}>
                          {project.status === 'Live' ? '🚀 Live' : '🛠️ In Progress'}
                        </span>
                      </div>

                      {/* Platform Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full backdrop-blur-sm flex items-center gap-1">
                          {project.platform === 'Mobile' ? '📱 Mobile' : '💻 Web'}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
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
                        <h4 className="text-sm font-semibold text-foreground mb-3">Technology Stack</h4>
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
                              +{project.techStack.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Features Preview */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
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

                      {/* Action Buttons */}
                      <div className="flex flex-col gap-3">
                        <div className="flex gap-3">
                          <a 
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 group/code inline-flex items-center justify-center gap-2 px-4 py-3 bg-muted hover:bg-muted/80 text-foreground font-medium rounded-lg border transition-all duration-300 hover:shadow-lg active:scale-95"
                          >
                            <Github className="w-4 h-4 transition-transform group-hover/code:scale-110" />
                            <span>Source Code</span>
                          </a>
                          
                          {project.liveUrl && (
                            <a 
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 group/live inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 active:scale-95"
                            >
                              <Globe className="w-4 h-4 transition-transform group-hover/live:scale-110" />
                              <span>Live Demo</span>
                            </a>
                          )}
                        </div>
                        
                        <Link 
                          to={`/project-detail/${project.id}`}
                          className="w-full group/detail inline-flex items-center justify-center gap-2 px-4 py-3 bg-transparent hover:bg-accent text-foreground font-medium rounded-lg border transition-all duration-300 hover:border-primary active:scale-95"
                        >
                          <span>View Project Details</span>
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
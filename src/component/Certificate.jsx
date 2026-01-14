import React, { useState, useEffect, useCallback, useRef } from "react";
import { Download, Eye, Calendar, Award, Sparkles, ArrowUp, Clock, Users, Trophy, Star, Maximize2, FileCheck, UserCheck, Brain, Target, Filter, Search, X, Layers, GraduationCap, Briefcase, Zap } from "lucide-react";

// Enhanced Image Modal với Preloading
const EnhancedImageModal = ({ isOpen, onClose, imageUrl, title, issuer, details }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen && imageUrl) {
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => setIsImageLoaded(true);
    }
  }, [isOpen, imageUrl]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
      setIsImageLoaded(false);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg transition-all duration-300"
      onClick={(e) => e.target === modalRef.current && onClose()}
    >
      <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-3 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition-all hover:scale-110 active:scale-95 group"
        >
          <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl h-full flex flex-col">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="text-sm text-gray-600 dark:text-gray-400">Cấp bởi: {issuer}</span>
                {details?.issueDate && (
                  <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {details.issueDate}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex-1 relative overflow-hidden p-4 bg-gray-50 dark:bg-gray-900">
            {!isImageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
              </div>
            )}
            
            <div className={`w-full h-full flex items-center justify-center transition-opacity duration-500 ${
              isImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}>
              <img
                src={imageUrl}
                alt={title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                style={{ imageRendering: 'auto' }}
              />
            </div>
          </div>

          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {details?.skills?.slice(0, 3).map((skill, index) => (
                  <span key={index} className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
              <a
                href={imageUrl}
                download
                className="group inline-flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all hover:shadow-lg active:scale-95"
              >
                <Download className="w-5 h-5" />
                <span>Tải ảnh gốc</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// CV Preview Modal
const CVPreviewModal = ({ isOpen, onClose, cvData }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg transition-all duration-300"
      onClick={(e) => e.target === modalRef.current && onClose()}
    >
      <div className="relative max-w-6xl w-full h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-3 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition-all hover:scale-110 active:scale-95 group"
        >
          <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl h-full flex flex-col">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Xem trước CV</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Phiên bản CV mới nhất cập nhật tháng 12, 2024
              </p>
            </div>
          </div>

          <div className="flex-1 overflow-hidden">
           <iframe
  src="https://drive.google.com/file/d/1MChc_8u8wOE9gQRZxKS68vVMUPGp1ZkZ/preview"
  className="w-full h-full border-0"
  allow="autoplay"
  title="CV Preview"
/>
          </div>

          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                CV được thiết kế chuyên nghiệp cho vị trí Business Analyst
              </div>
              <div className="flex gap-3">
                <a
                  href={cvData.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium rounded-lg transition-all hover:shadow-lg active:scale-95"
                >
                  <Eye className="w-5 h-5" />
                  <span>Xem trên Google Drive</span>
                </a>
                <a
                  href={cvData.downloadUrl}
                  download="CV-Nguyen-Dinh-Do.pdf"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all hover:shadow-lg active:scale-95"
                >
                  <Download className="w-5 h-5" />
                  <span>Tải CV (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Optimized Image Component
const OptimizedImage = ({ src, alt, className, onLoad, priority = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
      )}
      
      {hasError ? (
        <div className="w-full h-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Không thể tải ảnh</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          style={{
            contentVisibility: 'auto'
          }}
        />
      )}
    </div>
  );
};

// Enhanced Certificate Card với Intersection Observer
const EnhancedCertificateCard = ({ item, isRecognition = false, onClick }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const levelColors = {
    Excellence: "bg-gradient-to-r from-yellow-500 to-orange-500",
    Advanced: "bg-gradient-to-r from-blue-500 to-cyan-500",
    B2: "bg-gradient-to-r from-green-500 to-emerald-500",
    Completion: "bg-gradient-to-r from-purple-500 to-pink-500",
    Participation: "bg-gradient-to-r from-gray-500 to-slate-600",
    Participant: "bg-gradient-to-r from-blue-400 to-cyan-400",
  };

  const typeIcons = {
    certificate: <Award className="w-4 h-4" />,
    award: <Trophy className="w-4 h-4" />,
    workshop: <Users className="w-4 h-4" />,
    competition: <Star className="w-4 h-4" />,
    language: <GraduationCap className="w-4 h-4" />,
    'soft-skill': <Brain className="w-4 h-4" />,
  };

  return (
    <div
      ref={cardRef}
      className={`group transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{
        transitionDelay: isVisible ? '0ms' : '100ms'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-gray-50 dark:bg-gray-900">
          <OptimizedImage
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full"
            priority={false}
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            <span className={`px-3 py-1.5 rounded-full text-xs font-semibold text-white ${
              levelColors[item.level] || levelColors.Participation
            }`}>
              {typeIcons[item.type] || typeIcons.certificate}
              <span className="ml-1">{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</span>
            </span>
          </div>
          
          <div className="absolute bottom-3 left-3">
            <span className="px-3 py-1.5 bg-black/70 text-white text-xs font-medium rounded-full flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              {item.duration}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="mb-3">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
              {item.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Briefcase className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{item.issuer}</span>
              <span className="mx-1">•</span>
              <Calendar className="w-3 h-3 flex-shrink-0" />
              <span>{item.issueDate}</span>
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
            {item.description}
          </p>

          {isRecognition && item.achievement && (
            <div className="mb-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium rounded-lg">
                <Sparkles className="w-3 h-3" />
                <span>{item.achievement}</span>
              </div>
            </div>
          )}

          {/* Skills */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {item.skills.slice(0, 3).map((skill, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={onClick}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 active:scale-95"
            >
              <Maximize2 className="w-4 h-4" />
              <span>Xem ảnh</span>
            </button>
            
            <a
              href={item.imageUrl}
              download
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium rounded-lg transition-all duration-300 active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Tải về</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// CV Section Component với Preview
const CVSection = ({ cvData, onPreviewCV }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="mb-12">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* CV Preview Image */}
          <div className="lg:w-2/5">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Hồ sơ CV</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Phiên bản mới nhất - {cvData.lastUpdated}
              </p>
            </div>
            
            <div className="relative bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="aspect-[3/4] relative">
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 animate-pulse"></div>
                )}
                
                {/* CV Preview Image */}
                <img
                  src="https://drive.google.com/thumbnail?id=1MChc_8u8wOE9gQRZxKS68vVMUPGp1ZkZ&sz=w1000"

                  alt="CV Preview"
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
                
                {/* Preview Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={onPreviewCV}
                    className="transform -translate-y-4 group"
                  >
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-3 group-hover:scale-110 transition-transform">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-white font-medium text-sm">Xem trước CV</span>
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="font-medium text-gray-900 dark:text-white">CV.pdf</span>
                  </div>
                  <span className="text-sm text-gray-500">2 MB</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* CV Info */}
          <div className="lg:w-3/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <FileCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  CV Chuyên nghiệp
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                    Business Analyst
                  </span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full">
                    Data Analyst
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              CV được thiết kế chuyên nghiệp với đầy đủ thông tin về kỹ năng, kinh nghiệm và thành tích. 
              Tối ưu hóa cho các vị trí Business Analyst và Data Analyst.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <UserCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Chuyên nghiệp</div>
                  <div className="text-sm text-gray-500">Thiết kế hiện đại</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Mục tiêu rõ ràng</div>
                  <div className="text-sm text-gray-500">Định hướng BA/DA</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <Brain className="w-5 h-5 text-green-600 dark:text-green-400" />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Tư duy phân tích</div>
                  <div className="text-sm text-gray-500">Problem-solving</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <Users className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Teamwork</div>
                  <div className="text-sm text-gray-500">Collaboration</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onPreviewCV}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all hover:shadow-lg active:scale-95"
              >
                <Eye className="w-5 h-5" />
                <span>Xem trước CV</span>
              </button>
              <a 
                href={cvData.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium rounded-lg border border-gray-300 dark:border-gray-600 transition-all hover:shadow-lg active:scale-95"
              >
                <Eye className="w-5 h-5" />
                <span>Xem trên Drive</span>
              </a>
              <a 
                href={cvData.downloadUrl}
                download="CV-Nguyen-Dinh-Do.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all hover:shadow-lg active:scale-95"
              >
                <Download className="w-5 h-5" />
                <span>Tải CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
export const Certificate = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("certificates");
  const [modalState, setModalState] = useState({
    isOpen: false,
    imageUrl: "",
    title: "",
    issuer: "",
    details: null
  });
  const [showCVPreview, setShowCVPreview] = useState(false);

  // Back to top với throttle
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowBackToTop(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const openImageModal = useCallback((imageUrl, title, issuer, details) => {
    setModalState({
      isOpen: true,
      imageUrl,
      title,
      issuer,
      details
    });
  }, []);

  const closeImageModal = useCallback(() => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  }, []);

  const openCVPreview = useCallback(() => {
    setShowCVPreview(true);
  }, []);

  const closeCVPreview = useCallback(() => {
    setShowCVPreview(false);
  }, []);

  // Data chứng chỉ
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

  // Data giấy chứng nhận
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

  const cvData = {
    previewUrl: "https://drive.google.com/file/d/1MChc_8u8wOE9gQRZxKS68vVMUPGp1ZkZ/preview",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1MChc_8u8wOE9gQRZxKS68vVMUPGp1ZkZ",
    lastUpdated: "Tháng 12, 2024",
    experience: "< 1 năm",
    skills: ["Business Analysis", "Data Analysis", "Project Management", "Team Collaboration"]
  };

  const totalCertificates = certificatesData.length;
  const totalRecognitions = recognitionsData.length;
  const languageCerts = certificatesData.filter(c => c.type === "language").length;

  const currentData = activeSection === "certificates" ? certificatesData : recognitionsData;

  return (
    <div className="min-h-screen text-foreground bg-transparent">

      <EnhancedImageModal
        isOpen={modalState.isOpen}
        onClose={closeImageModal}
        imageUrl={modalState.imageUrl}
        title={modalState.title}
        issuer={modalState.issuer}
        details={modalState.details}
      />

      <CVPreviewModal
        isOpen={showCVPreview}
        onClose={closeCVPreview}
        cvData={cvData}
      />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 md:bottom-8 md:right-8"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Header */}
      <header className="sticky top-0 z-40  backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground/80">
                Chứng chỉ & Giấy chứng nhận
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm md:text-base">
                Hồ sơ năng lực, bằng cấp và thành tích chuyên môn
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={openCVPreview}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all hover:shadow-lg active:scale-95 text-sm md:text-base"
              >
                <Eye className="w-4 h-4" />
                <span>Xem CV</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Bằng cấp & Thành tích
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Bộ sưu tập các chứng chỉ chuyên môn và giấy chứng nhận đạt được
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {totalCertificates}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Chứng chỉ</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {totalRecognitions}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Giấy chứng nhận</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {languageCerts}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Ngôn ngữ</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {cvData.experience}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Kinh nghiệm</div>
              </div>
            </div>
          </div>
        </div>

        {/* CV Section với Preview */}
        <CVSection cvData={cvData} onPreviewCV={openCVPreview} />

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveSection("certificates")}
              className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                activeSection === "certificates"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              }`}
            >
              <Award className="w-4 h-4" />
              <span className="whitespace-nowrap">Chứng chỉ ({totalCertificates})</span>
            </button>
            <button
              onClick={() => setActiveSection("recognitions")}
              className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                activeSection === "recognitions"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              }`}
            >
              <Trophy className="w-4 h-4" />
              <span className="whitespace-nowrap">Giấy chứng nhận ({totalRecognitions})</span>
            </button>
          </div>
        </div>

        {/* Certificates Grid */}
        <section id="certificates-section">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              {activeSection === "certificates" ? <Award className="w-6 h-6" /> : <Trophy className="w-6 h-6" />}
              {activeSection === "certificates" ? "Chứng chỉ Chính thức" : "Giấy chứng nhận & Thành tích"}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {activeSection === "certificates" 
                ? "Các chứng chỉ ngôn ngữ và kỹ năng chuyên môn từ các tổ chức giáo dục"
                : "Các giấy chứng nhận tham gia, giải thưởng và thành tích đạt được"}
            </p>
          </div>
          
          {currentData.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
                <Award className="w-12 h-12 text-gray-400 dark:text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Không tìm thấy
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Hiện không có dữ liệu thuộc loại này.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentData.map((item) => (
                <EnhancedCertificateCard
                  key={item.id}
                  item={item}
                  isRecognition={activeSection === "recognitions"}
                  onClick={() => openImageModal(item.imageUrl, item.title, item.issuer, item)}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Certificate;
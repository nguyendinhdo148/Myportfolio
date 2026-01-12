import React, { useEffect, useState } from "react";
import { ArrowRight, Github, MessageSquare, Facebook, Mail } from "lucide-react";

export const Introduce = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Preload image
    const img = new Image();
    img.src = "/avatar.png";
    img.onload = () => setIsImageLoaded(true);

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com/nguyendinhdo148", label: "GitHub" },
    { icon: Facebook, href: "https://www.facebook.com/nguyen.inh.o.284334/", label: "Facebook" },
    { icon: MessageSquare, href: "https://zalo.me/0869122385", label: "Zalo" },
    { icon: Mail, href: "mailto:nguyendinhdo2k4@gmail.com", label: "Email" },
  ];

  // Skeleton cho mobile
  if (isMobile && !isImageLoaded) {
    return (
      <section id="introduce" className="introduce-container w-full flex flex-col md:flex-row items-center justify-between gap-8 py-10 md:py-16 px-0">
        {/* Skeleton code giữ nguyên */}
        ...
      </section>
    );
  }

  return (
    <section id="introduce" className="introduce-container w-full flex flex-col md:flex-row items-center justify-between gap-8 py-10 md:py-16 px-0">
      {/* Avatar Image with Effects - BÊN TRÁI */}
      <div className="md:w-1/2 flex justify-start md:justify-center pl-4 md:pl-8 lg:pl-16 xl:pl-24">
        <div className="relative">
          <div className={`relative ${isImageLoaded ? 'animate-float' : ''}`}>
            <div className="absolute -inset-3 md:-inset-4 lg:-inset-5 from-primary/20 to-secondary/20 rounded-full blur-lg opacity-60"></div>
            <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img 
                src="/avatar.png" 
                alt="Nguyễn Đình Đô - Business Analyst" 
                className={`w-full h-full object-cover transition-all duration-500 ${isImageLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                onLoad={() => setIsImageLoaded(true)}
              />
            </div>
            <div className="absolute -top-2 -right-2 w-7 h-7 md:w-8 md:h-8 bg-primary/80 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 md:w-7 md:h-7 bg-secondary/80 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-gray-900 px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg flex items-center gap-1.5 md:gap-2 animate-float" style={{ animationDelay: '0.3s' }}>
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-green-500 rounded-full"></div>
            <span className="text-xs md:text-sm font-semibold text-white">Business Analyst</span>
          </div>
        </div>
      </div>

      {/* Text Content - BÊN PHẢI */}
      <div className="md:w-1/2 text-center md:text-left pr-4 md:pr-8 lg:pr-16 xl:pr-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight text-foreground/80">
          Chào bạn, tôi là
          <span className="block text-primary mt-1 md:mt-2">
            Nguyễn Đình Đô
          </span>
        </h1>
        <div className="mb-5 md:mb-6">
          <p className="text-base md:text-lg lg:text-xl mb-2 text-foreground/80">
            Tôi là một
            <span className="text-primary font-semibold mx-1 md:mx-2">
              Business Analyst
            </span>
            chuyên nghiệp
          </p>
          <div className="text-base md:text-lg text-foreground/80 space-y-1">
            <div>
              <span className="text-primary font-semibold">Phân tích yêu cầu</span>
              <span className="mx-1 md:mx-2">•</span>
              <span className="text-primary font-semibold">Tối ưu quy trình</span>
            </div>
            <div>
              <span className="text-primary font-semibold">Phân tích dữ liệu</span>
              <span className="mx-1 md:mx-2">•</span>
              <span className="text-primary font-semibold">Giải pháp công nghệ</span>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start gap-3 md:gap-4 mb-6 md:mb-8">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                aria-label={social.label}
              >
                <Icon size={20} className="md:w-5 md:h-5" />
              </a>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
          <a 
            href="#projects" 
            className="group px-5 md:px-6 py-2.5 md:py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 text-base md:text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Xem Dự Án
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
          </a>
          <a 
            href="#contact" 
            className="px-5 md:px-6 py-2.5 md:py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 text-base md:text-lg font-medium hover:-translate-y-0.5 shadow-md hover:shadow-lg"
          >
            Liên Hệ
          </a>
        </div>

        {/* Additional Info */}
        <div className="mt-6 md:mt-8 text-xs md:text-sm text-foreground/60 space-y-1">
          <p>✓ 5+ năm kinh nghiệm trong phân tích nghiệp vụ</p>
          <p>✓ Đã thực hiện 20+ dự án thành công</p>
          <p>✓ Chuyên gia về Agile & Scrum</p>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from "react";
import { FileText, Cpu, Users, Target, Database, Palette, GitBranch, BookOpen } from "lucide-react";

// Component cho mobile skeleton
const MobileSkeleton = () => (
  <div className="md:hidden space-y-6">
    {/* Core BA Skills Skeleton */}
    <div className="space-y-4">
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="bg-card rounded-xl p-4 border animate-pulse"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-muted rounded-lg"></div>
            <div className="flex-1">
              <div className="h-5 bg-muted rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-muted rounded w-full mb-1"></div>
              <div className="h-3 bg-muted rounded w-4/5"></div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3].map((tech) => (
              <div key={tech} className="h-6 bg-muted rounded w-16"></div>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Technical Skills Skeleton */}
    <div className="space-y-4">
      <div className="h-6 bg-muted rounded w-40 mb-4"></div>
      <div className="grid grid-cols-3 gap-3">
        {[1,2,3,4,5,6,7,8,9].map((item) => (
          <div key={item} className="aspect-square bg-muted rounded-lg"></div>
        ))}
      </div>
    </div>

    {/* BA Tools Skeleton */}
    <div className="space-y-4">
      <div className="h-6 bg-muted rounded w-48 mb-4"></div>
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className="bg-card rounded-xl p-4 border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-muted rounded-lg"></div>
            <div className="flex-1">
              <div className="h-4 bg-muted rounded w-2/3 mb-2"></div>
              <div className="h-3 bg-muted rounded w-full"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const Skills = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});

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

  // Handle image load
  const handleImageLoad = (id) => {
    setImagesLoaded(prev => ({ ...prev, [id]: true }));
  };

  const technicalSkills = [
    { 
      id: "sql", 
      name: "SQL", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      category: "Database"
    },
    { 
      id: "postgresql", 
      name: "PostgreSQL", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      category: "Database"
    },
    { 
      id: "mongodb", 
      name: "MongoDB", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      category: "Database"
    },
    { 
      id: "javascript", 
      name: "JavaScript", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      category: "Programming"
    },
    { 
      id: "flutter", 
      name: "Flutter", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      category: "Mobile"
    },
    { 
      id: "vscode", 
      name: "VS Code", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20190909135258",
      category: "Tools"
    },
    { 
      id: "staruml", 
      name: "StarUML", 
      logo: "https://staruml.io/image/icon_256.png",
      category: "BA Tools"
    },
    { 
      id: "figma", 
      name: "Figma", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      category: "Design"
    },
    { 
      id: "balsamiq", 
      name: "Balsamiq", 
      logo: "https://balsamiq.com/assets/brand/mark.svg",
      category: "Wireframing"
    },
    { 
      id: "git", 
      name: "Git", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      category: "Version Control"
    },
    { 
      id: "postman", 
      name: "Postman", 
      logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      category: "API Tools"
    },
    { 
      id: "drawio", 
      name: "Draw.io", 
      logo: "https://drawio-app.com/wp-content/uploads/2021/05/cropped-drawio_favicon-512x512-1-32x32.png",
      category: "Diagramming"
    },
    { 
      id: "office", 
      name: "Office 365", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/512px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png",
      category: "Productivity"
    },
    { 
      id: "vs2022", 
      name: "VS 2022", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
      category: "IDE"
    },
  ];

  const baTools = [
    { 
      id: "erd",
      name: "ERD Diagrams", 
      description: "Thiết kế mô hình thực thể-quan hệ cho cơ sở dữ liệu",
      icon: <Database className="w-5 h-5" />
    },
    { 
      id: "sequence",
      name: "Sequence Diagrams", 
      description: "Mô hình hóa luồng tương tác giữa các thành phần hệ thống",
      icon: <GitBranch className="w-5 h-5" />
    },
    { 
      id: "usecase",
      name: "Use Case Diagrams", 
      description: "Xác định chức năng hệ thống từ góc nhìn người dùng",
      icon: <Users className="w-5 h-5" />
    },
    { 
      id: "bpmn",
      name: "BPMN", 
      description: "Mô hình hóa quy trình nghiệp vụ với ký hiệu tiêu chuẩn",
      icon: <Target className="w-5 h-5" />
    },
    { 
      id: "userstories",
      name: "User Stories", 
      description: "Đặc tả yêu cầu theo format: Là <role>, tôi muốn <feature> để <benefit>",
      icon: <FileText className="w-5 h-5" />
    },
    { 
      id: "wireframes",
      name: "Wireframes", 
      description: "Thiết kế layout và flow giao diện người dùng",
      icon: <Palette className="w-5 h-5" />
    },
  ];

  const baCoreSkills = [
    {
      id: "elicitation",
      title: "Requirements Elicitation",
      description: "Phỏng vấn stakeholders, workshops, brainstorming để thu thập yêu cầu",
      techniques: ["Interviews", "Workshops", "Questionnaires", "Observation"],
      icon: <Users className="w-6 h-6" />
    },
    {
      id: "analysis",
      title: "Requirements Analysis",
      description: "Phân tích, làm rõ và ưu tiên hóa yêu cầu nghiệp vụ",
      techniques: ["MoSCoW", "SWOT", "Gap Analysis", "Root Cause"],
      icon: <Target className="w-6 h-6" />
    },
    {
      id: "design",
      title: "Solution Design",
      description: "Thiết kế giải pháp đáp ứng yêu cầu và constraints",
      techniques: ["Process Modeling", "Data Modeling", "Interface Design"],
      icon: <Cpu className="w-6 h-6" />
    },
    {
      id: "stakeholder",
      title: "Stakeholder Management",
      description: "Quản lý communication và expectations của các bên liên quan",
      techniques: ["RACI Matrix", "Communication Plan", "Status Reporting"],
      icon: <BookOpen className="w-6 h-6" />
    },
  ];

  const methodologies = [
    { 
      id: "agile",
      name: "Agile/Scrum", 
      description: "Phát triển lặp và tăng trưởng",
      color: "bg-blue-500"
    },
    { 
      id: "waterfall",
      name: "Waterfall", 
      description: "Phát triển tuần tự theo phases",
      color: "bg-green-500"
    },
    { 
      id: "kanban",
      name: "Kanban", 
      description: "Quản lý workflow trực quan",
      color: "bg-purple-500"
    },
    { 
      id: "lean",
      name: "Lean", 
      description: "Tối ưu hóa và loại bỏ lãng phí",
      color: "bg-yellow-500"
    },
  ];

  // Component cho Technical Skills trên mobile
  const MobileTechnicalSkills = () => (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-foreground mb-4">Công Cụ & Công Nghệ</h3>
      <div className="grid grid-cols-3 gap-3">
        {technicalSkills.map((skill) => (
          <div key={skill.id} className="group relative">
            <div className="bg-card p-3 rounded-lg border hover:border-primary transition-all duration-300 flex flex-col items-center justify-center aspect-square">
              {!imagesLoaded[skill.id] && (
                <div className="absolute inset-0 bg-muted animate-pulse rounded-lg"></div>
              )}
              <img
                src={skill.logo}
                alt={skill.name}
                className={`w-8 h-8 mb-2 object-contain ${!imagesLoaded[skill.id] ? 'opacity-0' : 'opacity-100'}`}
                loading="lazy"
                onLoad={() => handleImageLoad(skill.id)}
              />
              <span className="text-xs font-medium text-foreground text-center leading-tight">
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Component cho BA Tools trên mobile
  const MobileBATools = () => (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-foreground mb-4">Công Cụ Mô Hình Hóa</h3>
      <div className="space-y-3">
        {baTools.map((tool) => (
          <div key={tool.id} className="bg-card p-4 rounded-xl border hover:border-primary transition-all duration-300">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="text-primary">
                  {tool.icon}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{tool.name}</h4>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Component cho Core Skills trên mobile
  const MobileCoreSkills = () => (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-foreground mb-4">Core Business Analysis Skills</h3>
      <div className="space-y-4">
        {baCoreSkills.map((skill) => (
          <div key={skill.id} className="bg-card p-4 rounded-xl border hover:border-primary transition-all duration-300">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="text-primary">
                  {skill.icon}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{skill.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{skill.description}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.techniques.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Component cho Methodologies trên mobile
  const MobileMethodologies = () => (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-foreground mb-4">Phương Pháp Luận</h3>
      <div className="grid grid-cols-2 gap-3">
        {methodologies.map((method) => (
          <div key={method.id} className="bg-card p-4 rounded-xl border hover:border-primary transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-3 h-3 rounded-full ${method.color}`}></div>
              <h4 className="font-semibold text-foreground">{method.name}</h4>
            </div>
            <p className="text-sm text-muted-foreground">{method.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  // Component cho Key Deliverables trên mobile
  const MobileKeyDeliverables = () => (
    <div className="mt-8 pt-8 border-t">
      <h3 className="text-xl font-bold text-foreground mb-4 text-center">Key Deliverables</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-card rounded-xl border">
          <div className="text-xl font-bold text-primary mb-1">BRD</div>
          <div className="text-xs text-muted-foreground">Business Requirements</div>
        </div>
        <div className="text-center p-4 bg-card rounded-xl border">
          <div className="text-xl font-bold text-green-500 mb-1">FRD</div>
          <div className="text-xs text-muted-foreground">Functional Requirements</div>
        </div>
        <div className="text-center p-4 bg-card rounded-xl border">
          <div className="text-xl font-bold text-purple-500 mb-1">SRS</div>
          <div className="text-xs text-muted-foreground">Software Requirements</div>
        </div>
        <div className="text-center p-4 bg-card rounded-xl border">
          <div className="text-xl font-bold text-yellow-500 mb-1">UAT</div>
          <div className="text-xs text-muted-foreground">User Acceptance Testing</div>
        </div>
      </div>
    </div>
  );

  // Show skeleton loader on mobile during loading
  if (isLoading && isMobile) {
    return (
      <section id="skills" className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MobileSkeleton />
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-8 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Kỹ Năng Chuyên Môn
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Tổng hợp các kỹ năng và công cụ thiết yếu của một Business Analyst trong lĩnh vực IT
          </p>
        </div>

       

        {/* Desktop View */}
        <div className="hidden md:block">
          {/* Core BA Skills */}
          <div className="mb-12 md:mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 md:mb-10 text-center">
              Core Business Analysis Skills
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {baCoreSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="bg-card p-6 rounded-2xl border hover:border-primary transition-all duration-300 hover:shadow-lg"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <div className="text-primary">
                        {skill.icon}
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">
                      {skill.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      {skill.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.techniques.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
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
          <div className="mb-12 md:mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 md:mb-10 text-center">
              Công Cụ & Công Nghệ
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3 md:gap-4">
              {technicalSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="group relative"
                >
                  <div className="bg-card p-4 rounded-xl border hover:border-primary transition-all duration-300 flex flex-col items-center justify-center aspect-square hover:shadow-lg">
                    {!imagesLoaded[skill.id] && (
                      <div className="absolute inset-0 bg-muted animate-pulse rounded-xl"></div>
                    )}
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className={`w-10 h-10 md:w-12 md:h-12 mb-3 object-contain ${!imagesLoaded[skill.id] ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
                      loading="lazy"
                      onLoad={() => handleImageLoad(skill.id)}
                    />
                    <span className="text-sm font-medium text-foreground text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BA Tools & Techniques */}
          <div className="mb-12 md:mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 md:mb-10 text-center">
              Công Cụ Mô Hình Hóa
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {baTools.map((tool) => (
                <div
                  key={tool.id}
                  className="bg-card p-6 rounded-xl border hover:border-primary transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-primary">
                        {tool.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {tool.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Methodologies */}
          <div className="mb-12 md:mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 md:mb-10 text-center">
              Phương Pháp Luận
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {methodologies.map((method) => (
                <div
                  key={method.id}
                  className="bg-card p-6 rounded-xl border hover:border-primary transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-3 h-3 rounded-full ${method.color}`}></div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {method.name}
                    </h4>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {method.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverables */}
          <div className="mt-12 md:mt-20 pt-8 md:pt-12 border-t">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8 text-center">
              Key Deliverables
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4">
              <div className="text-center p-6 bg-card rounded-xl border hover:shadow-lg transition-all duration-300">
                <div className="text-2xl font-bold text-primary mb-2">BRD</div>
                <div className="text-sm text-muted-foreground">Business Requirements Document</div>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border hover:shadow-lg transition-all duration-300">
                <div className="text-2xl font-bold text-green-500 mb-2">FRD</div>
                <div className="text-sm text-muted-foreground">Functional Requirements Document</div>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border hover:shadow-lg transition-all duration-300">
                <div className="text-2xl font-bold text-purple-500 mb-2">SRS</div>
                <div className="text-sm text-muted-foreground">Software Requirements Specification</div>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border hover:shadow-lg transition-all duration-300">
                <div className="text-2xl font-bold text-yellow-500 mb-2">UAT</div>
                <div className="text-sm text-muted-foreground">User Acceptance Testing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
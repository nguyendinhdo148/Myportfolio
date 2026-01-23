import React from "react";
import { Github, Facebook, MessageSquare, Mail, MapPin, Phone, User } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    { 
      icon: MapPin, 
      text: "TP.HCM, Việt Nam",
      link: null
    },
    { 
      icon: Phone, 
      text: "0869122385",
      link: "tel:+840869122385"
    },
    { 
      icon: Mail, 
      text: "nguyendinhdo2k4@gmail.com",
      link: "mailto:nguyendinhdo2k4@gmail.com"
    }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/nguyendinhdo148", 
      label: "GitHub",
      username: "nguyendinhdo148"
    },
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/nguyen.inh.o.284334/", 
      label: "Facebook",
      username: "Nguyễn Đình Đô"
    },
    { 
      icon: MessageSquare, 
      href: "https://zalo.me/0869122385", 
      label: "Zalo",
      username: "0869122385"
    },
    { 
      icon: Mail, 
      href: "mailto:nguyendinhdo2k4@gmail.com", 
      label: "Email",
      username: "nguyendinhdo2k4@gmail.com"
    },
  ];

  const quickLinks = [
    { name: "Giới thiệu", href: "#introduce" },
    { name: "Kinh nghiệm", href: "#work-experience" },
    { name: "Dự án", href: "#projects" },
    { name: "Kỹ năng", href: "#skills" },
    { name: "Liên hệ", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 w-full">
      <div className="w-full px-0 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Profile */}
          <div className="space-y-3 px-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Nguyễn Đình Đô
                </h3>
                <p className="text-sm text-blue-300">
                  Business Analyst Intern
                </p>
              </div>
            </div>
            <p className="text-sm text-blue-200 leading-relaxed">
              Sinh viên ngành Công Nghệ Thông Tin, chuyên phân tích yêu cầu, tối ưu quy trình và đề xuất giải pháp công nghệ.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3 px-4">
            <h3 className="text-base font-bold text-white">
              Thông Tin Liên Hệ
            </h3>
            <ul className="space-y-2">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <li key={index} className="flex items-start gap-3">
                    <Icon className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-sm text-blue-200 hover:text-white transition-colors hover:underline"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-sm text-blue-200">
                        {info.text}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3 px-4">
            <h3 className="text-base font-bold text-white">
              Kết Nối Với Tôi
            </h3>
            <div className="space-y-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                      <Icon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">
                        {social.label}
                      </p>
                      <p className="text-xs text-blue-300 truncate">
                        {social.username}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 px-4">
            <h3 className="text-base font-bold text-white">
              Điều Hướng Nhanh
            </h3>
            <ul className="space-y-1">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-blue-200 hover:text-white transition-colors block py-1 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 pt-3 border-t border-gray-700">
          <div className="text-center">
            <p className="text-sm text-blue-300">
              © {currentYear} Nguyễn Đình Đô. Tất cả quyền được bảo lưu.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

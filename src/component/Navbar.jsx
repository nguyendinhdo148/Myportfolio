import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Giới thiệu", href: "#introduce" },
  { name: "Kỹ năng & công cụ", href: "#skills" },
  { name: "Dự án", href: "#projects" },
  { name: "Chứng chỉ & CV", href: "#certificates" },
  { name: "Liên hệ", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll mượt
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 bg-transparent",
        isScrolled ? "py-3" : "py-5"
      )}
    >
      {/* Logo trong container */}
      <div className="container flex items-center">
        <a href="#" className="relative z-50 flex items-center gap-2">
          <img
            src="logotab.jpg"
            alt="Logo Nguyễn Đình Đô"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span
  className={cn(
    "px-3 py-1 rounded-lg text-xl font-bold text-glow transition-all",
    isScrolled
      ? "bg-white/10 backdrop-blur-sm"
      : "bg-black/10 backdrop-blur-sm"
  )}
>
  Nguyễn Đình Đô
</span>

        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto relative z-50"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* DESKTOP MENU – NEO SÁT PHẢI */}
      <div
        className={cn(
          "hidden md:flex fixed top-4 right-24 space-x-6",
          isScrolled && "top-3"
        )}
      >
        {navItems.map((item, key) => (
          <a
            key={key}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className={cn(
              "px-4 py-2 rounded-lg transition-colors duration-300",
              "text-foreground/80 hover:text-primary",
              isScrolled
                ? "bg-white/10 backdrop-blur-sm"
                : "bg-black/10 backdrop-blur-sm"
            )}
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu */}
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center md:hidden">
            <button
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 backdrop-blur-md"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Đóng menu"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col space-y-6">
              {navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="w-64 text-center px-8 py-3 rounded-xl bg-white/10 backdrop-blur-md text-xl font-semibold text-foreground/90 hover:text-primary transition-colors shadow-lg"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

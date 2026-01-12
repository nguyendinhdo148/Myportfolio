import React, { useState } from "react";
import {
  ArrowLeft,
  Github,
  Globe,
  Play,
  Download,
  Smartphone,
  Cpu,
  Database,
  Shield,
  Code,
  Server,
  Brain,
  MapPin,
  Bell,
  Camera,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";

export const JobPortalMobie = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const project = {
    id: "job-portal-mobie",
    title: "Job Portal - Mobile App",
    category: "Cross-platform Mobile Application",
    status: "In Development",
    year: "2024",
    description:
      "Ứng dụng di động tìm việc làm với Flutter, tích hợp AI recommendations, geolocation và push notifications.",
    longDescription:
      "Mobile application built với Flutter và Dart, kết nối với MERN backend. Ứng dụng hỗ trợ location-based job search, push notifications, offline mode, và AI chat assistant. Tính năng độc đáo bao gồm AR company tours, voice search, và biometric authentication. Tích hợp OpenAI và Gemini AI cho personalized job recommendations và career guidance.",
    imageUrl:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    videoDemo: "/videos/job-portal-mobile-demo.mp4",
    liveUrl: "https://expo.dev/@yourusername/job-portal-mobile",
    repoUrl: "https://github.com/username/job-portal-mobile-flutter",
    techStack: [
      {
        name: "Flutter",
        icon: "📱",
        component: <Smartphone className="w-5 h-5" />,
      },
      { name: "Dart", icon: "🎯", component: <Code className="w-5 h-5" /> },
      { name: "React", icon: "⚛️", component: <Code className="w-5 h-5" /> },
      {
        name: "Node.js",
        icon: "🟢",
        component: <Server className="w-5 h-5" />,
      },
      {
        name: "MongoDB",
        icon: "🍃",
        component: <Database className="w-5 h-5" />,
      },
      {
        name: "OpenAI API",
        icon: "🧠",
        component: <Brain className="w-5 h-5" />,
      },
      {
        name: "Gemini AI",
        icon: "🌟",
        component: <Brain className="w-5 h-5" />,
      },
      {
        name: "Firebase",
        icon: "🔥",
        component: <Server className="w-5 h-5" />,
      },
    ],
    features: [
      {
        title: "Location-based Job Search",
        description:
          "Tìm việc theo khoảng cách địa lý với real-time geolocation, commute time estimates và map integration",
        icon: "📍",
      },
      {
        title: "AI Career Assistant",
        description:
          "Chatbot AI hỗ trợ career advice, interview tips, resume suggestions và job recommendations",
        icon: "💬",
      },
      {
        title: "Push Notifications & Offline Mode",
        description:
          "Instant alerts cho new job matches và offline access cho saved jobs và profiles",
        icon: "🔔",
      },
      {
        title: "Swipe-to-apply Interface",
        description:
          "Intuitive Tinder-like interface để browse và apply jobs với swipe gestures",
        icon: "👆",
      },
      {
        title: "AR Company Tours",
        description:
          "Augmented Reality virtual tours của company offices và facilities",
        icon: "👓",
      },
      {
        title: "Voice Search Functionality",
        description:
          "Voice commands cho hands-free job search và application management",
        icon: "🎤",
      },
      {
        title: "Biometric Authentication",
        description:
          "Face ID / Fingerprint login cho enhanced security và convenience",
        icon: "🔐",
      },
      {
        title: "In-app Messaging System",
        description:
          "Real-time chat với nhà tuyển dụng và application status updates",
        icon: "💭",
      },
    ],
    challenges: [
      {
        title: "Cross-platform Performance",
        description:
          "Đảm bảo smooth 60fps performance trên cả iOS và Android với Flutter, xử lý memory leaks và battery optimization",
        solution:
          "Optimize rendering với Flutter's Skia engine, platform-specific optimizations, và efficient state management",
      },
      {
        title: "Real-time Location Updates",
        description:
          "Xử lý battery-efficient location tracking cho job alerts, background services và geofencing",
        solution:
          "Background location services với adaptive intervals, geofencing optimization, và battery saver modes",
      },
      {
        title: "AI Model Optimization",
        description:
          "Deploy AI models cho mobile với limited resources, model size optimization và offline inference",
        solution:
          "Model quantization techniques, offline inference capabilities, và intelligent caching strategies",
      },
      {
        title: "Offline Data Synchronization",
        description:
          "Offline data sync giữa local database và cloud, conflict resolution và data consistency",
        solution:
          "Local database với sync conflict resolution, incremental updates, và smart merge algorithms",
      },
    ],
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Home Screen",
        description: "Main dashboard với personalized job recommendations",
      },
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Job Details",
        description:
          "Detailed job view với company information và apply options",
      },
      {
        url: "https://images.unsplash.com/photo-1546054450-7a6b5b3e5d3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Chat Interface",
        description: "Real-time chat với AI assistant và employers",
      },
      {
        url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Map View",
        description: "Location-based job search với interactive maps",
      },
      {
        url: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "AR Tour",
        description: "Augmented Reality company tours",
      },
      {
        url: "https://images.unsplash.com/photo-1551836026-d5c2c5af78e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Settings",
        description: "App settings và preference management",
      },
    ],
    platform: "Mobile",
    architecture: {
      frontend: "Flutter + Dart + Provider State Management",
      backend: "Node.js + Express.js (Shared với web)",
      database: "MongoDB Atlas + Firebase Firestore",
      aiServices: "OpenAI API + Google Gemini AI",
      pushNotifications: "Firebase Cloud Messaging",
      realtime: "Socket.IO với Firebase integration",
      storage: "Firebase Storage cho media files",
      deployment: "App Store + Google Play Store",
      analytics: "Firebase Analytics + Crashlytics",
    },
    achievements: [
      "Cross-platform compatibility cho iOS và Android",
      "50% faster app launch times với optimized startup",
      "80% reduction in data usage với efficient caching",
      "95% user satisfaction rate từ beta testing",
    ],
  };

  return (
    <div className="min-h-screen   from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                <span className="hidden sm:inline">Back to Projects</span>
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2   from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">App Preview</span>
              </a>

              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-lg transition-all hover:shadow-lg active:scale-95"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">Source Code</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Left Column - Project Info */}
          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === "Live"
                      ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                      : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      project.status === "Live"
                        ? "bg-green-500 animate-pulse"
                        : "bg-yellow-500"
                    }`}
                  ></div>
                  {project.status}
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm font-medium">
                  {project.year}
                </span>
                <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 rounded-full text-sm font-medium">
                  📱 Mobile Platform
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="  from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Status
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.status}
                </div>
              </div>
              <div className="  from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Year
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.year}
                </div>
              </div>
              <div className="  from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Category
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.category}
                </div>
              </div>
              <div className="  from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Platform
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.platform}
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <div
                    key={index}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-all hover:scale-105 ${
                      index === 0
                        ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                        : index === 1
                        ? "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800"
                        : index === 2
                        ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800"
                        : index === 3
                        ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800"
                        : index === 4
                        ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
                        : index === 5
                        ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800"
                        : index === 6
                        ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800"
                        : "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800"
                    }`}
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span className="font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Overview */}
            <div className="  from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Mobile Architecture
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Frontend
                  </div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {project.architecture.frontend}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Backend
                  </div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {project.architecture.backend}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Database
                  </div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {project.architecture.database}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Push Notifications
                  </div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {project.architecture.pushNotifications}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Video Demo */}
          <div className="space-y-6">
            {/* Video Player */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden aspect-video border-2 border-gray-800 dark:border-gray-700 shadow-2xl">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center  from-blue-600/20 to-purple-600/20">
                  <div className="text-center p-8">
                    <div className="w-20 h-20  from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Play className="w-10 h-10 text-white" fill="white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Mobile App Demo
                    </h3>
                    <p className="text-white/70 mb-4">
                      Flutter Mobile Application Preview
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                      <span className="text-white/80 text-sm">
                        Demo video available soon
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources Section */}
            <div className="  from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-6">
                <Download className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Project Resources
                </h3>
              </div>

              <div className="space-y-4">
                {/* Demo Video Card */}
                <div className="group relative">
                  <div className="absolute inset-0   from-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12   from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg flex items-center justify-center">
                        <Play className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          Demo Video
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Mobile app demo coming soon
                        </div>
                      </div>
                    </div>
                    <Download className="w-5 h-5 text-gray-400" />
                  </div>
                </div>

                {/* GitHub Repository Card */}
                <div className="group relative">
                  <div className="absolute inset-0   from-gray-700 to-gray-900 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-gray-800 dark:hover:border-gray-400 transition-all group-hover:shadow-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12   from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          Source Code
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          View Flutter repository
                        </div>
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                {/* App Store Links */}
                <div className="group relative">
                  <div className="absolute inset-0   from-blue-600 to-blue-800 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 transition-all group-hover:shadow-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12   from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Smartphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          App Preview
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          View on Expo/App Store
                        </div>
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="  from-green-50 to-white dark:from-green-900/10 dark:to-gray-900 rounded-xl p-6 border border-green-100 dark:border-green-900/30">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-green-500 dark:text-green-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Key Achievements
                </h3>
              </div>
              <div className="space-y-3">
                {project.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center   mt-0.5">
                      <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 dark:border-gray-800 mb-8">
          <nav className="flex flex-wrap gap-4 sm:gap-8">
            {[
              { id: "overview", label: "Overview", icon: "📋" },
              { id: "features", label: "Features", icon: "✨" },
              { id: "challenges", label: "Challenges", icon: "⚡" },
              { id: "screenshots", label: "Screenshots", icon: "🖼️" },
              { id: "architecture", label: "Architecture", icon: "🏗️" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600 dark:text-blue-400"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                <span>{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mb-16">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Mobile App Overview
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  {project.longDescription}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="  from-blue-50 to-white dark:from-blue-900/10 dark:to-gray-800 rounded-xl p-6 border border-blue-100 dark:border-blue-900/30">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Key Objectives
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center   mt-0.5">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Create native-like experience trên cả iOS và Android với
                        Flutter
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center   mt-0.5">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Implement location-based features và offline
                        functionality
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center   mt-0.5">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Integrate AI-powered career guidance và personalized
                        recommendations
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center  mt-0.5">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Ensure smooth performance và battery efficiency trên
                        mobile devices
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="  from-green-50 to-white dark:from-green-900/10 dark:to-gray-800 rounded-xl p-6 border border-green-100 dark:border-green-900/30">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Mobile Technology Highlights
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center   mt-0.5">
                        <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Flutter + Dart cho cross-platform development với native
                        performance
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center   mt-0.5">
                        <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        MERN backend integration cho data synchronization và
                        real-time updates
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center   mt-0.5">
                        <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        AI integration với OpenAI và Gemini cho intelligent
                        features
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center   mt-0.5">
                        <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Mobile-specific features: push notifications,
                        geolocation, AR, biometric auth
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Features Tab */}
          {activeTab === "features" && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Mobile App Features
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="group   from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="  w-12 h-12   from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-2xl">{feature.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges Tab */}
          {activeTab === "challenges" && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Mobile Development Challenges & Solutions
              </h3>

              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="group   from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="  w-12 h-12   from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 rounded-lg flex items-center justify-center">
                        <span className="text-red-600 dark:text-red-400 font-bold text-xl">
                          !
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm font-medium rounded-full">
                            Challenge {index + 1}
                          </span>
                        </div>

                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          {challenge.title}
                        </h4>

                        <div className="mb-4 p-4 bg-gray-100 dark:bg-gray-800/50 rounded-lg">
                          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                            Challenge Description:
                          </div>
                          <p className="text-gray-700 dark:text-gray-300">
                            {challenge.description}
                          </p>
                        </div>

                        <div className="p-4   from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg border border-blue-100 dark:border-blue-900/30">
                          <div className="flex items-center gap-2 mb-2">
                            <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <div className="text-sm font-medium text-blue-700 dark:text-blue-300">
                              Solution Implemented:
                            </div>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300">
                            {challenge.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Screenshots Tab */}
          {activeTab === "screenshots" && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Mobile App Screenshots
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className="group relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300"
                  >
                    <img
                      src={screenshot.url}
                      alt={screenshot.title}
                      className="w-full h-48 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0   from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6">
                      <div className="text-white text-center mb-4">
                        <div className="font-semibold mb-1">
                          {screenshot.title}
                        </div>
                        <div className="text-sm text-white/70">
                          {screenshot.description}
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors">
                        View Full Size
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Tab */}
          {activeTab === "architecture" && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Mobile Architecture
              </h3>

              <div className="  from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {Object.entries(project.architecture).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 capitalize">
                        {key.replace(/([A-Z])/g, " $1")}
                      </div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative h-64   from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16   from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Smartphone className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Mobile Architecture Diagram
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Flutter app với MERN backend và Firebase services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default JobPortalMobie;

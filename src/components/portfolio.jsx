"use client";
import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Award,
  Code,
  Cloud,
  Server,
  Database,
  Users,
  Lightbulb,
  Target,
  MessageSquare,
  Star,
} from "lucide-react";



const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Small delay to ensure smooth animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);



  const skills = {
    cloud: ["Azure", "AWS", "GCP", "Microsoft 365", "Intune"],
    devops: ["Terraform", "Jenkins", "Docker", "Kubernetes", "ELK Stack"],
    programming: [
      "Node.js",
      "React",
      "Python",
      "Java",
      "JavaScript",
      "Bash",
      "PowerShell",
    ],
    tools: ["Git", "JIRA", "Freshdesk", "Power Automate", "Linux"],
  };

  const projects = [
    {
      title: "CI/CD Pipeline with Terraform & Jenkins",
      description:
        "Built comprehensive CI/CD pipeline across 3 AWS EC2 instances with Terraform, Jenkins, Maven, and Docker for Java development, reducing manual errors and enabling scalable deployments.",
      tech: ["AWS", "Terraform", "Jenkins", "Docker", "Maven"],
      type: "DevOps",
      githubUrl: "https://www.linkedin.com/posts/dilshan-somaweera_devops-github-cloudcomputing-activity-7328781233390342144-he4F?utm_source=share&utm_medium=member_desktop&rcm=ACoAADteL5sB1XrJjY--H5BEq3KC2hyNv7meAic", // Replace with actual repo URL
    },
    {
      title: "WordPress Hosting on AWS",
      description:
        "Deployed secure WordPress environment using Terraform with VPC, public/private subnets, EC2, RDS MySQL, ALB with health checks, and least-privilege security groups.",
      tech: ["AWS", "Terraform", "EC2", "RDS", "ALB"],
      type: "Cloud Infrastructure",
      githubUrl: "https://github.com/Dilshan-Somaweera/Devops_Practical", // Replace with actual repo URL
    },
    {
      title: "Containerized WordPress on GKE",
      description:
        "Deployed containerized WordPress on GKE using Terraform and Kubernetes, achieving 50% faster provisioning. Implemented security with Kubernetes Secrets and Network Policies.",
      tech: ["GCP", "Kubernetes", "Terraform", "MySQL"],
      type: "Container Orchestration",
      githubUrl: "https://github.com/Dilshan-Somaweera/Devops_Practical/tree/main/Task%2002", // Replace with actual repo URL
    },
    {
      title: "ELK Stack Monitoring",
      description:
        "Deployed ELK Stack for nginx log collection, parsing, and visualization. Built Kibana dashboards for enhanced observability and faster troubleshooting.",
      tech: ["ELK Stack", "Kibana", "Nginx", "Monitoring"],
      type: "Monitoring & Logging",
      githubUrl: "#", // Replace with actual repo URL
    },
    {
      title: "RAG AI Agent",
      description:
        "Built intelligent retrieval-augmented generation system using Python, Supabase, PydanticAI, OpenAPI, and Streamlit for Docker CVE fixes.",
      tech: ["Python", "Supabase", "OpenAPI", "Streamlit", "AI"],
      type: "AI/ML",
      githubUrl: "https://www.linkedin.com/posts/dilshan-somaweera_ai-devsecops-cloudnative-activity-7345820576562761728-wVpR?utm_source=share&utm_medium=member_desktop&rcm=ACoAADteL5sB1XrJjY--H5BEq3KC2hyNv7meAic", // Replace with actual repo URL
    },
    {
      title: "E-Commerce Backend",
      description:
        "Developed REST APIs using Node.js and MongoDB for user authentication, product CRUD operations, and checkout flows with JSON endpoints.",
      tech: ["Node.js", "MongoDB", "REST API", "Authentication"],
      type: "Backend Development",
      githubUrl: "https://github.com/Umanda-Ravimal/E-Commerce-Fashion-Website-Using-MERN-", // Replace with actual repo URL
    },
    {
      title: "Multilingual Spam Detection System",
      description:
        "Engineered spam classifier using HuggingFace models like BERT, NLP preprocessing, and API deployment for real-time usage.",
      tech: ["Python", "HuggingFace", "BERT", "NLP", "API"],
      type: "AI/ML",
      githubUrl: "https://github.com/Umanda-Ravimal/Multilingual-Spam-Detector", // Replace with actual repo URL
    },
    {
      title: "E-Commerce Mobile App",
      description:
        "Developed Android app with real-time cart updates, Firebase Auth, Firestore DB, and admin panel for managing users and products.",
      tech: ["Android", "Firebase", "Firestore", "Java"],
      type: "Mobile Development",
      githubUrl: "https://github.com/Dilshan-Somaweera/E-commerce-app-with-Firebase", // Replace with actual repo URL
    },
  ];
  const certifications = [
    {
      name: "Microsoft Certified: Azure Administrator Associate",
      code: "AZ-104",
      icon: <Cloud className="w-6 h-6" />,
      credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-us/dilshansomaweera-8496/33FEB7C994832196?sharingId=7B90C32BFB71C58A", // Replace with your actual credential URL
      // Alternative: Direct link to your credential badge
      // credentialUrl: "https://www.credly.com/badges/your-badge-id",
    },
    {
      name: "Microsoft Certified: Azure AI Engineer Associate",
      code: "AI-102",
      icon: <Star className="w-6 h-6" />,
      credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-us/dilshansomaweera-8496/EF7919B7629F10FB?sharingId=7B90C32BFB71C58A", // Replace with your actual credential URL
      // Alternative: Direct link to your credential badge
      // credentialUrl: "https://www.credly.com/badges/your-badge-id",
    },
  ];

  const experience = {
    company: "N-able (Pvt) Ltd",
    position: "Intern – Managed Services",
    duration: "May - Nov 2024",
    achievements: [
      "Managed Azure Entra ID access and security policies for 100+ enterprise users",
      "Implemented conditional access policies and endpoint security using Intune",
      "Automated user provisioning workflows using Power Automate, reducing onboarding time by 60%",
      "Administered Microsoft 365 Admin Center for enterprise environment",
    ],
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                DS
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {["home", "about", "skills", "projects", "contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeSection === item
                          ? "bg-blue-600 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isMounted && isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative mb-8">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    DS
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-xl"></div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Dilshan Somaweera
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Microsoft-certified Azure Cloud Engineer with hands-on experience
              deploying secure, scalable cloud infrastructure using Azure,
              Terraform, CI/CD, and automation tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="mailto:dilshansomaweera33@gmail.com"
                className="flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
              <button 
                className="flex items-center px-8 py-3 border-2 border-white/20 hover:border-white/40 rounded-full font-medium transition-all duration-300 hover:bg-white/10"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Dilshan Somaweera – Azure Cloud Engineer  DevOps  Microsoft Certified (AZ-104, AI-102).pdf';
                  link.download = 'Dilshan Somaweera – Azure Cloud Engineer  DevOps  Microsoft Certified (AZ-104, AI-102).pdf';
                  link.click();
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </button>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/Dilshan-Somaweera"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/dilshan-somaweera/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:dilshansomaweera33@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Recently graduated with a Bachelor of Information Communication
                Technology (GPA 3.7) from University of Sri Jayewardenepura.
                Passionate about building resilient, cloud-native solutions and
                available for internship, trainee, or junior roles in Cloud
                Engineering or DevOps.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">
                    dilshansomaweera33@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">0717420073</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">
                    Alawathugoda, Sri Lanka
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-yellow-400" />
                  Education
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-white">
                      University of Sri Jayewardenepura
                    </h4>
                    <p className="text-gray-300">
                      Bachelor of ICT (Hons.) - GPA 3.7
                    </p>
                    <p className="text-gray-400 text-sm">2021-2025</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">
                      St.Thomas' College, Matale
                    </h4>
                    <p className="text-gray-300">
                      G.C.E A/L - District Rank 02, Island Rank 63
                    </p>
                    <p className="text-gray-400 text-sm">2019</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-6 border border-white/10">
  <h3 className="text-xl font-semibold mb-4">Certifications</h3>
  <div className="space-y-3">
    {certifications.map((cert, index) => (
      <div 
        key={index} 
        className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
        onClick={() => window.open(cert.credentialUrl, '_blank')}
      >
        <div className="flex items-center space-x-3">
          <div className="text-yellow-400 group-hover:scale-110 transition-transform duration-300">
            {cert.icon}
          </div>
          <div>
            <p className="font-medium text-white group-hover:text-yellow-300 transition-colors">
              {cert.name}
            </p>
            <p className="text-gray-400 text-sm">{cert.code}</p>
          </div>
        </div>
        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
      </div>
    ))}
  </div>
</div>
             
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-lg p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Cloud className="w-6 h-6 text-blue-400 mr-2" />
                <h3 className="text-xl font-semibold">Cloud Platforms</h3>
              </div>
              <div className="space-y-2">
                {skills.cloud.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-block bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-lg p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Server className="w-6 h-6 text-purple-400 mr-2" />
                <h3 className="text-xl font-semibold">DevOps Tools</h3>
              </div>
              <div className="space-y-2">
                {skills.devops.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-block bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-lg p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-green-400 mr-2" />
                <h3 className="text-xl font-semibold">Programming</h3>
              </div>
              <div className="space-y-2">
                {skills.programming.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-block bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 rounded-lg p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-orange-400 mr-2" />
                <h3 className="text-xl font-semibold">Tools & Platforms</h3>
              </div>
              <div className="space-y-2">
                {skills.tools.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-block bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-8 border border-white/10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {experience.position}
                  </h3>
                  <h4 className="text-xl text-blue-400 mb-2">
                    {experience.company}
                  </h4>
                  <p className="text-gray-400">{experience.duration}</p>
                </div>
                <div className="text-right">
                  <span className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm">
                    Internship
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {experience.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      Featured Projects
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
          onClick={() => window.open(project.githubUrl, '_blank')}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
              {project.type}
            </span>
            <ExternalLink className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
          </div>

          <h3 className="text-xl font-semibold mb-3 text-white">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4 text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-12">
              Looking for internship, trainee, or junior roles in Cloud
              Engineering or DevOps. Let's discuss how I can contribute to your
              team!
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-lg p-6 border border-white/10">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-300">dilshansomaweera33@gmail.com</p>
              </div>

              <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-lg p-6 border border-white/10">
                <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-300">0717420073</p>
              </div>

              <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-lg p-6 border border-white/10">
                <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-300">Alawaathugoda, Sri Lanka</p>
              </div>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/Dilshan-Somaweera"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/dilshan-somaweera/"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Dilshan Somaweera. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

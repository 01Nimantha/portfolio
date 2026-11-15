/* ===================================================================
   P.V. Nimantha Madhushan - Portfolio Interactive JavaScript
   Modern, Fast, Modular, Smooth Animations & Professional Polish
   Zero external dependencies
   =================================================================== */

// Project Data Store - Using Local Assets from assets/images/
const projectsData = [
  {
    id: "todo-list",
    title: "Todo List – Task Management App",
    category: "mobile",
    categoryLabel: "Mobile App • Flutter",
    date: "July 2025 – Present",
    tagline: "Productivity-focused Android mobile application with zero data collection.",
    description: "Developed and published a productivity-focused mobile application, Todo List, using Flutter and Provider. The app helps users manage daily tasks with a clean, intuitive interface and essential features like adding, deleting, and marking tasks as completed.",
    highlights: [
      "Designed with simplicity and ease of use in mind",
      "Built with Flutter for smooth cross-platform compatibility",
      "State management handled using Provider",
      "100% privacy – no user data is collected or shared",
      "Successfully deployed on the Google Play Store"
    ],
    techStack: ["Flutter", "Dart", "Provider", "Android Studio", "Google Play Console"],
    thumbnail: "assets/images/Todo List/1754559609910.jpeg",
    screenshots: [
      "assets/images/Todo List/1754559609910.jpeg",
      "assets/images/Todo List/1754573771913.jpeg"
    ],
    links: [
      { label: "Google Play Store", url: "https://play.google.com/store/apps/details?id=com.todolist.todo_list", type: "playstore", icon: "▶" },
      { label: "Studio Website", url: "https://01nimantha.github.io/madhushan-studios/", type: "outline", icon: "🌐" },
      { label: "Privacy Policy", url: "https://01nimantha.github.io/Todo-List-Privacy-Policy/", type: "outline", icon: "🔒" }
    ],
    contributors: []
  },
  {
    id: "instalearn",
    title: "InstaLearn – Unified Education Platform",
    category: "web",
    categoryLabel: "Full Stack • React & Spring Boot",
    date: "Academic Project • Univ. of Ruhuna",
    tagline: "Web-based education management system with QR attendance and automated exams.",
    description: "Developed as part of Group 17 from the Department of Computer Science, University of Ruhuna, under supervisor Mrs. T.D.G. Geethika. InstaLearn is a web-based education management platform designed to streamline academic and administrative processes in tuition centers.",
    highlights: [
      "QR-based attendance scanning and management",
      "Real-time dashboards for teachers, parents, and students",
      "Student progress tracking and analytics",
      "Question pool management for exam automation",
      "Secure online payment gateway with automated reminders",
      "Role-based authentication and secure REST API architecture"
    ],
    techStack: ["React", "Spring Boot", "MySQL", "Redux", "REST APIs", "CSS", "Bootstrap", "Git", "Figma"],
    thumbnail: "assets/images/InstaLearn/1741843492400.jpeg",
    screenshots: [
      "assets/images/InstaLearn/1741843492400.jpeg",
      "assets/images/InstaLearn/1741843541576.jpeg",
      "assets/images/InstaLearn/1741843593131.jpeg",
      "assets/images/InstaLearn/1741843648663.jpeg",
      "assets/images/InstaLearn/1741843693096.jpeg",
      "assets/images/InstaLearn/1741843731367.jpeg",
      "assets/images/InstaLearn/1741843797904.jpeg",
      "assets/images/InstaLearn/1741843857778.jpeg",
      "assets/images/InstaLearn/1741843907609.jpeg"
    ],
    links: [
      { label: "View Showcase", url: "https://www.linkedin.com/in/01nimantha/", type: "primary", icon: "🌐" }
    ],
    contributors: ["Maleesha Wijekoon", "Dinithi Madushika", "Sudesh Tharaka", "Arshani Muthumali", "P.V. Nimantha Madhushan"]
  },
  {
    id: "clothly",
    title: "Clothly – Solo E-Commerce Mobile App",
    category: "mobile",
    categoryLabel: "Mobile App • Flutter & Firebase",
    date: "Solo Project",
    tagline: "End-to-end clothing shopping app with Stripe checkout and Firebase backend.",
    description: "A solo-developed cross-platform clothing e-commerce app built entirely with Flutter. From secure authentication to seamless checkout, this project showcases a complete full-stack mobile shopping experience developed and tested end-to-end.",
    highlights: [
      "Secure Google Sign-In using Firebase Authentication",
      "Category-based product filtering and dynamic size selection",
      "Real-time shopping cart with state management via Provider",
      "Stripe integration for fast and reliable card payments using flutter_stripe",
      "Cloud Firestore for real-time catalog and cart synchronization",
      "Thorough unit and integration testing ensuring stability"
    ],
    techStack: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "Provider", "Stripe", "Figma", "GitHub"],
    thumbnail: "assets/images/Clothly/1748610081185.jpeg",
    screenshots: [
      "assets/images/Clothly/1748610081185.jpeg"
    ],
    links: [
      { label: "Project Details", url: "https://www.linkedin.com/in/01nimantha/", type: "primary", icon: "💼" }
    ],
    contributors: ["P.V. Nimantha Madhushan (Solo Developer)"]
  },
  {
    id: "soundly",
    title: "Soundly – Music Playlist App",
    category: "mobile",
    categoryLabel: "Mobile & Backend • Flutter & FastAPI",
    date: "Collaborative Project",
    tagline: "Cross-platform music playlist and streaming client with high-speed FastAPI backend.",
    description: "A dynamic and feature-packed music playlist app developed with Flutter for seamless cross-platform user experience and FastAPI with MongoDB for a robust high-performance backend. Built collaboratively with talented engineers.",
    highlights: [
      "JWT-based user authentication (Sign Up / Sign In)",
      "Create, edit, and organize personalized music playlists",
      "Fast music search and catalog discovery",
      "Interactive audio playback controls with modern mini-player",
      "Sidebar navigation and responsive dark theme UI"
    ],
    techStack: ["Flutter", "FastAPI", "Python", "MongoDB", "Figma", "REST APIs", "Git", "GitHub"],
    thumbnail: "assets/images/Soundly/1738132683682.jpeg",
    screenshots: [
      "assets/images/Soundly/1738132683682.jpeg"
    ],
    links: [
      { label: "View Showcase", url: "https://www.linkedin.com/in/01nimantha/", type: "primary", icon: "🎵" }
    ],
    contributors: ["P.V. Nimantha Madhushan", "P.V. Ruwantha Madhushan", "N.A. Kavishka Srimal"]
  },
  {
    id: "banking-system",
    title: "Banking Management System – Java Desktop",
    category: "software",
    categoryLabel: "Software • Java OOP & Swing",
    date: "Desktop Application",
    tagline: "Secure paperless banking system engineered with Object-Oriented principles in Java.",
    description: "A comprehensive banking management software designed to simplify banking operations by offering an efficient, paperless, and secure solution for managing customer records, transactions, accounts, and reports.",
    highlights: [
      "Full OOP architecture with modular classes, encapsulation, and inheritance",
      "Dedicated LaunchPages, UserPages, Admin, and Security verification modules",
      "Audio and interface systems implementing InterfaceAccount & InterfaceSecurity",
      "Robust file handling for secure local persistence and rapid record retrieval",
      "Interactive custom Swing GUI designed for banking tellers and administrators"
    ],
    techStack: ["Java", "OOP Principles", "Java Swing GUI", "File I/O", "Git", "GitHub"],
    thumbnail: "assets/images/Banking Management System/1737894511139.jpeg",
    screenshots: [
      "assets/images/Banking Management System/1737894511139.jpeg",
      "assets/images/Banking Management System/1737894504527.jpeg",
      "assets/images/Banking Management System/1737894475878.jpeg",
      "assets/images/Banking Management System/1737894452755.jpeg",
      "assets/images/Banking Management System/1737894422933.jpeg",
      "assets/images/Banking Management System/1737894393346.jpeg",
      "assets/images/Banking Management System/1737894363608.jpeg",
      "assets/images/Banking Management System/1737894338420.jpeg",
      "assets/images/Banking Management System/1737894312570.jpeg",
      "assets/images/Banking Management System/1737894301050.jpeg",
      "assets/images/Banking Management System/1737894195076.jpeg"
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/01Ruwantha/bankProjet", type: "primary", icon: "📦" }
    ],
    contributors: ["P.V. Nimantha Madhushan", "P.V. Ruwantha Madhushan"]
  },
  {
    id: "get-safe",
    title: "Get Safe – Real-Time Flood Detection & Assistance",
    category: "mobile",
    categoryLabel: "Mobile • React Native & Firebase",
    date: "Emergency Assistance App",
    tagline: "Life-saving mobile platform with live flood monitoring and emergency SOS contact.",
    description: "A mobile application designed to provide real-time flood detection and emergency assistance services. With an intuitive user interface, it ensures that users can quickly access emergency contacts, locate safe zones, and receive instant alerts about flood conditions.",
    highlights: [
      "Real-time sensor-linked flood detection and hazard alerts",
      "Safe zone locator with interactive map integration",
      "Instant one-tap emergency call service",
      "Secure user registration and profile management",
      "Dark mode support and low-latency push notifications"
    ],
    techStack: ["React Native", "Firebase", "Google Maps API", "Figma", "Git", "GitHub"],
    thumbnail: "assets/images/Get Safe/1738134920494.jpeg",
    screenshots: [
      "assets/images/Get Safe/1738134920494.jpeg"
    ],
    links: [
      { label: "View Showcase", url: "https://www.linkedin.com/in/01nimantha/", type: "primary", icon: "🚨" }
    ],
    contributors: ["Nimantha Madhushan", "Ruwantha Madhushan"]
  },
  {
    id: "tiny-toes",
    title: "The Tiny Toes – Flutter Baby Gallery App",
    category: "mobile",
    categoryLabel: "Mobile App • Flutter & REST API",
    date: "CeylonEdge Internship Challenge",
    tagline: "Dynamic photo gallery with external API integration and offline authentication.",
    description: "Developed as part of a Flutter Mobile Developer Internship challenge by CeylonEdge (PVT) LTD. The Tiny Toes is a Flutter-based mobile app designed as a baby photo gallery demonstrating REST API integration, state management, and offline session handling.",
    highlights: [
      "Login authentication with persistent local storage (shared_preferences)",
      "Dynamic user listing via JSONPlaceholder REST API",
      "Dynamic photo albums fetched with Picsum.photos API",
      "Clean reactive state management with Provider",
      "Organized album views, photo metadata, and graceful caching"
    ],
    techStack: ["Flutter", "Dart", "Provider", "REST APIs", "shared_preferences", "Git"],
    thumbnail: "assets/images/The Tiny Toes/1753431117156.jpeg",
    screenshots: [
      "assets/images/The Tiny Toes/1753431117156.jpeg"
    ],
    links: [
      { label: "View Showcase", url: "https://www.linkedin.com/in/01nimantha/", type: "primary", icon: "👶" }
    ],
    contributors: ["P.V. Nimantha Madhushan"]
  },
  {
    id: "tech-gadget-store",
    title: "Tech Gadget Store – Responsive E-Commerce",
    category: "web",
    categoryLabel: "Web Development • Frontend",
    date: "Frontend Project",
    tagline: "Modern responsive web store with interactive cart and dynamic product filtering.",
    description: "A responsive e-commerce web application developed using pure HTML, CSS, and modern JavaScript. Designed with high attention to user experience, accessibility, and visual aesthetics.",
    highlights: [
      "Fully responsive layout optimized for mobile, tablet, and desktop",
      "Interactive product catalog and dynamic category filtering",
      "Shopping cart functionality with live subtotal calculation",
      "Clean, modular CSS architecture and vanilla JS DOM scripting"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript (ES6+)", "Git", "GitHub"],
    thumbnail: "assets/images/Tech Gadget Store/1737990235349.jpeg",
    screenshots: [
      "assets/images/Tech Gadget Store/1737990235349.jpeg",
      "assets/images/Tech Gadget Store/1737990227129.jpeg"
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/01Ruwantha/HTML", type: "primary", icon: "💻" }
    ],
    contributors: ["P.V. Nimantha Madhushan", "P.V. Ruwantha Madhushan"]
  },
  {
    id: "unreal-ai",
    title: "Unreal Engine 5 – AI Mechanics Showcase",
    category: "gamedev",
    categoryLabel: "Game Dev • Unreal Engine 5",
    date: "Game AI & Gameplay",
    tagline: "Intelligent NPC behaviors utilizing Behavior Trees and Blueprint navigation.",
    description: "An advanced Unreal Engine 5 mechanics project focusing on artificial intelligence, NPC decision trees, and interactive enemy perception systems for 3D game environments.",
    highlights: [
      "Behavior Tree Implementation for intelligent NPC decision-making",
      "Blueprint AI MoveTo system with dynamic character following & proximity checks",
      "Custom navigation mesh bounds for dynamic obstacle avoidance",
      "Integrated combat and character animations with smooth state blending"
    ],
    techStack: ["Unreal Engine 5", "Blueprints", "Behavior Trees", "AI Navigation", "Character Animation"],
    thumbnail: "assets/images/Unreal Engine AI Project Showcase/1737971272684.jpeg",
    screenshots: [
      "assets/images/Unreal Engine AI Project Showcase/1737971272684.jpeg",
      "assets/images/Unreal Engine AI Project Showcase/1737965190605.jpeg",
      "assets/images/Unreal Engine AI Project Showcase/1737965180911.jpeg",
      "assets/images/Unreal Engine AI Project Showcase/1737965155269.jpeg",
      "assets/images/Unreal Engine AI Project Showcase/1737965144131.jpeg",
      "assets/images/Unreal Engine AI Project Showcase/1737965128655.jpeg",
      "assets/images/Unreal Engine AI Project Showcase/1737965075232.jpeg"
    ],
    links: [
      { label: "View Showcase", url: "https://www.linkedin.com/in/01nimantha/", type: "primary", icon: "🎮" }
    ],
    contributors: ["P.V. Nimantha Madhushan"]
  },
  {
    id: "blender-creations",
    title: "3D Character & Asset Creations in Blender",
    category: "gamedev",
    categoryLabel: "3D Art & Modeling • Blender",
    date: "Digital Art & 3D Assets",
    tagline: "Stylized character sculpting, texturing, animation, and realistic product rendering.",
    description: "A rich series of creative 3D modeling and animation projects crafted in Blender, covering stylized character sculpting ('Mushroom Man'), anatomical humanoid modeling, luxury product visualization ('Black Gold'), and action simulations.",
    highlights: [
      "Mushroom Man: Stylized character with cheerful aesthetics and texture painting",
      "Humanoid Model: Anatomical accuracy, modular parts, custom sculpted hair",
      "Black Gold Perfume: Luxury product modeling with physically-based metallic shaders",
      "3D Tank Animation: Complex mechanical rigging, track animations, and dynamic fire simulation",
      "Low-Poly Character: Armature rigging and game-engine-ready animations"
    ],
    techStack: ["Blender", "3D Sculpting", "Armature Rigging", "Texture Painting", "3D Animation"],
    thumbnail: "assets/images/3D Characters/1737953864325.jpeg",
    screenshots: [
      "assets/images/3D Characters/1737953864325.jpeg",
      "assets/images/3D Characters/1737953508671.jpeg",
      "assets/images/3D Characters/1737955805146.jpeg",
      "assets/images/3D Characters/1737954369491.jpeg",
      "assets/images/3D Characters/1737954353935.jpeg",
      "assets/images/3D Characters/1737952844591.jpeg"
    ],
    links: [
      { label: "View Showcase", url: "https://www.linkedin.com/in/01nimantha/", type: "primary", icon: "🎨" }
    ],
    contributors: ["P.V. Nimantha Madhushan"]
  }
];

// Gallery state for Lightbox cycling
let currentGallery = [];
let currentImageIndex = 0;

// Document Ready Initialization
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initScrollProgressBar();
  initHeroCanvas();
  initTypewriter();
  initScrollReveal();
  initStatCounters();
  renderProjects("all");
  initFilters();
  initModal();
  initLightbox();
  initBackToTop();
  initContact();
  initMobileMenu();
  checkDeepLink();
});

// 1. Theme Management (Dark / Light)
function initTheme() {
  const toggleBtn = document.getElementById("themeToggle");
  const currentTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const activeTheme = document.documentElement.getAttribute("data-theme");
      const nextTheme = activeTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("theme", nextTheme);
      updateThemeIcon(nextTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById("themeToggle");
  if (toggleBtn) {
    toggleBtn.innerHTML = theme === "dark" ? "☀️" : "🌙";
    toggleBtn.setAttribute("title", theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode");
  }
}

// 2. Top Scroll Progress Bar
function initScrollProgressBar() {
  const bar = document.getElementById("scrollProgressBar");
  if (!bar) return;

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      bar.style.width = `${progress}%`;
    }
  }, { passive: true });
}

// 3. Interactive Hero Background Canvas (Tech Nodes / Floating Particles)
function initHeroCanvas() {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = (canvas.width = canvas.offsetWidth);
  let height = (canvas.height = canvas.offsetHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  }, { passive: true });

  const numParticles = width < 768 ? 25 : 45;
  const particles = [];
  const maxDistance = 140;

  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 2 + 1.2
    });
  }

  let mouse = { x: -1000, y: -1000 };
  const heroSection = document.getElementById("hero");
  if (heroSection) {
    heroSection.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }, { passive: true });

    heroSection.addEventListener("mouseleave", () => {
      mouse.x = -1000;
      mouse.y = -1000;
    }, { passive: true });
  }

  let isCanvasVisible = true;
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      isCanvasVisible = entries[0].isIntersecting;
    });
    observer.observe(canvas);
  }

  function animate() {
    if (isCanvasVisible) {
      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.getAttribute("data-theme") !== "light";
      const dotColor = isDark ? "rgba(6, 182, 212, " : "rgba(37, 99, 235, ";
      const lineColor = isDark ? "rgba(37, 99, 235, " : "rgba(6, 182, 212, ";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction
        const dxM = mouse.x - p.x;
        const dyM = mouse.y - p.y;
        const distM = Math.sqrt(dxM * dxM + dyM * dyM);
        if (distM < 120) {
          p.x -= (dxM / distM) * 1.5;
          p.y -= (dyM / distM) * 1.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${dotColor}0.65)`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - dist / maxDistance) * 0.25;
            ctx.strokeStyle = `${lineColor}${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    }
    requestAnimationFrame(animate);
  }

  animate();
}

// 4. Smooth Typewriter Role Flipper
function initTypewriter() {
  const roleEl = document.getElementById("typingRole");
  if (!roleEl) return;

  const roles = [
    "Full-Stack Developer",
    "Flutter & Mobile Specialist",
    "Spring Boot & Java Engineer",
    "React & Web Applications",
    "Game AI & 3D Artist",
    "BCS Undergrad @ Univ. of Ruhuna"
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 70;
  const deleteSpeed = 40;
  const pauseBetween = 1800;

  function type() {
    const current = roles[roleIdx];

    if (isDeleting) {
      charIdx--;
      roleEl.textContent = current.substring(0, charIdx);
    } else {
      charIdx++;
      roleEl.textContent = current.substring(0, charIdx);
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIdx === current.length) {
      delay = pauseBetween;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

// 5. Scroll Reveal with Intersection Observer
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    reveals.forEach(el => el.classList.add("active"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));
}

// 6. Smooth Animated Stat Counters
function initStatCounters() {
  const statNumbers = document.querySelectorAll(".stat-number[data-count]");
  if (statNumbers.length === 0) return;

  if (!("IntersectionObserver" in window)) {
    statNumbers.forEach(el => {
      el.textContent = el.getAttribute("data-count") + (el.getAttribute("data-suffix") || "");
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-count"), 10);
        const suffix = el.getAttribute("data-suffix") || "";
        const duration = 1600;
        const start = performance.now();

        function countStep(now) {
          const progress = Math.min((now - start) / duration, 1);
          // Ease out cubic
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const currentVal = Math.floor(easeProgress * target);
          el.textContent = currentVal + suffix;
          if (progress < 1) {
            requestAnimationFrame(countStep);
          } else {
            el.textContent = target + suffix;
          }
        }

        requestAnimationFrame(countStep);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => observer.observe(el));
}

// 7. Render Project Cards with 3D Tilt Effect
function renderProjects(category) {
  const container = document.getElementById("projectsContainer");
  if (!container) return;

  const filtered = category === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === category);

  container.innerHTML = "";

  filtered.forEach((project, idx) => {
    const card = document.createElement("div");
    card.className = "project-card fade-in";
    card.setAttribute("data-id", project.id);
    card.style.animationDelay = `${idx * 0.08}s`;

    const techPreview = project.techStack.slice(0, 4)
      .map(t => `<span class="tech-tag">${t}</span>`)
      .join("");
    const moreCount = project.techStack.length > 4 ? `<span class="tech-tag">+${project.techStack.length - 4}</span>` : "";

    let primaryAction = "";
    const playLink = project.links.find(l => l.type === "playstore");
    const ghLink = project.links.find(l => l.url.includes("github.com"));

    if (playLink) {
      primaryAction = `<a href="${playLink.url}" target="_blank" class="btn btn-sm btn-playstore" onclick="event.stopPropagation()">Google Play</a>`;
    } else if (ghLink) {
      primaryAction = `<a href="${ghLink.url}" target="_blank" class="btn btn-sm btn-secondary" onclick="event.stopPropagation()">GitHub</a>`;
    } else {
      primaryAction = `<button class="btn btn-sm btn-outline" onclick="openProjectModal('${project.id}')">View Details</button>`;
    }

    card.innerHTML = `
      <div class="project-thumb-box" onclick="openProjectModal('${project.id}')" style="cursor: pointer;">
        <span class="project-category-badge">${project.categoryLabel.split('•')[0].trim()}</span>
        <span class="project-meta-pill">${project.date.split('•')[0].trim()}</span>
        <img 
          src="${encodeURI(project.thumbnail)}" 
          alt="${project.title}" 
          class="project-thumb-img" 
          loading="lazy" 
          onerror="this.onerror=null; this.src='https://placehold.co/600x400/151d2d/ffffff?text=${encodeURIComponent(project.title)}';"
        />
      </div>
      <div class="project-body">
        <h3 class="project-title" onclick="openProjectModal('${project.id}')" style="cursor: pointer;">${project.title}</h3>
        <p class="project-desc">${project.tagline || project.description}</p>
        <div class="project-tech-stack">
          ${techPreview}
          ${moreCount}
        </div>
        <div class="project-footer">
          <button class="btn btn-sm btn-outline" onclick="openProjectModal('${project.id}')">Explore & Gallery →</button>
          <div class="project-links">
            ${primaryAction}
          </div>
        </div>
      </div>
    `;

    // 3D Tilt Effect on mouse movement
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });

    container.appendChild(card);
  });
}

// 8. Filter Buttons Handler
function initFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderProjects(category);
    });
  });
}

// 9. Modal System for Deep Project Inspection
function initModal() {
  const overlay = document.getElementById("projectModalOverlay");
  const closeBtn = document.getElementById("modalCloseBtn");

  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeProjectModal();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeProjectModal);
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProjectModal();
      closeLightbox();
    }
  });
}

function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const overlay = document.getElementById("projectModalOverlay");
  const title = document.getElementById("modalTitle");
  const category = document.getElementById("modalCategory");
  const content = document.getElementById("modalBodyContent");

  if (title) title.textContent = project.title;
  if (category) category.textContent = `${project.categoryLabel} • ${project.date}`;

  // Store current project gallery for Lightbox cycling
  currentGallery = project.screenshots || [];

  const techBadges = project.techStack
    .map(t => `<span class="tech-tag" style="font-size:0.85rem; padding: 0.35rem 0.8rem;">${t}</span>`)
    .join(" ");

  const highlightsList = project.highlights && project.highlights.length > 0
    ? `<h4 style="margin: 1.5rem 0 0.75rem 0; color: var(--text-primary); font-size: 1.1rem;">Key Highlights & Features</h4>
       <ul style="padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.8;">
         ${project.highlights.map(h => `<li>${h}</li>`).join("")}
       </ul>`
    : "";

  const contributorsBox = project.contributors && project.contributors.length > 0
    ? `<div style="margin-top: 1.5rem; padding: 1rem 1.25rem; background: var(--bg-secondary); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
         <span style="font-weight: 600; color: var(--text-primary); font-size: 0.9rem;">👥 Project Contributors / Team:</span>
         <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 0.25rem;">${project.contributors.join(" • ")}</p>
       </div>`
    : "";

  const actionLinks = project.links.map(l => {
    let btnClass = "btn btn-sm btn-primary";
    if (l.type === "playstore") btnClass = "btn btn-sm btn-playstore";
    if (l.type === "outline") btnClass = "btn btn-sm btn-outline";
    return `<a href="${l.url}" target="_blank" class="${btnClass}">${l.icon || ''} ${l.label}</a>`;
  }).join(" ");

  const screenshotsHTML = project.screenshots && project.screenshots.length > 0
    ? `
      <div class="gallery-section-title">📸 Visual Showcase & Screenshots (${project.screenshots.length})</div>
      <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Click any image to view in fullscreen gallery with keyboard navigation (← / →):</p>
      <div class="modal-screenshots-scroll">
        ${project.screenshots.map((url, idx) => `
          <div class="modal-shot-card" onclick="openLightboxIndex(${idx})">
            <img src="${encodeURI(url)}" alt="${project.title} screenshot ${idx + 1}" loading="lazy" onerror="this.onerror=null; this.src='https://placehold.co/400x600/151d2d/ffffff?text=Preview+Image';">
          </div>
        `).join("")}
      </div>
    `
    : "";

  content.innerHTML = `
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
      ${actionLinks}
    </div>

    ${screenshotsHTML}

    <h4 style="margin: 1.5rem 0 0.5rem 0; color: var(--text-primary); font-size: 1.1rem;">About the Project</h4>
    <p style="color: var(--text-secondary); line-height: 1.8; font-size: 1rem;">${project.description}</p>

    ${highlightsList}

    <h4 style="margin: 1.5rem 0 0.75rem 0; color: var(--text-primary); font-size: 1.1rem;">Technologies & Tools</h4>
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
      ${techBadges}
    </div>

    ${contributorsBox}
  `;

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
  history.replaceState(null, null, `#project-${projectId}`);
}

function closeProjectModal() {
  const overlay = document.getElementById("projectModalOverlay");
  if (overlay) overlay.classList.remove("active");
  document.body.style.overflow = "";

  if (window.location.hash.startsWith("#project-")) {
    history.replaceState(null, null, " ");
  }
}

// 10. Lightbox with Left / Right Navigation
function initLightbox() {
  const lightbox = document.getElementById("imageLightbox");
  const close = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target === close) {
        closeLightbox();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navigateLightbox(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navigateLightbox(1);
    });
  }

  document.addEventListener("keydown", (e) => {
    if (!lightbox || !lightbox.classList.contains("active")) return;
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  });
}

function openLightboxIndex(idx) {
  if (!currentGallery || currentGallery.length === 0) return;
  currentImageIndex = idx;
  updateLightboxImage();
  const lightbox = document.getElementById("imageLightbox");
  if (lightbox) lightbox.classList.add("active");
}

function navigateLightbox(direction) {
  if (!currentGallery || currentGallery.length === 0) return;
  currentImageIndex = (currentImageIndex + direction + currentGallery.length) % currentGallery.length;
  updateLightboxImage();
}

function updateLightboxImage() {
  const img = document.getElementById("lightboxImg");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");

  if (img && currentGallery[currentImageIndex]) {
    img.src = encodeURI(currentGallery[currentImageIndex]);
    img.alt = `Screenshot ${currentImageIndex + 1}`;
  }

  // Toggle navigation buttons visibility if only 1 image
  const hasMultiple = currentGallery.length > 1;
  if (prevBtn) prevBtn.style.display = hasMultiple ? "flex" : "none";
  if (nextBtn) nextBtn.style.display = hasMultiple ? "flex" : "none";
}

function closeLightbox() {
  const lightbox = document.getElementById("imageLightbox");
  if (lightbox) lightbox.classList.remove("active");
}

// 11. Floating Back to Top Button
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 420) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// 12. Contact & Copy to Clipboard
function initContact() {
  const copyBtn = document.getElementById("copyEmailBtn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const email = "01nimantha@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        showToast("Email address copied to clipboard!");
      }).catch(() => {
        showToast("Email: 01nimantha@gmail.com");
      });
    });
  }

  const form = document.getElementById("quickContactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("formName").value;
      const subject = document.getElementById("formSubject").value;
      const message = document.getElementById("formMessage").value;

      const mailtoUrl = `mailto:01nimantha@gmail.com?subject=${encodeURIComponent("[Portfolio Contact] " + subject)}&body=${encodeURIComponent("From: " + name + "\n\n" + message)}`;
      window.location.href = mailtoUrl;
      showToast("Opening your email client...");
    });
  }
}

function showToast(msg) {
  const toast = document.getElementById("toastNotice");
  if (!toast) return;
  toast.querySelector(".toast-text").textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

// 13. Mobile Navigation Drawer
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      toggleBtn.innerHTML = navLinks.classList.contains("active") ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        toggleBtn.innerHTML = "☰";
      });
    });
  }
}

// 14. Deep-linking on direct URL visit
function checkDeepLink() {
  const hash = window.location.hash;
  if (hash && hash.startsWith("#project-")) {
    const pId = hash.replace("#project-", "");
    setTimeout(() => {
      openProjectModal(pId);
    }, 250);
  }
}

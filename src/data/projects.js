export const projects = [
  {
    title: "Advanced Land Cover Classification",
    description:
      "Spatiotemporal land cover classification system using FCN-ResNet50 semantic segmentation on multispectral satellite imagery. Designed a multi-year data pipeline with Google Earth Engine and PyTorch, achieving ~91% accuracy using HyperBCS (self-attention-based deep learning model) on real-world Landsat data. Modeled environmental degradation patterns for quantitative land-use change analysis.",
    technologies: ["PyTorch", "FCN-ResNet50", "SegFormer", "Google Earth Engine", "Remote Sensing"],
    github: "https://github.com/Bhavdeepmnit",
  },
  {
    title: "T-Shirt Order Management Portal",
    description:
      "Full-stack MERN role-based app for 3 user tiers (Super Admin, Branch Admin, Student) across 7 MNIT branches with isolated dashboards. Built secure RESTful API with JWT access + refresh token auth, bcrypt hashing, Joi validation, and rate-limited endpoints. Implemented real-time Socket.io notifications with branch-wise dynamic pricing and one-click SheetJS Excel export.",
    technologies: ["React 18", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Tailwind CSS"],
    github: "https://github.com/Bhavdeepmnit",
  },
  {
    title: "Laundry Management Platform",
    description:
      "Scalable full-stack web application with RESTful API architecture supporting 100+ concurrent users. Implemented JWT-based authentication and role-based access control (RBAC), securing all endpoints. Integrated Google Maps API for dynamic location-based service detection with modular MongoDB data models and optimized query performance.",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Google Maps API", "JWT"],
    github: "https://github.com/Bhavdeepmnit/Apni_laundary",
    demo: "https://apnilaundry.vercel.app",
  },
  {
    title: "Hand Gesture Virtual Mouse",
    description:
      "Real-time computer vision gesture recognition system using MediaPipe and OpenCV with multithreaded pipeline architecture. Applied Kalman filtering and multithreading to reduce latency by 30%, achieving ~25+ FPS throughput. Mapped hand landmarks to system events enabling fully touchless mouse control with click, scroll, and drag gesture support.",
    technologies: ["Python", "MediaPipe", "OpenCV", "PyAutoGUI", "Kalman Filter"],
    github: "https://github.com/Bhavdeepmnit/Virtual_mouse",
  },
  {
    title: "Personal Budget Tracker System",
    description:
      "Backend-driven financial system optimized for scalable data storage and retrieval. Designed optimized data models and APIs that reduced query latency by ~20%, paired with interactive dashboards for actionable financial insights.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/Bhavdeepmnit/Budget-Tracker",
  },
];

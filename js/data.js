/**
 * THE LANTERN KINGDOM - Portfolio Data Store for Manya K N
 * A cinematic, Tangled-inspired fairytale portfolio.
 * 
 * Verified against official resume and credentials.
 * Zero invented facts, companies, or grades.
 */

export const KINGDOM_DATA = {
  profile: {
    name: "Manya K N",
    initials: "MK",
    brand: "THE LANTERN KINGDOM",
    tagline: "Every Dream Begins with a Little Curiosity.",
    worldSubtitle: "An Enchanted Fairytale Journey into Cybersecurity & Intelligent Systems",
    academicStatus: "Third-year B.E. Computer Science and Engineering student specializing in Cyber Security",
    degree: "B.E. Computer Science and Engineering",
    specialization: "Cyber Security",
    institution: "NMAM Institute of Technology, Nitte",
    expectedGraduation: 2028,
    cgpa: "8.7 / 10",
    
    professionalIdentity: "Computer Science and Cyber Security Student | Aspiring Cybersecurity & AI Enthusiast",
    
    professionalIntro: "I'm Manya K N, a Computer Science and Engineering student specializing in Cyber Security. I enjoy exploring technology through hands-on projects spanning cybersecurity, AI/ML, networking, and full-stack development. I'm continuously learning, experimenting, and discovering new ways to use technology to solve real-world problems.",
    
    personalGardenStory: `Welcome to my corner of the enchanted kingdom. Like the lanterns that pierce the night sky with hope and wonder, my passion for computing began with a simple question: "How does this work, and how can we keep it safe?"

Currently in my third year of Computer Science and Engineering with a specialization in Cyber Security at NMAM Institute of Technology, Nitte, I blend technical rigor with artistic curiosity. From dissecting packet headers in Wireshark and configuring multi-LAN architectures to training machine learning models for phishing detection and building dynamic web applications, I view technology as both a science and a creative craft.`,

    roles: [
      "Cybersecurity Enthusiast",
      "AI/ML Explorer",
      "Full-Stack Developer",
      "Computer Science Student"
    ],
    
    interests: [
      { name: "Cybersecurity", icon: "shield", description: "Vulnerability analysis, secure design, and proactive threat modeling." },
      { name: "Artificial Intelligence & ML", icon: "sparkles", description: "Predictive text classification, computer vision, and neural heuristics." },
      { name: "Full-Stack Web Development", icon: "layout", description: "Modern reactive user interfaces backed by resilient RESTful microservices." },
      { name: "Computer Networking", icon: "network", description: "IP architecture, DHCP routing, packet inspection, and protocol analysis." },
      { name: "Phishing Detection", icon: "mail-shield", description: "Natural language processing to combat social engineering and deceptive cues." },
      { name: "Practical Security Research", icon: "microscope", description: "Empirical studies into localized cybercrime trends and preventative literacy." },
      { name: "Secure Systems", icon: "lock", description: "Hardening cloud and enterprise workloads against contemporary exploitation." }
    ],

    contact: {
      email: "manyakalige864@gmail.com",
      linkedin: "https://linkedin.com/in/manyakn",
      github: "https://github.com/manya208",
      location: "Nitte, Karnataka, India",
      statusText: "Available for internships, collaborative research, and engineering projects"
    }
  },

  kingdomLocations: [
    { id: "hero", name: "The Enchanted Gateway", label: "Home", icon: "castle", metaphor: "Entrance to the fairytale realm" },
    { id: "about", name: "The Tower Garden", label: "About", icon: "flower", metaphor: "Personal origins & academic roots" },
    { id: "skills", name: "The Garden of Discoveries", label: "Skills", icon: "sparkles", metaphor: "Magical flowers of technical craft" },
    { id: "experience", name: "The Royal Chronicle", label: "Experience", icon: "scroll", metaphor: "Milestones in industry & research" },
    { id: "projects", name: "The Gallery of Creations", label: "Projects", icon: "gem", metaphor: "Inventions forged with curiosity" },
    { id: "research", name: "The Hidden Observatory", label: "Research", icon: "compass", metaphor: "Inquiry beneath starry skies" },
    { id: "certifications", name: "The Lantern Archive", label: "Certifications", icon: "lantern", metaphor: "Verified knowledge illuminated" },
    { id: "achievements", name: "The Festival of Dreams", label: "Achievements", icon: "crown", metaphor: "Kingdom honors & student leadership" },
    { id: "contact", name: "The Lantern Bridge", label: "Contact", icon: "bridge", metaphor: "Where our stories connect" }
  ],

  skillsCategories: [
    {
      id: "programming",
      name: "PROGRAMMING",
      flowerRune: "🌸",
      floralTheme: "Golden Sun Orchid",
      accent: "#FFD166",
      description: "Core computational foundations and algorithmic logic.",
      skills: [
        { name: "Python", context: "AI/ML, NLP, Automation & Security Tooling" },
        { name: "JavaScript", context: "Modern ES6+, DOM Orchestration & Asynchronous Flow" }
      ]
    },
    {
      id: "webdev",
      name: "WEB DEVELOPMENT",
      flowerRune: "🌿",
      floralTheme: "Luminescent Ivy Spire",
      accent: "#A9DCFF",
      description: "Reactive user interfaces, server-side services, and database persistence.",
      skills: [
        { name: "React.js", context: "Dynamic Component Architectures & State Management" },
        { name: "Node.js", context: "Asynchronous JavaScript Server Runtime" },
        { name: "Express.js", context: "RESTful Web Framework & Middleware Architecture" },
        { name: "MongoDB", context: "NoSQL Document Database & Schema Modeling" },
        { name: "MERN Stack", context: "Unified Full-Stack Application Engineering" },
        { name: "REST APIs", context: "Stateless Endpoints, JSON Serialization & HTTP Protocols" }
      ]
    },
    {
      id: "aiml",
      name: "AI / ML & INTELLIGENT SYSTEMS",
      flowerRune: "✨",
      floralTheme: "Starlight Violet Bloom",
      accent: "#DCC8FF",
      description: "Machine intelligence, natural language comprehension, and computer vision.",
      skills: [
        { name: "Machine Learning", context: "Supervised Learning, Feature Engineering & Evaluation" },
        { name: "Natural Language Processing", context: "Tokenization, TF-IDF Vectorization & Text Classification" },
        { name: "OpenCV", context: "Computer Vision, Image Segmentation & Color Space Conversion" },
        { name: "K-Means Clustering", context: "Unsupervised Partitioning & Dominant Palette Extraction" },
        { name: "FastAPI", context: "High-Performance Asynchronous Python Microservices" },
        { name: "Flask", context: "Lightweight WSGI Python Web Framework" }
      ]
    },
    {
      id: "networking",
      name: "NETWORKING & SECURITY",
      flowerRune: "🛡️",
      floralTheme: "Enchanted Royal Shield",
      accent: "#4ADE80",
      description: "Protocol analysis, topology design, packet inspection, and defensive hardening.",
      skills: [
        { name: "Cisco Packet Tracer", context: "Multi-Subnet LAN Topologies & Router Configuration" },
        { name: "Wireshark", context: "Deep Packet Inspection, Header Analysis & Protocol Debugging" },
        { name: "DHCP", context: "Dynamic Host Allocation, Scope Design & Lease Management" },
        { name: "Cybersecurity Fundamentals", context: "Threat Modeling, CIA Triad & Defensive Principles" },
        { name: "Networking Fundamentals", context: "OSI Reference Model, TCP/IP Suite & Subnetting" }
      ]
    },
    {
      id: "tools",
      name: "TOOLS & WORKFLOWS",
      flowerRune: "🗝️",
      floralTheme: "Artisan's Golden Key",
      accent: "#FFBE3D",
      description: "Version control, development environments, and collaborative workflows.",
      skills: [
        { name: "Git", context: "Branch Management, Commit History & Distributed VCS" },
        { name: "GitHub", context: "Remote Repositories, Issue Tracking & Collaboration" },
        { name: "Visual Studio Code", context: "Integrated Development Environment & Debugging Tools" }
      ]
    }
  ],

  experiences: [
    {
      id: "algoorbit",
      role: "Full Stack Development Intern",
      organization: "AlgoOrbit Innovations Pvt. Ltd.",
      dates: "June 22 – August 17, 2026",
      location: "Virtual / Remote",
      badge: "Full-Stack Chapter",
      flowerSign: "Royal Scroll Chapter I",
      accentColor: "#FFD166",
      summary: "Engineered scalable web applications and interactive culinary and learning platforms utilizing modern MERN stack technologies.",
      projects: ["Swadam Recipe Platform", "Eduverse Learning Platform"],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "MERN Stack"],
      highlights: [
        "Architected responsive React user interfaces paired with robust Express and Node.js routing backends.",
        "Engineered MongoDB collections and RESTful API endpoints for dynamic recipe querying and learning content.",
        "Optimized client-side rendering and responsive components for mobile and desktop screens."
      ]
    },
    {
      id: "iict",
      role: "AI & ML Intern",
      organization: "IICT, New Delhi",
      dates: "June 15 – July 30, 2026",
      location: "New Delhi (Research Division)",
      badge: "Machine Intelligence Chapter",
      flowerSign: "Royal Scroll Chapter II",
      accentColor: "#DCC8FF",
      summary: "Developed intelligent detection pipelines targeting misinformation and deceptive social engineering attacks using NLP and Machine Learning.",
      projects: ["AI-Powered Fake News Detection", "AI-Driven Phishing Email Detection"],
      technologies: ["Python", "NLP", "Machine Learning", "Text Classification", "Scikit-Learn"],
      highlights: [
        "Implemented end-to-end natural language processing workflows including tokenization, stop-word removal, and TF-IDF vectorization.",
        "Trained machine learning classification models to distinguish deceptive linguistic patterns in news articles.",
        "Analyzed email textual indicators and structural attributes to accurately categorize phishing messages from legitimate communications."
      ]
    },
    {
      id: "nmamit-cybercrime",
      role: "Cybercrime Research Intern",
      organization: "NMAM Institute of Technology",
      dates: "Duration: 60 days",
      location: "Nitte, Karnataka",
      badge: "Cyber Forensics Chapter",
      flowerSign: "Royal Scroll Chapter III",
      accentColor: "#A9DCFF",
      summary: "Conducted regional cybersecurity investigation into real-world cybercrime incident vectors and defensive community safeguards across Coastal Karnataka.",
      projects: ["Dakshina Kannada & Udupi Cybercrime Trend Analysis"],
      technologies: ["Cybersecurity Fundamentals", "Data Classification", "Threat Analysis", "Risk Assessment"],
      highlights: [
        "Investigated reported cyber fraud vectors, financial phishing mechanisms, and social engineering patterns across Dakshina Kannada and Udupi.",
        "Cataloged regional threat characteristics to identify prevalent attack vectors impacting local demographics.",
        "Synthesized regional cybersecurity findings into structured preventative recommendations and awareness materials."
      ]
    }
  ],

  projects: [
    {
      id: "swadam",
      title: "SWADAM",
      subtitle: "Full-Stack Recipe & Culinary Platform",
      category: "Web Development",
      categoryKey: "web",
      organization: "AlgoOrbit Innovations Pvt. Ltd.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      visualConcept: "An enchanted cookbook surrounded by floating recipe cards illuminated by lantern glow.",
      icon: "book-open",
      accentColor: "#FFD166",
      description: "A full-stack recipe platform built with React.js, Node.js, Express.js, and MongoDB. It enables recipe searching, category-based browsing, and personalized recipe collections.",
      problemSolved: "Finding tailored culinary ideas according to dietary preferences is often cumbersome across fragmented sites. Swadam provides a responsive, unified culinary catalog with organized discovery and persistent user recipe collections.",
      architecturalHighlights: [
        "React frontend with modular component hierarchy and live search filtering",
        "Express.js RESTful API services handling structured JSON query parameters",
        "MongoDB document collections structured for recipe metadata, ingredients, and categories",
        "Mobile-first responsive layout with clean visual hierarchy"
      ],
      fairytaleMetaphor: "The Alchemist's Kitchen — where ingredients turn to gold through code."
    },
    {
      id: "eduverse",
      title: "EDUVERSE",
      subtitle: "Interactive E-Learning Platform",
      category: "Web Development",
      categoryKey: "web",
      organization: "AlgoOrbit Innovations Pvt. Ltd.",
      technologies: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB"],
      visualConcept: "A floating magical library with glowing books and holographic parchment scrolls.",
      icon: "graduation-cap",
      accentColor: "#A9DCFF",
      description: "A full-stack e-learning platform built using the MERN stack. It provides interactive educational features and responsive interfaces for learning and content delivery.",
      problemSolved: "Traditional educational portals are often rigid and uninspiring for modern students. Eduverse delivers an engaging, responsive interface that facilitates intuitive topic navigation and structured learning modules.",
      architecturalHighlights: [
        "Modular MERN architecture ensuring seamless end-to-end data transfer",
        "Clean, accessible course content rendering with interactive checkpoints",
        "Stateful component logic delivering instantaneous navigation feedback",
        "Scalable database models accommodating diverse educational formats"
      ],
      fairytaleMetaphor: "The Tower Library — where knowledge floats freely on illuminated shelves."
    },
    {
      id: "fake-news-detection",
      title: "AI-POWERED FAKE NEWS DETECTION",
      subtitle: "NLP-Driven Text Classification Engine",
      category: "AI/ML",
      categoryKey: "aiml",
      organization: "IICT, New Delhi",
      technologies: ["Python", "NLP", "Machine Learning"],
      visualConcept: "A magical lens revealing hidden linguistic patterns and distortions in a text scroll.",
      icon: "eye",
      accentColor: "#DCC8FF",
      description: "An AI-powered text-classification system designed to identify potentially misleading news content using natural language processing and machine learning techniques.",
      problemSolved: "The viral spread of synthetic claims and sensationalized text demands automated, objective linguistic analysis to assist readers in evaluating textual credibility.",
      architecturalHighlights: [
        "Comprehensive NLP text preprocessing pipeline (tokenization, stemming, stop-word elimination)",
        "TF-IDF matrix generation to weight distinctive rhetorical indicators",
        "Supervised machine learning classification algorithms trained to predict credibility probabilities",
        "Quantitative evaluation ensuring consistent detection accuracy"
      ],
      fairytaleMetaphor: "The Truth-Seeing Lens — dispersing the mists of deception with data."
    },
    {
      id: "phishing-detection",
      title: "AI-DRIVEN PHISHING EMAIL DETECTION",
      subtitle: "Predictive Security & Social Engineering Defense",
      category: "Cybersecurity",
      categoryKey: "security",
      organization: "IICT, New Delhi",
      technologies: ["Python", "NLP", "Machine Learning"],
      visualConcept: "A golden shield protecting a glowing digital letter from phantom packets.",
      icon: "shield-alert",
      accentColor: "#FFC66D",
      description: "A system designed to identify potential phishing emails through textual and structural analysis, separating malicious messages from legitimate communications.",
      problemSolved: "Phishing remains the preeminent initial access vector in modern cyber intrusions. By analyzing subtle urgency triggers and message structures, this system identifies threats before users succumb to deception.",
      architecturalHighlights: [
        "Analysis of semantic urgency markers and deceptive linguistic cues",
        "Structural parsing of message headers, link syntaxes, and format traits",
        "Machine learning classification model trained on diverse email corpuses",
        "High sensitivity prioritization to prevent dangerous false negatives"
      ],
      fairytaleMetaphor: "The Golden Aegis — guarding the royal courier's messages from dark trickery."
    },
    {
      id: "color-analyzer",
      title: "AI COLOR ANALYZER",
      subtitle: "Outfit Decision & Harmonic Palette Engine",
      category: "AI/ML",
      categoryKey: "aiml",
      organization: "NMAM Institute of Technology",
      technologies: ["Python", "OpenCV", "K-Means", "FastAPI", "Flask"],
      visualConcept: "A magical prism creating streams of colorful particles and harmonic color palettes.",
      icon: "palette",
      accentColor: "#F472B6",
      description: "An AI-driven color analysis system for extracting dominant colors and recommending outfit color combinations using computer vision and clustering techniques.",
      problemSolved: "Subjective color matching for clothing choices often leads to mismatched combinations. This system automates visual palette extraction and applies algorithmic color harmony rules.",
      architecturalHighlights: [
        "OpenCV image preprocessing, color space conversion, and region segmentation",
        "Unsupervised K-Means clustering to extract dominant color centroids",
        "Algorithmic recommendation engine generating complementary wardrobe harmonies",
        "FastAPI and Flask microservice architecture for rapid image analysis"
      ],
      fairytaleMetaphor: "The Prism of Enchantment — refracting ambient light into perfect harmony."
    },
    {
      id: "network-config",
      title: "MULTI-LAN NETWORK & DHCP CONFIGURATION",
      subtitle: "Simulated Enterprise Topology & Packet Analysis",
      category: "Networking",
      categoryKey: "networking",
      organization: "NMAM Institute of Technology",
      technologies: ["Cisco Packet Tracer", "Wireshark"],
      visualConcept: "An illuminated map with connected digital kingdoms pulsing with light pathways.",
      icon: "network",
      accentColor: "#38BDF8",
      description: "A simulated multi-LAN network with router configuration, DHCP-based address allocation, and packet analysis to examine communication and troubleshoot connectivity.",
      problemSolved: "Enterprise local area networks require structured segmentation, dynamic addressing, and protocol verification to ensure high availability, prevent IP collisions, and safeguard connectivity.",
      architecturalHighlights: [
        "Multi-subnet topology engineered within Cisco Packet Tracer with router sub-interfaces",
        "Dynamic Host Configuration Protocol (DHCP) pool setup for automated client IP distribution",
        "Wireshark packet capture analysis to verify three-way handshakes, ICMP echoes, and ARP broadcasts",
        "Fault-isolation and route verification across inter-VLAN pathways"
      ],
      fairytaleMetaphor: "The Realm's Signal Roads — illuminated conduits keeping distant provinces in harmony."
    },
    {
      id: "cybercrime-research-proj",
      title: "CYBERCRIME RESEARCH PROJECT",
      subtitle: "Regional Cyber Threat Vectors & Defense Study",
      category: "Cybersecurity",
      categoryKey: "security",
      organization: "NMAM Institute of Technology",
      technologies: ["Cybersecurity Fundamentals", "Data Classification", "Threat Modeling", "Risk Analysis"],
      visualConcept: "A detective-style enchanted map with connected evidence points and glowing pins.",
      icon: "map-pin",
      accentColor: "#C084FC",
      description: "Research into cybercrime trends and patterns across Dakshina Kannada and Udupi, examining regional threat characteristics and formulating preventive security measures.",
      problemSolved: "Rapid regional digitization in coastal Karnataka exposed citizens to targeted financial deception. This study identifies local fraud vectors and outlines evidence-based community security safeguards.",
      architecturalHighlights: [
        "Empirical review of reported regional cyber fraud incidents over a 60-day internship period",
        "Classification of social engineering methodologies, UPI exploits, and impersonation schemes",
        "Assessment of local demographic vulnerability patterns",
        "Compilation of actionable security defense frameworks for grassroots digital safety"
      ],
      fairytaleMetaphor: "The Watchtower's Journal — recording the shadows that venture near the kingdom gates."
    }
  ],

  researchObservatory: {
    title: "BEYOND THE VISIBLE",
    subtitle: "The Hidden Observatory of Security & Intelligence",
    intro: "Beneath the celestial canopy of the kingdom, the observatory gazes into the digital ether. Here, curiosity transforms into rigorous inquiry — examining how security, cryptography, and artificial intelligence converge to defend human systems.",
    
    completedResearch: {
      title: "Regional Cybercrime Trend Analysis: Dakshina Kannada & Udupi",
      status: "Completed 60-Day Research Internship",
      institution: "NMAM Institute of Technology, Nitte",
      investigationScope: "Dakshina Kannada and Udupi Coastal Districts",
      summary: "An empirical investigation conducted over 60 days examining real incident patterns in digital fraud, social engineering vectors, and financial phishing across coastal Karnataka communities.",
      methodologyPoints: [
        "Systematic classification of reported fraud incidents by attack medium and vector",
        "Analysis of demographic vulnerability patterns across urban and rural demographics",
        "Identification of primary psychological triggers utilized in regional social engineering",
        "Synthesis of community-oriented defensive guidelines and preventative measures"
      ],
      keyTakeaway: "Security defenses are only as strong as human awareness. Technical safeguards must be coupled with accessible, localized education to effectively neutralize social engineering."
    },

    researchInterests: [
      {
        title: "Applied Cryptography & Zero-Knowledge",
        icon: "key",
        color: "#FFD166",
        description: "Exploring mathematical ciphers, hashing integrity, public key infrastructure, and emerging privacy-preserving primitives."
      },
      {
        title: "AI-Driven Threat Intelligence",
        icon: "cpu",
        color: "#DCC8FF",
        description: "Applying machine learning heuristics to anomaly detection, real-time phishing categorization, and adversarial pattern recognition."
      },
      {
        title: "Network Perimeter Defense & Forensics",
        icon: "shield",
        color: "#A9DCFF",
        description: "Deep packet inspection, enterprise subnet isolation, automated intrusion detection, and forensic packet reconstruction."
      },
      {
        title: "Secure System Design & Cloud Defense",
        icon: "lock",
        color: "#4ADE80",
        description: "Zero-trust architectures, API endpoint hardening, role-based access governance, and cloud workload protection."
      }
    ],

    futureSlots: [
      {
        label: "Future Research Slot I",
        tag: "In Progress / Conceptual",
        title: "Automated Regional Language Phishing Detection using Multilingual NLP",
        note: "Extending localized cybercrime research toward automated classification of vernacular phishing SMS and messages."
      },
      {
        label: "Future Research Slot II",
        tag: "Upcoming Paper Slot",
        title: "Heuristic Anomaly Detection in Cloud-Native API Microservices",
        note: "Exploring lightweight behavioral models for real-time unauthorized access flagging in distributed environments."
      }
    ]
  },

  certifications: [
    {
      id: "cloudthat-microsoft-cert",
      program: "Cloud and AI Security Engineer Associate Program",
      conductedBy: "CloudThat, in collaboration with Microsoft and NMAM Institute of Technology",
      collaborators: ["CloudThat", "Microsoft", "NMAM Institute of Technology"],
      completionDate: "September 26, 2026",
      officialStatement: "Implement end-to-end security controls for cloud and AI workloads.",
      verifiedRecipient: "Manya K N",
      status: "Verified Credential",
      accent: "#FFD166",
      competencies: [
        "Cloud Security Architecture",
        "AI Workload Hardening",
        "Identity & Access Governance",
        "Data Protection & Encryption Controls",
        "Threat Detection & Incident Response",
        "Compliance & Cloud Posture Management"
      ],
      description: "Comprehensive engineering program focused on implementing end-to-end defense mechanisms, access boundaries, and continuous monitoring across enterprise cloud platforms and artificial intelligence model endpoints."
    }
  ],

  achievements: {
    academics: [
      {
        title: "Senior Secondary (PUC)",
        score: "97%",
        benchmark: "Academic Foundation",
        icon: "crown",
        accent: "#FFD166",
        description: "Pre-University Certificate Examination demonstrating exceptional mastery in science and mathematics."
      },
      {
        title: "Secondary School (SSLC)",
        score: "99.52%",
        benchmark: "Academic Distinction",
        icon: "sparkles",
        accent: "#DCC8FF",
        description: "Secondary School Leaving Certificate Examination with near-perfect scholastic standing."
      },
      {
        title: "B.E. Engineering CGPA",
        score: "8.7 / 10",
        benchmark: "Current Academic Standing",
        icon: "award",
        accent: "#A9DCFF",
        description: "Third-year Computer Science & Engineering (Cyber Security) at NMAM Institute of Technology, Nitte."
      }
    ],

    campusActivities: [
      {
        organization: "Rachana Art Club",
        role: "Core Committee Member",
        institution: "NMAM Institute of Technology",
        tag: "Creative Leadership",
        accent: "#F472B6",
        icon: "palette",
        description: "Guiding creative initiatives, stage curation, visual design, and campus artistic workshops that celebrate traditional and digital art."
      },
      {
        organization: "Youth Red Cross",
        role: "Active Member",
        institution: "NMAM Institute of Technology",
        tag: "Humanitarian Service",
        accent: "#FB7185",
        icon: "heart",
        description: "Contributing to community health drives, voluntary blood donation awareness, and civic relief initiatives."
      },
      {
        organization: "HackerEarth Club",
        role: "Active Member",
        institution: "NMAM Institute of Technology",
        tag: "Technical & Competitive",
        accent: "#38BDF8",
        icon: "terminal",
        description: "Engaging in algorithmic challenges, collaborative problem-solving sprints, and peer coding workshops."
      },
      {
        organization: "Finiteloop Club",
        role: "Active Member",
        institution: "NMAM Institute of Technology",
        tag: "Engineering & Innovation",
        accent: "#A78BFA",
        icon: "cpu",
        description: "Participating in software development hackathons, technical speaker sessions, and hands-on developer projects."
      }
    ]
  }
};

export const coursesData = {
  cisco: [
    {
      id: 1,
      name: "CCNA (Cisco Certified Network Associate)",
      duration: "4 Months",
      level: "Professional",
      description: "Foundation level networking certification covering routing, switching, and network fundamentals",
      icon: "🌐",
      topics: ["Network Fundamentals", "IP Connectivity", "IP Services", "Security Fundamentals", "Automation"]
    },
    {
      id: 2,
      name: "CCNP Enterprise (Routing & Switching)",
      duration: "6 Months",
      level: "Advanced Professional",
      description: "Advanced enterprise networking solutions with routing and switching expertise",
      icon: "🔄",
      topics: ["Advanced Routing", "Enterprise Networks", "VPN", "Network Security", "Troubleshooting"]
    },
    {
      id: 3,
      name: "CCNP Security",
      duration: "5 Months",
      level: "Advanced Professional",
      description: "Specialized security certification for network security professionals",
      icon: "🔒",
      topics: ["Firewall", "IPS/IDS", "VPN Security", "Secure Access", "Threat Defense"]
    },
    {
      id: 4,
      name: "CCIE (Expert Level)",
      duration: "12 Months",
      level: "Expert",
      description: "Highest level Cisco certification for network experts",
      icon: "⭐",
      topics: ["Advanced Routing", "Complex Networks", "Network Design", "Optimization", "Expert Troubleshooting"]
    }
  ],
  microsoft: [
    {
      id: 5,
      name: "MCSA (Microsoft Certified Solutions Associate)",
      duration: "3 Months",
      level: "Professional",
      description: "Windows Server administration and infrastructure management",
      icon: "🪟",
      topics: ["Windows Server", "Active Directory", "DNS/DHCP", "Group Policy", "Server Management"]
    },
    {
      id: 6,
      name: "MCSE (Server Infrastructure)",
      duration: "5 Months",
      level: "Advanced Professional",
      description: "Advanced server infrastructure design and implementation",
      icon: "🖥️",
      topics: ["Server Design", "Virtualization", "Cloud Integration", "Advanced Networking", "Security"]
    },
    {
      id: 7,
      name: "Microsoft Azure Administrator",
      duration: "3 Months",
      level: "Professional",
      description: "Cloud infrastructure management with Microsoft Azure",
      icon: "☁️",
      topics: ["Azure Services", "Virtual Machines", "Storage", "Networking", "Security"]
    },
    {
      id: 8,
      name: "Exchange Server Administration",
      duration: "2 Months",
      level: "Intermediate",
      description: "Email server configuration and management",
      icon: "📧",
      topics: ["Exchange Setup", "Mailbox Management", "Email Security", "Backup", "Troubleshooting"]
    }
  ],
  redhat: [
    {
      id: 9,
      name: "RHCSA (Red Hat Certified System Administrator)",
      duration: "3 Months",
      level: "Professional",
      description: "Linux system administration fundamentals",
      icon: "🐧",
      topics: ["Linux Basics", "File Systems", "User Management", "Services", "Networking"]
    },
    {
      id: 10,
      name: "RHCE (Red Hat Certified Engineer)",
      duration: "4 Months",
      level: "Advanced Professional",
      description: "Advanced Linux administration and automation",
      icon: "🎩",
      topics: ["Automation", "Shell Scripting", "Advanced Networking", "Security", "Server Management"]
    },
    {
      id: 11,
      name: "Linux Server Administration",
      duration: "2.5 Months",
      level: "Intermediate",
      description: "Complete Linux server setup and management",
      icon: "🖧",
      topics: ["Server Setup", "Network Services", "Security", "Monitoring", "Backup"]
    }
  ],
  networking: [
    {
      id: 12,
      name: "Core Networking Fundamentals",
      duration: "2 Months",
      level: "Beginner",
      description: "Basic networking concepts and protocols",
      icon: "📡",
      topics: ["OSI Model", "TCP/IP", "Subnetting", "LAN/WAN", "Network Devices"]
    },
    {
      id: 13,
      name: "Network Security & Firewall",
      duration: "3 Months",
      level: "Advanced",
      description: "Network security implementation and firewall configuration",
      icon: "🛡️",
      topics: ["Security Concepts", "Firewall Setup", "VPN", "IDS/IPS", "Security Policies"]
    },
    {
      id: 14,
      name: "Wireless Network Technology",
      duration: "2 Months",
      level: "Intermediate",
      description: "WiFi and wireless network implementation",
      icon: "📶",
      topics: ["WiFi Standards", "Access Points", "Security", "Site Survey", "Troubleshooting"]
    },
    {
      id: 15,
      name: "VOIP Solutions",
      duration: "2.5 Months",
      level: "Advanced",
      description: "Voice over IP implementation and management",
      icon: "☎️",
      topics: ["VOIP Basics", "SIP Protocol", "PBX Setup", "Quality of Service", "Troubleshooting"]
    }
  ],
  hardware: [
    {
      id: 16,
      name: "Computer Hardware & Maintenance",
      duration: "2 Months",
      level: "Beginner",
      description: "PC assembly, troubleshooting and maintenance",
      icon: "🔧",
      topics: ["PC Components", "Assembly", "BIOS", "Troubleshooting", "Maintenance"]
    },
    {
      id: 17,
      name: "Server Hardware & Configuration",
      duration: "3 Months",
      level: "Professional",
      description: "Enterprise server hardware setup and management",
      icon: "💾",
      topics: ["Server Components", "RAID", "Storage", "Backup Systems", "Hot Swap"]
    },
    {
      id: 18,
      name: "Laptop Chip Level Repairing",
      duration: "3 Months",
      level: "Advanced",
      description: "Advanced laptop hardware repair at component level",
      icon: "💻",
      topics: ["Motherboard Repair", "Chip Level", "BGA Reballing", "Diagnostics", "Component Testing"]
    }
  ]
};

// Placed Students Data
export const placedStudents = [
  {
    id: 1,
    name: "Rahul Kumar",
    role: "Network Engineer",
    company: "TCS",
    package: "4.5 LPA",
    image: "https://plus.unsplash.com/premium_photo-1682089892133-556bde898f2c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "System Administrator",
    company: "Infosys",
    package: "5.2 LPA",
    image: "https://img.freepik.com/free-photo/closeup-smiling-young-beautiful-indian-woman_1262-2261.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    id: 3,
    name: "Amit Singh",
    role: "CCNA Certified Engineer",
    company: "Wipro",
    package: "4.8 LPA",
    image: "https://plus.unsplash.com/premium_photo-1682089869602-2ec199cc501a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    name: "Sneha Gupta",
    role: "Network Security Analyst",
    company: "HCL Technologies",
    package: "6.0 LPA",
    image: "https://img.freepik.com/premium-photo/indian-girl-cheerful-studio-portrait_53876-55599.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    id: 5,
    name: "Vikram Verma",
    role: "Linux Administrator",
    company: "Tech Mahindra",
    package: "5.5 LPA",
    image: "https://plus.unsplash.com/premium_photo-1691030254390-aa56b22e6a45?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    name: "Anjali Reddy",
    role: "Cloud Network Engineer",
    company: "Accenture",
    package: "7.0 LPA",
    image: "https://img.freepik.com/premium-photo/portrait-young-adult-indian-woman-sari_183314-7350.jpg?semt=ais_hybrid&w=740&q=80"
  }
];

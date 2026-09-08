/**
 * Projects data array - contains information for all portfolio projects
 * Each project includes: id, featured status, title, description, role, technologies, results, and images
 * This data is used to populate project listings and case study pages
 */
const projects = [
  {
    // Unique identifier for URL routing
    id: "cvnl",
    // Whether project appears in featured projects section on home page
    featured: true,
    // Project title displayed in listings
    title: "CVNL Member Portal",
    // Brief description for project cards
    description: "Built and maintained a member portal supporting 200+ members.",

    // Longer overview text for case study
    overview:
      "Built and maintained a member portal serving over 200 organizational members.",

    // Role/responsibilities in the project
    role:
      "Front-End Development, WordPress implementation, UX improvements, maintenance.",

    // Technologies used in this project
    technologies: [
      "WordPress",
      "Elementor",
      "JavaScript",
      "CSS"
    ],

    // Project outcomes/results
    results:
      "Improved access to member resources and communications.",

    // Project image path
    image: "/images/projects/cvnl.jpg",

    // Live project URL (if available)
    liveUrl: "https://example.com"
  },

  {
    // Impact By Insight project
    id: "impact",
    featured: true,
    title: "Impact By Insight",
    description: "Rebuilt WordPress frontend using Elementor.",

    overview:
      "Redesigned and rebuilt the front-end experience.",

    role: "Front-End Developer",

    technologies: [
      "WordPress",
      "Elementor",
      "CSS"
    ],

    results:
      "Improved usability and responsiveness.",

    image: "/images/projects/impact-1.jpg",

    // Additional case study photos
    images: [
      "/images/projects/impact-1.jpg",
      "/images/projects/impact-2.jpg",
      "/images/projects/impact-3.jpg"
    ],

    // Live project URL
    liveUrl: "https://impactbyinsight.com"
  },

  {
    // Prosper project - React-based UI project
    id: "prosper",
    featured: false,
    title: "Prosper",
    description: "Front-end web project focused on UI development and layout systems.",

    overview:
      "Web project focused on building structured UI components and page layouts.",

    role: "Front-End Development",

    technologies: [
      "React",
      "CSS",
      "JavaScript"
    ],

    results:
      "Strengthened component-based UI and layout consistency.",

    image: "/images/projects/prosper.jpg"
  },

  {
    // PineTree Financial Partners - WordPress redesign
    id: "pinetree",
    featured: false,
    title: "PineTree Financial Partners",
    description: "Redesigned a WordPress site for a Colorado hard money lender.",

    overview:
      "Redesigned the entire PineTree Financial Partners site using a customized Envato template.",

    role: "Redesigned the entire site using a customized Envato template.",

    technologies: [
      "WordPress",
      "Elementor",
      "CSS"
    ],

    results:
      "Delivered a fully redesigned site for the client.",

    image: "/images/projects/pinetree-1.jpg",

    // Additional case study photos
    images: [
      "/images/projects/pinetree-1.jpg",
      "/images/projects/pinetree-2.jpg",
      "/images/projects/pinetree-3.jpg",
      "/images/projects/pinetree-4.jpg"
    ],

    // Live project URL (site has since changed from the version built here)
    liveUrl: "https://www.pinetreefinancialpartners.com"
  },

  {
    // Crane project - React layout and interface project
    id: "crane",
    featured: false,
    title: "Crane",
    description: "Front-end project focused on layout and interface development.",

    overview:
      "Developed a structured UI layout system within a React-based project.",

    role: "Front-End Development",

    technologies: [
      "React",
      "CSS",
      "JavaScript"
    ],

    results:
      "Improved interface consistency and layout design.",

    image: "/images/projects/crane.jpg"
  },

  {
    // Konfluence.org redesign - WordPress project
    id: "konfluence",
    featured: false,
    title: "Konfluence.org Redesign",
    description: "WordPress website redesign and restructuring.",

    overview:
      "Redesigned and reorganized an existing WordPress website for improved usability.",

    role: "WordPress Developer",

    technologies: [
      "WordPress",
      "Elementor",
      "CSS"
    ],

    results:
      "Improved site structure and overall user experience.",

    image: "/images/projects/konfluence.jpg"
  },

  {
    // Millard West Baseball - WordPress redesign for a high school team site
    id: "millard-west-baseball",
    featured: false,
    title: "Millard West Baseball",
    description: "Redesigned a WordPress site for a high school baseball program.",

    overview:
      "Redesigned the Millard West Wildcats Baseball team site, rebuilding it in Elementor from a customized Envato template.",

    role:
      "Redesigned the site in Elementor using a customized Envato template. Added a parent volunteer sign-up and an events calendar to list games.",

    technologies: [
      "WordPress",
      "Elementor",
      "CSS"
    ],

    results:
      "Gave parents a clear way to sign up to volunteer and see the game schedule in one place.",

    image: "/images/projects/millard-west-baseball-1.jpg",

    // Additional case study photos
    images: [
      "/images/projects/millard-west-baseball-1.jpg",
      "/images/projects/millard-west-baseball-2.jpg",
      "/images/projects/millard-west-baseball-3.jpg",
      "/images/projects/millard-west-baseball-4.jpg"
    ],

    // Live project URL
    liveUrl: "https://mwcatsbaseball.org"
  },

  {
    // Personal Portfolio project - React with Vercel deployment
    id: "portfolio",
    featured: true,
    title: "Personal Portfolio",
    description: "React-based developer portfolio deployed on Vercel.",

    overview:
      "Personal portfolio built to showcase frontend development work and React experience.",

    role: "Full Front-End Development",

    technologies: [
      "React",
      "Vercel",
      "JavaScript",
      "CSS"
    ],

    results:
      "Created a live portfolio for job applications and project showcasing.",

    image: "/images/projects/portfolio.jpg",

    // Live portfolio URL
    liveUrl: "https://catalina-portfolio-rust.vercel.app/"
  }
];

// Export projects array for use throughout the application
export default projects;

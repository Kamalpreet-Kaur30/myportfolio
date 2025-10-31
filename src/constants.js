// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import dockerLogo from  './assets/tech_logo/docker.png';
import kubernetesLogo from  './assets/tech_logo/kubernetes.png';

// Education Section Logo's
import osmaniaLogo from './assets/education_logo/osmania.jpg';
import srigayatriLogo from './assets/education_logo/srigayatri.png';
import vidyabodhiniLogo from './assets/education_logo/vidyabodhini.png';

// Project Section Logo's
import sensaiLogo from './assets/work_logo/sensai.png';
import dentraLogo from './assets/work_logo/dentra.png';
import resulyzeLogo from './assets/work_logo/resulyze.png';
import frontendLogo from './assets/work_logo/frontend.png'

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },,
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Docker',logo:dockerLogo },
      { name: 'kubernetes',logo:kubernetesLogo },
    ],
  },
];
    export const education = [
    {
      id: 1,
      img: osmaniaLogo,
      school: "Osmania University, Hyderabad",
      date: "Oct 2022 - Aug 2025",
      grade: "8.45",
      desc: "completed my Bachelor's degree in Computer Science (B.Sc.) from Osmania University, Hyderabad. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Osmania University allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Science - BSC (Computer Science)",
    },
    {
      id: 2,
      img: srigayatriLogo,
      school: "Sri Gayatri Junior College, Hyderabad",
      date: "june 2020 - may 2022",
      grade: "79%",
      desc: "Completed my Intermediate education (MPC) from Sri Gayatri Junior College, Hyderabad under the Telangana State Board, focusing on Mathematics, Physics, and Chemistry.",
      degree: "Intermediate (MPC) - Telangana State Board",

    },
    {
      id: 3,
      img: vidyabodhiniLogo,
      school: "Vidya Bodhini High School, Hyderabad",
      date: "Apr 2019 - March 2020",
      grade: "10.0",
      desc: "Completed my Secondary School Certificate (SSC) under the Telangana State Board at Vidya Bodhini High School, Hyderabad, with a focus on Science and Computer Applications.",
      degree: "SSC (State Board), Science with Computer Applications",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "SensAI — AI-Powered Career Coach",
      description:
        "SensAI is an AI-driven career coaching platform that helps students and professionals make smarter career decisions. By analyzing a user's role and profile, it delivers weekly industry insights on in-demand skills, salary trends, and growth opportunities. The platform also enables users to generate ATS-friendly resumes, craft personalized cover letters, practice role-specific mock interviews, and track their progress — all in one place. Built with Next.js, Tailwind CSS, ShadCN UI, and Gemini AI, SensAI simplifies career growth through intelligent guidance and automation.",
      image: sensaiLogo,
      tags: ["Next.js", "Tailwind CSS", "ShadCN UI", "Clerk" ,"Inngest", "PostgreSQL", "Prisma", "Gemini AI"],
      github: "https://github.com/Kamalpreet-Kaur30/sensai",
      webapp: "https://sensai-three-delta.vercel.app/",
    },
    {
      id: 1,
      title: "Resulyze — AI Resume Analyzer",
      description:
       "Resulyze is an AI-powered resume analysis platform designed to help users improve their job application success. It evaluates resumes against specific job descriptions to calculate an accurate ATS (Applicant Tracking System) score, highlight weak areas, and provide actionable improvement suggestions. Users can upload their resume and target role to instantly receive insights on format, keywords, and content alignment. Built using React Router v7, Tailwind CSS, Typescript and Puter for backend, authentication, and AI integration, Resulyze empowers candidates to create recruiter-ready resumes that stand out.",
      image: resulyzeLogo,
      tags: ["React Router v7", "Tailwind CSS","Typescript", "Puter", "AI Integration"],
      github: "https://github.com/Kamalpreet-Kaur30/ResuLyze",
      webapp: "https://resu-lyze.vercel.app/",
    },
    {
      id: 2,
      title: "Dentra — AI Dental Voice Assistant",
      description:
        "Dentra is an AI-powered dental assistant that provides 24/7 voice-based consultations for dental concerns. Users can converse naturally with the assistant to get instant guidance and insights on oral health issues, offering a real-time experience similar to consulting a dentist. The platform also includes secure authentication, appointment booking, and subscription management features, allowing users to select doctors, schedule visits, and handle payments seamlessly. Built with Next.js, TypeScript, Tailwind CSS, PostgreSQL, Prisma, VAPI, and Clerk, Dentra bridges the gap between AI and healthcare through intelligent, voice-driven support.",
      image: dentraLogo,
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "VAPI", "Clerk", "AI Integration"],
      github: "https://github.com/Kamalpreet-Kaur30/Dentra",
      webapp: "https://dentra-s1wuz.sevalla.app/",
    },
    {
      id: 3,
      title: "JobMate AI",
      description:
        "A modern and responsive front-end web application built with React.js and Styled Components, featuring smooth animations powered by Framer Motion. The project focuses on an engaging user experience with interactive UI elements like login/signup forms, subscription plans, and animated scroll sections. JobMate AI serves as a sleek, portfolio-ready UI concept for future AI-powered career tools.",
      image: frontendLogo,
      tags: ["React JS", "Styled Components", "Framer Motion", "React Router", "UI/UX"],
      github: "https://github.com/Kamalpreet-Kaur30/JobMate-AI-Frontend",
      webapp: "https://job-mate-ai-frontend.vercel.app/",
    },
  ];  
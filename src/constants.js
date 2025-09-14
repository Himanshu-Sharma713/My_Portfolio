// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import javaLogo from "./assets/tech_logo/java.png";
import sqlLogo from "./assets/tech_logo/sql.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience Section Logo's
import cetpaLogo from "./assets/company_logo/cetpa_logo.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/rmlau.jpeg";
import bsaLogo from "./assets/education_logo/KIC.jpeg";
import vpsLogo from "./assets/education_logo/highSchool.png";

// Project Section Logo's
//======================...........
// import githubdetLogo from "./assets/work_logo/github_det.png";
// import csprepLogo from "./assets/work_logo/cs_prep.png";
// import movierecLogo from "./assets/work_logo/movie_rec.png";
import pokemonFinderLogo from "./assets/work_logo/pokemonFinderLogo.png";
import githubAnalyzerLogo from "./assets/work_logo/githubAnalyzerLogo.png";
import countryDataLogo from "./assets/work_logo/countryDataLogo.jpg";
import passwordGenLogo from "./assets/work_logo/passwordGenLogo.png";
import todoAppLogo from "./assets/work_logo/todoAppLogo.png";
import snakeManiaLogo from "./assets/work_logo/snakeManiaLogo.png";

export const SkillsInfo = [
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "SQL", logo: sqlLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: cetpaLogo,
    role: "Java Full Stack Developer Intern",
    company: "CETPA Infotech Pvt. Ltd.",
    date: "June 2025 – Present",
    desc: "Worked as a Java Full Stack Developer Intern, gaining hands-on experience in both frontend and backend development. Built scalable web applications using Java (SE, EE), Spring Boot, Servlets, JDBC, and RESTful APIs. Contributed to front-end modules using React.js, Redux, and Tailwind CSS, while integrating MySQL with Hibernate ORM for efficient data management. Collaborated in Agile sprints, implemented debugging practices, and improved application performance with optimized SQL queries.",
    skills: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "JPA",
      "JDBC",
      "Servlets",
      "JSP",
      "REST APIs",
      "MySQL",
      "MongoDB",
      "React.js",
      "Redux",
      "Tailwind CSS",
      "TypeScript",
      "Next.js",
      "Git & GitHub",
      "Postman",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "Dr. Rammanohar Lohia Avadh University, Ayodhya, Uttar Pradesh",
    date: "July 2021 - July 2025",
    grade: "7.02 CGPA",
    desc: "I have completed my Bachelor of Technology (B.Tech) in Computer Science & Engineering from Dr. Rammanohar Lohia Avadh University, Ayodhya. During my time at the university, I developed a strong foundation in programming, software development, and computer science concepts. I studied core subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I also worked on various academic projects and actively participated in technical workshops, which enhanced my practical skills and problem-solving abilities. My experience at the university has been instrumental in shaping my technical expertise and professional growth.",
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "Kirshak Inter College, Mawana",
    date: "Apr 2020 - March 2021",
    grade: "74%",
    desc: "I have completed my Class 12 education from Krishak Inter College, Mawana, under the UP Board, with a focus on Physics, Chemistry, and Mathematics (PCM). This academic background provided me with a strong analytical foundation and enhanced my interest in technology and problem-solving.",
    degree: "UP Board(XII) - PCM",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "Shri Atmanand Jain Inter College, Hastinapur",
    date: "Apr 2018 - March 2019",
    grade: "72.5%",
    desc: "I completed my class 10 education from Shri Atmanand Jain Inter College, Hastinapur, under the UP board, where I studied Science with Commerce.",
    degree: "UP Board(X), Science with Commerce",
  },
];

export const projects = [
  {
    id: 3,
    title: "GitHub Profile Analyzer Live",
    description:
      "An interactive GitHub Profile Analyzer built with React and TypeScript that visualizes repositories, commits, and contribution history using charts and dashboards. Optimized with caching and request workflow improvements to reduce latency for large commit histories, and styled with responsive Tailwind CSS for accessibility across devices.",
    image: githubAnalyzerLogo,
    tags: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "Data Visualization",
    ],
    github: "https://github.com/Himanshu-Sharma713/Github-Profile-Analyzer",
    webapp: "https://git-commit-analyzer.vercel.app/",
  },
  {
    id: 4,
    title: "Pokémon Finder App",
    description:
      "A fun and interactive Pokémon website built with React.js, featuring a live search function to find your favorite Pokémon. The app fetches data from the Pokémon API, handles loading and error states gracefully, and includes a fully responsive design. A perfect project to sharpen React skills with real-world API integration.",
    image: pokemonFinderLogo,
    tags: [
      "React.js",
      "Pokémon API",
      "JavaScript",
      "Responsive Design",
      "API Integration",
    ],
    github: "https://github.com/Himanshu-Sharma713/Pokedex",
    webapp: "https://pokedex-beta.vercel.app/",
  },

  {
    id: 5,
    title: "World’s Country Data Live",
    description:
      "A real-time country data app built with React.js, Axios, and REST API integration. Features dynamic routing, live search, and filters with React Router and custom hooks — all wrapped in a responsive Tailwind CSS design.",
    image: countryDataLogo,
    tags: ["React.js", "Axios", "React Router", "Tailwind CSS", "REST API"],
    github: "https://github.com/Himanshu-Sharma713/Country-List",
    webapp: "https://67eb93f202afc792067816be--calm-sundae-e843cd.netlify.app/",
  },

  {
    id: 6,
    title: "Random Password Generator",
    description:
      "A customizable password generator built with HTML, CSS, and JavaScript. Users can generate strong, secure passwords with adjustable length and options to include uppercase, lowercase, numbers, and symbols — perfect for boosting online security.",
    image: passwordGenLogo,
    tags: ["HTML", "CSS", "JavaScript", "Security", "DOM Manipulation"],
    github: "https://lnkd.in/g4XcPArU",
    webapp: "https://lnkd.in/gJ-fgD2V",
  },

  {
    id: 7,
    title: "To-Do List App",
    description:
      "A simple and practical To-Do List application built with HTML, CSS, and JavaScript. Allows users to quickly add, mark, and remove tasks, making daily task management seamless and organized.",
    image: todoAppLogo,
    tags: ["HTML", "CSS", "JavaScript", "DOM Manipulation", "Productivity"],
    github: "https://lnkd.in/gng5FZFA",
    webapp: "https://lnkd.in/ginGQ8dC",
  },

  {
    id: 8,
    title: "SnakeMania: Ek Gaming Katha",
    description:
      "A nostalgic Snake Game clone built with HTML, CSS, and JavaScript. Features smooth real-time controls, food spawning, collision detection, and score tracking with localStorage — bringing back the classic mobile snake experience.",
    image: snakeManiaLogo,
    tags: ["HTML", "CSS", "JavaScript", "Game Development", "DOM Manipulation"],
    github: "https://lnkd.in/gD__Brkx",
    webapp: "https://lnkd.in/gRZ2Z8Bq",
  },
];

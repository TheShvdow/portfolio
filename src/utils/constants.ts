export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/TheShvdow',
  LINKEDIN: 'https://www.linkedin.com/in/idrissa-wade/',
  EMAIL: 'mailto:derisswvde@gmail.com'
};

export const CV_URL = 'https://www.canva.com/design/DAGR1xZuM2Y/I-QLvn5ZD7u9bw05cWTeUA/view?utm_content=DAGR1xZuM2Y&utm_campaign=designshare&utm_medium=link&utm_source=editor';

export const SKILLS = {
  BACKEND: {
    title: 'Backend',
    skills: ['PHP', 'Laravel', 'Node.js', 'Express.js'],
    color: 'from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700'
  },
  FRONTEND: {
    title: 'Frontend',
    skills: ['React', 'Angular', 'TypeScript', 'Tailwind CSS'],
    color: 'from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700'
  },
  MOBILE: {
    title: 'Mobile',
    skills: ['Flutter', 'Dart', 'Mobile UI/UX'],
    color: 'from-green-500 to-green-600 dark:from-green-600 dark:to-green-700'
  },
  DATABASE: {
    title: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'Firebase', 'Neon', 'Mongo DB','Prsma','Zod'],
    color: 'from-yellow-500 to-yellow-600 dark:from-yellow-600 dark:to-yellow-700'
  },
  DEVOPS: {
    title: 'DevOps',
    skills: ['Docker', 'Git', 'CI/CD', 'Cloud Deployment'],
    color: 'from-red-500 to-red-600 dark:from-red-600 dark:to-red-700'
  }
};

export const PROJECTS = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with Laravel backend and React frontend",
    tech: ["Laravel", "React", "PostgreSQL", "Docker"],
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/TheShvdow/miroir-model",
    demo: "https://e-commerce-demo.com"
  },
  {
    title: "Mobile Banking App",
    description: "Cross-platform mobile application built with Flutter",
    tech: ["Flutter", "Node.js", "Firebase", "REST API"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/TheShvdow/banking-app",
    demo: "https://banking-app-demo.com"
  },
  {
    title: "Task Management System",
    description: "Enterprise task management solution with real-time updates",
    tech: ["Angular", "Express.js", "MongoDB", "WebSocket"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/TheShvdow/task-manager",
    demo: "https://task-manager-demo.com"
  }
];
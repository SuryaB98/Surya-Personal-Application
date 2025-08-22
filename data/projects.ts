export type Project = {
  id: string;
  title: string;
  oneLiner: string;
  myRole: string;
  problem: string;
  techStack: string[];
  productSolution: string; // markdown allowed
  outcomes: string;
  liveDemoUrl: string;
  githubUrl: string;
  imageUrl: string;
};

export const projects: Project[] = [
  {
    id: "my-awesome-app",
    title: "My Awesome App",
    oneLiner: "A productivity app that helps users manage tasks efficiently.",
    myRole: "Lead Developer & Product Manager",
    problem: "Users struggle to keep track of daily tasks and deadlines across multiple platforms.",
    techStack: ["React", "Next.js", "TypeScript", "Azure", "Node.js"],
    productSolution:
      "Built a unified dashboard with real-time sync, notifications, and integrations with popular calendar services. Designed the architecture for scalability and implemented CI/CD pipelines for rapid deployment.",
    outcomes: "10,000+ active users, 4.8/5 average rating, reduced task management time by 30%.",
    liveDemoUrl: "https://myawesomeapp.com",
    githubUrl: "https://github.com/username/my-awesome-app",
    imageUrl: "/images/my-awesome-app-preview.png",
  },
  // Add more projects here
];

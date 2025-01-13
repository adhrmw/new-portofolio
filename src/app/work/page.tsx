import WorkSection from "@/components/WorkSection";

const projects = [
  {
    code: "ABC",
    title: "Town Watch",
    company: "PT ABC",
    role: "This is Role",
    team: "1",
    tools: "this goes for tools",
    status: "enum",
    description: "A personal portfolio showcasing skills and projects.",
    link: "https://drive.google.com/file/d/1lv-JUDZRzItwRHsrh5J7ghmQ-kfllpn9/view",
  },
  {
    title: "E-commerce Backend",
    description: "Developed a scalable backend for an online store.",
    link: "#",
  },
  {
    title: "Project 1",
    description: "Redesigned the user interface for a mobile app.",
    link: "#",
  },
  {
    title: "Task Manager App",
    description: "A web application for managing tasks and to-dos.",
    link: "#",
  },
  {
    title: "Chat Application",
    description: "Built a real-time messaging app with WebSocket integration.",
    link: "#",
  },
  {
    title: "Weather Dashboard",
    description: "A dashboard displaying real-time weather data using an API.",
    link: "#",
  },
  {
    title: "Blog Platform",
    description: "Developed a platform for creating and managing blogs.",
    link: "#",
  },
];

export default function Work() {
  return <WorkSection projects={projects} />;
}


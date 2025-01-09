import WorkSection from "@/components/WorkSection";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing skills and projects.",
    link: "https://your-portfolio-link.com",
  },
  {
    title: "E-commerce Backend",
    description: "Developed a scalable backend for an online store.",
    link: "https://ecommerce-backend-link.com",
  },
  {
    title: "Project 1",
    description: "Redesigned the user interface for a mobile app.",
    link: "https://uiux-redesign-link.com",
  },
];

export default function Work() {
  return <WorkSection projects={projects} />;
}

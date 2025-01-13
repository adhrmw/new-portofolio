import AboutDetails from "@/components/AboutDetails";

const education = [
  {
    degree: "Bachelor of Computer Science",
    university: "Brawijaya University",
    duration: "2019 - 2023",
    description: "Focused on Software Development, Algorithms, and Data Structures.",
  },
];

const certifications = [
  {
    certification: "Certified Scrum Master",
    institution: "Scrum Alliance",
    year: "2023",
  },
];

const experiences = [
  {
    title: "Project Manager",
    company: "PT Viscus Media Dharma",
    duration: "2024 - Present",
    description:
      "Leading cross-functional teams to deliver software projects using Agile methodologies, ensuring alignment with business objectives and customer satisfaction.",
  },
  {
    title: "System Analyst",
    company: "PT Javan Cipta Solusi",
    duration: "2020 - 2022",
    description:
      "Collaborated with clients to gather and analyze requirements, translating them into technical specifications and system designs for development teams.",
  },
  {
    title: "System Analyst Intern",
    company: "PT Disty Teknologi Indonesia",
    duration: "2020 - 2022",
    description:
      "Collaborated with clients to gather and analyze requirements, translating them into technical specifications and system designs for development teams.",
  },
];

export default function AboutPage() {
  return <AboutDetails education={education} certifications={certifications} experiences={experiences} />;
}

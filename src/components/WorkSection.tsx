interface Project {
    title: string;
    description: string;
    link: string;
  }
  
  const WorkSection: React.FC<{ projects: Project[] }> = ({ projects }) => {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold text-green-500 mb-6">My Work</h1>
        <p className="text-lg mb-8 text-gray-400">
          Here are some of the projects and jobs I’ve worked on.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-dashed border-2 border-green-500 p-4 shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 mt-4 inline-block"
              >
                show-more
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default WorkSection;
  
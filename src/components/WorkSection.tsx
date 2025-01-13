interface Project {
    title: string;
    description: string;
    link: string;
  }
  
  const WorkSection: React.FC<{ projects: Project[] }> = ({ projects }) => {
    return (
      <section className="min-h-screen my-center flex flex-col items-center justify-center px-4 my-20">
        <div className="p-2 sm:p-4 max-w-3xl w-full">
          <h2 className="text-center text-green-500 text-xl sm:text-2xl md:text-3xl">
          My Work
          </h2>
        </div>
        <div className="p-2 sm:p-4 max-w-3xl w-full">
          <p className="text-center text-gray-400 text-xs sm:text-sm md:text-lg">
          Here are some of the projects and jobs I’ve worked on.
          </p>
        </div>
        <div className="p-2 sm:p-4 max-w-3xl w-full">
          {projects.map((project, index) => (
            <div key={index} className="p-2 border-2 border-dashed border-green-500 my-4">
              <h4 className="text-base sm:text-lg md:text-xl text-white">{project.title}</h4>
              <p className="text-sm text-gray-500">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 text-xs sm:text-sm md:text-lg inline-block"
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
  
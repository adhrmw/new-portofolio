import Link from "next/link";

interface Education {
  degree: string;
  university: string;
  duration: string;
  description: string;
}

interface Certification {
  certification: string;
  institution: string;
  year: string;
}

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

interface AboutDetailsProps {
  education: Education[];
  certifications: Certification[];
  experiences: Experience[];
}

const AboutDetails: React.FC<AboutDetailsProps> = ({
  education,
  certifications,
  experiences,
}) => {
  return (
    // <section className="min-h-screen flex flex-col items-center justify-center px-4">
    //   <div className="p-4 sm:p-6 max-w-3xl w-full my-20">
    //     <h1 className="text-4xl sm:text-5xl font-bold text-green-500 text-center mb-4">
    //       More About Me
    //     </h1>
    //     <p className="text-gray-400 text-center text-xs sm:text-sm md:text-lg mb-6">
    //       Discover more about my education, professional experiences, and certifications below.
    //     </p>
    //     <Link href="./">cd ..</Link>

    //     {/* Education Section */}
    //     <div className="mb-8">
    //       <h2 className="border-2 border-dashed border-green-500 text-green-500 p-2 text-center text-lg sm:text-xl md:text-2xl font-bold mb-4">
    //         Education
    //       </h2>
          // <div className="text-gray-400">
          //   {education.map((item, index) => (
          //     <div key={index} className="mb-6">
          //       <h3 className="text-xl font-bold text-white">{item.degree}</h3>
          //       <p className="text-sm sm:text-base">{item.university}</p>
          //       <p className="text-sm text-gray-400">{item.duration}</p>
          //       <p className="text-sm text-gray-500">{item.description}</p>
          //     </div>
          //   ))}
          // </div>
    //     </div>

    //     {/* Experience Section */}
    //     <div className="mb-8">
    //       <h2 className="border-2 border-dashed border-green-500 text-green-500 p-2 text-center text-lg sm:text-xl md:text-2xl font-bold mb-4">
    //         Experience
    //       </h2>
    //       <div className="text-gray-400">
    //         {experiences.map((experience, index) => (
    //           <div key={index} className="mb-6">
    //             <h3 className="text-xl font-bold text-white">{experience.title}</h3>
    //             <p className="text-sm sm:text-base">{experience.company}</p>
    //             <p className="text-sm text-gray-400">{experience.duration}</p>
    //             <p className="text-sm text-gray-500">{experience.description}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Certification Section */}
    //     <div>
    //       <h2 className="border-2 border-dashed border-green-500 text-green-500 p-2 text-center text-lg sm:text-xl md:text-2xl font-bold mb-4">
    //         Certifications
    //       </h2>
    //       <div className="text-gray-400">
    //         {certifications.map((cert, index) => (
    //           <div key={index} className="mb-6">
    //             <h3 className="text-xl font-bold text-white">{cert.certification}</h3>
    //             <p className="text-sm sm:text-base">{cert.institution}</p>
    //             <p className="text-sm text-gray-400">{cert.year}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="min-h-screen my-center flex flex-col items-center justify-center px-4 my-20">
      <div className="p-2 sm:p-4 max-w-3xl w-full">
        <h2 className="text-center text-green-500 text-xl sm:text-2xl md:text-3xl">
        More About Me
        </h2>
      </div>
      <div className="p-2 sm:p-4 max-w-3xl w-full">
        <p className="text-center text-gray-400 text-xs sm:text-sm md:text-lg">
        Discover more about my education, professional experiences, and certifications below.
        </p>
      </div>

      <div className="p-2 sm:p-4 max-w-3xl w-full">
      <h2 className="text-center text-green-500 text-xl sm:text-2xl md:text-3xl">
        Education
        </h2>
      </div>
      <div className="p-2 sm:p-4 max-w-3xl w-full">
        {education.map((education, index) => (
          <div key={index} className="py-2">
            <h4 className="text-base sm:text-lg text-white">{education.degree}</h4>
            <p className="text-xs sm:text-sm md:text-lg">{education.university}</p>
            <p className="text-sm text-gray-400">{education.duration}</p>
            <p className="text-sm text-gray-500">{education.description}</p>
          </div>
        ))}
      </div>

      <div className="p-2 sm:p-4 max-w-3xl w-full">
        <h2 className="text-center text-green-500 text-xl sm:text-2xl md:text-3xl">
        Experiences
        </h2>
      </div>
      <div className="p-2 sm:p-4 max-w-3xl w-full">
        {experiences.map((experiences, index) => (
          <div key={index} className="py-2">
            <h4 className="text-base sm:text-lg text-white">{experiences.title}</h4>
            <p className="text-xs sm:text-sm md:text-lg">{experiences.company}</p>
            <p className="text-sm text-gray-400">{experiences.duration}</p>
            <p className="text-sm text-gray-500">{experiences.description}</p>
          </div>
        ))}
      </div>

      <div className="p-2 sm:p-4 max-w-3xl w-full">
        <h2 className="text-center text-green-500 text-xl sm:text-2xl md:text-3xl">
        Certifications
        </h2>
      </div>
      <div className="p-2 sm:p-4 max-w-3xl w-full">
        {certifications.map((cert, index) => (
          <div key={index} className="py-2">
            <h4 className="text-base sm:text-lg text-white">{cert.certification}</h4>
            <p className="text-xs sm:text-sm md:text-lg">{cert.institution}</p>
            <p className="text-sm text-gray-400">{cert.year}</p>
          </div>
        ))}
      </div>

      <div className="p-2 sm:p-4 max-w-3xl w-full flex justify-center">
        <Link href="./">
          <button className="px-6 py-3 text-green-500 text-xs sm:text-sm md:text-lg">
            cd ..
          </button>
        </Link>
      </div>
      
    </section>
  );
};

export default AboutDetails;

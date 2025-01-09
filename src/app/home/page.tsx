// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="h-screen flex items-center justify-center">
//       <div className="border-dashed border-2 border-green-500 text-center p-4">

//         <h1 className="text-4xl font-bold mb-2">ANANDA<br />WIJAYA</h1>

//         <h2 className="text-2xl font-medium text-gray-600">Job Title</h2>
 
//         {/* <p className="text-lg max-w-md mx-auto">
//           Continuously pursuing innovative notions, skillfully converting these thoughts into concrete outcomes that are not only fitting but also beneficial for all participants.
//         </p> */}
//       </div>
//     </div>
    
//   );
// }

"use client";

import { useEffect, useState } from 'react';
import { generateFigletText } from '@/utils/figlet';

export default function Home() {
  const [asciiArt, setAsciiArt] = useState<string>('');

  useEffect(() => {
    async function fetchAsciiArt() {
      try {
        const art = await generateFigletText('Ananda Wijaya');
        setAsciiArt(art);
      } catch (err) {
        console.error('Error generating ASCII art:', err);
      }
    }

    fetchAsciiArt();
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4">
      <pre className="text-green-500 text-sm leading-none whitespace-pre-line">
        {asciiArt || 'Loading...'}
      </pre>
      <p className="text-gray-400 mt-4 text-center">
        Passionate Project Manager and System Analyst with a knack for simplifying complexity.
      </p>
    </section>
  );
}

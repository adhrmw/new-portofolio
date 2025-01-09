"use client";

import { useEffect, useState } from 'react';

export default function Home() {
  const [asciiArt, setAsciiArt] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAsciiArt = async () => {
      try {
        const response = await fetch('/api/figlet?text=ananda%0Awijaya&font=Standard');
        if (response.ok) {
          const art = await response.text();
          setAsciiArt(art);
        } else {
          console.error('Error generating ASCII art:', await response.text());
        }
      } catch (err) {
        console.error('Error fetching ASCII art:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAsciiArt();
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="border-dashed border-2 border-green-500 p-4 sm:p-6 max-w-3xl w-full">
        <pre className="text-green-500 text-xs sm:text-sm md:text-base text-center leading-none whitespace-pre-line">
          {loading ? 'Loading...' : asciiArt}
        </pre>
      </div>
      <p className="text-gray-400 mt-4 text-center text-xs sm:text-sm">
        Passionate Project Manager and System Analyst with a knack for simplifying complexity.
      </p>
    </section>
  );
}
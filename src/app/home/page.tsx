"use client";

import { useEffect, useState } from "react";
import figlet from 'figlet';

export default function Home() {
  const [asciiArt, setAsciiArt] = useState<string>("Loading...");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFontAndGenerateArt = async () => {
      try {
        const fontName = "Standard"; 
        const fontUrl = `/fonts/${fontName}.flf`;

        const fontResponse = await fetch(fontUrl);
        if (!fontResponse.ok) {
          throw new Error(`Failed to load font: ${fontName}`);
        }

        const fontData = await fontResponse.text();

        figlet.parseFont(fontName, fontData);

        const art = figlet.textSync("ANANDA\nWIJAYA", {
          font: fontName,
          horizontalLayout: "default",
          verticalLayout: "default",
        });

        setAsciiArt(art);
      } catch (err) {
        console.error("Error generating ASCII art:", err);
        setAsciiArt("Error generating ASCII art.");
      } finally {
        setLoading(false);
      }
    };

    fetchFontAndGenerateArt();
  }, []);

  return (
    <section className="min-h-screen my-center flex flex-col items-center justify-center px-4">
      <div className="border-dashed border-2 border-green-500 p-4 sm:p-6 max-w-3xl w-full">
        <pre className="text-green-500 text-xs sm:text-sm md:text-lg text-center leading-none whitespace-pre-line">
          {loading ? "Loading..." : asciiArt}
        </pre>
      </div>
      <div className="p-2 sm:p-4 max-w-3xl w-full">
        <p className="text-center text-white text-xs sm:text-sm md:text-lg">
          A results-driven Project Manager with experience in system analysis, focused on transforming ideas into impactful outcomes. Skilled in aligning business goals with technical execution, ensuring projects are innovative, efficient, and successful.
        </p>
      </div>
    </section>
  );
}

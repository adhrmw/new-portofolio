"use client";

import { useEffect, useState } from "react";
import figlet from "figlet";
import Link from "next/link";

export default function About() {
  const [asciiArt, setAsciiArt] = useState<string>("Loading...");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFontAndGenerateArt = async () => {
      try {
        const fontName = "Digital";
        const fontUrl = `/fonts/${fontName}.flf`;

        const fontResponse = await fetch(fontUrl);
        if (!fontResponse.ok) {
          throw new Error(`Failed to load font: ${fontName}`);
        }

        const fontData = await fontResponse.text();

        figlet.parseFont(fontName, fontData);

        const art = figlet.textSync("GET TO KNOW ME", {
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
      <div className="p-4 sm:p-6 max-w-3xl w-full">
        <pre className="text-green-500 text-xs sm:text-sm md:text-lg text-center leading-none whitespace-pre-line">
          {loading ? "Loading..." : asciiArt}
        </pre>
      </div>
      <div className="p-2 sm:p-4 max-w-3xl w-full">
        <p className="text-center text-white text-xs sm:text-sm md:text-lg">
          Hello, I'm Ananda Wijaya, a dedicated and passionate Project Manager and System Analyst. With experience in driving innovative projects, I specialize in turning complex ideas into tangible results that create value for both businesses and their customers. I am always looking for opportunities to challenge myself and help teams achieve success.
        </p>
      </div>
      <div className="p-2 sm:p-4 max-w-3xl w-full">
        <p className="text-center text-gray-400 text-xs sm:text-sm md:text-lg">
          I thrive in collaborative environments, where creativity and technical expertise converge. My journey is fueled by a constant curiosity to learn, grow, and implement cutting-edge solutions. Let’s create something impactful together!
        </p>
      </div>
      <div className="p-2 sm:p-4 max-w-3xl w-full flex justify-center">
        <Link href="/about/details">
          <button className="px-6 py-3 text-green-500 text-xs sm:text-sm md:text-lg">
            show-more
          </button>
        </Link>
      </div>
    </section>
  );
}

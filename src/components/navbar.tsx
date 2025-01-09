"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  // All links except /home
  const links = [
    { href: "/about", label: "about" },
    { href: "/work", label: "work" },
    { href: "/contact", label: "contact" },
  ];

  // Filter links for 'cd ..'
  const filteredLinks = links.filter((link) => link.href !== pathname);

  const renderLinks = () => {
    if (pathname === "/home" || pathname === "/") {
      return (
        <>
          {/* Static Home Indicator */}
          <span className="text-green-500 px-2 py-2">Ananda@Wijaya: ~$</span>
          {/* 'ls' toggle */}
          {!showLinks ? (
            <span
              className="text-white px-2 py-2 cursor-pointer"
              onClick={toggleLinks}
            >
              ls
            </span>
          ) : (
            <>
              {filteredLinks.map((link) => (
                <span key={link.href}>
                  <span className="text-white">/</span>
                  <Link href={link.href} className="text-white px-2 py-2">
                    {link.label}
                  </Link>
                </span>
              ))}
            </>
          )}
        </>
      );
    }

    return (
      <>
        {/* Home Link */}
        <Link href="/home" className="text-green-500 px-2 py-2">
          Ananda@Wijaya: ~$
        </Link>
        <span className="text-white">/</span>
        {/* Active Link */}
        <span className="text-white px-2 py-2">{pathname.slice(1)}</span>
        {/* 'cd ..' toggle */}
        <span
          className="text-white px-2 py-2 cursor-pointer"
          onClick={toggleLinks}
        >
          cd ..
        </span>
        {showLinks && (
          <>
            {filteredLinks.map((link) => (
              <span key={link.href}>
                <span className="text-white">/</span>
                <Link href={link.href} className="text-white px-2 py-2">
                  {link.label}
                </Link>
              </span>
            ))}
          </>
        )}
      </>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-start p-4">
      {renderLinks()}
    </nav>
  );
}

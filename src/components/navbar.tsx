"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    setShowLinks(false);
  }, [pathname]);

  const links = [
    { href: "/about", label: "about" },
    { href: "/work", label: "work" },
    { href: "/contact", label: "contact" },
  ];
  const filteredLinks = links.filter((link) => link.href !== pathname);

  const renderLinks = () => {
    if (pathname === "/home" || pathname === "/") {
      return (
        <>
          <span className="text-green-500 px-2 py-2">Ananda@Wijaya: ~$</span>
          {!showLinks ? (
            <span
              className="text-white px-2 py-2 cursor-pointer"
              onClick={toggleLinks}
            >
              ls
            </span>
          ) : (
            filteredLinks.map((link) => (
              <span key={link.href}>
                <span className="text-white">/</span>
                <Link href={link.href} className="text-white px-2 py-2">
                  {link.label}
                </Link>
              </span>
            ))
          )}
        </>
      );
    }

    return (
      <>
        <Link href="/home" className="text-green-500 px-2 py-2">
          Ananda@Wijaya: ~$
        </Link>
        <span className="text-white">/</span>
        <span className="text-white px-2 py-2">{pathname.slice(1)}</span>
        {!showLinks ? (
          <>
          <span className="text-white">/</span>
          <span
            className="text-white px-2 py-2 cursor-pointer"
            onClick={toggleLinks}
          >
            cd ..
          </span>
          </>
        ) : (
          filteredLinks.map((link) => (
            <span key={link.href}>
              <span className="text-white">/</span>
              <Link href={link.href} className="text-white px-2 py-2">
                {link.label}
              </Link>
            </span>
          ))
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

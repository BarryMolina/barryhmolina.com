"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mb-px mix-blend-difference bg-black text-[rgb(250,250,250)] shadow-[0_0_0_1px_rgba(250,250,250,0.1)] fixed w-full left-0 right-0 top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl">
            barryhmolina.com
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#projects"
              className="text-sm font-medium font-mono hover:opacity-70 transition-opacity"
            >
              PROJECTS
            </Link>
            <Link
              href="#blog"
              className="text-sm font-medium font-mono hover:opacity-70 transition-opacity"
            >
              BLOG
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium font-mono hover:opacity-70 transition-opacity"
            >
              ABOUT
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium font-mono hover:opacity-70 transition-opacity"
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-transparent hover:opacity-70"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-[rgba(250,250,250,0.1)]">
              <Link
                href="#projects"
                className="block px-3 py-2 text-sm font-medium hover:opacity-70 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                PROJECTS
              </Link>
              <Link
                href="#blog"
                className="block px-3 py-2 text-sm font-medium hover:opacity-70 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                BLOG
              </Link>
              <Link
                href="#about"
                className="block px-3 py-2 text-sm font-medium hover:opacity-70 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-sm font-medium hover:opacity-70 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

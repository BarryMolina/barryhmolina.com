"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function Navigation() {
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

          {/* Mobile Navigation Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-transparent hover:opacity-70"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white">
              <nav className="flex flex-col space-y-4 mt-8">
                <SheetClose asChild>
                  <Link
                    href="#projects"
                    className="text-sm font-medium font-mono hover:opacity-70 transition-opacity px-2 py-1 text-black"
                  >
                    PROJECTS
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="#blog"
                    className="text-sm font-medium font-mono hover:opacity-70 transition-opacity px-2 py-1 text-black"
                  >
                    BLOG
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="#about"
                    className="text-sm font-medium font-mono hover:opacity-70 transition-opacity px-2 py-1 text-black"
                  >
                    ABOUT
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="#contact"
                    className="text-sm font-medium font-mono hover:opacity-70 transition-opacity px-2 py-1 text-black"
                  >
                    CONTACT
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

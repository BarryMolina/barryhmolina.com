"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
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
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden hover:bg-transparent hover:opacity-70"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
            </Sheet>
          </div>
        </div>
      </nav>
      {/* Sheet Content outside nav */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-[300px] bg-white flex items-start pt-8"
        >
          <SheetHeader>
            <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
            <SheetClose asChild>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4"
                aria-label="Close"
              >
                <X className="h-6 w-6 text-black" />
              </Button>
            </SheetClose>
          </SheetHeader>
          <nav className="flex flex-col w-full px-8 gap-6">
            <SheetClose asChild>
              <Link
                href="#projects"
                className="text-lg font-mono hover:opacity-70 transition-opacity py-2 text-black"
              >
                PROJECTS
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="#blog"
                className="text-lg font-mono hover:opacity-70 transition-opacity py-2 text-black"
              >
                BLOG
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="#about"
                className="text-lg font-mono hover:opacity-70 transition-opacity py-2 text-black"
              >
                ABOUT
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="#contact"
                className="text-lg font-mono hover:opacity-70 transition-opacity py-2 text-black"
              >
                CONTACT
              </Link>
            </SheetClose>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}

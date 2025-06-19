"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="nav-shield bg-white text-black">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="heading-md">let&apos;s work together</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  I&apos;m always interested in new opportunities, challenging
                  projects, and collaborating with talented teams. Let&apos;s
                  discuss how we can bring your ideas to life.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl mb-4">get in touch</h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:barry@example.com"
                      className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      barry@example.com
                    </a>
                    <a
                      href="https://linkedin.com"
                      className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      LinkedIn Profile
                    </a>
                    <a
                      href="https://github.com"
                      className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      GitHub Profile
                    </a>
                    <a
                      href="https://twitter.com"
                      className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                      Twitter Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-black/10 rounded-lg p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-black">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white border-black/20 text-black placeholder:text-gray-500"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-black">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white border-black/20 text-black placeholder:text-gray-500"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-black">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-white border-black/20 text-black placeholder:text-gray-500"
                    placeholder="Project inquiry, collaboration, etc."
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-black">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white border-black/20 text-black placeholder:text-gray-500 min-h-[120px]"
                    placeholder="Tell me about your project or how we can work together..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-black text-white hover:bg-gray-800"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

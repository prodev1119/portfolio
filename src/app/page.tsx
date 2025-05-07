"use client";
import Navbar from "@/components/navbar"
import { ModeToggle } from "@/components/mode-toggle"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useEffect } from "react";
import AnimatedImage from "@/components/AnimatedImage";

export default function Home() {
  // Add state to handle client-side rendering
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Only render animations on client side */}
        {isClient && (
          <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-500 to-indigo-900 dark:from-gray-900 dark:via-blue-900 dark:to-black">

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-60"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.2, scale: 1 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-60"
            />
            {/* Floating Logo */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="absolute top-10 left-10 z-20"
            >
              {/* <Image src="/logoT.png" alt="Logo" width={60} height={60} className="drop-shadow-lg" /> */}
            </motion.div>
            <div className="text-center flex flex-col items-center z-10">
              {/* Glowing effect behind profile image */}
              <div className="relative mb-6">
                <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-indigo-500 blur-2xl opacity-60 animate-pulse"></div>
                <AnimatedImage
                  src="/john-main.jpg"
                  alt="John Hinton"
                  width={160}
                  height={160}
                  className="w-40 h-40 rounded-full object-cover border-4 border-blue-600 shadow-lg relative z-10"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
                Hi, I'm <span className="text-blue-200 dark:text-blue-400">John Hinton</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 dark:text-blue-200 mb-2">
                AI Engineer
              </p>
              <p className="text-lg text-blue-200 dark:text-blue-300 mb-8">
                LLM Expert Experienced with OpenAI, GPT, Pinecone, LAG, Tensorflow, PyTorch and more
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition-colors font-semibold text-lg"
              >
                Get in Touch
              </motion.a>
            </div>
          </section>
        )}

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              I am an AI Engineer based in the US, specializing in Large Language Models (LLMs). My expertise spans across leading-edge technologies such as OpenAI, GPT, Pinecone, and more. I am passionate about building intelligent systems that leverage the power of modern AI to solve real-world problems.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {["Large Language Models (LLM)", "OpenAI", "GPT", "Pinecone", "Vector Databases", "Prompt Engineering", "Python", "Tensorflow", "PyTorch", "Next.js", "TypeScript", "DevOps"].map((skill) => (
                <div
                  key={skill}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project cards will go here */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
                <div className="p-6 flex flex-col items-center">
                  <Image
                    src="/pro-1.jpg"
                    alt="Project Avatar"
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-green-500 shadow"
                  />
                  <h3 className="text-xl font-semibold mb-2">LLM Chatbot Platform</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Built a scalable chatbot platform leveraging OpenAI's GPT models and Pinecone for semantic search, enabling advanced conversational AI for enterprise clients.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                      OpenAI
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                      GPT
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                      Pinecone
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
                <div className="p-6 flex flex-col items-center">
                  <Image
                    src="/pro-2.jpg"
                    alt="Project Avatar"
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-green-500 shadow"
                  />
                  <h3 className="text-xl font-semibold mb-2">LLM-Powered Knowledge Base</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Developed an intelligent knowledge base system using LLMs for document understanding and semantic retrieval, improving information access for large organizations.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                      LLM
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                      Vector DB
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                      Python
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-600"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-600"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 
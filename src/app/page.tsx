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
                Hello, I'm <span className="text-blue-200 dark:text-blue-400">John Hinton</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 dark:text-blue-200 mb-2">
                AI Engineer
              </p>
              <p className="text-lg text-blue-200 dark:text-blue-300 mb-8">
                LLM Expert Experienced with OpenAI, HuggingFace, Pinecone, RAG, Tensorflow, PyTorch and more
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

        {/* About & Skills Section (Redesigned) */}
        <section id="about-skills" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-start justify-center">
            {/* About Me (Left) */}
            <div className="flex-1 flex flex-col items-center md:items-start">
              <h2 className="text-3xl font-bold text-cyan-500 mb-2 border-b-4 border-cyan-300 w-fit pb-1">About Me</h2>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-6">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <Image
                    src="/john-avatar.jpg"
                    alt="John Hinton"
                    width={160}
                    height={160}
                    className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400 shadow-lg"
                  />
                </div>
                <div className="mt-4 md:mt-0 md:ml-6 flex-1">
                  <h3 className="text-2xl font-bold mb-1">John Hinton</h3>
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">AI Engineer</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    AI Engineer with expertise in LLMs, OpenAI, HuggingFace, Pinecone, and more. Passionate about building intelligent, scalable systems for real-world impact.
                  </p>
                </div>
              </div>
              {/* My Journey */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-2">My Journey</h4>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  I started my AI journey with a passion for creating intuitive and scalable applications. With deep knowledge of LLMs, OpenAI, HuggingFace, Pinecone, Tensorflow, and PyTorch, I have built projects such as chatbot platforms, knowledge bases, and enterprise AI solutions. My work showcases my ability to integrate powerful backend AI with beautiful, user-friendly interfaces.
                </p>
              </div>
            </div>
            {/* Skills & Expertise (Right) */}
            <div className="flex-1 w-full">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-cyan-200 dark:border-cyan-900 relative" style={{boxShadow: '0 8px 32px 0 rgba(0, 255, 255, 0.10)'}}>
                <h3 className="text-2xl font-bold text-cyan-500 text-center mb-6">Skills & Expertise</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {/* Example skills with icons. Replace src with your own icons if available */}
                  <div className="flex flex-col items-center bg-white dark:bg-gray-900 border-2 border-cyan-200 dark:border-cyan-700 rounded-lg p-3 shadow-sm hover:shadow-cyan-200 transition-shadow">
                    <Image src="/icons/LLM.png" alt="LLM" width={36} height={36} />
                    <span className="mt-2 text-sm font-medium">LLM</span>
                  </div>
                  <div className="flex flex-col items-center bg-white dark:bg-gray-900 border-2 border-cyan-200 dark:border-cyan-700 rounded-lg p-3 shadow-sm hover:shadow-cyan-200 transition-shadow">
                    <Image src="/icons/OPA.png" alt="OpenAI" width={36} height={36} />
                    <span className="mt-2 text-sm font-medium">OpenAI</span>
                  </div>
                  <div className="flex flex-col items-center bg-white dark:bg-gray-900 border-2 border-cyan-200 dark:border-cyan-700 rounded-lg p-3 shadow-sm hover:shadow-cyan-200 transition-shadow">
                    <Image src="/icons/HGF.png" alt="HuggingFace" width={36} height={36} />
                    <span className="mt-2 text-sm font-medium">HuggingFace</span>
                  </div>
                  <div className="flex flex-col items-center bg-white dark:bg-gray-900 border-2 border-cyan-200 dark:border-cyan-700 rounded-lg p-3 shadow-sm hover:shadow-cyan-200 transition-shadow">
                    <Image src="/icons/pc.png" alt="Pinecone" width={36} height={36} />
                    <span className="mt-2 text-sm font-medium">Pinecone</span>
                  </div>
                  <div className="flex flex-col items-center bg-white dark:bg-gray-900 border-2 border-cyan-200 dark:border-cyan-700 rounded-lg p-3 shadow-sm hover:shadow-cyan-200 transition-shadow">
                    <Image src="/icons/TF.png" alt="Tensorflow" width={36} height={36} />
                    <span className="mt-2 text-sm font-medium">Tensorflow</span>
                  </div>
                  <div className="flex flex-col items-center bg-white dark:bg-gray-900 border-2 border-cyan-200 dark:border-cyan-700 rounded-lg p-3 shadow-sm hover:shadow-cyan-200 transition-shadow">
                    <Image src="/icons/PT.png" alt="PyTorch" width={36} height={36} />
                    <span className="mt-2 text-sm font-medium">PyTorch</span>
                  </div>
                  <div className="flex flex-col items-center bg-white dark:bg-gray-900 border-2 border-cyan-200 dark:border-cyan-700 rounded-lg p-3 shadow-sm hover:shadow-cyan-200 transition-shadow">
                    <Image src="/icons/LC.png" alt="LangChain" width={36} height={36} />
                    <span className="mt-2 text-sm font-medium">LangChain</span>
                  </div>
                  <div className="flex flex-col items-center bg-white dark:bg-gray-900 border-2 border-cyan-200 dark:border-cyan-700 rounded-lg p-3 shadow-sm hover:shadow-cyan-200 transition-shadow">
                    <Image src="/icons/llama.png" alt="Llama" width={36} height={36} />
                    <span className="mt-2 text-sm font-medium">Llama</span>
                  </div>
                </div>
              </div>
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

        {/* History Section */}
        <section id="history" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-cyan-500 text-center mb-12 border-b-4 border-cyan-300 w-fit mx-auto pb-1">History</h2>
            <div className="flex flex-col gap-8 mt-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-cyan-400">
                <h3 className="text-xl font-semibold mb-1">2023 - Present</h3>
                <p className="text-gray-700 dark:text-gray-200 font-medium">AI Engineer at OpenAI</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Leading LLM and AI projects for enterprise clients, focusing on scalable AI solutions.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-cyan-400">
                <h3 className="text-xl font-semibold mb-1">2021 - 2023</h3>
                <p className="text-gray-700 dark:text-gray-200 font-medium">ML Researcher at Google DeepMind</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Researched and developed NLP models, contributed to open-source LLM frameworks.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-cyan-400">
                <h3 className="text-xl font-semibold mb-1">2017 - 2021</h3>
                <p className="text-gray-700 dark:text-gray-200 font-medium">B.S. in Computer Science, Massachusetts Institute of Technology</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Graduated with honors, specialized in AI and machine learning.</p>
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
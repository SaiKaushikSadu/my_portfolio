"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaFileDownload, FaGithub } from "react-icons/fa";
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ParticleContainer from "./particle-container";
import githubdp from "@/public/my_photo.jpeg";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-16 sm:mb-0 text-center scroll-mt-[100rem] particles-section pt-28 pb-14 sm:pt-36 sm:pb-18 w-full px-4"
    >
      <ParticleContainer />
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={githubdp}
              alt="Ricardo portrait"
              width="384" // Increased width
              height="384" // Increased height
              quality="95"
              priority={true}
              className="h-48 w-48 rounded-full object-cover border-[0.35rem] border-white shadow-xl" // Updated h-48 and w-48
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-8 mt-3 px-0 sm:px-4 text-xl font-medium !leading-[1.4] sm:text-3xl text-white max-w-[50rem] mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello! I'm Sai Kaushik Sadu</span> — I'm a{" "}
        <span className="font-bold">Computer Engineering Undergraduate</span> at{" "}
        <span className="font-bold">Thadomal Shahani Engineering College</span> in Mumbai. A passionate Full-Stack Web Developer, I bring creativity and technical expertise to build innovative and seamless web solutions 🚀.
      </motion.h1>


      <motion.div
        className="flex flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {/* GitHub */}
        <div className="relative group">
          <a
            className="bg-gray-800 p-3 flex items-center justify-center rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer text-white"
            href="https://github.com/SaiKaushikSadu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-xl" />
          </a>
          <span className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-gray-800 text-white text-sm px-2 py-1 rounded shadow-md">
            GitHub
          </span>
        </div>

        {/* LinkedIn */}
        <div className="relative group">
          <a
            className="bg-blue-600 p-3 flex items-center justify-center rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer text-white"
            href="https://www.linkedin.com/in/sai-kaushik-sadu-938373229/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="text-xl" />
          </a>
          <span className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-blue-600 text-white text-sm px-2 py-1 rounded shadow-md">
            LinkedIn
          </span>
        </div>

        {/* CodeChef */}
        <div className="relative group">
          <a
            className="bg-orange-500 p-3 flex items-center justify-center rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer text-white"
            href="https://www.codechef.com/users/ssk_9_7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCodechef className="text-xl" />
          </a>
          <span className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-orange-500 text-white text-sm px-2 py-1 rounded shadow-md">
            CodeChef
          </span>
        </div>

        {/* LeetCode */}
        <div className="relative group">
          <a
            className="bg-yellow-500 p-3 flex items-center justify-center rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer text-white"
            href="https://leetcode.com/u/codesign97/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode className="text-xl" />
          </a>
          <span className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-yellow-500 text-white text-sm px-2 py-1 rounded shadow-md">
            LeetCode
          </span>
        </div>

        {/* Codeforces */}
        <div className="relative group">
          <a
            className="bg-red-600 p-3 flex items-center justify-center rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer text-white"
            href="https://codeforces.com/profile/ssk__9__7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCodeforces className="text-xl" />
          </a>
          <span className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-red-600 text-white text-sm px-2 py-1 rounded shadow-md">
            Codeforces
          </span>
        </div>

        {/* Resume */}
        <div className="relative group">
          <button
            className="bg-green-600 p-3 flex items-center justify-center rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer text-white"
            onClick={() => {
              const userConfirmed = window.confirm("Do you want to download the resume?");
              if (userConfirmed) {
                // Trigger the download using the modified Google Drive link
                window.open("https://drive.google.com/uc?export=download&id=1K9KVb7KpO05HIWpPFnmpjmq7wRaNja0l", "_blank");
              }
            }}
          >
            <FaFileDownload className="text-xl" /> {/* Updated to file download icon */}
          </button>
          <span className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-green-600 text-white text-sm px-2 py-1 rounded shadow-md">
            Resume {/* Updated text */}
          </span>
        </div>

      </motion.div>
    </section >
  );
}

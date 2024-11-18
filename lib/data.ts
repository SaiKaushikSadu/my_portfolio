import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import stocksocial from "@/public/stocksocial.png";
import bookfinder from "@/public/bookfinder.jpg";
import studapp from "@/public/studapp.jpg";
import jdstreamliner from "@/public/jdstreamliner.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Technology analyst",
    location: "Deutsche Bank India",
    description:
      "Worked on creating custom metrics on Google Cloud Platform. Created SLO dashboard using React Js and GraphQL. Technologies - GCP, Terraform, React Js, Springboot, GraphQL",
    icon: React.createElement(CgWorkAlt),
    date: "June 2024 - July 2024",
  },
  {
    title: "Web Developer Intern",
    location: "MentRent",
    description:
      "Led frontend development efforts for MentRent, a dynamic mentorship program website connecting mentees with mentors for personalized guidance. Conducting rigorous testing and debugging to ensure the reliability and functionality of the website. Technologies - React Js",
    icon: React.createElement(CgWorkAlt),
    date: "March 2024 - June 2024",
  },
  {
    title: "Web Developer Intern",
    location: "IIIT - Hyderabad",
    description:
    "Built a end-to-end project for detecting malnutrition status of children in rural areas for a NGO. Using several python libraries(OpenCV, PaddleOCR, etc.) for calculating the BMI and analyzing the malnutrition status by uploading the image of the weighing scale. Technologies - React Js, Flask, MongoDB, AWS",
    icon: React.createElement(CgWorkAlt),
    date: "July 2023 - March 2024",
  },
  {
    title: "Web Developer Intern",
    location: "Phiano IT Solutions",
    description:
      "Built an end-to-end project including the frontend and backend using HTML, CSS and PHP. Used GoogleMaps API for location and Integrated Whatsapp Chat feature. Learnt Payment Gateway integration (RazorPay) with PHP. Technologies - React Js, PHP",
    icon: React.createElement(CgWorkAlt),
    date: "June 2023 - July 2023",
  }
] as const;

export const projectsData = [
  {
    title: "StockSocial",
    description:
      "A stock price prediction platform built with React JS and Flask, leveraging deep learning via TensorFlow and Keras. Powered by an LSTM model, it forecasts next-month stock trends for informed decision-making.",
    tags: ["JavaScript", "React", "Flask", "Tensorflow"],
    icons: [
      "logos:javascript",
      "logos:react",
      "logos:flask",
      "logos:tensorflow",
    ],
    imageUrl: stocksocial,
    githubLink: "https://github.com/jagjeet-singh1812/Stock-Trading",
    demoLink: "",
  },
  {
    title: "BookFinder",
    description:
      "Reverse Job board for companies looking to hire developers in Australia. Filter by experience, location and keyboards.  Companies can pay a monthly fee to be able to message developers on the site and view their information.",
    tags: ["HTML", "CSS", "MySQL", "PHP", "JavaScript"],
    icons: [
      "vscode-icons:file-type-html",
      "vscode-icons:file-type-css",
      "logos:javascript",
      "logos:php",
      "logos:mysql",
    ],
    imageUrl: bookfinder,
    urlLink: "https://drive.google.com/drive/folders/1g0bTV28j2I8qmXI99ywjU1y_VmQYAOeo",
    githubLink: "https://github.com/SaiKaushikSadu/BookFinder",
  },
  {
    title: "StudApp",
    description:
      "A personalized app built with React Expo to manage college information, CGPA, and timetables via OCR, while sending smart push notifications. It also features curated learning roadmaps and youtube summarizations to supercharge your academic journey!",
      tags: ["React Native", "Flask", "MongoDB"],
    icons: ["logos:react", "logos:flask", "logos:mongodb"],
    imageUrl: studapp,
    githubLink: "https://github.com/SaiKaushikSadu/MPRSEM6",
  },
  {
    title: "JDStreamLiner",
    description:
      "A tool that summarizes job descriptions, matches them with user resumes, and provides detailed analysis and actionable insights to optimize job applications.",
    tags: ["React Js", "Flask", "LLM", "MongoDB", "Docker"],
    icons: ["logos:python", "logos:react", "logos:mongodb", "logos:docker"],
    imageUrl: jdstreamliner,
    githubLink: "https://github.com/SaiKaushikSadu/JdStreamLinerFrontend",
    urlLink: "",
  }
] as const;

export const skillsData = [
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "Flask",
    icon: "logos:flask",
  },
  {
    name: "PHP",
    icon: "logos:php",
  },
  {
    name: "Java",
    icon: "logos:java",
  },
  {
    name: "Springboot",
    icon: "logos:spring",
  },
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "MongoDB",
    icon: "logos:mongodb",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  {
    name: "Postgresql",
    icon: "logos:postgresql",
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
  }
] as const;

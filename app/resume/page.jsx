"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiCplusplus,
  SiGit,
} from "react-icons/si";

import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "I am Ankit Kumar, a dedicated and skilled Software Engineer with a Bachelor's degree in Computer Science from NIT Bhopal. I have 2+ years of professional experience in developing scalable and user-friendly web applications.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ankit Kumar",
    },
    {
      fieldName: "Contact",
      fieldValue: "+(91)-7697353069",
    },
    {
      fieldName: "Email",
      fieldValue: "ak.ankitkumar0202@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "As a Software Engineer at Avalara, I was responsible for developing and maintaining internal platforms utilizing JavaScript frameworks such as React.js, Next.js, and Node.js. I streamlined developer efficiency and project visibility by integrating services like Kafka and GraphQL, resulting in a significant reduction in ticket creation time and improved access to information. I successfully implemented various features, including interactive blog sections, while addressing numerous bugs and resolving security vulnerabilities, which contributed to increased website traffic and a safer user experience. Furthermore, I designed and developed a comprehensive dashboard for visualizing key metrics, and ensured high code quality and project maintainability through extensive testing with Jest and Cypress.",
  items: [
    {
      company: "Avalara",
      position: "Software Engineer",
      duration: "July 2022 - April 2024",
    },
    {
      company: "Avalara",
      position: "Software Engineer Intern",
      duration: "Feb 2022- June 2024",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  items: [
    {
      institution: "Maulana Azad National Institute of Technology",
      degree: "Bachelor of Technology",
      duration: "2018-2022",
      major: "Computer Science and Engineering",
      grade: "(CGPA : 7.81)",
    },
    {
      institution: "Kendriya Vidyalaya",
      degree: "Higher Secondary (Class 12th)",
      duration: "2017-2018",
      major: "Physics, Chemistry, Maths",
      grade: "(86.8%)",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "My technical expertise includes proficiency in programming languages such as JavaScript and C++. I have strong skills in frontend technologies, including HTML, CSS, React.js, and Next.js, and I’m experienced with backend frameworks like Node.js and Express.js. I also have knowledge of databases such as MongoDB and PostgreSQL. Additionally, I am familiar with version control systems like Git and GitLab.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiCplusplus />,
      name: "c++",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiMongodb />,
      name: "mongoDB",
    },
    {
      icon: <SiGit />,
      name: "git",
    },
  ],
};

const resume = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.2, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>

            <div className="min-h-[70vh] w-full">
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-18 rounded-xl flex flex-col justify-center items-center gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] min-h-[184px] py-6 px-18 rounded-xl flex flex-col justify-center items-center gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[300px] min-h-[60px] text-center">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60 text-center xl:max-w-[300px]">
                                {item.institution}
                              </p>
                            </div>
                            <div>{item.major}</div>
                            <div>
                              <p>{item.grade}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* skills */}
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {skills.description}
                    </p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-5 xl:gap-2 gap-4 ">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="flex flex-col w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300 items-center justify-center">
                                  {skill.icon}
                                </div>
                                <div className="group-hover:text-accent capitalize">
                                  {skill.name}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent
                value="about"
                className="w-full text-center xl:text-left"
              >
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                  <ul className="grid grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                          <span className="text-white/60">
                            {item.fieldName}
                          </span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </>
  );
};

export default resume;

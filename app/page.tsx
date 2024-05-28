"use client";
import Image from "next/image";
import Navbar from "./components/navbar";
import { Typewriter } from "react-simple-typewriter";
import EducationCard from "./components/educationCard";

const Education = () => {
  const education = [
    {
      year: "2023-2026",
      qualificaton: "Bsc Mechanical Engineering, UCL",
      subjects: [
        {
          subject: "Mechanical Engineering",
          grade: "4.0",
        },
      ],
    },
    {
      year: "2021-2023",
      qualificaton: "A-Levels, Saint Paul's Way",
      subjects: [
        {
          subject: "Mathematics",
          grade: "A*",
        },
        {
          subject: "Physics",
          grade: "A",
        },
        {
          subject: "Economics",
          grade: "A*",
        },
      ],
    },
    {
      year: "2016-2023",
      qualificaton: "GSCE, Bow School",
      subjects: [
        {
          subject: "Mathematics",
          grade: "9",
        },
        {
          subject: "Physics",
          grade: "9",
        },
        {
          subject: "Biology",
          grade: "9",
        },
        {
          subject: "English literature",
          grade: "9",
        },
        {
          subject: "English language",
          grade: "9",
        },
      ],
    },
  ];
  return (
    <section className="min-h-screen bg-gradient-to-bl from-black to-red-700 w-full px-20 pt-20">
      <h1 className="text-black text-5xl font-bold">Education</h1>
      <div className="mt-20 space-y-10">
        {education.map((school) => (
          <EducationCard key={school.year} school={school} />
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section className="min-h-screen bg-gradient-to-t from-black to-red-700 w-full px-20 pt-20">
      <h1 className="text-black text-5xl font-bold">Education</h1>
    </section>
  );
};

export default function Home() {
  const words = [
    "Engineer",
    "Finance Analyst",
    "Data Scientist",
    "Software Developer",
  ];
  return (
    <main className="w-full h-full">
      <section className="bg-gradient-to-br from-red-700 to-black w-full h-screen px-20 pt-20">
        <h1 className="text-5xl text-black">
          Hello i'm <strong>Wajedul</strong>,
        </h1>
        <p className="text-red-400 text-5xl">
          I am a mechanical engineer student at {""}
          <span className="text-purple-400">UCL</span>
        </p>
        <div className="text-red-100 flex gap-x-2">
          <p>I am an aspiring</p>
          <Typewriter cursor={true} loop={true} words={words} />
        </div>
      </section>
      <Education />
      <Projects />
    </main>
  );
}

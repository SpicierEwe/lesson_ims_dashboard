// src/components/RecommendedCourses.js
import React from "react";
import { FaClock } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { MdPerson } from "react-icons/md";

const coursesData = [
  {
    id: 1,
    title: "Master Digital Product Design: UX Research & UI Design",
    description:
      "A complete design education for product designers: Research the user experience, the",
    hours: "25.5 total hour",
    lectures: "54 lectures",
    level: "Intermediate",
    author: "Elijah Snyder",
    progress: 75,
  },
  {
    id: 2,
    title: "Complete Product Design From Home Course",
    description: "Learn Product Design From the Ground Up",
    hours: "25.5 total hour",
    lectures: "54 lectures",
    level: "Intermediate",
    author: "Callie Carson",
    progress: 35,
  },
  {
    id: 3,
    title: "UX-Strategy: How to Reach The Next Level",
    description:
      "A complete design education for product designers: Research the user experience, the...",
    hours: "25.5 total hour",
    lectures: "54 lectures",
    level: "Intermediate",
    author: "Linnie Curtis",
    progress: 0,
  },
  {
    id: 4,
    title: "UX-Strategy: How to Reach The Next Level",
    description:
      "A complete design education for product designers: Research the user experience, the...",
    hours: "25.5 total hour",
    lectures: "54 lectures",
    level: "Intermediate",
    author: "Linnie Curtis",
    progress: 0,
  },
];

const nav = ["Regular (4)", "One o one (2)"];

const RecommendedCourses = () => {
  return (
    <div className="p-5 mt-7 flex flex-col items-start bg-white rounded-xl overflow-x-hidden">
      {/* top container */}
      <div className="flex justify-between items-start text-start w-full">
        <h2 className="w-[70%]">Recommended Courses</h2>
        <p>See all {">"}</p>
      </div>

      {/* cards */}
      <div className="mt-10 w-full flex flex-col md:flex-row gap-10">
        {coursesData.map((course) => (
          <div key={course.id} className="flex-1 flex flex-col">
            <div className="rounded-2xl w-full flex flex-col h-full mx-auto text-start">
              {/* container 1 */}
              <div className="flex flex-col h-full border">
                {/* image */}
                <div className="w-full aspect-video">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    className="aspect-video object-cover"
                    alt="Course"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full p-5 flex-grow">
                  <h2 className="text-sm">{course.title}</h2>
                  <p className="text-xs">{course.description}</p>

                  {/* bottom content */}
                  <div className="mt-3 whitespace-nowrap flex items-center gap-x-5 gap-y-2 text-xs text-primary flex-wrap">
                    <div className="flex gap-2 items-center">
                      <FaClock className="text-secondary" />
                      {course.hours} • {course.lectures}
                    </div>
                    {/* level */}
                    <div className="flex gap-2 items-center">
                      <IoIosStar className="text-secondary" />
                      <h2>{course.level}</h2>
                    </div>
                  </div>

                  {/* person */}
                  <p className="text-xs mt-2">by {course.author}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCourses;

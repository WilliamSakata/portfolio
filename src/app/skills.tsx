import React from "react";

function Skills() {
  const skills = [
    "Kotlin",
    "PHP",
    "HTML",
    "CSS",
    "C#",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Docker",
    "AWS",
    "TailwindCSS basics",
  ];

  return (
    <div className="flex flex-wrap text-gray-600">
      {skills.map((skill) => {
        return (
          <div
            key={`key-${skill}`}
            className="px-4 py-3 m-2 bg-gray-300 rounded-md font-medium"
          >
            {skill}
          </div>
        );
      })}
    </div>
  );
}

export default Skills;

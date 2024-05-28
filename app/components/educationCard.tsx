import React from "react";

type subject = {
  subject: string;
  grade: string;
};

type school = {
  year: string;
  qualificaton: string;
  subjects: subject[];
};

export default function EducatonCard({ school }: { school: school }) {
  return (
    <div className="w-full px-10 py-4 bg-white rounded-md space-y-2">
      <p className="font-semibold text-red-400">{school.year}</p>
      <h1 className="font-bold text-2xl text-black">{school.qualificaton}</h1>
      <div>
        {school.subjects.map((subject) => (
          <p key={subject.subject}>
            {subject.subject},{" "}
            <span className="font-bold text-xl text-red-400">
              {subject.grade}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}

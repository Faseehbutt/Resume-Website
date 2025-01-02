'use client';

import { Education } from '../../types';

export default function EducationForm({
  data,
  onChange
}: {
  data: Education[];
  onChange: (data: Education[]) => void;
}) {
  const addEducation = () => {
    onChange([
      ...data,
      { id: Date.now().toString(), school: '', degree: '', year: '' }
    ]);
  };

  const updateEducation = (id: string, field: string, value: string) => {
    onChange(
      data.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    );
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Education</h2>
      {data.map((edu) => (
        <div key={edu.id} className="space-y-2 p-4 border rounded ">
          <input
            type="text"
            placeholder="School/College/University"
            value={edu.school}
            onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
            className="w-full p-2 border rounded text-black bg-gray-300 placeholder-gray-500"
          />
          <input
            type="text"
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
            className="w-full p-2 border rounded text-black bg-gray-300 placeholder-gray-500"
          />
          <input
            type="text"
            placeholder="Year"
            value={edu.year}
            onChange={(e) => updateEducation(edu.id, 'year', e.target.value)}
            className="w-full p-2 border rounded text-black bg-gray-300 placeholder-gray-500"
          />
        </div>
      ))}
      <button
        onClick={addEducation}
        className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400"
      >
        Add Education
      </button>
    </div>
  );
}
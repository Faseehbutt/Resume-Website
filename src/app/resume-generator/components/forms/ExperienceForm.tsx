'use client';

import { Experience } from '../../types';

export default function ExperienceForm({
  data,
  onChange
}: {
  data: Experience[];
  onChange: (data: Experience[]) => void;
}) {
  const addExperience = () => {
    onChange([
      ...data,
      { 
        id: Date.now().toString(), 
        company: '', 
        position: '', 
        duration: '', 
        description: '',
      }
    ]);
  };

  const updateExperience = (id: string, field: string, value: string) => {
    onChange(
      data.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Experience</h2>
      {data.map((exp) => (
        <div key={exp.id} className="space-y-2 p-4 border rounded text-black">
          <input
            type="text"
            placeholder="Company"
            value={exp.company}
            onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
            className="w-full p-2 border rounded text-black bg-gray-300 placeholder-gray-500"
          />
          <input
            type="text"
            placeholder="Position"
            value={exp.position}
            onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
            className="w-full p-2 border rounded  text-black  bg-gray-300 placeholder-gray-500 "
          />
          <input 
            type="text"
            placeholder="Duration"
            value={exp.duration}
            onChange={(e) => updateExperience(exp.id, 'duration', e.target.value)}
            className="w-full p-2 border rounded text-black  bg-gray-300 placeholder-gray-500"
          />
          <textarea
            placeholder="Description"
            value={exp.description}
            onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
            className="w-full p-2 border rounded text-black bg-gray-300 placeholder-gray-500"
            rows={3}
          />
        </div>
      ))}
      <button
        onClick={addExperience}
        className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 hover:text-black"
      >
        Add Experience
      </button>
    </div>
  );
}
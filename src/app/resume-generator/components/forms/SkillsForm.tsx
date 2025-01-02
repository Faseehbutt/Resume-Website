'use client';

export default function SkillsForm({
  data,
  onChange
}: {
  data: string[];
  onChange: (data: string[]) => void;
}) {
  const addSkill = (skill: string) => {
    if (skill.trim() && !data.includes(skill.trim())) {
      onChange([...data, skill.trim()]);
    }
  };

  const removeSkill = (skillToRemove: string) => {
    onChange(data.filter(skill => skill !== skillToRemove));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Skills</h2>
      <div>
        <input
          type="text"
          placeholder="Add a skill and press Enter"
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              addSkill((e.target as HTMLInputElement).value);
              (e.target as HTMLInputElement).value = '';
            }
          }}
          className="w-full p-2 border rounded bg-gray-200 text-black placeholder:text-gray-500"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {data.map((skill, index) => (
          <span
            key={index}
            className="bg-yellow-500 px-3 py-1 rounded-full text-sm flex items-center gap-2"
          >
            {skill}
            <button
              onClick={() => removeSkill(skill)}
              className="text-gray-900 transform hover:scale-150 transition duration-200 ease-in-out"
            >
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
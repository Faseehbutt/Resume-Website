import { ResumeData } from '../types';
import Image from 'next/image';

export default function ResumePreview({ data }: { data: ResumeData }) {
  return (
    <div id="resume-preview" className="max-w-4xl mx-auto  p-8 bg-white shadow-lg text-black">
      <div className="flex items-start gap-6 mb-8">
        {data.basic.image && (
          <Image
            src={data.basic.image}
            alt="Profile"
            width={128}
            height={128}
            className="w-32 h-32 rounded-full object-cover"
          />
        )}
        <div>
          <h1 className="text-3xl font-bold mb-2">{data.basic.name}</h1>
          <p className="text-gray-600 mb-1 "> <span className='font-bold'>Email:</span> {data.basic.email}</p>
          <p className="text-gray-600 mb-4 "> <span className='font-bold'>Phone-Number:</span> {data.basic.phone}</p>
          <p className="text-gray-700 "> <span className='font-bold'>Objective:</span> {data.basic.objective}</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-black ">Education</h2>
        <div className="space-y-4">
          {data.education.map((edu) => (
            <div key={edu.id}>
              <h3 className="font-semibold">{edu.school}</h3>
              <p className="text-gray-700">{edu.degree}</p>
              <p className="text-gray-600">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-black">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-100 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-black">Experience</h2>
        <div className="space-y-6">
          {data.experience.map((exp) => (
            <div key={exp.id}>
              <h3 className="font-semibold">{exp.company}</h3>
              <p className="text-gray-800">{exp.position}</p>
              <p className="text-gray-600 mb-2">{exp.duration}</p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
'use client'


import { BasicInfo } from '@/app/resume-generator/types/index';

export default function BasicInfoForm({
  data,
  onChange
}: {
  data: BasicInfo;
  onChange: (data: BasicInfo) => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange({
          ...data,
          image: reader.result as string
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-4 ">
      <h2 className="text-xl font-bold">Basic Information</h2>
      <div>
        <label className="block text-sm text-white font-medium mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          className="w-full p-2 border rounded  bg-gray-300"
        />
      </div>
      <div>
        <label className="block text-sm text-white font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          className="w-full p-2 border rounded  text-black bg-gray-300"
        />
      </div>
      <div>
        <label className="block text-sm text-white font-medium mb-1">Phone</label>
        <input
          type="tel"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded  text-black bg-gray-300"
        />
      </div>
      <div>
        <label className="block text-sm text-white font-medium mb-1">Career Objective</label>
        <textarea
          name="objective"
          value={data.objective}
          onChange={handleChange}
          className="w-full p-2 border rounded  text-black bg-gray-300"
          rows={4}
        />
      </div>
      <div>
        <label className="block text-sm text-white font-medium mb-1">Profile Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full p-2 border rounded  text-black bg-gray-300"
        />
      </div>
    </div>
  );
}
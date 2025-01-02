'use client';

import { useState} from 'react';
import { ResumeData } from '../types';
import BasicInfoForm from './forms/BasicInfoForm';
import EducationForm from './forms/EducationForm';
import SkillsForm from './forms/SkillsForm';
import ExperienceForm from './forms/ExperienceForm';
import StepNavigation from './forms/StepNavigation';

const emptyData: ResumeData = {
  basic: {
    name: '',
    email: '',
    phone: '',
    objective: '',
  },
  education: [],
  skills: [],
  experience: [],
};

export default function ResumeForm({ 
  onSubmit, 
  initialData 
}: { 
  onSubmit: (data: ResumeData) => void;
  initialData: ResumeData | null;
}) {
  const [formData, setFormData] = useState<ResumeData>(initialData || emptyData);
  const [currentStep, setCurrentStep] = useState(0);

  const updateFormData = (section: keyof ResumeData, data: unknown) => {
    setFormData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const steps = [
    {
      title: 'Basic',
      component: <BasicInfoForm 
        data={formData.basic} 
        onChange={(data) => updateFormData('basic', data)} 
      />
    },
    {
      title: 'Education',
      component: <EducationForm 
        data={formData.education} 
        onChange={(data) => updateFormData('education', data)} 
      />
    },
    {
      title: 'Skills',
      component: <SkillsForm 
        data={formData.skills} 
        onChange={(data) => updateFormData('skills', data)} 
      />
    },
    {
      title: 'Experience',
      component: <ExperienceForm 
        data={formData.experience} 
        onChange={(data) => updateFormData('experience', data)} 
      />
    }
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <StepNavigation 
        steps={steps.map(s => s.title)} 
        currentStep={currentStep}
        onStepChange={setCurrentStep}
      />
      
      <div className="mb-8">
        {steps[currentStep].component}
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          className={`px-4 py-2 rounded bg-gray-500 text-white ${
            currentStep === 0 ? 'invisible' : ''
          }`}
        >
          Previous
        </button>
        {currentStep === steps.length - 1 ? (
          <button
            onClick={() => onSubmit(formData)}
            className="px-4 py-2 rounded bg-yellow-500 text-black hover:bg-yellow-400"
          >
            Generate Resume
          </button>
        ) : (
          <button
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            className="px-4 py-2 hover:bg-yellow-400 rounded bg-yellow-500 text-black"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

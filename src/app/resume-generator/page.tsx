

'use client';

import { useState } from 'react';
import ResumeForm from '@/app/resume-generator/components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import { useResumeData } from './hooks/useResumeData';
import { generatePDF } from './utils/pdf';
import { Download, Share, Edit } from 'lucide-react';

export default function Home() {
  const [showPreview, setShowPreview] = useState(false);
  const { resumeData, setResumeData, handleShare } = useResumeData();

  const handleDownloadPDF = async () => {
    try {
      await generatePDF('resume-preview', `${resumeData?.basic.name || 'resume'}-${Date.now()}`);
    } catch (error) {
      alert('Failed to generate PDF. Please try again.');
    }
  };

  return (
    <main className="main container mx-auto px-14 py-12 w-[190vw] h-auto bg-black">
      {!showPreview ? (
        <ResumeForm
          initialData={resumeData}
          onSubmit={(data) => {
            setResumeData(data);
            setShowPreview(true);
          }}
        />
      ) : (
        <div className="space-y-6">
          <ResumePreview data={resumeData!} />
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setShowPreview(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 flex items-center gap-2"
            >
              <Edit className="w-4 h-4" />
              Edit
            </button>
            <button
              onClick={handleShare}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-2"
            >
              <Share className="w-4 h-4" />
              Share
            </button>
            <button
              onClick={handleDownloadPDF}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { ResumeData } from '../types';
import { encodeResumeData, decodeResumeData } from '../utils/sharing';

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

export function useResumeData() {
  const [resumeData, setResumeData] = useState<ResumeData>(emptyData);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sharedData = urlParams.get('data');
    if (sharedData) {
      try {
        const decodedData = decodeResumeData(sharedData);
        setResumeData(decodedData);
      } catch (error) {
        console.error('Error loading shared resume:', error);
        alert('Invalid share link');
      }
    }
  }, []);

  const handleShare = () => {
    try {
      const encodedData = encodeResumeData(resumeData);
      const shareUrl = `${window.location.origin}?data=${encodedData}`;
      navigator.clipboard.writeText(shareUrl);
      alert('Share link copied to clipboard!');
    } catch (error) {
      console.error('Error sharing resume:', error);
      alert('Failed to generate share link');
    }
  };

  return {
    resumeData,
    setResumeData,
    handleShare
  };
}
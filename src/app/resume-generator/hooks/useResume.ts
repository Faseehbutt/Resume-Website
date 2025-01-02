'use client';

import { useState } from 'react';
import { ResumeData } from '../types';

export function useResume() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);

  return {
    resumeData,
    setResumeData
  };
}
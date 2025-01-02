import { ResumeData } from '../types';

export function encodeResumeData(data: ResumeData): string {
  try {
    const jsonString = JSON.stringify(data);
    return btoa(encodeURIComponent(jsonString));
  } catch (error) {
    console.error('Error encoding resume data:', error);
    throw new Error('Failed to encode resume data');
  }
}

export function decodeResumeData(encoded: string): ResumeData {
  try {
    const jsonString = decodeURIComponent(atob(encoded));
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Error decoding resume data:', error);
    throw new Error('Failed to decode resume data');
  }
}
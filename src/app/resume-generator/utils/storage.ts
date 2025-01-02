// Using localStorage as a simpler alternative to JSONBin
import { ResumeData } from '../types';

export async function saveResumeData(data: ResumeData): Promise<string> {
  try {
    const id = Math.random().toString(36).substring(7);
    localStorage.setItem(`resume_${id}`, JSON.stringify(data));
    return id;
  } catch (error) {
    console.error('Error saving resume data:', error);
    throw error;
  }
}

export async function getResumeData(id: string): Promise<ResumeData> {
  try {
    const data = localStorage.getItem(`resume_${id}`);
    if (!data) {
      throw new Error('Resume not found');
    }
    return JSON.parse(data);
  } catch (error) {
    console.error('Error fetching resume data:', error);
    throw error;
  }
}
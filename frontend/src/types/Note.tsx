// src/types/index.ts or src/types/Note.ts

export interface Note {
  _id: string; // MongoDB typically uses _id as a string
  title: string;
  content: string;
  createdAt: string; // Assuming it's a string from your API (Date string)
  updatedAt?: string; // Optional: if you have an updatedAt field
  // Add any other properties your note object might have from the backend
}

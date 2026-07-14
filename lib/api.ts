import axios from 'axios';

export type Note = {
  id: string;
  title: string;
  content: string;
  categoryId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export type NoteListResponse = {
  notes: Note[];
  total: number;
};
export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

axios.defaults.baseURL = 'https://next-v1-notes-api.goit.study';

// export const getNotes = async () => {
//   const res = await axios.get<NoteListResponse>('/notes');
//   return res.data;
// };

// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// export const getNotes = async () => {
//   await delay(2000);
//   const res = await axios.get<NoteListResponse>('/notes');
//   return res.data;
// };
// lib/api.ts

export const getNotes = async (categoryId?: string) => {
  const res = await axios.get<NoteListResponse>('/notes', {
    params: { categoryId },
  });
  return res.data;
};

export const getSingleNote = async (id: string) => {
  const res = await axios.get<Note>(`/notes/${id}`);
  return res.data;
};

export const getCategories = async () => {
  const res = await axios<Category[]>('/categories');
  return res.data;
};

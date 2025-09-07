export interface NoteService {
  createNote(content: string): Promise<{ id: string; content: string }>;
  readAll(): Promise<{ id: string; content: string | null }[]>;
}

export const NoteService = "NoteService";

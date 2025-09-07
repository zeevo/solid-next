"use server";

import { container } from "@/container";
import { NoteService } from "@solid-next/types";
import { revalidatePath } from "next/cache";

export async function createNote(formData: FormData) {
  const notes = container.resolve<NoteService>(NoteService);

  const content = formData.get("content");

  if (content) {
    await notes.createNote(content.toString());
    revalidatePath("/");
  }
}

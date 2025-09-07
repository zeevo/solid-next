import { container } from "@/container";
import { NoteService } from "@solid-next/types";
import { createNote } from "./actions";

export default async function Home() {
  const notes = container.resolve<NoteService>(NoteService);

  const all = await notes.readAll();

  return (
    <div className="flex flex-col max-w-2xlg mx-auto">
      <main className="pt-52 flex flex-col gap-4 items-center justify-center min-h-dvh text-center">
        <h1 className="flex gap-4 text-2xl">Notes</h1>
        <form
          action={createNote}
          className="w-full max-w-md shadow-md rounded-xl p-6 space-y-4 border"
        >
          <textarea
            id="content"
            name="content"
            placeholder="Write something inspiring..."
            className="border rounded-md p-3 w-full resize-none focus:outline-none focus:ring-2 "
            rows={3}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition-colors duration-200"
          >
            Save Note
          </button>
        </form>{" "}
        <div className="flex flex-col gap-4 w-full max-w-md">
          {all.map((note) => (
            <div
              key={note.id}
              className="border rounded-lg p-4 shadow-sm text-left"
            >
              {note.content}
            </div>
          ))}
        </div>{" "}
      </main>
    </div>
  );
}

import "reflect-metadata";
import { container } from "tsyringe";
import { NoteService } from "@solid-next/types";
import { DatabaseNoteService } from "@solid-next/services";

container.register(NoteService, {
  useClass: DatabaseNoteService,
});

export { container };

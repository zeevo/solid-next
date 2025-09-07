import { injectable } from "tsyringe";
import { DatabaseService } from "./database.service";
import { NoteService } from "@solid-next/types";

@injectable()
export class DatabaseNoteService implements NoteService {
  constructor(private database: DatabaseService) {}

  async readAll() {
    return await this.database.db
      .selectFrom("note")
      .orderBy("created_at", "desc")
      .select("id")
      .select("content")
      .execute();
  }

  async createNote(content: string) {
    const [row] = await this.database.db
      .insertInto("note")
      .values({
        content,
      })
      .returning("id")
      .returning("content")
      .execute();

    if (!row) {
      throw new Error("Unable to create note");
    }

    return row;
  }
}

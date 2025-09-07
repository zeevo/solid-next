import type { ColumnType } from "kysely";

export type Note = {
  id: ColumnType<string, never, never>;
  content: string;
  created_at: ColumnType<Date, Date | undefined, never>;
  updated_at: ColumnType<Date, Date | undefined, Date>;
};

export type Database = {
  note: Note;
};

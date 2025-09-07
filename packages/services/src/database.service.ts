import { Database } from "@solid-next/database";
import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";
import { injectable } from "tsyringe";

@injectable()
export class DatabaseService {
  db: Kysely<Database>;

  constructor() {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl:
        process.env.DATABASE_SSL === "true"
          ? { rejectUnauthorized: false }
          : undefined,
    });

    this.db = new Kysely<Database>({
      dialect: new PostgresDialect({ pool }),
    });
  }
}

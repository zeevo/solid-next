import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  sql`
create table note (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    content text not null,
    created_at timestamp with time zone default current_timestamp,
    updated_at timestamp with time zone default current_timestamp
);
`.execute(db);
}

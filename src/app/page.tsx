import styles from "./page.module.css";
import { sql } from "@vercel/postgres";
import Todos from "./components/todos";

export interface Todos {
  id: number;
  name: string;
}
export const revalidate = 1;

export default async function Home() {
  const { rows } = await sql`SELECT * FROM todos;`;

  const hasTodos = rows.length > 0;

  return (
    <main className={styles.main}>
      <section className={styles.todosWrapper}>
        <h1>Todos:</h1>
        {hasTodos ? <Todos rows={rows} /> : <p>Nothing to do</p>}
      </section>
    </main>
  );
}

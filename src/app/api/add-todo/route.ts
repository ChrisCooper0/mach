import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const name = searchParams.get("name");

  try {
    if (!id || !name) throw new Error("Id and Name fields are required");
    await sql`INSERT INTO todos (Id, Name) VALUES (${id}, ${name});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const todos = await sql`SELECT * FROM todos;`;
  return NextResponse.json({ todos }, { status: 200 });
}

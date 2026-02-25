import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { store } from "@/lib/store";

export async function GET() {
  const session = cookies().get("easycut_session")?.value;
  const user = store.users.find((u) => u.id === session);
  return NextResponse.json(user ? { id: user.id, email: user.email, name: user.name } : null);
}

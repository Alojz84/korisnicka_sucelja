import { NextResponse } from "next/server";
import { reviews } from "@/lib/reviewsStore";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const review = reviews.find((r) => r.id === params.id);

  if (!review) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(review);
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const index = reviews.findIndex((r) => r.id === params.id);

  if (index === -1) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  reviews.splice(index, 1);
  return NextResponse.json({ success: true });
}
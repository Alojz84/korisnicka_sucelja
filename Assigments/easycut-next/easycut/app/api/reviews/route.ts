import { NextResponse } from "next/server";
import { reviews, Review } from "@/lib/reviewsStore";

export async function GET() {
  return NextResponse.json(reviews);
}

export async function POST(req: Request) {
  const body = await req.json();

  const newReview: Review = {
    id: crypto.randomUUID(),
    author: body.author,
    title: body.title,
    content: body.content,
    rating: body.rating,
    createdAt: new Date().toISOString(),
  };

  reviews.unshift(newReview);
  return NextResponse.json(newReview);
}
import { NextResponse } from "next/server";
import { posts } from "@/utils/db";

export function GET() {
  const data = posts;
  return NextResponse.json({ data });
}

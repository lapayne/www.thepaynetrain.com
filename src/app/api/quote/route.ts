import { NextResponse } from "next/server";
import { getRandomQuote } from "@/lib/quotes";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const quote = getRandomQuote();
    return NextResponse.json(quote);
  } catch (error) {
    console.error("Failed to get quote:", error);
    return NextResponse.json(
      {
        text: "Simplicity is the soul of efficiency.",
        author: "Austin Freeman",
      },
      { status: 500 },
    );
  }
}

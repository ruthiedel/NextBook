import { gbooks as books } from "../../../lib/gbooks";
import { NextResponse } from "next/server"; // Make sure to import NextResponse
import { NextRequest } from "next/server"; // Import NextRequest for type annotations

interface Book {
  id: number;
  title: string;
  price: number; // Include price
  description: string; // Include description
  category: string; // Include category
  img: string; // This can map to the image property
  rating: { // Include rating
      rate: number;
      count: number;
  };
}

let booksData: any[] = [...books]; 

export async function GET() {
  return new Response(JSON.stringify(booksData), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}



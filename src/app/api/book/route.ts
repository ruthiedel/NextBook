import { gbooks as books } from "../../../lib/gbooks";
import { NextResponse } from "next/server"; // Make sure to import NextResponse
import { NextRequest } from "next/server"; // Import NextRequest for type annotations

interface Book {
  id: number;
  title: string;
  price: number; 
  description: string; // Include description
  category: string; // Include category
  img: string; // This can map to the image property
  rating: { // Include rating

      rate: number;
      count: number;
  };
}

let booksData: any[] = [...books]; 

export async function GET(request:Request) {
  return new Response(JSON.stringify(booksData), {
    status: 200,
    headers: { 
      
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}



  export async function POST(request: NextRequest) {
    const newBook = await request.json();  // קריאת הנתונים שנשלחו
    console.log('New Book:', newBook);  // בדיקה של המידע שנשלח
    return NextResponse.json(newBook, { status: 201 });
}

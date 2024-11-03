import { gbooks as books } from "../../../../lib/gbooks";
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







export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
    const updatedBook: Partial<Book> = await request.json();
    const { id } = params;

    const index = booksData.findIndex(book => book.id === Number(id));

    if (index !== -1) {
        booksData[index] = { ...booksData[index], ...updatedBook };
        return NextResponse.json(booksData[index]);
    } else {
        return NextResponse.json({ error: 'Book not found' }, { status: 404 });
    }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {

    try {
        const { id } = params;
        const index = booksData.findIndex(book => book.id == Number(id)); 

        if (index !== -1) {
            booksData.splice(index, 1); 
            return NextResponse.json({ message: 'Book deleted' }); 
        } else {
            return NextResponse.json({ error: 'Book not found' }, { status: 404 }); 
        }

    }
    catch {
        return NextResponse.json({ error: 'Failed to delete book' }, { status: 500 });  // Return a 500 status for server errors
    }
}

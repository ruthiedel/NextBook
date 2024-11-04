"use client";
import  http  from "./http";


 type book = {
  id: number;
  title: string;
  author: string;
  image:string
}


export async function getBooks()
{

  const response = await http.get('/book');
  return response.data; 
}
export async function createBook(card: Omit<book, 'id'>) {

  try {
    console.log("Sending POST request to /book"); // הדפסה לפני השליחה
    const response = await  http.post('/book', card);

    console.log("POST request successful:", response); // הדפסה אם הצליח
    return response;
} catch (error) {
    console.error("POST request failed:", error); // הודעת שגיאה
    throw error;
}
}


export async function updateBook(id:any, card:book)
{
    return http.patch(`/book/${id}`, card)
}

export async function deleteBook(id:any)
{
    return http.delete(`/book/${id}`)
}
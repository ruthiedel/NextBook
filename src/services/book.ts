"use server";
import { httpBook as http } from "./http.ts";


 type book = {
  id: number;
  title: string;
  author: string;
  image:string
}


export async function getBooks()
{

  const response = await http.get('/');
  return response.data; // החזר את הנתונים מתוך התגובה
}

export async function createBook(card:book)
{
    return http.post('/', card)
}

export async function updateBook(id:any, card:book)
{
    return http.patch(`/${id}`, card)
}

export async function deleteBook(id:any)
{
    return http.delete(`/${id}`)
}
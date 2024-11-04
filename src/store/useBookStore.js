import { create } from 'zustand';

const useBookStore = create((set) => ({
  books: [],
  
  addBook: (book) => set((state) => ({
    books: [...state.books, book]
  })),

  addBooks: (newBooks) => set((state) => ({
    books: [...state.books, ...newBooks]
  })),

  removeBook: (bookId) => set((state) => ({ 
    books: state.books.filter(book => book.id !== bookId) 
  })),

  updateBook: (updatedBook) => set((state) => ({
    books: state.books.map(book => book.id === updatedBook.id ? updatedBook : book)
  })),

  clearBooks: () => set({ books: [] }),
}));

export default useBookStore;
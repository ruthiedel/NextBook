
"use client"
import React, { useRef } from 'react';
import useBookStore from '@/store/useBookStore';
import styles from './NewBookForm.module.css';
import { createBook } from '@/services/book'; 


const NewBookForm = () => {

    const titleRef = useRef<HTMLInputElement>(null);
    const authorRef = useRef<HTMLInputElement>(null);
  
    const  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const title = titleRef.current?.value.trim();
      const author = authorRef.current?.value.trim();
      
      if (title && author) {
        const newBook = {
          title,
          author,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/330px-The_Great_Gatsby_Cover_1925_Retouched.jpg',
        };
        await createBook(newBook)
        if (titleRef.current) titleRef.current.value = '';
        if (authorRef.current) authorRef.current.value = '';
      }
    };
  
    return (
      <div className={styles.container}>
        <h2 className={styles.h2}>Add New Book</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.div}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              ref={titleRef}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.div}>
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              ref={authorRef}
              required
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.button}>Add Book</button>
        </form>
      </div>
    );
  };
  
  export default NewBookForm;

"use client"; // הוסף שורה זו


import React from 'react';
import styles from './Menu.module.css';
import { AxiosResponse } from 'axios';

type Product = {
    id: number;
    title: string;
    author: string;
    image: string;
};

type MenuProps = {
    title: string;
    fetchItems: () => Promise<Product[]>;
    deleteItem: (id: number) => Promise<AxiosResponse<any, any>>; 
};

function Menu({ title, fetchItems, deleteItem }: MenuProps) {
    const [items, setItems] = React.useState<Product[]>([]);

    React.useEffect(() => {
        const getItems = async () => {
            const result = await fetchItems();
            console.log(result);
            setItems(result);
        };

        getItems();
    }, [fetchItems]);

    const handleDelete = async (id: number) => {
        await deleteItem(id); 
        setItems(items.filter(item => item.id !== id)); 
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <ul className={styles.list}>
                {items.map((item) => (
                    <li key={item.id} className={styles.listItem}>
                        <img src={item.image} alt={item.title} className={styles.bookImage} />
                        <div className={styles.bookDetails}>
                            <h3>{item.title}</h3>
                            <p>{item.author}</p>
                            <button className={styles.deleteButton} onClick={() => handleDelete(item.id)}>
                                מחיקה
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Menu;


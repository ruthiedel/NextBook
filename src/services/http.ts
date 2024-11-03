import axios from "axios";

export  const httpBook = axios.create({
    baseURL: "http://localhost:3000/api/book",

    headers: {
        "Content-type": "application/json"
    }
});


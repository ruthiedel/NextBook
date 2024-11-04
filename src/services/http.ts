import axios from "axios";

 const http = axios.create({
    baseURL: "api/book",

    headers: {
        "Content-type": "application/json"
    }
});

export default http
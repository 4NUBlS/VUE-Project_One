import axios from "axios";

const isDevelopment = process.env.NODE_ENV !== 'production'

export default axios.create({
    baseURL: isDevelopment ? "http://localhost:9000/api" : '',
    headers: {
        "Content-type": "application/json"
    }
});

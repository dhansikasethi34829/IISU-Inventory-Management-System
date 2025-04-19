import axios from "axios";

const Instance = axios.create({
    // baseURL: `https://stock-menegement-back.onrender.com`,
    // baseURL: "http://localhost:8080/",
    baseURL:"https://iisu-inventory-management-system-back.onrender.com",
    withCredentials:true,
});

export default Instance;

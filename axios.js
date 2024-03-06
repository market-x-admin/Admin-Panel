import axios from "axios";

const instance = axios.create({
    baseURL: ("https://16.171.125.5")
})

export default instance
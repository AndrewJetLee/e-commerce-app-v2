import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmZiOTA1NzM2NjkzODQ5Y2RkYThiMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDIxNDMzOCwiZXhwIjoxNjQwNDczNTM4fQ.qfQI3zF5xKawSwRb2niDW9pv_RVmbxg335lUJ1zbzZg";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}`}
})
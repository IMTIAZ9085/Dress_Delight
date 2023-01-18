import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjVhMmY0MDE0MDdmZjM2NDc4N2I5MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Mzk4MjE4MywiZXhwIjoxNjc0MjQxMzgzfQ.nblds0hTUEg7Dsq1BWZKAfxme00W_Vi7UyNELCRAfQg";

export const publicRequest = axios.create({
      baseURL: BASE_URL,
});

export const userRequest = axios.create({
      baseURL: BASE_URL,
      headers: {token:`Bearer ${TOKEN}`},
});

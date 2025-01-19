// src/features/Auth/AuthService.js
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api';

export const loginUser = async (username, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/login/`, { username, password });
        // if (response.ok) {
        //     // 成功處理
        //     this.setState({ message: response.data.message }); // 儲存成功訊息
        // } else {
        //     // 錯誤處理
        //     this.setState({ error: response.data.error || "An error occurred" }); // 儲存錯誤訊息
        // }
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

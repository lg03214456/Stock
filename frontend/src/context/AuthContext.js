import React, { createContext, useState } from 'react';

// 創建 Context
export const AuthContext = createContext();

// Provider 組件
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 管理是否登入
    const [user, setUser] = useState(null);             // 儲存用戶信息

    // 登入邏輯
    const login = (userData) => {
        setIsLoggedIn(true); // 設置為登入狀態
        setUser(userData);   // 保存用戶信息
    };

    // 登出邏輯
    const logout = () => {
        setIsLoggedIn(false); // 設置為登出狀態
        setUser(null);        // 清空用戶信息
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

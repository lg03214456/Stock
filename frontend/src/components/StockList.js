import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api'; // 引入 API 函數

const StockList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts(); // 發送 API 請求
                setProducts(data); // 更新狀態
            } catch (error) {
                console.error('Error loading products:', error);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    if (loading) {
        return <p>Data Loading...</p>;
    }

    return (
        <div>
            <h1>產品列表</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - 價格: {product.price} - 庫存: {product.stock} -建立時間:{product.created_at} --更新時間:{product.updated_at}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StockList;

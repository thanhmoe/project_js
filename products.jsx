import React, { useState } from "react";
import ProductList from "../assets/data/productsData.jsx";
import './products.css';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space, Select } from 'antd';

const { Search } = Input;
const { Option } = Select;


export default function Products() {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('');

    const onSearch = (value) => {
        setSearchQuery(value);
    };

    const handleSortChange = (value) => {
        setSortOption(value);
    };

    return (
        <>
            <h2>Products</h2>
            <div className="searchbar">
                <Space direction="vertical">
                    <Search
                        placeholder="input search text"
                        onSearch={onSearch}
                        style={{ width: 200 }}
                    />
                    <Select defaultValue="" style={{ width: 200 }} onChange={handleSortChange}>
                        <Option value="">Sorting</Option>
                        <Option value="name-asc">Name A-Z</Option>
                        <Option value="name-desc">Name Z-A</Option>
                        <Option value="price-asc">Price Low-High</Option>
                        <Option value="price-desc">Price High-Low</Option>
                    </Select>
                </Space>
            </div>
            <div className="productsList">
                <ProductList searchQuery={searchQuery} sortOption={sortOption} />
            </div>
        </>
    );
}

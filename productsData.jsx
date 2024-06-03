import React from "react";
import '/src/page/products.css';

const productsData = [
    {
        id: '1',
        productName: 'Product 1',
        description: 'this is a product 1',
        price: 100,
        Chip: 'intel',
        Display: '1920x980',
        image: '/src/assets/data/productsImage/8039_asus.jpg'
    },
    {
        id: '2',
        productName: 'Product 2',
        description: 'this is a product 2',
        price: 200,
        Chip: 'intel',
        Display: '1920x980',
        image: '/src/assets/data/productsImage/legion_01.jpg'
    },
    {
        id: '3',
        productName: 'Product 3',
        description: 'this is a product 3',
        price: 1000,
        Chip: 'intel',
        Display: '1920x980',
        image: '/src/assets/data/productsImage/rog_01.jpg'
    },
    {
        id: '4',
        productName: 'Product 4',
        description: 'this is a product 4',
        price: 600,
        Chip: 'intel',
        Display: '1920x980',
        image: '/src/assets/data/productsImage/dell_pricion_02.jpg'
    },
    {
        id: '5',
        productName: 'Product 5',
        description: 'this is a product 5',
        price: 250,
        Chip: 'intel',
        Display: '1920x980',
        image: '/src/assets/data/productsImage/tuf_01.jpg'
    },
];

const ProductList = ({ searchQuery, sortOption }) => {
    const filterAndSortProducts = (products, query, sort) => {
        let filteredProducts = products.filter(product =>
            product.productName.toLowerCase().includes(query.toLowerCase())
        );

        switch (sort) {
            case 'name-asc':
                filteredProducts.sort((a, b) => a.productName.localeCompare(b.productName));
                break;
            case 'name-desc':
                filteredProducts.sort((a, b) => b.productName.localeCompare(a.productName));
                break;
            case 'price-asc':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }

        return filteredProducts;
    };

    const filteredProducts = filterAndSortProducts(productsData, searchQuery, sortOption);

    return (
        <div className="productList">
            {filteredProducts.map(product => (
                <div key={product.id} className="productInfo">
                    <img className="image" src={product.image} alt={product.productName} />
                    <h3>Name: {product.productName}</h3>
                    <p>Description: {product.description}</p>
                    <p>Chip: {product.Chip}</p>
                    <p>Display: {product.Display}</p>
                    <h3>Price: {product.price}$</h3>
                    <button className="btnBuy">Add to cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;

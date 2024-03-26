import React from 'react';
import { useState } from 'react'

function ShoppingListForm({ onSubmit }) {
    const [formData, setFormData] = useState({ product: "", quantity: 0 });

    const handleChange = (evt) => {
        setFormData((prevData) => {
            return {
                ...prevData,
                [evt.target.name]: evt.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ product: "", quantity: 0 });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Product is: {formData.product} and quantity is: {formData.quantity} </h1>
            <label htmlFor='Product'> Product Name </label>
            <input
                type="text"
                placeholder='product name'
                name="product"
                id="Product"
                onChange={handleChange}
                value={formData.product}
            />
            <label htmlFor='Quantity'> Quantity </label>
            <input
                type="number"
                placeholder='0'
                name="quantity"
                id="Quantity"
                onChange={handleChange}
                value={formData.quantity}
            />
            <button type="submit"> Add Item </button>
        </form>
    );

}

export default ShoppingListForm
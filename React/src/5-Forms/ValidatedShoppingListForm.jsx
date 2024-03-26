import React from 'react';
import { useState } from 'react'

function ValidatedShoppingListForm({ onSubmit }) {
    const [formData, setFormData] = useState({ product: "", quantity: 0 });
    const [productIsValid, setProductIsValid] = useState(false);

    const validate = (i) => {
        if (i.length === 0) {
            setProductIsValid(false);
        } else {
            setProductIsValid(true);
        }
    }

    const handleChange = (evt) => {
        if (evt.target.name === "product") {
            validate(evt.target.value);
        }

        setFormData((prevData) => {
            return {
                ...prevData,
                [evt.target.name]: evt.target.value
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (productIsValid) {
            onSubmit(formData);
            setFormData({ product: "", quantity: 0 });
            setProductIsValid(false);
        };
    };

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
            {!productIsValid &&
                (<p style={{ color: "red" }}> Product name can not be empty! </p>
                )}
            <label htmlFor='Quantity'> Quantity </label>
            <input
                type="number"
                placeholder='0'
                name="quantity"
                id="Quantity"
                onChange={handleChange}
                value={formData.quantity}
            />
            <button disabled={!productIsValid}> Add Item </button>
        </form>
    );

}

export default ValidatedShoppingListForm
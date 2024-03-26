import { useState } from 'react';
import ValidatedShoppingListForm from './ValidatedShoppingListForm'
import { v4 as uuid } from 'uuid';

// https://react-hook-form.com/

export default function ShoppingList() {
    const [items, setItems] = useState([
        { id: uuid(), product: "Milk", quantity: 2 },
        { id: uuid(), product: "Banana", quantity: 3 },
    ]);

    const addItem = (i) => {
        // if (!i.product || !i.quantity) return;
        setItems((prevItems) => {
            return [...prevItems, { ...i, id: uuid() }];
        });
    }

    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map(i =>
                    <li key={i.id}>
                        {i.product} - {i.quantity}
                    </li>
                )}
            </ul>
            <ValidatedShoppingListForm onSubmit={addItem} />
        </div>
    )
}
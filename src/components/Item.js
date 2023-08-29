import React from "react";

function Item({ item, handleAddToCart, handleDeleteItem }) {
  function onAddToCart(event) {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isInCart: !item.isInCart }),
    })
      .then(r => r.json())
      .then(updatedItem => handleAddToCart(updatedItem));
  }

  function onDeleteItem(event) {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "DELETE",
    });
    handleDeleteItem(item.id);
  }

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button
        onClick={onAddToCart}
        className={item.isInCart ? "remove" : "add"}
      >
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button onClick={onDeleteItem} className="remove">
        Delete
      </button>
    </li>
  );
}

export default Item;

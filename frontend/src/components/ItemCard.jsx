import { Link } from "react-router-dom";

function ItemCard({ item, onDelete }) {
  const inStock = item.quantity > 0;

  return (
    <div className="card">
      <img
        src={item.imageUrl || "https://placehold.co/400x220?text=Item"}
        alt={item.name}
        className="card-image"
      />
      <h3>{item.name}</h3>
      <p><strong>Category:</strong> {item.category}</p>
      <p><strong>Price:</strong> ${item.price}</p>
      <p>
        <strong>Stock:</strong>{" "}
        <span className={`badge ${inStock ? "badge-in-stock" : "badge-out-stock"}`}>
          {inStock ? `${item.quantity} In Stock` : "Out of Stock"}
        </span>
      </p>
      <p>{item.description}</p>

      <div className="card-actions">
        <Link className="btn secondary" to={`/edit-item/${item._id}`}>Edit</Link>
        <button className="btn danger" onClick={() => onDelete(item._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
import "./Product.css";
import styled from "styled-components";
const Product = (props) => {
  const { removeItemFromBasket, addItemToBasket } = props;
  // const { removeItemFromBasket, addItemToBasket } = props;
  const { id, name, price, highlight, image, inStock } = props.product;
  // const {
  //   id,
  //   name,
  //   price,
  //   highlight,
  //   image,
  //   inStock,
  //   removeItemFromBasket,
  //   addItemToBasket
  // } = product;
  return (
    <div className="product">
      <div className="product_details-media">
        <img src={image} alt={name} />
        <div className="product_details">
          <span className="product_name">{name}</span>
          <div className="product_details-price_wrapper">
            <span>from</span>
            <span>
              <span className="product_details-price">£{price}</span> a month
            </span>
          </div>
        </div>
      </div>
      <div
        className={
          highlight
            ? "product_details-extra_info"
            : "product_details-extra_info-end"
        }
      >
        {highlight && (
          <div className="product_highlight-wrapper">
            <span className="product_highlight">{highlight}</span>
          </div>
        )}
        {inStock ? (
          removeItemFromBasket ? (
            <button
              className="product_details-add-to-basket"
              onClick={() => removeItemFromBasket(id)}
            >
              Remove from basket
            </button>
          ) : (
            <button
              className="product_details-add-to-basket"
              onClick={() => addItemToBasket(id)}
            >
              Add to basket
            </button>
          )
        ) : (
          <button className="product_details-add-to-basket-disabled">
            Out of stock
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;

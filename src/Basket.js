import "./Basket.css";

import ProductList from "./ProductList";

const Basket = ({ basketItems, removeItemFromBasket }) => {
  return (
    <div className="basket_wrapper">
      {basketItems.length === 0 ? (
        <div className="basket_wrapper-empty">
          <span>Empty basket</span>
        </div>
      ) : (
        <>
          <span className="basket_header">
            Basket:{" "}
            <span className="basket_header-counter">{basketItems.length}</span>
          </span>
          <ProductList
            products={basketItems}
            removeItemFromBasket={removeItemFromBasket}
          />
        </>
      )}
    </div>
  );
};

export default Basket;

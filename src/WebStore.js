import { useState } from "react";

import Header from "./Header";
import Basket from "./Basket";
import ProductList from "./ProductList";

import data from "./products.json";

import "./WebStore.css";

const StoreFront = () => {
  const [basket, setBasket] = useState([]);
  const [basketToggle, setBasketToggle] = useState(false);

  const findProduct = (id) => data.filter((item) => item.id === id);

  const removeItemFromBasket = (id) => {
    const newData = basket.filter((item) => item.id !== id);
    setBasket(newData);
  };

  const addItemToBasket = (id) => {
    const product = basket.concat(findProduct(id));
    setBasket(product);
  };

  return (
    <div className="webstore_wrapper">
      <Header
        basketItems={basket}
        basketToggle={basketToggle}
        setBasketToggle={setBasketToggle}
      />
      {basketToggle && (
        <Basket
          // basketHandler={removeItemFromBasket}
          basketItems={basket}
          removeItemFromBasket={removeItemFromBasket}
          addItemToBasket={addItemToBasket}
        />
      )}
      <ProductList
        // basketHandler={addItemToBasket}
        products={data}
        addItemToBasket={addItemToBasket}
      />
    </div>
  );
};

export default StoreFront;

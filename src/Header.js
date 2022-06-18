import ChevronDown from "./ChevronDown";
import ChevronUp from "./ChevronUp";
import "./Header.css";

const Header = ({ basketItems, basketToggle, setBasketToggle }) => {
  return (
    <div className="header_wrapper">
      <img
        src="https://www.sky.com/assets/masthead/images/sky-logo.png"
        className="logo"
        alt="Sky logo"
      />
      <div className="nav_wrapper">
        <div className="nav_items-wrapper">
          <span className="nav_item nav_item_active">Mobile</span>
          <span className="nav_item">Broadband</span>
          <div className="nav_item">
            <span className="nav_item-label">Sky Glass</span>
            <ChevronDown />
          </div>
        </div>
        <div
          className="nav_item-basket"
          onClick={() => setBasketToggle(!basketToggle)}
        >
          <span className="nav_item-label">Basket ({basketItems.length})</span>
          {basketToggle ? <ChevronUp /> : <ChevronDown />}
        </div>
      </div>
    </div>
  );
};

export default Header;

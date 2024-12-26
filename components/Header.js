import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  allProduct,
  fetchProducts,
  gettingProductsError,
} from "../slices/ProductReducer";
import { useEffect } from "react";

export default function Header() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch(allProduct(data));
      })
      .catch(() => {
        dispatch(gettingProductsError());
      });
  }, []);
  const cartItems = useSelector((state) => state.cartItems);
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count">
            {cartItems.reduce(
              (accumulater, curr) => accumulater + curr.quantity,
              0
            )}
          </div>
        </Link>
      </div>
    </header>
  );
}

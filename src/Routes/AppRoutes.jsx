import { Routes, Route } from "react-roiduter-dom";
import Dashboard from "../Components/Dashboard";
import Products from "../Components/Products";
import Users from "../Components/Users";
import UserDetails from "../Components/UserDetails";
import Cart from "../Components/Cart";
import CartDetails from "../Components/CartDetails";
import ProductDetails from "../Components/ProductDetails";
import Posts from "../Components/Posts";
import PostDetails from "../Components/PostDetails";
import ToDo from "../Components/ToDo";
import Comments from "../Components/Comments";
import Quotes from "../Components/Quotes";
import Recipes from "../Components/Recipes";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:" element={<ProductDetails />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user-details/:id" element={<UserDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart-details" element={<CartDetails/>} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post-details" element={<PostDetails />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/comments" element={<Comments/>} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </>
  )
}

export default AppRoutes
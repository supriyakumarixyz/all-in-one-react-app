import { Routes, Route } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import Products from "../Components/Products";
import Users from "../Components/Users";
import UserDetails from "../Components/UserDetails";
import Cart from "../Components/Cart";
import CartDetails from "../Components/CartDetails";
import ProductDetails from "../Components/ProductDetails";
import Posts from "../Components/Posts";
import ToDo from "../Components/ToDo";
import Comments from "../Components/Comments";
import Quotes from "../Components/Quotes";
import Recipes from "../Components/Recipes";
import AllPosts from "../Components/AllPosts";
import AllCarts from "../Components/AllCarts";
import ViewReceipe from "../Components/ViewReceipe";


function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user-details/:id" element={<UserDetails />} />
        <Route path="/user-cart" element={<Cart />} />
        <Route path="/carts" element={<AllCarts />} />
        <Route path="/user-cart/:id" element={<CartDetails/>} />
        <Route path="/user-posts/:id" element={<Posts />} />
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/comments/:id" element={<Comments/>} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/view-recipe/:id" element={<ViewReceipe/>} />

      </Routes>
    </>
  )
}

export default AppRoutes
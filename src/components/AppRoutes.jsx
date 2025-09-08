import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home";
import Comment from "../pages/Comment";
import Counter from "../pages/Counter";
import Products from "../pages/Products";
import Profile from "../pages/Profile";
import Todo from "../pages/Todo";
import Weather from "../pages/Weather";
import Navigation from "./Navigation";

function AppRoutes() {
  return (
    <HashRouter>
        <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/comments" element={<Comment />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/weather" element={<Weather />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;

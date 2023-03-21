import React from "react";
import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom';

function Home() {
    return <div>Home</div>;
}

function Products() {
    return <div>Products</div>;
}

function Product() {
    let params = useParams();
    console.log(params);
    return <div>Individual product page: {params.id}</div>;
}

function Contact() {
    return <div>Contact</div>;
}

function RouteNotFound() {
    return <div>Page not found</div>;
}

function Nav() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
          <Link to="/product/222">Product with ID: 222</Link>
            </li>
        </ul>
      </nav>
    );
  }

function Header() {
    return (
    <header>
        <div>Header with Logo and nav</div>
        <Nav />
    </header>
    );
}
  
function Footer() {
    return <footer>Website footer</footer>;
}

function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

function App9() {
    return (
        <div>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<RouteNotFound />} />
            </Route>
        </Routes>
        </div>
    );
}

export default App9;
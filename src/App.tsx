import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Products from "./pages/Products";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import HomePage from "./pages/HomePage";
import SingleProductPage from "./pages/SingleProductPage";
import NotFoundPage from "./pages/NotFoundPage";

const App: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        {/* The index route renders the HomePage */}
        <Route index element={<HomePage />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="products/:id" element={<SingleProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;

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

const App: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        {/* The index route renders the HomePage */}
        <Route index element={<HomePage />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FAQ />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;

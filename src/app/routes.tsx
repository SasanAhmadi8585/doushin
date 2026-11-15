import { createBrowserRouter, Navigate } from "react-router"
import { SiteLayout } from "../components/SiteLayout"
import { ContactPage } from "../pages/ContactPage"
import { HomePage } from "../pages/HomePage"
import { ProductDetailPage } from "../pages/ProductDetailPage"
import { ProductsPage } from "../pages/ProductsPage"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SiteLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "products", Component: ProductsPage },
      { path: "products/:slug", Component: ProductDetailPage },
      { path: "contact", Component: ContactPage },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
])

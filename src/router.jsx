// router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App"; // ✅ Make sure App is imported
import HomePage from "./Page/Home/page";
import Product from "./Page/Product/page";
import About from "./Page/AboutUs/page";
import ContactPage from "./Page/ContactUs/page";
import Like from "./Page/Like/page";
import SinglePage from './Page/SinglePage/page'
import LocationPage from "./Page/Location/page";
import CartPage from "./Page/Cart/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <>Error Page not found 404</>, // ✅ Optional: extract to its own component
    children: [
      {
        index: true, // ✅ Correct usage for default route
        element: <HomePage />,
      },
      {
        path: "homepage",
        element: <HomePage />,
      },
      {
        path: "productpage",
        element: <Product />,
      },
      {
        path: "aboutpage",
        element: <About />,
      },
      {
        path: "contactpage",
        element: <ContactPage />,
      },
      {
        path: "likepage",
        element: <Like/>,
      },
      {
        path:"product/:id",
        element:<SinglePage/>
      },
      {
        path:"locationpage",
        element:<LocationPage/>
      },
      {
        path:"cartpage",
        element:<CartPage/>
      }
    ],
  },
]);

export default router; // ✅ So you can import it in main.jsx

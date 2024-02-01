import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Layouts/Main";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Product from "./Components/Product/Product";
import GetTicket from "./Components/GetTicket/GetTicket";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",

        element: <Products></Products>,
      },
      {
        path: "/product/:productsId",
        loader: async ({ params }) => {
          return fetch(`https://api.tvmaze.com/shows/${params.productsId}`);
        },
        element: <Product></Product>,
      },
      {
        path: "/products/:getTicketId",
        loader: async ({ params }) => {
          return fetch(`https://api.tvmaze.com/shows/${params.getTicketId}`);
        },
        element: <GetTicket></GetTicket>,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;

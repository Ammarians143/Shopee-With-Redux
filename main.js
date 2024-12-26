import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { store } from "./store";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

import { createBrowserRouter } from "react-router";
import About from "../pages/About";
import Home from "../pages/Home";
import RootLayout from "../layouts/RootLayout";
import Contacts from "../pages/Contacts";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "contacts", Component: Contacts },
      { path: "about", Component: About },
    ],
  },
]);


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import ErrorPage from "./404";

import AboutMe from "./routes/AboutMe";
import Portfolio from "./routes/Portfolio";
import ContactMe from "./routes/ContactMe";
import Library from "./routes/Library";

import TestArea from "./admin/TestArea";

import NavCTXProvider from "./context/nav-ctx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about_me",
        element: <AboutMe />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact_me",
        element: <ContactMe />,
      },
      {
        path: "/echouix",
        element: <Library />,
      },
    ],
  },
  {
    path: "/test",
    element: <TestArea />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavCTXProvider>
      <RouterProvider router={router} />
    </NavCTXProvider>
  </StrictMode>
);

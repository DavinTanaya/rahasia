import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";

/*
.app-layout {
  display: grid;
  grid-template-columns: 40rem 1fr;
}

*/

// 1. Bikin router
const router = createBrowserRouter([
  {
    // "/" cmn buat URL di awal
    // "www.tjongklak.com/dashboard"
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        // Ini ga pake "/" gara2 nested
        path: "website",
        element: <div>Website</div>,
      },
      {
        path: "events",
        element: <div>Event Page</div>,
      },
    ],
  },
  {
    path: "/login",
    element: <div>Login</div>,
  },
  {
    path: "/home",
    element: <div>Home</div>,
  },
]);

// 2. Set komponen Router
export default function App() {
  return <RouterProvider router={router} />;
}

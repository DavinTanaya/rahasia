import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

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
    element: (
      <div className="grid grid-cols-[20rem_1fr] min-h-screen">
        <div className="bg-brown flex flex-col">
          <Link to={"/dashboard/events"}>Kelola Events</Link>
          <Link to={"/dashboard/website"}>Website Tjongklak</Link>
        </div>
        <main className="bg-bg">
          <Outlet />
        </main>
      </div>
    ),
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
    element: <div>Login</div>,
  },
]);

// 2. Set komponen Router
export default function App() {
  return <RouterProvider router={router} />;
}

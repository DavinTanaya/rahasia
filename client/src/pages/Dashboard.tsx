import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-[20rem_1fr] min-h-screen">
      <div className="bg-brown flex flex-col">
        <Link to={"/dashboard/events"}>Kelola Events</Link>
        <Link to={"/dashboard/website"}>Website Tjongklak</Link>
      </div>
      <main className="bg-bg">
        <Outlet />
      </main>
    </div>
  );
}

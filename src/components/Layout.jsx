import { Link } from "react-router-dom";
import TenantSwitcher from "./TenantSwitcher";
import { useAuth } from "../context/AuthContext";

export default function Layout({ children }) {
  const { tenant, role } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100">
      {/* Top Bar */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg p-4 flex justify-between items-center">
        <h2 className="text-white text-xl font-bold tracking-wide">
          🚀 Sales Dashboard
        </h2>

        <div className="text-white text-sm">
          Tenant:{" "}
          <span
            className={`px-2 py-1 rounded ${
              tenant === "A"
                ? "bg-green-400/30"
                : "bg-purple-400/30"
            }`}
          >
            Org {tenant}
          </span>{" "}
          | Role:{" "}
          <span
            className={`px-2 py-1 rounded ${
              role === "Admin"
                ? "bg-yellow-400/40"
                : "bg-pink-400/40"
            }`}
          >
            {role}
          </span>
        </div>
      </header>

      <TenantSwitcher />

      {/* Nav */}
      <nav className="flex justify-center gap-6 py-4">
        <Link
          className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
          to="/"
        >
          Leads
        </Link>
        <Link
          className="px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition"
          to="/calls"
        >
          Call Logs
        </Link>
      </nav>

      <main className="p-6 max-w-5xl mx-auto">{children}</main>
    </div>
  );
}

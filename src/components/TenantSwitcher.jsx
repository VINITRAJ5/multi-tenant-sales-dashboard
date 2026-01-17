import { useAuth } from "../context/AuthContext";

export default function TenantSwitcher() {
  const { tenant, setTenant, role, setRole } = useAuth();

  return (
    <div className="flex justify-center gap-6 py-4">
      <select
        className="border-2 border-green-400 px-4 py-2 rounded-lg bg-green-50 focus:outline-none"
        value={tenant}
        onChange={(e) => setTenant(e.target.value)}
      >
        <option value="A">Organization A</option>
        <option value="B">Organization B</option>
      </select>

      <select
        className="border-2 border-yellow-400 px-4 py-2 rounded-lg bg-yellow-50 focus:outline-none"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option>Admin</option>
        <option>Agent</option>
      </select>
    </div>
  );
}

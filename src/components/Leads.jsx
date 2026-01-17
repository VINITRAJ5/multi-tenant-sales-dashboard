import { useState } from "react";
import { leads } from "../data/mockData";
import { useAuth } from "../context/AuthContext";

export default function Leads() {
  const { tenant, role } = useAuth();
  const [filter, setFilter] = useState("All");

  let data = leads[tenant];
  if (filter !== "All") data = data.filter((l) => l.status === filter);

  return (
    <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-xl">
      <div className="flex justify-between mb-4">
        <h3 className="font-bold text-lg text-blue-700">📋 Leads</h3>

        <select
          className="border px-3 py-1 rounded-lg bg-blue-50"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>New</option>
          <option>Contacted</option>
          <option>Qualified</option>
        </select>
      </div>

      <div className="space-y-3">
        {data.map((l) => (
          <div
            key={l.id}
            className="flex justify-between items-center p-3 rounded-lg border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 to-white hover:shadow-md transition"
          >
            <span className="font-medium">
              {l.name} | {l.phone} |{" "}
              <span className="text-indigo-600">{l.status}</span>
            </span>

            {role === "Admin" && (
              <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
                Edit
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

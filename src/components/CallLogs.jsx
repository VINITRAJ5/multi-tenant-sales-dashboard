import { calls } from "../data/mockData";
import { useAuth } from "../context/AuthContext";

export default function CallLogs() {
  const { tenant } = useAuth();

  return (
    <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-xl">
      <h3 className="font-bold text-lg mb-4 text-indigo-700">📞 Call Logs</h3>

      <div className="space-y-3">
        {calls[tenant].map((c) => (
          <div
            key={c.id}
            className="p-3 rounded-lg border-l-4 border-indigo-500 bg-gradient-to-r from-indigo-50 to-white hover:shadow-md transition"
          >
            <span className="font-medium">
              {c.name} | {c.time} | {c.duration} |{" "}
              <span className="text-indigo-600">{c.outcome}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

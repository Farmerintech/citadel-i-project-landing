"use client";

import StudentGuard from "@/app/components/studentsGuard";
import { useAuthStore } from "@/app/store/user";
import { useState, useEffect } from "react";


type Assignment = {
  id: number;
  teacherName: string;
  subject: string;
  className: string;
  startDate: string;
  endDate: string;
};

type Subscription = {
  name: string;
  startDate: string;
  endDate: string;
  type: "weekly" | "monthly" | "yearly";
};

export default function StudentDashboard() {
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [data, setData] = useState<Assignment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 6;

  /* ================= FETCH SUBSCRIPTIONS ================= */
  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const res = await fetch(
          "https://api.citadel-i.com.ng/api/v1/student/subscriptions",
          { credentials: "include" }
        );
        const result = await res.json();
        setSubscriptions(result.data || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSubscriptions();
  }, []);

  /* ================= FETCH ASSIGNMENTS ================= */
  useEffect(() => {
    const fetchAssignments = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(
          `https://api.citadel-i.com.ng/api/v1/student/assignments?page=${page}&limit=${limit}`,
          { credentials: "include" }
        );
        const result = await res.json();
        if (!res.ok) throw new Error(result.message);
        setData(result.data || []);
        setTotalPages(result.pagination?.totalPages || 1);
      } catch (err: any) {
        setError(err.message || "Error fetching assignments");
      } finally {
        setLoading(false);
      }
    };
    fetchAssignments();
  }, [page]);

  const isExpired = (date: string) => new Date(date) < new Date();
const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
<StudentGuard>
  <div className="flex min-h-screen bg-gray-100 relative">

    {/* Mobile toggle button */}
    <button
      className="md:hidden fixed top-4 left-4 z-50 bg-orange-500 text-white p-2 rounded"
      onClick={() => setSidebarOpen(true)}
    >
      ☰
    </button>

    {/* Overlay (mobile only) */}
    {sidebarOpen && (
      <div
        className="fixed inset-0 bg-black/40 z-40 md:hidden"
        onClick={() => setSidebarOpen(false)}
      />
    )}

    {/* Sidebar */}
    <aside
      className={`
        fixed md:static z-50
        top-0 left-0 h-full md:h-screen
        w-64 bg-[#FFEEE6] shadow-md p-6
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
        flex flex-col justify-between
      `}
    >
      <div>
        {/* Close button (mobile) */}
        <button
          className="md:hidden mb-4 text-sm text-red-500"
          onClick={() => setSidebarOpen(false)}
        >
          Close ✕
        </button>

        <div className="flex flex-col items-center mb-6">
          <img
            src="/profile.png"
            className="w-20 h-20 rounded-full mb-3 object-cover"
          />
          <h2 className="text-xl font-bold">
            {user?.firstName} {user?.lastName}
          </h2>
          <p className="text-gray-600 text-[10px]">{user?.email}</p>
        </div>

        <div className="flex flex-col gap-3">
          <button className="text-left px-3 py-2 rounded hover:bg-gray-200">
            Change Name
          </button>
          <button className="text-left px-3 py-2 rounded hover:bg-gray-200">
            Change Password
          </button>
        </div>
      </div>

      <button
        onClick={logout}
        className="mt-6 w-full bg-red-800 text-white py-2 rounded cursor-pointer"
      >
        Logout
      </button>
    </aside>

    {/* Main content */}
    <main className="flex-1 p-6 md:ml-0">
      <h3 className="text-2xl font-semibold mb-6">
        Your Subscribed Classes
      </h3>

      {/* tables remain unchanged */}
    </main>
  </div>
</StudentGuard>
  );
}

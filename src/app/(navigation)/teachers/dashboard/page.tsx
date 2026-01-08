"use client";

import { useEffect, useState } from "react";

type Student = {
  id: number;
  name: string;
  email: string;
  className: string;
};

type BankDetails = {
  bankName: string;
  accountName: string;
  accountNumber: string;
};

export default function TeacherDashboard() {
  const [teacher, setTeacher] = useState<any>(null);
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(false);

  // pagination
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  const [bankForm, setBankForm] = useState<BankDetails>({
    bankName: "",
    accountName: "",
    accountNumber: "",
  });

  /* ================= FETCH TEACHER ================= */
  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const res = await fetch(
          "https://api.citadel-i.com.ng/api/v1/teacher/profile",
          { credentials: "include" }
        );
        const data = await res.json();
        setTeacher(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTeacher();
  }, []);

  /* ================= FETCH STUDENTS ================= */
  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.citadel-i.com.ng/api/v1/teacher/students?page=${page}&limit=${limit}`,
          { credentials: "include" }
        );
        const data = await res.json();
        setStudents(data.data || []);
        setTotalPages(data.pagination?.totalPages || 1);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, [page]);

  /* ================= BANK DETAILS ================= */
  const saveBankDetails = async () => {
    try {
      await fetch(
        "https://api.citadel-i.com.ng/api/v1/teacher/bank-details",
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bankForm),
        }
      );
      alert("Bank details saved");
    } catch (err) {
      console.error(err);
    }
  };

  if (!teacher) return <p className="p-6">Loading dashboard...</p>;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        {/* ================= SIDEBAR ================= */}
        <aside className="bg-white rounded-xl shadow p-4 space-y-6">
          <div className="text-center">
            <img
              src={teacher.passportPhoto || "/avatar.png"}
              className="w-20 h-20 rounded-full mx-auto border"
              alt="Teacher"
            />
            <h2 className="mt-2 font-semibold text-lg">
              {teacher.firstName} {teacher.lastName}
            </h2>
            <p className="text-sm text-gray-500">{teacher.email}</p>
          </div>

          {/* Bank Details */}
          <div>
            <h3 className="font-semibold mb-2">Bank Details</h3>

            {teacher.bankDetails ? (
              <div className="text-sm space-y-1 bg-gray-50 p-3 rounded-md">
                <p>
                  <strong>Bank:</strong> {teacher.bankDetails.bankName}
                </p>
                <p>
                  <strong>Account Name:</strong>{" "}
                  {teacher.bankDetails.accountName}
                </p>
                <p>
                  <strong>Account No:</strong>{" "}
                  {teacher.bankDetails.accountNumber}
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <input
                  className="w-full border rounded px-3 py-2 text-sm"
                  placeholder="Bank name"
                  onChange={(e) =>
                    setBankForm({ ...bankForm, bankName: e.target.value })
                  }
                />
                <input
                  className="w-full border rounded px-3 py-2 text-sm"
                  placeholder="Account name"
                  onChange={(e) =>
                    setBankForm({
                      ...bankForm,
                      accountName: e.target.value,
                    })
                  }
                />
                <input
                  className="w-full border rounded px-3 py-2 text-sm"
                  placeholder="Account number"
                  onChange={(e) =>
                    setBankForm({
                      ...bankForm,
                      accountNumber: e.target.value,
                    })
                  }
                />
                <button
                  onClick={saveBankDetails}
                  className="w-full bg-orange-500 text-white py-2 rounded text-sm"
                >
                  Save Bank Details
                </button>
              </div>
            )}
          </div>
        </aside>

        {/* ================= MAIN ================= */}
        <main className="bg-white rounded-xl shadow p-4">
          <h3 className="text-xl font-semibold mb-4">
            Students in Your Classes
          </h3>

          {loading ? (
            <p>Loading students...</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border px-3 py-2 text-left">Name</th>
                    <th className="border px-3 py-2 text-left">Email</th>
                    <th className="border px-3 py-2 text-left">Class</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-50">
                      <td className="border px-3 py-2">
                        {student.name}
                      </td>
                      <td className="border px-3 py-2">
                        {student.email}
                      </td>
                      <td className="border px-3 py-2">
                        {student.className}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-sm">
              Page {page} of {totalPages}
            </span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="px-4 py-2 rounded bg-orange-500 text-white disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

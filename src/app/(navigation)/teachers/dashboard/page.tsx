"use client";

import { useAuthStore } from "@/app/store/user";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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

  // Pagination
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  const [bankForm, setBankForm] = useState<BankDetails>({
    bankName: "",
    accountName: "",
    accountNumber: "",
  });

  // Sidebar toggle for mobile
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = useAuthStore((s) => s.user);
  /* ================= FETCH TEACHER ================= */
  const email = user?.email
  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const res = await fetch(
          `https://api.citadel-i.com.ng/api/v1/teacher/get_teacher/${email}`,
          { credentials: "include" }
        );
        const data = await res.json();
        setTeacher(data);
        setStudents([data.students])
        console.log(teacher)
      } catch (err) {
        console.error(err);
      }
    };
    fetchTeacher();
  }, []);

  /* ================= FETCH STUDENTS ================= */
  // useEffect(() => {
  //   const fetchStudents = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await fetch(
  //         `https://api.citadel-i.com.ng/api/v1/teacher/students?page=${page}&limit=${limit}`,
  //         { credentials: "include" }
  //       );
  //       const data = await res.json();
  //       setStudents(data.data || []);
  //       setTotalPages(data.pagination?.totalPages || 1);
  //     } catch (err) {
  //       console.error(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchStudents();
  // }, [page]);

  /* ================= BANK DETAILS ================= */
  const saveBankDetails = async () => {
    try {
      await fetch("https://api.citadel-i.com.ng/api/v1/teacher/bank-details", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bankForm),
      });
      alert("Bank details saved");
    } catch (err) {
      console.error(err);
    }
  };

  if (!teacher) return <p className="p-6">Loading dashboard...</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside
        className={`bg-[#FFEEE6] fixed z-30 inset-y-0 left-0 w-64  shadow-lg transform transition-transform duration-300 md:relative md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 md:hidden">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <FaTimes size={20} />
          </button>
        </div>

        <div className="p-4 space-y-6">
          <div className="text-center">
            <Image
  src={teacher?.passportPhoto}
  alt="Teacher"
  width={80}
  height={80}
  className="w-20 h-20 rounded-full mx-auto border object-cover"
/>
{/* <p className="text-black">{teacher?.passportPhoto}....</p> */}
            <h2 className="mt-2 font-semibold text-lg">
              {teacher.firstName} {teacher.lastName}
            </h2>
            <p className="text-sm text-gray-500 text-[10px]">{teacher.email}</p>
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
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-20 md:hidden "
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 p-4 ">
        {/* Mobile menu button */}
        <div className="flex justify-between items-center md:hidden mb-4">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <button
            className="p-2 bg-white rounded shadow"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars size={20} />
          </button>
        </div>

        <h3 className="text-xl font-semibold mb-4">Students in Your Classes</h3>

        {loading ? (
          <p>Loading students...</p>
        ) : (
          <div className="overflow-x-auto bg-white rounded-xl shadow p-2">
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
                  <tr key={student?.id} className="hover:bg-gray-50">
                    <td className="border px-3 py-2">{student?.name}</td>
                    <td className="border px-3 py-2">{student?.email}</td>
                    <td className="border px-3 py-2">{student?.className}</td>
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
  );
}

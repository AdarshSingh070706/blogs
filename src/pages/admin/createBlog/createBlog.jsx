import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { app } from "../../../conf/conf";
import myContext from "../../../context/data/myContext";

const db = getFirestore(app);

function AllBlogs() {
  const { mode } = useContext(myContext);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Predefined blogs
  const predefinedBlogs = [
    {
      id: "1",
      title: "Getting Started with React",
      content:
        "React is a JavaScript library for building user interfaces. Let's learn how to start...",
      category: "React",
      createdAt: new Date("2024-08-01"),
      thumbnail:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*dQTsX2sMSQM8b8gCMmlA_A.png",
    },
    {
      id: "2",
      title: "Understanding JavaScript Closures",
      content:
        "Closures are one of the most powerful features of JavaScript. In this blog, we explore...",
      category: "JavaScript",
      createdAt: new Date("2024-08-05"),
      thumbnail:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*XJG9KmuPddZzG5sAOQ8GrA.png",
    },
  ];

  // utility: remove HTML tags
  const stripHtml = (html = "") =>
    html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

  // utility: date format
  const fmt = (ts) => {
    try {
      const d = ts?.toDate ? ts.toDate() : ts;
      return d.toLocaleDateString(undefined, {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } catch {
      return "";
    }
  };

  useEffect(() => {
    const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(
      q,
      (snap) => {
        const firebaseBlogs = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // 🔹 merge predefined + firebase blogs
        setBlogs([...predefinedBlogs, ...firebaseBlogs]);
        setLoading(false);
      },
      () => setLoading(false)
    );

    return () => unsub();
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1
        className={`text-3xl font-bold mb-6 ${
          mode === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        All Blogs
      </h1>

      {loading ? (
        <p className={mode === "dark" ? "text-gray-300" : "text-gray-600"}>
          Loading blogs…
        </p>
      ) : blogs.length === 0 ? (
        <p className={mode === "dark" ? "text-gray-300" : "text-gray-600"}>
          No blogs yet. Go publish your first one!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((b) => (
            <article
              key={b.id}
              className={`rounded-xl overflow-hidden shadow-md hover:shadow-lg transition 
                ${mode === "dark" ? "bg-slate-800" : "bg-white"}`}
            >
              {b.thumbnail && (
                <img
                  src={b.thumbnail}
                  alt={b.title}
                  className="w-full h-44 object-cover"
                />
              )}

              <div className="p-4">
                <p
                  className={`text-xs mb-1 ${
                    mode === "dark" ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {fmt(b.createdAt)} • {b.category || "General"}
                </p>

                <h2
                  className={`text-lg font-semibold mb-2 line-clamp-2 ${
                    mode === "dark" ? "text-white" : "text-gray-900"
                  }`}
                  title={b.title}
                >
                  {b.title}
                </h2>

                <p
                  className={`text-sm mb-4 line-clamp-3 ${
                    mode === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {stripHtml(b.content).slice(0, 160)}…
                </p>

                <Link
                  to={`/blog/${b.id}`}
                  className="inline-block px-3 py-2 rounded-md text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-500"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllBlogs;

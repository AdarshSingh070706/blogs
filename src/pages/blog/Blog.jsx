import React from "react";

function Blog() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Blog Title */}
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        How to Become a Full Stack Developer in 2025
      </h1>

      {/* Author + Date */}
      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
        <img
          src="https://via.placeholder.com/40"
          alt="Author"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-medium">Adarsh Singh</p>
          <p className="text-sm">Published on August 30, 2025</p>
        </div>
      </div>

      {/* Thumbnail Image */}
      <img
        src="https://via.placeholder.com/800x400"
        alt="Blog Thumbnail"
        className="rounded-xl shadow-lg mb-6"
      />

      {/* Blog Content */}
      <div className="prose dark:prose-invert max-w-none">
        <p>
          Web development is evolving rapidly. In 2025, becoming a full stack
          developer requires mastering both frontend and backend technologies,
          along with deployment and cloud fundamentals.
        </p>

        <h2>Key Skills to Learn</h2>
        <ul>
          <li>Frontend: React, Tailwind CSS</li>
          <li>Backend: Node.js, Express</li>
          <li>Database: MongoDB, PostgreSQL</li>
          <li>Deployment: Vercel, AWS</li>
        </ul>

        <p>
          By focusing on projects and real-world practice, you can become a
          strong full stack developer within 12 months 🚀
        </p>
      </div>
    </div>
  );
}

export default Blog;

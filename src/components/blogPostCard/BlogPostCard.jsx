import React, { useContext } from "react";
import { Button } from "@material-tailwind/react";
import myContext from "../../context/data/myContext";

function BlogPostCard() {
  const context = useContext(myContext);
  const { mode } = context;

  
  const blogPosts = [
    {
      title: "React Introduction",
      date: "01 Mar 2025",
      description: "Understand what React is and how it helps in building UIs.",
      image: "https://1drv.ms/i/c/b708ae1470575fa9/EbJVzTJKrehBhjjRjEK03lkBGqR-QuGUIETafHoKgPfKUg?e=dtFiD8",
    },
    {
      title: "JavaScript Basics",
      date: "08 Mar 2025",
      description:
        "Learn JavaScript fundamentals every frontend dev must know.",
      image: "https://via.placeholder.com/600x300.png?text=JavaScript+Basics",
    },
    {
      title: "Tailwind CSS Tips",
      date: "12 Mar 2025",
      description: "Boost your Tailwind CSS workflow with these practical tips.",
      image: "https://via.placeholder.com/600x300.png?text=Tailwind+Tips",
    },
  ];
  

  return (
    <section className={`${mode === "dark" ? "bg-gray-900" : "bg-white"} text-gray-600 body-font transition-all duration-300`}>
      <div className="container px-5 py-10 mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-center -m-4 mb-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="p-4 md:w-1/3">
              <div
                className={`h-full rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden ${
                  mode === "dark"
                    ? "bg-slate-800 text-gray-200 border-b-4 border-slate-300"
                    : "bg-white text-gray-800 border-b-4 border-slate-800"
                }`}
              >
                <img
                  className="w-full h-48 object-cover object-center"
                  src={post.image}
                  alt={post.title}
                />
                <div className="p-6">
                  <h2 className="text-xs font-semibold mb-1 uppercase tracking-wide">
                    {post.date}
                  </h2>
                  <h1 className="text-xl font-bold mb-2">{post.title}</h1>
                  <p className="text-sm">{post.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center my-5">
          <Button
            className={`shadow-md px-6 py-2 font-medium text-sm transition duration-300 ${
              mode === "dark"
                ? "bg-slate-300 text-slate-900 hover:bg-slate-200"
                : "bg-slate-900 text-slate-100 hover:bg-slate-800"
            }`}
          >
            See More
          </Button>
        </div>
      </div>
    </section>
  );
}

export default BlogPostCard;

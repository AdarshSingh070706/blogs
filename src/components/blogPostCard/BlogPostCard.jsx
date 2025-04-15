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
      image: "https://sdmntprwestus.oaiusercontent.com/files/00000000-5a6c-6230-81d8-341579d03c06/raw?se=2025-04-15T05%3A38%3A42Z&sp=r&sv=2024-08-04&sr=b&scid=b887f647-0da7-5e46-9053-0fbd04505c58&skoid=72d71449-cf2f-4f10-a498-f160460104ee&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-15T04%3A24%3A11Z&ske=2025-04-16T04%3A24%3A11Z&sks=b&skv=2024-08-04&sig=pP%2BeAr5m5sholGVdGW26iuLpWyGY6bm4CoyALbVKzcc%3D",
    },
    {
      title: "JavaScript Basics",
      date: "08 Mar 2025",
      description:
        "Learn JavaScript fundamentals every frontend dev must know.",
      image: "https://sdmntpreastus2.oaiusercontent.com/files/00000000-b144-61f6-8571-3b917384b151/raw?se=2025-04-15T05%3A41%3A18Z&sp=r&sv=2024-08-04&sr=b&scid=1dd34e39-d5d3-5f88-835b-b06e404e7239&skoid=a47cd303-16a2-427e-8efb-2ce406116005&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-15T02%3A43%3A52Z&ske=2025-04-16T02%3A43%3A52Z&sks=b&skv=2024-08-04&sig=XJkllhH8JdB8d4w0DKV%2BZjFR8lQWh0Exmjp5BbzxXiQ%3D",
    },
    {
      title: "Tailwind CSS Tips",
      date: "12 Mar 2025",
      description: "Boost your Tailwind CSS workflow with these practical tips.",
      image: "https://sdmntpreastus2.oaiusercontent.com/files/00000000-d770-61f6-8465-ff37f19202a3/raw?se=2025-04-15T05%3A45%3A18Z&sp=r&sv=2024-08-04&sr=b&scid=7da0b117-aa5b-505e-8685-53def44bf147&skoid=a47cd303-16a2-427e-8efb-2ce406116005&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-15T03%3A25%3A07Z&ske=2025-04-16T03%3A25%3A07Z&sks=b&skv=2024-08-04&sig=6BDG/4werSBnAQMyRVhdgTJqpmGtFCbyPqzC7AoX89c%3D",
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

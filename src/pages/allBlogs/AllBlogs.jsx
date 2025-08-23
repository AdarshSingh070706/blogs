import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';

function AllBlogs() {
  const context = useContext(myContext);
  const { mode } = context;

  const cardBg = mode === 'dark' ? 'bg-slate-800' : 'bg-white';
  const textColor = mode === 'dark' ? 'text-slate-100' : 'text-slate-900';
  const dateColor = mode === 'dark' ? 'text-slate-300' : 'text-slate-600';
  const borderColor = mode === 'dark' ? 'border-slate-600' : 'border-slate-200';

  const blogData = [
    {
      date: '25 Sep 2023',
      title: 'React Introduction',
      description: 'Learn what React is, how it works, and why it`s used for building modern UIs with components.',
      image: '/assets/reactimage.webp',
    },
    {
      date: '15 Oct 2023',
      title: 'Tailwind CSS Mastery',
      description: 'Master utility-first CSS with Tailwind — build fast, responsive, and clean designs with ease.',
      image: '/assets/tailcss.jpg',
    },
    {
      date: '05 Nov 2023',
      title: 'Building with Firebase',
      description: 'Use Firebase for realtime databases, auth, and deployment — integrate it with your React app.',
      image: '/assets/firebase.png',
    },
  ];

  return (
    <Layout>
      <section className="text-gray-600 body-font transition duration-300">
        <div className="container px-5 py-10 mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mb-8 text-center">
            <h1 className={`text-3xl font-bold ${textColor}`}>All Blogs</h1>
          </div>

          {/* Cards */}
          <div className="flex flex-wrap justify-center -m-4">
            {blogData.map((blog, index) => (
              <div className="p-4 md:w-1/3 w-full" key={index}>
                <div className={`${cardBg} ${borderColor} border-b-4 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300`}>
                  <img
                    className="w-full h-48 object-cover rounded-t-2xl"
                    src={blog.image}
                    alt={blog.title}
                  />
                  <div className="p-6">
                    <h2 className={`text-xs font-semibold uppercase tracking-wide mb-2 ${dateColor}`}>{blog.date}</h2>
                    <h1 className={`text-xl font-bold mb-2 ${textColor}`}>{blog.title}</h1>
                    <p className={`text-sm leading-relaxed ${textColor}`}>{blog.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AllBlogs;

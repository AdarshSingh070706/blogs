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

  const thumbnail = "https://firebasestorage.googleapis.com/v0/b/blog-fea71.appspot.com/o/blogimage%2Fai_blog.jpg?alt=media&token=fc9b9b4d-ec26-47fa-b7cc-d351bca4387f";

  const blogData = [
    {
      date: '25 Sep 2023',
      title: 'React Introduction',
      description:
        'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
    },
    {
      date: '15 Oct 2023',
      title: 'Tailwind CSS Mastery',
      description:
        'Explore utility-first CSS with Tailwind for faster and more flexible web design workflows.',
    },
    {
      date: '05 Nov 2023',
      title: 'Building with Firebase',
      description:
        'Learn how to use Firebase for hosting, auth, and real-time databases with React.',
    },
  ];

  return (
    <Layout>
      <section className="text-gray-600 body-font transition duration-300">
        <div className="container px-5 py-10 mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mb-8 text-center">
            <h1 className={`text-3xl font-bold ${textColor}`}>
              All Blogs
            </h1>
          </div>

          {/* Cards */}
          <div className="flex flex-wrap justify-center -m-4">
            {blogData.map((blog, index) => (
              <div className="p-4 md:w-1/3 w-full" key={index}>
                <div
                  className={`${cardBg} ${borderColor} border-b-4 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300`}
                >
                  <img
                    className="w-full h-48 object-cover rounded-t-2xl"
                    src={thumbnail}
                    alt={blog.title}
                  />
                  <div className="p-6">
                    <h2 className={`text-xs font-semibold uppercase tracking-wide mb-2 ${dateColor}`}>
                      {blog.date}
                    </h2>
                    <h1 className={`text-xl font-bold mb-2 ${textColor}`}>
                      {blog.title}
                    </h1>
                    <p className={`text-sm leading-relaxed ${textColor}`}>
                      {blog.description}
                    </p>
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

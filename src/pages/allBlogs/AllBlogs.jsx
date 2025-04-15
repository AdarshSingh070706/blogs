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
      image: 'https://sdmntpreastus2.oaiusercontent.com/files/00000000-b144-61f6-8571-3b917384b151/raw?se=2025-04-15T05%3A41%3A18Z&sp=r&sv=2024-08-04&sr=b&scid=1dd34e39-d5d3-5f88-835b-b06e404e7239&skoid=a47cd303-16a2-427e-8efb-2ce406116005&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-15T02%3A43%3A52Z&ske=2025-04-16T02%3A43%3A52Z&sks=b&skv=2024-08-04&sig=XJkllhH8JdB8d4w0DKV%2BZjFR8lQWh0Exmjp5BbzxXiQ%3D'
    },
    {
      date: '15 Oct 2023',
      title: 'Tailwind CSS Mastery',
      description:
        'Explore utility-first CSS with Tailwind for faster and more flexible web design workflows.',
      image: 'https://sdmntpreastus2.oaiusercontent.com/files/00000000-d770-61f6-8465-ff37f19202a3/raw?se=2025-04-15T05%3A45%3A18Z&sp=r&sv=2024-08-04&sr=b&scid=7da0b117-aa5b-505e-8685-53def44bf147&skoid=a47cd303-16a2-427e-8efb-2ce406116005&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-15T03%3A25%3A07Z&ske=2025-04-16T03%3A25%3A07Z&sks=b&skv=2024-08-04&sig=6BDG/4werSBnAQMyRVhdgTJqpmGtFCbyPqzC7AoX89c%3D'
    },
    {
      date: '05 Nov 2023',
      title: 'Building with Firebase',
      description:
        'Learn how to use Firebase for hosting, auth, and real-time databases with React.',
      image: 'https://sdmntpreastus2.oaiusercontent.com/files/00000000-b144-61f6-8571-3b917384b151/raw?se=2025-04-15T05%3A41%3A18Z&sp=r&sv=2024-08-04&sr=b&scid=1dd34e39-d5d3-5f88-835b-b06e404e7239&skoid=a47cd303-16a2-427e-8efb-2ce406116005&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-15T02%3A43%3A52Z&ske=2025-04-16T02%3A43%3A52Z&sks=b&skv=2024-08-04&sig=XJkllhH8JdB8d4w0DKV%2BZjFR8lQWh0Exmjp5BbzxXiQ%3D'
    }
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

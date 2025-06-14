"use client"
import Image from 'next/image';
import Link from 'next/link';

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt: "Exploring the latest trends and technologies shaping the future of web development, from AI integration to advanced frameworks.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      author: "John Doe",
      date: "March 15, 2024",
      category: "Web Development",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Getting Started with React",
      excerpt: "A comprehensive guide for beginners looking to start their journey with React, covering the basics and best practices.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      author: "Jane Smith",
      date: "March 14, 2024",
      category: "React",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Mastering CSS Grid",
      excerpt: "Learn how to create complex layouts with CSS Grid, including practical examples and common use cases.",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2",
      author: "Mike Johnson",
      date: "March 13, 2024",
      category: "CSS",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Node.js Best Practices",
      excerpt: "Discover the best practices for building scalable and maintainable Node.js applications.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      author: "Sarah Wilson",
      date: "March 12, 2024",
      category: "Node.js",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "TypeScript for Beginners",
      excerpt: "A beginner-friendly guide to TypeScript, covering types, interfaces, and practical examples.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      author: "David Brown",
      date: "March 11, 2024",
      category: "TypeScript",
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "Building RESTful APIs",
      excerpt: "Learn how to design and implement RESTful APIs following best practices and industry standards.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
      author: "Emily Davis",
      date: "March 10, 2024",
      category: "API Development",
      readTime: "9 min read"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
            alt="Blog header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-xl">
              Discover the latest insights, tutorials, and updates from our team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            <button className="px-6 py-2 rounded-full border font-medium">
              All Posts
            </button>
            <button className="px-6 py-2 rounded-full border font-medium">
              Web Development
            </button>
            <button className="px-6 py-2 rounded-full border font-medium">
              React
            </button>
            <button className="px-6 py-2 rounded-full border font-medium">
              Node.js
            </button>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article key={blog.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm font-medium">
                      {blog.category}
                    </span>
                    <span className="text-sm">
                      {blog.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-3">
                    {blog.title}
                  </h2>
                  <p className="mb-4">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src={`https://i.pravatar.cc/150?u=${blog.author}`}
                          alt={blog.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{blog.author}</p>
                        <p className="text-sm">{blog.date}</p>
                      </div>
                    </div>
                    <Link 
                      href={`/blog/${blog.id}`}
                      className="px-4 py-2 rounded-lg font-medium transition-all"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            <button className="px-4 py-2 rounded-lg border font-medium">
              Previous
            </button>
            <button className="px-4 py-2 rounded-lg border font-medium">
              1
            </button>
            <button className="px-4 py-2 rounded-lg border font-medium">
              2
            </button>
            <button className="px-4 py-2 rounded-lg border font-medium">
              3
            </button>
            <button className="px-4 py-2 rounded-lg border font-medium">
              Next
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
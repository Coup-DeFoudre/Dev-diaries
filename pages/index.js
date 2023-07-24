import Banner from "@/components/Banner";
import { Inter } from "next/font/google";
import BlogItem from "@/components/BlogItem";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const [blogs, setBlogs] = useState(props.blogs.slice(0, 3)); // Display only the first three blogs
  return (
    <>
      <main className={`${inter.className}`}>
        <Banner />
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mt-8">Latest Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-6">
            {blogs.map((blog) => {
              return (
                <BlogItem
                  key={blog.title}
                  title={blog.title}
                  description={blog.description}
                  slug={blog.slug}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/blogs");
  const blogs = await res.json();
  return {
    props: {
      blogs,
    },
  };
}

import BlogItem from "@/components/BlogItem";
import React, { useState } from "react";

const Blogs = (props) => {
  const [blogs, setBlogs] = useState(props.blogs);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/blogs");
  const blogs = await res.json();
  return {
    props: {
      blogs,
    },
  };
}

export default Blogs;

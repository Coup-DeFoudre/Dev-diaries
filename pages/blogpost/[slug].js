import React, { useState } from "react";

const Slug = (props) => {
  const [blog, setBlog] = useState(props.data);

  return (
    <div className="container mx-auto  text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold">{blog.title}</h1>
        <p className="mt-2 text-gray-400">{blog.description}</p>
        <div className="mt-4 flex items-center text-gray-400">
          <p className="mr-4">{blog.year}</p>
          <p className="mr-4">|</p>
          <p>5:44 PM</p>
        </div>
        <div className="mt-6">
          <div
            className="w-full h-64 rounded-lg bg-gray-800"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1680176040970-523e88e1ff34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8YWV1NnJMLWo2ZXd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        <div className="mt-8">
          <p className="text-gray-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
            eligendi dolores doloremque a dignissimos deserunt totam modi
            sapiente maiores aspernatur saepe, esse dolore suscipit quis rem
            pariatur quisquam magni. Ab nihil veritatis doloremque unde possimus
            necessitatibus sunt libero similique sint. Assumenda, deserunt.
            Accusamus, praesentium beatae!
          </p>
        </div>
        <div className="mt-8 flex items-center">
          <div className="w-10 h-10 rounded-full mr-4 bg-gray-500" />
          <div>
            <p className="text-gray-100 font-medium">Rishabh Pathak</p>
            <p className="text-gray-400">Very Skilled coder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default Slug;

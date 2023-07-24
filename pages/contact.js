import React, { useState } from "react";

const Contact = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", review: "" });
  const [showAlert, setShowAlert] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    setReviews([...reviews, data]);
    
    const submittedName = formData.name;
    setFormData({ name: "", email: "", review: "" });
    setShowAlert(true);
    setSubmittedName(submittedName);
    
  };

  const handleAlertDismiss = () => {
    setShowAlert(false);
  };

  return (
    <div className="bg-gray-900 text-white py-10 px-4  w-screen md:w-[45vw] rounded-md drop-shadow-lg shadow-white shadow-sm ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        {showAlert && (
          <div className="bg-indigo-500 text-white px-4 py-3 rounded-md mb-6 flex space-x-5 justify-between items-center">
            <p>Thank you {submittedName} for reaching us out! we will get back to you soon</p>
            <button
              className="float-right font-bold "
              onClick={handleAlertDismiss}
            >
              X
            </button>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="review">
              Elaborate Your Concern
            </label>
            <textarea
              id="review"
              name="review"
              rows="4"
              required
              className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
              value={formData.review}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2.5 px-4 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
            >
             Send Message
            </button>
          </div>
        </form>
       
        
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className=" py-10 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-4">
          Welcome to Dev Diaries
        </h2>
        <p className="text-lg text-center mb-8">
          Dev Diaries is your go-to destination for all things related to
          software development and coding. We are passionate about sharing
          knowledge and empowering developers from all backgrounds.
        </p>
        <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
        <p className="mb-8">
          At Dev Diaries, our mission is to provide valuable resources, in-depth
          tutorials, and insightful articles to help developers enhance their
          skills and foster a thriving tech community.
        </p>
        <h3 className="text-xl font-semibold mb-4">Meet the Team</h3>
        <div className="flex items-center mb-8">
          <Image
            className="w-12 h-12 rounded-full mr-4 bg-gray-600"
            src="/team-member-1-avatar.jpg" // Replace with the URL of the first team member's avatar
            alt="Team Member 1"
            width={48}
            height={48}
          />
          <div>
            <p className="text-lg font-semibold">John Doe</p>
            <p className="text-gray-400">Co-Founder & Lead Developer</p>
          </div>
        </div>
        <div className="flex items-center mb-8">
          <Image
            className="w-12 h-12 rounded-full mr-4 bg-gray-600"
            src="/team-member-2-avatar.jpg" // Replace with the URL of the second team member's avatar
            alt="Team Member 2"
            width={48}
            height={48}
          />
          <div>
            <p className="text-lg font-semibold">Jane Smith</p>
            <p className="text-gray-400">UI/UX Designer</p>
          </div>
        </div>
        <div className="flex items-center mb-8">
          <Image
            className="w-12 h-12 rounded-full mr-4 bg-gray-600"
            src="/team-member-3-avatar.jpg" // Replace with the URL of the third team member's avatar
            alt="Team Member 3"
            width={48}
            height={48}
          />
          <div>
            <p className="text-lg font-semibold">Alex Johnson</p>
            <p className="text-gray-400">Content Writer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

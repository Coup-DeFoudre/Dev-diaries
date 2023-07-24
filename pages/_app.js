import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>

      <Head>
        <title>Dev-Diaries</title>
        <meta name="description" content="Explore the fascinating world of software development and coding at Dev Diaries. Discover insightful articles, tutorials, and tech-related content to fuel your passion for coding and stay updated with the latest industry trends." />
      </Head>

      <Navbar />
      <div className="mt-[15vh] lg:mt-[20vh] mx-[5vw] md:mx-[20vw] lg:mx-[23vw] xl:mx-[25vw] flex items-center justify-center mb-24">
        <Component {...pageProps} />
      </div>
      
      <Footer />
   
      
    </>
  );
}

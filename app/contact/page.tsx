// pages/contact.tsx
'use client'
import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '@/components/Hero/Hero';
import Navbar from '@/components/Navbar/Navbar';
import { Poppins } from 'next/font/google';
import { Arvo } from 'next/font/google';

const poppins = Poppins({ weight: "400", subsets: ['latin'] })
const arvo = Arvo({ weight: "400", subsets: ['latin'] })

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Fizzler</title>
        <meta name="description" content="Contact Fizzler for healthy soda options" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="bg-white">
        {/* Hero Section */}
        <Hero bgImage="/green-back.png" titleImage="/bottle-green.png" />

        {/* Contact Information Section */}
        <section className="w-full py-16 flex flex-col items-center justify-center text-center px-4 bg-white">
          <h2 className={`text-3xl md:text-4xl font-bold text-black mb-6 ${arvo.className}`}>Get in Touch</h2>
          <div className="flex flex-wrap justify-center gap-8 mb-6">
            <img src="/yellow.png" alt="Office" className="w-full md:w-1/2 lg:w-1/3 rounded-xl" />
            <div className={`text-lg text-black my-auto ${poppins.className}`}>
              <p>Fizzler Headquarters</p>
              <p>123 Healthy Soda Lane</p>
              <p>Refreshment City, FL 12345</p>
              <p>Email: contact@fizzler.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
        </section>

        {/* Map and Directions Section */}
        <section className="w-full py-16 flex flex-col items-center justify-center text-center px-4 bg-gray-100">
          <h2 className={`text-3xl md:text-4xl font-bold text-black mb-6 ${arvo.className}`}>Visit Us</h2>
          <div className="w-full md:w-2/3 lg:w-1/2 mb-6">
            {/* Embed a map iframe or use a static image of the map */}
            <img src="/red.png" alt="Map to Fizzler" className="rounded-xl mx-auto" />
          </div>
          <p className={`text-lg text-black mb-6 ${poppins.className}`}>
            Planning to visit our headquarters? Find us on the map and come say hello!
          </p>
        </section>

        {/* Inquiry Form Section */}
        <section className="w-full py-16 flex flex-col items-center justify-center text-center px-4 bg-white">
          <h2 className={`text-3xl md:text-4xl font-bold text-black mb-6 ${arvo.className}`}>Send Us a Message</h2>
          <form className="w-full md:w-1/2 lg:w-1/3">
            <input type="text" placeholder="Your Name" className="w-full mb-4 p-2 rounded" />
            <input type="email" placeholder="Your Email" className="w-full mb-4 p-2 rounded" />
            <textarea placeholder="Your Message" className="w-full mb-4 p-2 rounded" rows={5}></textarea>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Send
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Contact;

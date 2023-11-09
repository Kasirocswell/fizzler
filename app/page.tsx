// pages/index.tsx
'use client'
import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/Hero/Hero';
import Navbar from '@/components/Navbar/Navbar';
import { Poppins } from 'next/font/google';
import { Arvo } from 'next/font/google';

const poppins = Poppins({weight: "400", subsets: ['latin'] })
const arvo = Arvo({weight: "400", subsets: ['latin'] })


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fizzler - Refresh Naturally</title>
        <meta name="description" content="Fizzler Healthy Soda" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Navbar />

      <main className="bg-white">
        {/* Hero Section */}
        <Hero bgImage="/soda.gif" titleImage="/fruit-yellow.png" />
        <div id="modal-root"></div>

        {/* Refresh Naturally Section */}
        <section className="w-full py-16 flex flex-col items-center justify-center text-center px-4 bg-white">
          <h2 className={`text-3xl md:text-4xl font-bold text-black mb-6 ${arvo.className}`}>Refresh Naturally</h2>
          <div className="flex flex-wrap justify-center gap-8 mb-6">
            <img src="/red.png" alt="Natural Ingredients" className="w-full md:w-1/2 lg:w-1/3 rounded-xl" />
            <img src="/yellow.png" alt="Refreshing Soda" className="w-full md:w-1/2 lg:w-1/3 rounded-xl" />
          </div>
          <p className={`text-lg text-black mb-6 ${poppins.className}`}>
            Our sodas are crafted with the finest natural ingredients for a refreshing and guilt-free experience.
            Enjoy the taste of real fruit with no artificial sweeteners, colors, or preservatives.
          </p>
        </section>

        {/* Explore Our Flavors Section */}
        <section className="w-full py-16 flex flex-col items-center justify-center text-center px-4" style={{ backgroundImage: 'url(/bg.png)', backgroundSize: 'cover' }}>
          <h2 className={`text-3xl md:text-4xl font-bold text-black mb-6 ${arvo.className}`}>Explore Our Flavors</h2>
          <img src="/green.png" alt="Fizzler Flavors" className="w-full md:w-1/2 lg:w-1/3 mb-6 rounded-xl" />
          <p className={`text-lg text-black mb-6 ${poppins.className}`}>
            Dive into a world of flavors with Fizzler! From the zesty lemon-lime to the exotic mango, find your favorite fizz today.
          </p>
          <button
            onClick={() => window.location.href = '/flavors'}
            className="bg-transparent bg-center bg-no-repeat py-2 px-4 rounded-full"
            style={{ backgroundImage: 'url(/square-button.png)', color: 'black' }}
          >
            Discover Flavors
          </button>
        </section>

        {/* Join the Fizzler Family Section */}
        <section className="w-full py-16 flex flex-col items-center justify-center text-center px-4 bg-white">
          <h2 className={`text-3xl md:text-4xl font-bold text-black mb-6 ${arvo.className}`}>Join the Fizzler Family</h2>
          <img src="/pink.png" alt="Fizzler Community" className="w-full md:w-1/2 lg:w-1/3 mb-6 rounded-xl" />
          <p className={`text-lg text-black mb-6 ${poppins.className}`}>
            Become a part of the Fizzler family to get exclusive updates, offers, and more. Let's make healthier choices together!
          </p>
          <button
            onClick={() => window.location.href = '/contact'}
            className="bg-transparent bg-center bg-no-repeat py-2 px-4 rounded-full"
            style={{ backgroundImage: 'url(/square-button.png)', color: 'black' }}
          >
            Contact Us
          </button>
        </section>
      </main>
    </>
  );
};

export default Home;

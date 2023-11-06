// pages/flavors.tsx
'use client'
import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@/components/Navbar/Navbar';
import FlavorCard from "@/components/FlavorCard/FlavorCardComponent";
import { Poppins } from 'next/font/google';
import { Arvo } from 'next/font/google';
import Hero from '@/components/Hero/Hero';

const poppins = Poppins({ weight: "400", subsets: ['latin'] })
const arvo = Arvo({ weight: "400", subsets: ['latin'] })


const Flavors: NextPage = () => {
  const flavors = [
    { name: 'Ocean Chill', color: 'blue', description: 'Dive into the cool and refreshing taste of blueberry and acai.' },
    { name: 'Berry Blush', color: 'pink', description: 'Indulge in the sweet and tangy fusion of strawberries and raspberries.' },
    { name: 'Tropical Zing', color: 'yellow', description: 'A vibrant mix of pineapple and passion fruit.' },
    { name: 'Grapevine Groove', color: 'purple', description: 'Savor the rich and smooth notes of wild grapes with a hint of lavender.' },
    { name: 'Cherry Fiesta', color: 'red', description: 'A lively dance of sweet and tart cherry flavors.' },
    { name: 'Citrus Garden', color: 'green', description: 'Experience the zesty and herbaceous notes of lime and mint.' },
  ];

  return (
    <>
      <Head>
        <title>Fizzler Flavors - Taste the Natural Essence</title>
        <meta name="description" content="Explore the natural and refreshing flavors of Fizzler sodas." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Hero bgImage="/hero.png" titleImage="/title.png" />


      <main className="bg-white">
        {/* Flavors Header Section */}
        <section className="w-full py-16 flex flex-col items-center justify-center text-center px-4 bg-white">
          <h1 className={`text-4xl md:text-5xl font-bold text-black mb-6 ${arvo.className}`}>Our Flavors</h1>
          <p className={`text-lg text-black mb-6 ${poppins.className}`}>
            Each Fizzler flavor is a unique experience, crafted with natural ingredients for the perfect balance of taste and refreshment.
          </p>
        </section>

        {/* Flavors Grid Section */}
        <section className="w-full py-16 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {flavors.map(flavor => (
              <FlavorCard key={flavor.name} flavor={flavor} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Flavors;

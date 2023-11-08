// pages/about.tsx
'use client'
import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@/components/Navbar/Navbar';
import Image from 'next/image';
import SodaConsumptionGraph from '@/components/Graphs/SondaConsumotionGraph';
import { Poppins } from 'next/font/google';
import { Arvo } from 'next/font/google';
import Hero from '@/components/Hero/Hero';

const poppins = Poppins({ weight: "400", subsets: ['latin'] })
const arvo = Arvo({ weight: "400", subsets: ['latin'] })

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Fizzler - Our Story</title>
        <meta name="description" content="Learn more about Fizzler's mission to make soda healthy and enjoyable." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Hero bgImage="/purple-back.png" titleImage="/fruit-red.png" />

      <main className="bg-white">
        {/* About Section */}
        <section className="w-full py-16 flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4 bg-white">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <Image src="/bottle-red.png" alt="Fizzler Logo" width={150} height={150} layout="responsive" />
          </div>
          <div className="md:w-1/2">
            <h2 className={`text-3xl md:text-4xl font-bold text-black mb-6 ${arvo.className}`}>About Fizzler</h2>
            <p className={`text-lg text-black ${poppins.className}`}>
              Fizzler is a healthy soda brand started by people who drink soda but cannot stand the negative health effects and unnecessary additives. We aim to make soda healthy and enjoyable.
            </p>
          </div>
        </section>

        {/* Data Visualization Section */}
        <section className="w-full py-16 px-4">
          <h3 className={`text-2xl md:text-3xl font-bold text-black mb-6 text-center ${arvo.className}`}>The Facts About Soda</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <h4 className="font-bold text-lg mb-2 text-center">Soda Consumption Trends</h4>
              <SodaConsumptionGraph />
            </div>
            {/* Additional graphs can be added here with similar structure */}
          </div>
        </section>
      </main>
    </>
  );
};

export default About;

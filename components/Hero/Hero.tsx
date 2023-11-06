// components/Hero.tsx

import React from 'react';
import Image from 'next/image';
import styles from "../../app/page.module.css"

type HeroProps = {
  bgImage: string; // Prop for background image
  titleImage: string; // Prop for title image
};

const Hero: React.FC<HeroProps> = ({ bgImage, titleImage }) => {
  return (
    <div className="relative bg-cover bg-center rounded-lg overflow-hidden h-64 sm:h-96" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0" />
      <div className="z-10 flex justify-center items-center h-full">
        <Image src={titleImage} alt="Hero Title" layout="intrinsic" width={600} height={600} />
      </div>
    </div>
  );
};

export default Hero;
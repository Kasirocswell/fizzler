// components/FlavorCard/FlavorCard.tsx
import React from 'react';
import styles from './FlavorCard.module.css'; // We'll create this CSS Module for animations and more specific styles

export interface Flavor {
    name: string;
    color: string;
    description: string;
  }

  interface FlavorCardProps {
    flavor: Flavor;
  }
  
  const FlavorCard: React.FC<FlavorCardProps> = ({ flavor }) => {
    // Construct the image path based on the flavor color
    const imagePath = `/${flavor.color}.png`; // Adjust the path if your images are in a different directory
  
    return (
      <div className={`p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${styles.flavorCard}`}>
        <div className={`rounded-lg p-6 flex flex-col items-center justify-center text-center ${styles[flavor.color]}`}>
          {/* Image */}
          <img src={imagePath} alt={flavor.name} className="w-full h-auto rounded-lg mb-4" />
          
          {/* Title */}
          <h3 className={`text-2xl font-bold mb-3 ${styles.flavorName}`}>{flavor.name}</h3>
          
          {/* Description */}
          <p className={styles.flavorDescription}>{flavor.description}</p>
        </div>
      </div>
    );
  };
export default FlavorCard;

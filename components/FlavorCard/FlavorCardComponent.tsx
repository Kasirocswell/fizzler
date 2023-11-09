// components/FlavorCard/FlavorCard.tsx
import React, { useState } from 'react';
import Modal from '../Modal/Modal'; // Import the Modal component
import styles from './FlavorCard.module.css';

export interface Flavor {
  name: string;
  color: string;
  description: string;
}

interface FlavorCardProps {
  flavor: Flavor;
}

const FlavorCard: React.FC<FlavorCardProps> = ({ flavor }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const imagePath = `/${flavor.color}.png`;

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <div
        className={`p-4 rounded-lg shadow-lg transition-shadow duration-300 ${styles.flavorCard}`}
        onClick={toggleModal} // Toggle modal on click
      >
        <div className={`rounded-lg p-6 flex flex-col items-center justify-center text-center ${styles[flavor.color]}`}>
          <img src={imagePath} alt={flavor.name} className="w-full h-auto rounded-lg mb-4" />
          <h3 className={`text-2xl font-bold mb-3 ${styles.flavorName}`}>{flavor.name}</h3>
          <p className={styles.flavorDescription}>{flavor.description}</p>
        </div>
      </div>

      {/* Modal */}
      {isModalVisible && (
        <Modal show={isModalVisible} onClose={toggleModal}>
          <h3 className={`text-2xl font-bold mb-3 ${styles.flavorName}`}>{flavor.name}</h3>
          <img src={imagePath} alt={flavor.name} className="w-full h-auto rounded-lg mb-4" />
          <p className={styles.flavorDescription}>{flavor.description}</p>
        </Modal>
      )}
    </>
  );
};

export default FlavorCard;

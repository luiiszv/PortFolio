// Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";


// Importamos las imágenes de los íconos
import { contactMe } from "../constants";

const Contact = () => {
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', duration: 4 } },
    hover: { scale: 1.3 },
  };


  const IconsContac = ({ contact }) => {
    return (
      <motion.a

      
        href={
          contact.name === 'Gmail'
            ? `https://mail.google.com/mail/?view=cm&fs=1&to=martinesj405@gmail.com`
            : contact.src
        }
        target="_blank"
        title={contact.name}
        rel="noopener noreferrer"
        variants={iconVariants}
   
        animate={{rotate: [0, 0, 270, 270, 0],}}
        whileHover="hover"
        className="w-10 h-10"
      >
        <img src={contact.icon} alt={contact.name} className="w-full h-full" />
      </motion.a>
    );
  };
  
  

  return (
    <div className="relative flex flex-col items-center p-8 rounded-2xl text-white">
      <h2 className={`${styles.sectionHeadText}`}>Contáctame</h2>

      {/* Íconos de contacto con animación */}
      <div className="flex space-x-8 mb-6">

        {contactMe.map((contact, index) => (
          <IconsContac
            key={index}
            contact={contact}
          />
        ))}

      </div>

     
    </div>
  );
};

export default SectionWrapper(Contact, 'contact') ;

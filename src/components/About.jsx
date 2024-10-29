import React from 'react'
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants/index";
import { SectionWrapper } from "../hoc/index";

import { fadeIn, textVariant } from "../utils/motion";


const About = () => {

  const ServiceCard = ({ index, title, icon }) => {
    return (

      <Tilt className={`xs:w-[250px] w-full`}>

        <motion.div
          variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >

          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className="bg-primary rounded-[20px] py-5  px-12 min-h-[280px] flex justify-evenly items-center flex-col">

            <img src={icon} alt={title} className='w-16 h-16 object-contain' />
            <h3 className='text-center text-white text-[20px] font-bold'>{title}</h3>
          </div>
        </motion.div>

      </Tilt>
    )
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduccion</p>
        <h2 className={`${styles.sectionHeadText}`} >Acerca de mí</h2>


      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-5 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
      >
        Soy un desarrollador de software con 1 año de experiencia en la creación de aplicaciones web. Me destaco por mi rapidez para aprender y mi enfoque colaborativo, lo que me permite contribuir de manera efectiva a proyectos escalables y crear interfaces de usuario intuitivas. Mi objetivo es proporcionar soluciones que generen un impacto positivo. Siempre busco oportunidades para expandir mis habilidades y enfrentar nuevos desafíos. Estoy entusiasmado por aplicar mis conocimientos y colaborar en proyectos innovadores.


      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">


        {services.map((service, index) => (

          <ServiceCard key={service.title} index={index} {...service} />

        ))}


      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
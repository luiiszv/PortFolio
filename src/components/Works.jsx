import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  priv,
  description,
  tags,
  image,
  source_code_link,

}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}  >
      <Tilt

        options={{
          max: 45,
          scale: 1,
          speed: 490,
        }}
        className='bg-black p-5 rounded-2xl sm:w-[360px] w-full shadow-card'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />


          {!priv &&
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >


                <img
                  src={github}
                  alt='source code'
                  className={`w-1/2 h-1/2 object-contain ${priv ? 'cursor-not-allowed disabled' : ''}`}
                />
              </div>
            </div>

          }


        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Mi Trabajo</p>
        <h2 className={`${styles.sectionHeadText}`}>Proyectos.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          En esta sección presento mis proyectos destacados, donde he aplicado mis habilidades en desarrollo web y móvil para crear soluciones completas y optimizadas para el usuario. Estoy comprometido a seguir mejorando mis capacidades y explorando nuevas oportunidades en el ámbito tecnológico.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
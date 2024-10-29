import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  sena,
  shopify,
  carrent,
  jobit,
  mysql,
  aserhi,
  tripguide,
  threejs,
  rpmFrontend,
  github,
  linkedin,
  gmail,
  aserhiProject,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Acerca",
  },
  {
    id: "work",
    title: "Trabajo",
  },

  {
    id: "works",
    title: "Proyectos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

export const contactMe = [
  {
    name: "GitHub",
    src: "https://github.com/luiiszv",
    icon: github,
  },
  {
    name: "Gmail",
    src: "https://github.com/luiiszv",
    icon: gmail,
  },
  {
    name: "Linkedin",
    src: "https://www.linkedin.com/in/jose-luis-martínez-mosquera-040642265/",
    icon: linkedin,
  },
];

const services = [
  {
    title: "Desarrollo Web Full Stack",
    icon: web, // Asegúrate de que esta imagen esté correctamente importada
  },
  {
    title: "Desarrollo de Aplicaciones con React",
    icon: mobile, // Asegúrate de que esta imagen esté correctamente importada
  },
  {
    title: "Desarrollo de Aplicaciones Móviles",
    icon: backend, // Asegúrate de que esta imagen esté correctamente importada
  },
  {
    title: "Gestión de Bases de Datos",
    icon: mobile, // Puedes cambiar el icono según sea necesario
  },

];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiencia = [
  {
    title: "Full Stack Developer",
    company_name: "ASERHI SAS ESP",
    icon: aserhi,
    iconBg: "#383E56",
    date: "Septiembre 2023 - Octubre 2024",
    points: [
      "Desarrollé una aplicación web utilizando JavaScript, MySQL, React y Tailwind CSS, implementando un sistema de login y registro para el área de talento humano.",
      "Colaboré en el desarrollo de módulos para la gestión de talento humano, gestión comercial, contratación y gestión de residuos, trabajando en equipo de manera efectiva.",
      "Implementé funcionalidades clave como la gestión y generación de propuestas y contratos, así como la descarga de documentos en formato PDF y la subida y visualización de archivos PDF.",
      "Diseñé un sistema de permisos de usuario y protección de rutas, asegurando un acceso seguro y controlado a diferentes módulos de la aplicación.",
    ],
  },


];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "RPM",
    description:
      "Aplicación móvil con soporte web diseñada para motoviajeros en Colombia. La app permite trazar rutas personalizadas, gestionar información sobre motocicletas y calcular presupuestos de combustible, promoviendo el moto-turismo responsable para usuarios con y sin experiencia.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "white-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: rpmFrontend,
    source_code_link: "https://rutasparamoteros.vercel.app",
    priv: false
  },
  {
    name: "Aserhi App Web",
    description:
      "Aplicación web diseñada para uso interno, desarrollada con dos módulos: Contratación y Talento Humano. Permite a los empleados registrar clientes potenciales, crear propuestas y, tras la aprobación, generar contratos. Integra gestión de permisos de usuario y acceso seguro a documentos, con opciones de descarga y visualización de archivos.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "white-text-gradient",
      },
    ],
    image: aserhiProject,
    source_code_link: "https://github.com/",
    priv: true
  },
];

export { services, technologies, experiencia, testimonials, projects };

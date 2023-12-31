import { CardProps } from "@/components/home/card";

export const ProjectsData: CardProps[] = [
  {
    id: 1,
    title: "Strength Shop",
    description:
      "Strength Shop is an e-commerce web application that allows users to explore, search, filter, and purchase a wide range of fitness and strength-related products. It offers a comprehensive catalog, search functionality based on product names, and the ability to filter and sort products by categories, collections, and prices. Users can add products to their cart, view detailed product information, quickly add items from the product page, specify product quantities, and complete their purchase through a checkout form.",
    date: "July 10, 2023",
    technologies: "React, Typescript, Tailwind and Strapi.",
    media:
      "https://res.cloudinary.com/dotpfjpno/video/upload/v1689953735/StrengthShopVideo_p57pp1.mp4",
    githubLink: "https://github.com/LucasCoppola/Strength-Shop",
    externalLink: "https://strength-shop.netlify.app/",
  },
  {
    id: 2,
    title: "Storage App",
    description:
      "This is a Product Storage CRUD-based tool designed for companies to manage their product inventory. It offers user registration and login, and allows users to create, edit, and delete product entries with associated images. Users can add product details such as name, price, company or brand, description, and optionally, an image. The application features a user-friendly interface, a search function for easy product location, and detailed product views.",
    date: "May 13, 2023",
    technologies: "Ejs, Bootstrap, Node.js, Express.js, Mongoose and MongoDB.",
    media:
      "https://res.cloudinary.com/dotpfjpno/video/upload/v1689976186/StorageAppVideo_vzqsg9.mp4",
    githubLink: "https://github.com/LucasCoppola/Storage-App",
    externalLink: "https://storage-app-nmpn.onrender.com",
  },
];

export const ExtraProjectsData: CardProps[] = [
  {
    id: 3,
    title: "My Unsplash",
    description:
      "A personalized photo app built to streamline image management. Users can effortlessly upload, search via labels, and delete photos, all backed by a secure authentication system.",
    date: "Aug 8, 2023",
    technologies:
      "Next.js, React, Typescript, Prisma, Auth.js, Tailwind and PostgreSQL.",
    media:
      "https://res.cloudinary.com/dotpfjpno/image/upload/v1691339890/Captura_de_pantalla_2023-08-06_133733_gg4j47.png",
    githubLink: "https://github.com/LucasCoppola/my-unsplash",
    externalLink: "https://my-unsplash-lc.vercel.app",
  },
  {
    id: 4,
    title: "Portfolio",
    description: "The website you're looking at.",
    date: "July 26, 2023",
    technologies: "Next.js, React, Typescript and Tailwind.",
    githubLink: "https://github.com/LucasCoppola/Portfoliov2",
    externalLink: "https://lucascoppola.vercel.app",
  },
  {
    id: 5,
    title: "Cart App",
    description:
      "Simple cart app for easy shopping. Add, delete, and adjust product quantities effortlessly.",
    technologies: "React and CSS.",
    media: "/CartApp.png",
    date: "Apr 13, 2023",
    githubLink: "https://github.com/LucasCoppola/react-cart-app",
    externalLink: "https://addtocart-app.netlify.app/",
  },
  {
    id: 6,
    title: "Image Uploader",
    description:
      "This application allows users to upload an image file, see a preview of the uploaded image and get the URL.",
    technologies: "Typescript, React, Tailwind, Node.js and Express.js.",
    media: "/img-uploader.png",
    date: "July 14, 2023",
    githubLink: "https://github.com/LucasCoppola/Image-Uploader",
    externalLink: "https://img-uploads.vercel.app/",
  },
  {
    id: 7,
    title: "Task Manager",
    description:
      "A straightforward and efficient to-do list application with seamless data storage in a database for efficient task management. Easily add, edit, and manage tasks using this user-friendly app.",
    technologies: "Ejs, CSS, Node.js, Express.js, Mongoose and MongoDB.",
    media: "/Task Manager.png",
    date: "Apr 4, 2023",
    githubLink: "https://github.com/LucasCoppola/Task-Manager",
    externalLink: "https://task-manager-bm8s.onrender.com",
  },
  {
    id: 8,
    title: "Quiz App",
    description:
      "This was one of my first projects. It's a basic application that fetches trivia questions from an external API. Users can take fun quizzes and test their knowledge.",
    technologies: "HTML, CSS and Javascript.",
    media: "/Quiz App.png",
    date: "Dec 30, 2022",
    githubLink: "https://github.com/LucasCoppola/quiz-app",
    externalLink: "https://lucascoppola.github.io/quiz-app",
  },
  // {
  //   id: 9,
  //   title: "Portfolio",
  //   description:
  //     "This is my first portfolio, created to display my projects, the technologies I'm familiar with, a brief introduction about myself, and a timeline of my journey so far.",
  //   technologies: "React and Tailwind.",
  //   media: "/Portfolio.png",
  //   date: "May 19, 2023",
  //   githubLink: "https://github.com/LucasCoppola/Portfolio",
  //   externalLink: "https://lucascoppola.netlify.app",
  // },
];

const data = {
  ExtraProjectsData,
  ProjectsData,
};
export default data;

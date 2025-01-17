const projects = [
  {
    id: 1,
    stack: "basic",
    gitLink: "https://github.com/nitish-k00/FORM-VALIDATION-002",
    liveLink: undefined,
    title: "FORM-VALIDATION-002",
    image: [
      "../Image/project/form-validation-2/form-1.png",
      "../Image/project/form-validation-2/form-2.png",
      "../Image/project/form-validation-2/form-3.png",
      "../Image/project/form-validation-2/form-4.png",
    ],
    description:
      "This project demonstrates how to validate a form with multiple inputs including User ID, Password, Name, Email, Country, Gender, Language, and About fields using HTML, CSS, and JavaScript.",
    main: "no",
    skill: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    stack: "basic",
    gitLink: "https://github.com/nitish-k00/FORM-VALIDATION-001",
    liveLink: undefined,
    title: "FORM-VALIDATION-001",
    image: [
      "../Image/project/form-validation-1/form-1.png",
      "../Image/project/form-validation-2/form-2.png",
      "../Image/project/form-validation-2/form-3.png",
      "../Image/project/form-validation-2/form-4.png",
      "../Image/project/form-validation-2/form-5.png",
      "../Image/project/form-validation-2/form-6.png",
    ],
    description:
      "A simple form validation project built using HTML, CSS, and JavaScript. This form includes fields for Name, Email, Password and Confirm Password, with custom validation indicators that provide real-time feedback.",
    main: "no",
    skill: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    stack: "basic",
    gitLink: "https://github.com/nitish-k00/Responsive-002",
    liveLink: undefined,
    title: "Responsive-002",
    image: [
      "../Image/project/responsive-2/res-1.png",
      "../Image/project/responsive-2/res-2.png",
      "../Image/project/responsive-2/res-3.png",
      "../Image/project/responsive-2/res-4.png",
      "../Image/project/responsive-2/res-5.png",
      "../Image/project/responsive-2/res-6.png",
      "../Image/project/responsive-2/res-7.png",
      "../Image/project/responsive-2/res-8.png",
      "../Image/project/responsive-2/res-9.png",
    ],
    description:
      "A responsive web design project where I took a challenging design from a Nicepage site and recreated the style to be fully responsive across all screen sizes. The project uses HTML, JavaScript, and Bootstrap.",
    main: "no",
    skill: ["HTML", "JavaScript", "Bootstrap"],
  },
  {
    id: 4,
    stack: "basic",
    gitLink: "https://github.com/nitish-k00/Responsive-001",
    liveLink: undefined,
    title: "Responsive-001",
    image: [
      "../Image/project/responsive-1/res-1.png",
      "../Image/project/responsive-1/res-2.png",
      "../Image/project/responsive-1/res-3.png",
      "../Image/project/responsive-1/res-4.png",
      "../Image/project/responsive-1/res-5.png",
      "../Image/project/responsive-1/res-6.png",
      "../Image/project/responsive-1/res-7.png",
      "../Image/project/responsive-1/res-8.png",
      "../Image/project/responsive-1/res-9.png",
    ],
    description:
      "A responsive web design project where I took a challenging design from a Nicepage site and recreated the style to be fully responsive across all screen sizes. The project uses HTML, JavaScript, and CSS.",
    main: "no",
    skill: ["HTML", "JavaScript", "CSS"],
  },
  {
    id: 5,
    stack: "fullstack",
    gitLink: "https://github.com/nitish-k00/SS_BBQ",
    liveLink: "https://ss-bbq-scooter.onrender.com/",
    title: "SS_BBQ",
    image: [
      "../Image/project/bbq/bbq-1.jpeg",
      "../Image/project/bbq/bbq-2.jpeg",
      "../Image/project/bbq/bbq-3.jpeg",
      "../Image/project/bbq/bbq-4.jpeg",
      "../Image/project/bbq/bbq-5.jpeg",
      "../Image/project/bbq/bbq-6.jpeg",
      "../Image/project/bbq/bbq-7.jpeg",
      "../Image/project/bbq/bbq-8.jpeg",
      "../Image/project/bbq/bbq-9.jpeg",
      "../Image/project/bbq/bbq-10.jpeg",
      "../Image/project/bbq/bbq-11.jpeg",
      "../Image/project/bbq/bbq-12.jpeg",
      "../Image/project/bbq/bbq-13.jpeg",
      "../Image/project/bbq/bbq-14.jpeg",
      "../Image/project/bbq/bbq-15.jpeg",
      "../Image/project/bbq/bbq-16.jpeg",
      "../Image/project/bbq/bbq-17.jpeg",
      "../Image/project/bbq/bbq-18.jpeg",
      "../Image/project/bbq/bbq-19.jpeg",
      "../Image/project/bbq/bbq-20.jpeg",
    ],
    description:
      "Designed a dynamic admin panel to seamlessly manage over 500 products and process 400+ orders monthly, enhancing oversight of inventory, categories, and user reviews. Implemented JWT, Google Login, and OTP for robust data protecWon.Improved delivery efficiency by 25% with a dedicated dashboard.Increased success rates by 70% with Razor-pay integraWon and data visualisaWon.Reduced customer inquiries by 30% with live map updates.Cut backend response times by 50% using Redis.",
    main: true,
    skill: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Redux",
      "Bootstrap",
      "Router-dom",
      "Redis",
      "mongoose",
      "Socket.IO",
    ],
  },

  {
    id: 6,
    stack: "frontend",
    gitLink: "https://github.com/nitish-k00/TO-DO-LIST",
    liveLink: undefined,
    title: "TO-DO-LIST",
    image: [
      "../Image/project/to-do/to-do-1.png",
      "../Image/project/to-do/to-do-2.png",
      "../Image/project/to-do/to-do-3.png",
    ],
    description:
      "A simple to-do list application built with React. Users can add, list, complete, edit and delete tasks from the list.",
    main: "no",
    skill: ["React", "JavaScript", "Bootstrap", "Redux"],
  },
  {
    id: 7,
    stack: "frontend",
    gitLink: "https://github.com/nitish-k00/LEAFLET-MAP",
    liveLink: undefined,
    title: "LEAFLET-MAP",
    image: [
      "../Image/project/Leaflet/Leaflet-1.png",
      "../Image/project/Leaflet/Leaflet-2.png",
      "../Image/project/Leaflet/Leaflet-3.png",
    ],
    description:
      "A React app that integrates the Leaflet map API to display a position pointer for location marking, custom pins for specific markers, and the user's current location on the map.",
    main: "no",
    skill: ["React", "Leaflet", "JavaScript", "MUI"],
  },
  {
    id: 8,
    stack: "frontend",
    gitLink: "https://github.com/nitish-k00/VALENTINE-PROPOSAL-FUN",
    liveLink: undefined,
    title: "VALENTINE-PROPOSAL-FUN",
    image: [
      "../Image/project/valatine/valatine-1.png",
      "../Image/project/valatine/valatine-2.png",
      "../Image/project/valatine/valatine-3.png",
    ],
    description:
      "A fun and interactive React app developed for my friend to propose to his girlfriend. The app features a proposal interaction where the 'Accept' and 'Reject' buttons are dynamically resized based on the user's choice.",
    main: "no",
    skill: ["React", "JavaScript", "css"],
  },
  {
    id: 9,
    stack: "fullstack",
    gitLink: "https://github.com/nitish-k00/Invoice-Management-System",
    liveLink: "https://invoice-management-system-mn3d.onrender.com/",
    title: "Invoice-Management-System",
    image: [
      "../Image/project/invoice/one-INVOICE.png",
      "../Image/project/invoice/three-INVOICE.png",
      "../Image/project/invoice/two-INVOICE.png",
    ],
    description:
      "This project implements a full-stack invoice management system with MERN REST Framework for the backend and React for the frontend. The system allows creating, managing, and deleting invoices.",
    main: "no",
    skill: ["MongoDB", "Express.js", "React", "Node.js", "MUI", "Router-dom,"],
  },
  {
    id: 10,
    stack: "backend",
    gitLink: "https://github.com/nitish-k00/CURD-SERVER",
    liveLink: undefined,
    title: "CURD-SERVER",
    image: [
      "../Image/project/curd/curd-1.png",
      "../Image/project/curd/curd-2.png",
    ],
    description:
      "A MERN stack application that allows you to Create, Update, Read, and Delete user data. This app provides basic CRUD functionality for managing user information.",
    main: "no",
    skill: ["MongoDB", "Express.js", "React", "Node.js"],
  },

  {
    id: 11,
    stack: "frontend",
    gitLink: "https://github.com/nitish-k00/TIC-TAC-TOE-REACT",
    liveLink: "https://nitish-k00.github.io/TIC-TAC-TOE-REACT/",
    title: "TIC-TAC-TOE-REACT",
    image: [
      "../Image/project/Tic-Tac-Toe/Tic-Tac-Toe-1.png",
      "../Image/project/Tic-Tac-Toe/Tic-Tac-Toe-2.png",
    ],
    description:
      "This is a simple Tic Tac Toe game built using React. The game state is saved in the browser's local storage to allow you to resume the game even after closing the browser.",
    main: true,
    skill: ["React", "JavaScript", "Bootstrap", "Redux"],
  },
  {
    id: 12,
    stack: "fullstack",
    gitLink: "https://github.com/nitish-k00/Movie-Booking-MERN",
    liveLink: undefined,
    title: "Movie-Booking-MERN",
    image: [
      "../Image/project/movies/movie-1.png",
      "../Image/project/movies/movie-2.png",
      "../Image/project/movies/movie-3.png",
      "../Image/project/movies/movie-4.png",
      "../Image/project/movies/movie-5.png",
      "../Image/project/movies/movie-6.png",
      "../Image/project/movies/movie-7.png",
      "../Image/project/movies/movie-8.png",
    ],
    description:
      "Using the MERN stack, develop a movie booking site featuring user authentication, simple functions, and an admin dashboard.",
    main: true,
    skill: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "mongoose",
      "Redux",
      "Bootstrap",
      "Router-dom",
    ],
  },
  {
    id: 13,
    stack: "fullstack",
    gitLink: "https://github.com/nitish-k00/ECOMMERCE-MERN",
    liveLink: undefined,
    title: "ECOMMERCE-MERN",
    image: [
      "../Image/project/Ecom/ecom-1.png",
      "../Image/project/Ecom/ecom-2.png",
      "../Image/project/Ecom/ecom-3.png",
      "../Image/project/Ecom/ecom-4.png",
      "../Image/project/Ecom/ecom-5.png",
      "../Image/project/Ecom/ecom-6.png",
      "../Image/project/Ecom/ecom-7.png",
    ],
    description:
      "This project is an e-commerce website built using the MERN stack. It allows users to browse products, add them to the cart, and make purchases.",
    main: true,
    skill: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Redux",
      "Bootstrap",
      "Router-dom",
      "MUI",
    ],
  },
  {
    id: 14,
    stack: "frontend",
    gitLink: "https://github.com/nitish-k00/Tamil-Tradition",
    liveLink: undefined,
    title: "Tamil-Tradition",
    image: [
      "../Image/project/tamil-culture/tamil-1.png",
      "../Image/project/tamil-culture/tamil-1.png",
      "../Image/project/tamil-culture/tamil-1.png",
      "../Image/project/tamil-culture/tamil-1.png",
      "../Image/project/tamil-culture/tamil-1.png",
      "../Image/project/tamil-culture/tamil-1.png",
    ],
    description:
      "This project is a simple website that showcases various aspects of Tamil tradition. The website is built using HTML, CSS, and JavaScript.",
    main: true,
    skill: ["HTML", "CSS", "JavaScript"],
  },
];

export default projects;

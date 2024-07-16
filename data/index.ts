export const navItems = [
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#about" },
  { name: "Education", link: "#education" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "My tech stack",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] flex flex-col items-center ", // Changed className
    imgClassName: "w-full h-full",
    titleClassName: "justify-center", // Changed titleClassName
    img: "",
    spareImg: "",
  },

  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projectExperience = [
  {
    id: 1,
    title: "Expense Splitter | Splitser",
    desc: "An expense splitter application using React.js for the frontend, integrated with a Node.js and Express backend, fetching data through live API calls.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    link: "https://github.com/Devilcoder2/Expense-Splitter/tree/main",
  },
  {
    id: 2,
    title: "Diabetes Classification Using KNN Algorithm",
    desc: "Applied the K-Nearest Neighbors KNN algorithm from sci-kit-learn to classify diabetes types based on preprocessed and scaled data. Tech stack- Python, Machine Learning, Data Visualization",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
    link: "https://github.com/itsmeayushipanday/DiabetesClassification_Using_KNN",
  },
  {
    id: 3,
    title: "Real-Time Tic-Tac-Toe",
    desc: "A real-time Tic-Tac-Toe game using React.js, integrated with Socket.IO to enable two players to play the game in real-time with live updates.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
    link: "https://github.com/itsmeayushipanday/RealtimeGaming",
  },
  {
    id: 4,
    title: "Data Augmentation Using Deep Learning",
    desc: "Implemented data augmentation techniques like image flipping, adjusting saturation, brightness, and rotation to enhance the dataset. Tech stack- Python, TensorFlow, Deep Learning",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    link: "https://github.com/itsmeayushipanday/Data-Augmentation-Using-DeepLearning",
  },

  {
    id: 5,
    title: "Chatbot Using Python And Machine Learning",
    desc: "Achieved an accuracy of 84.85 percent through extensive training on labeled intent data and implemented the model with Python for real-time user interactions. Tech stack- TensorFlow, Keras, Python",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    link: "https://github.com/itsmeayushipanday/Chatbot-Using-Python-And-Machine-Learning",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/itsmeayushipanday",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/ayushipanday22",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ayushi-panday-785ba4269/",
  },
];

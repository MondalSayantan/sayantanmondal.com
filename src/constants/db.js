import images from "./images";

const projects = [
  {
    id: 1,
    title: "QTrip",
    description:
      "QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities.",
    tags: ["Personal Portfolio Projects"],
    technologies: "HTML, CSS, JavaScript",
    image: images.qtrip,
  },
  {
    id: 2,
    title: "XBoard",
    description:
      "XBoard is a News Feed website that will feature the latest news for select topics, from Flipboard.",
    tags: ["Personal Portfolio Projects"],
    technologies: "HTML, CSS, JavaScript",
    image: images.xboard,
  },
  {
    id: 3,
    title: "QKart",
    description:
      "QKart is an E-commerce application offering a variety of products for customers to choose from.",
    tags: ["Personal Portfolio Projects"],
    technologies: "React, Node.Js, Express, MongoDB",
    image: images.qkart,
  },
  {
    id: 4,
    title: "XFlix",
    description:
      "XFlix is a video sharing platform which hosts videos for the world to watch. It also features uploading new videos by using external video links (eg: Youtube) and playing these videos.",
    tags: ["Personal Portfolio Projects"],
    technologies: "React, Node.Js, Express, MongoDB",
    image: images.xflix,
  },
  {
    id: 5,
    title: "Cuddles",
    description:
      "Whether you're looking for a new home for a dog in need or seeking advice on how to address strange behavior in your cat, posting in the Cuddles community of animal lovers is the quickest way to get the help you need.",
    tags: ["Hackathon Winning Projects"],
    technologies: "WildHacks II Prize Winner",
    image: images.cuddles,
  },
  {
    id: 6,
    title: "Stakes and Games",
    description:
      "A game room where two players can compete against each other in a thrilling online experience of Tic-Tac-Toe. Players can chat, have fun and bet on the game using Amazon. ",
    tags: ["Hackathon Winning Projects"],
    technologies: "Snakes and Hackers 2 Prize Winner",
    image: images.stakes,
  },
  {
    id: 7,
    title: "Food Relevel",
    description:
      "Food Relevel is a web app on which any kitchen can register to have complete control of their product stock. The goal of this app is to help the kitchen to have a better control of their stock and to avoid food waste.",
    tags: ["Hackathon Winning Projects"],
    technologies: "Hack and Snack Prize Winner",
    image: images.foodrelevel,
  },
  {
    id: 8,
    title: "Event Rush",
    description:
      "Event Rush aims to improve the registration and crowd control process for college events. It offers a personalized calendar feature. Users receive a unique QR code for easy scanning and the platform also helps to manage seat availability and marketing efforts.",
    tags: ["Hackathon Winning Projects"],
    technologies: "Hack JKLU Prize Winner",
    image: images.eventrush,
  },
  {
    id: 9,
    title: "DAK Management System",
    description:
      "A web portal for increasing the efficiency and transparency internally of the DAK system in Government of Rajasthan (Jaipur Collectorate). Successfully implemented in the Jaipur Collectorate after rigorous testing.",
    tags: ["Real World Applications"],
    technologies: "Government of Rajasthan",
    images: images.dak,
  },
  {
    id: 10,
    title: "Convocation Portal",
    description:
      "A web portal to register graduates for the convocation ceremony. The portal provides a platform for the graduates to upload their documents, pay the convocation fee online and clear their dues. Used by over 2000 graduates",
    tags: ["Real World Applications"],
    technologies: "Manipal University Jaipur",
    images: images.convocation,
  },
];

export default projects;

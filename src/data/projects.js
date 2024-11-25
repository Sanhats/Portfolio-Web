import { StaticImageData } from 'next/image';
import WorkIm from '../assets/projects/netflixClone.png';
import RealEst from '../assets/projects/Screenshot_16.png';
import LAtesport from '../assets/projects/Screenshot_17.png';
import Latesport from '../assets/projects/Screenshot_18.png';

interface Project {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
  github: string;
  live: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Netflix clone UI/UX",
    description: "React JS, Tailwind CSS",
    image: WorkIm,
    github: "https://github.com/Sanhats/netflix-clone-with-react-tailwind",
    live: "",
  },
  {
    id: 2,
    name: "Sign in/ Sign up ",
    image: RealEst,
    description: "FIREBASE, Firestore, Authentication",
    github: "https://github.com/Sanhats/netflix-clone-with-react-tailwind",
    live: "",
  },
  {
    id: 3,
    name: "Platform for Esports news",
    image: LAtesport,
    description: "React JS, Tawilwind CSS",
    github: "https://github.com/Sanhats?tab=repositories",
    live: "",
  },
  {
    id: 4,
    name: "Web Page for Esports News",
    image: Latesport,
    description: "React JS, Tailwind CSS, Node JS",
    github: "https://github.com/Sanhats?tab=repositories",
    live: "",
  },
];


export interface ArchivedProject {
  name: string;
  date: string;
  place: string;
  award: string;
  builtWith: string[];
  link: string;
}

export interface FeaturedWork {
  name: string;
  date: string;
  description: string;
  builtWith: string[];
  link: string;
}

export interface ContactLinks {
  github: string;
  email: string;
  linkedin: string;
  devpost: string;
}

export interface ExperienceItem {
  company: string;
  title?: string;
  location?: string;
  date: string;
  responsibilities?: string[];
  skills?: string[];
  link: string;
}

export type HeroImage = {
  src: string;
  alt: string;
  caption: string;
};

export type HeroSlide = {
  title: string;
  images: HeroImage[];
};

export const heroSlides: HeroSlide[] = [
  {
    title: "software developer",
    images: [
      {
        src: "/hack1.jpg",
        alt: "group photo",
        caption: "hack the north, 2023",
      },
      {
        src: "/hack2.jpg",
        alt: "group photo",
        caption: "nwHacks, 2023",
      },
    ],
  },
  {
    title: "car enthusiast",
    images: [
      {
        src: "/car1.jpg",
        alt: "Car with mountain in background",
        caption: "Porteau Cove, 2025",
      },
      {
        src: "/car2.jpg",
        alt: "Two dogs playing outdoors",
        caption: "summer car meet",
      },
    ],
  },
  {
    title: "adventurer",
    images: [
      {
        src: "/adventure1.jpg",
        alt: "A beach with a cliff",
        caption: "Los Angeles, 2022",
      },
      {
        src: "/adventure2.jpg",
        alt: "Two people posing for a photo",
        caption: "Seoul, 2025",
      },
    ],
  },
  {
    title: "dog lover",
    images: [
      {
        src: "/dog1.png",
        alt: "Two dogs playing outdoors",
        caption: "Obi + Arlo, Christmas 2023",
      },
      {
        src: "/dog2.jpg",
        alt: "Two dogs playing outdoors",
        caption: "Oreo + me @ VSC Meet 2023",
      },
    ],
  },
];

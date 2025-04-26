import { Project,Experience } from "./types";

export const projects: Project[] = [
  {
    label: "Student Beans",
    title: "The #1 student loyalty network",
    url: "https://studentbeans.com",
    image: "/images/projects/studentbeans.png",
    icon: "/images/projects/icons/studentbeans.ico",
  },
  {
    label: "Worlde Unlimited",
    title: "Wordle but with access to all the levels",
    url: "https://tranquil-croquembouche-4cdce0.netlify.app/",
    image: "/images/projects/wordle.png",
    icon: "/images/projects/icons/default.ico",
  },
  {
    label: "Electroneum",
    title: "A revolutionary new digital ecosystem",
    url: "https://electroneum.com/",
    image: "/images/projects/electroneum.png",
    icon: "/images/projects/icons/electroneum.ico",
  },
  {
    label: "Othello",
    title: "Play Othello online against the computer or a friend (locally)",
    url: "https://othello.netlify.app/",
    image: "/images/projects/othello.png",
    icon: "/images/projects/icons/default.ico",
  },
  {
    label: "Drone photography",
    title: "A media companies brochure site",
    url: "https://effortless-maamoul-af63e9.netlify.app/",
    image: "/images/projects/drone.png",
    icon: "/images/projects/icons/drone.png",
  },
  {
    label: "Beep Creative",
    title: "A digital marketing agency",
    url: "https://beepcreative.com/",
    image: "/images/projects/beep.png",
    icon: "/images/projects/icons/beep.ico",
  },
]

export const experience: Experience[] = [
  {
    time: "2022 - present",
    title: "Student Beans / Pion",
    url: "https://studentbeans.com",
    description: "Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    roles: [
      { name: "Senior Javascript Engineer", duration: "~ 7 months" },
      { name: "Javascript Engineer", duration: "2 years 5 months" },
    ],
    coreTech: ["React", "Next.js", "Tailwind", "HTML", "Jest", "Git"],
    relatedTech: ["AWS", "CI/CD", "Docker", "Node"],
  },
  {
    time: "2017 - 2022",
    title: "Electroneum",
    url: "https://electroneum.com",
    description: "Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    roles: [{ name: "UX Developer", duration: "~ 5 years" }],
    coreTech: ["Angular", "Ionic", "SASS", "HTML", "Jest", "Git"],
    relatedTech: ["AWS", "Docker", "Node"],
  },
  {
    time: "2012 - 2017",
    title: "Creative agencies",
    description: "During this time I worked across three separate creative agencies working on a range of different products and mediums, ranging from print collateral for real estate marketing, to performance management apps for professional sports organisations (Team GB Taekwondo, Saracens rugby club, ECB Cricket and many more), to custom social media management dashboards.",
    roles: [
      { name: "UI/UX Designer", duration: "~ 2 years" },
      { name: "Web & Application Designer", duration: "~ 1 year" },
      { name: "Senior Digital & Creative Designer", duration: "~ 1 year" },
    ],
    coreTech: ["Adobe Suite", "Wordpress", "CSS", "HTML"],
    relatedTech: ["PHP"],
  },
]
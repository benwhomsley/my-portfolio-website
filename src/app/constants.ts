import { Project, Experience } from "./types";

function getDurationSince(startDate: Date): string {
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (now.getDate() < startDate.getDate()) {
    months -= 1;
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const yearPart = years > 0 ? `${years} year${years !== 1 ? "s" : ""}` : "";
  const monthPart = months > 0 ? `${months} month${months !== 1 ? "s" : ""}` : "";

  return [yearPart, monthPart].filter(Boolean).join(" ") || "< 1 month";
}

export const projects: Project[] = [
  {
    label: "Student Beans",
    title: "The #1 student loyalty network",
    url: "https://studentbeans.com",
    image: "/images/projects/studentbeans.png",
    icon: "/images/projects/icons/studentbeans.ico",
    category: "client",
    intro:
      "Student Beans (part of Pion) is the world's largest platform for student and youth verification, connecting millions of students worldwide with exclusive discounts from thousands of brands.",
    role:
      "I've been part of the core web platform team and the verification & security team, first as a JavaScript Engineer and now as a Senior JavaScript Engineer, shipping features end-to-end across the React/Next.js codebase and mentoring other engineers to help raise the team's overall pace and code quality.",
    impact: [
      "Mentored junior and mid-level engineers, helping them earn promotions, build confidence and ship independently.",
      "Led a cross-function caching infrastructure initiative to fix performance issues and improve user experience.",
      "Raised Lighthouse performance score from under 50 to 90+ across studentbeans.com, improving performance visitor satisfaction.",
      "Led an accessibility initiative to bring the platform into WCAG compliance and introduced automated testing to ensure continued compliance.",
      "Improved SEO across hundreds of brand pages, driving organic traffic and revenue growth.",
    ],
    tech: ["React", "Next.js", "Tailwind", "AWS", "CI/CD"],
  },
  {
    label: "Electroneum",
    title: "A revolutionary new digital ecosystem",
    url: "https://electroneum.com/",
    image: "/images/projects/electroneum.png",
    icon: "/images/projects/icons/electroneum.ico",
    category: "client",
    intro:
      "Electroneum is a fintech and digital ecosystem that set out to bring mobile-first financial services to unbanked users in emerging economies, becoming one of the most talked-about crypto ventures of its time.",
    role:
      "I led the UX unit through a 5-year, high-growth startup phase, taking ownership of research and product design through to hands-on implementation across web and hybrid mobile apps (Angular/Ionic), working directly with founders and engineers to bring the product to market.",
    impact: [
      "Took an idea from concept to market, working closely with founders and engineers to deliver a product that resonated with users in emerging economies.",
      "Helped build a company known for championing responsible practice in a sector often associated with risk — contributing to one of the most successful ICOs of its time raising ~£40m.",
      "Established a culture of user-centered design and continuous improvement through hands-on mentorship and collaboration.",
    ],
    tech: ["Angular", "Ionic", "SASS", "UX Research"],
  },
  {
    label: "Drone photography",
    title: "A media companies brochure site",
    url: "https://moodymoosemedia.com/",
    image: "/images/projects/drone.png",
    icon: "/images/projects/icons/drone.png",
    category: "side",
  },
  {
    label: "Wordle Unlimited",
    title: "Wordle but with access to all the levels",
    url: "https://tranquil-croquembouche-4cdce0.netlify.app/",
    image: "/images/projects/wordle.png",
    icon: "/images/projects/icons/default.ico",
    category: "side",
  },
  {
    label: "Othello",
    title: "Play Othello online against the computer or a friend (locally)",
    url: "https://othello.netlify.app/",
    image: "/images/projects/othello.png",
    icon: "/images/projects/icons/default.ico",
    category: "side",
  },
  {
    label: "Beep Creative",
    title: "A digital marketing agency",
    url: "https://beepcreative.com/",
    image: "/images/projects/beep.png",
    icon: "/images/projects/icons/beep.ico",
    category: "side",
  },
];

export const experience: Experience[] = [
  {
    time: "2022 - present",
    title: "Student Beans / Pion",
    url: "https://studentbeans.com",
    description:
      "Currently part of the team that builds and maintains the web platform for the #1 student loyalty network. As well as working on other internal and external projects, my role also extends to mentoring other engineers and helping them grow in their careers.",
    roles: [
      {
        name: "Senior JavaScript Engineer",
        duration: getDurationSince(new Date(2024, 6, 1)),
      },
      { name: "JavaScript Engineer", duration: "2 years 5 months" },
    ],
    coreTech: ["React", "Next.js", "Tailwind", "HTML", "Jest", "Git"],
    relatedTech: ["AWS", "CI/CD", "Docker", "Node"],
  },
  {
    time: "2017 - 2022",
    title: "Electroneum",
    url: "https://electroneum.com",
    description:
      "Worked as part of a startup team building a new digital ecosystem and launching one of the most successful crypto projects of its time. Leading the UX unit, we brought a revolutionary new digital ecosystem to market, giving unbanked people in emerging economies access to a digital payment system.",
    roles: [{ name: "UX Developer", duration: "~ 5 years" }],
    coreTech: ["Angular", "Ionic", "SASS", "HTML", "Jest", "Git"],
    relatedTech: ["AWS", "Docker", "Node"],
  },
  {
    time: "2012 - 2017",
    title: "Creative agencies",
    description:
      "During this time I worked across three separate creative agencies working on a range of different products and mediums, ranging from print collateral for real estate marketing, to performance management apps for professional sports organisations (Team GB Taekwondo, Saracens rugby club, ECB Cricket and many more), to custom social media management dashboards.",
    roles: [
      { name: "UI/UX Designer", duration: "~ 2 years" },
      { name: "Web & Application Designer", duration: "~ 1 year" },
      { name: "Senior Digital & Creative Designer", duration: "~ 1 year" },
    ],
    coreTech: ["Adobe Suite", "Wordpress", "CSS", "HTML"],
    relatedTech: ["PHP"],
  },
];

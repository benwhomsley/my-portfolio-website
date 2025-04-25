import Image from "next/image"
import Heading from "./components/heading"
import Experience from "./components/experience"
import Nav from "./components/nav"
import Footer from "./components/footer"
import Header from "./components/header"

type Project = {
  label: string
  title: string
  url: string
  image: string
  icon: string
}

const projects: Project[] = [
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

export default function Home() {
  const renderExperienceSection = () => (
    <section
      id="experience"
      className="w-full flex flex-col justify-center p-4 sm:p-10 sm:py-20"
    >
      <div className="flex-col gap-6 sm:flex-row flex justify-between">
        <div className="w-fit">
          <Heading component="h2">Experience</Heading>
          <p className="text-lg text-gray-400 text-right leading-none">
            10+ years in industry
          </p>
        </div>
        <div>
          <ul className="flex flex-row sm:flex-col mb-2">
            <li className="px-[7px] py-[2px] rounded-md font-medium before:inline-block before:w-3 before:h-3 before:bg-yellow-300 before:rounded-full before:mr-[5px]">
              Core tech
            </li>
            <li className="px-[7px] py-[2px] rounded-md font-medium before:inline-block before:w-3 before:h-3 before:bg-yellow-50 before:rounded-full before:mr-[5px]">
              Related tech
            </li>
          </ul>
        </div>
      </div>
      <Experience
        time="2022 - present"
        title="Student Beans / Pion"
        url="https://studentbeans.com"
        description="Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
        roles={[
          { name: "Senior Javascript Engineer", duration: "~ 7 months" },
          { name: "Javascript Engineer", duration: "2 years 5 months" },
        ]}
        coreTech={["React", "Next.js", "Tailwind", "HTML", "Jest", "Git"]}
        relatedTech={["AWS", "CI/CD", "Docker", "Node"]}
      />
      <Experience
        time="2017 - 2022"
        title="Electroneum"
        url="https://electroneum.com"
        description="Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
        roles={[{ name: "UX Developer", duration: "~ 5 years" }]}
        coreTech={["Angular", "Ionic", "SASS", "HTML", "Jest", "Git"]}
        relatedTech={["AWS", "Docker", "Node"]}
      />
      <Experience
        time="2012 - 2017"
        title="Creative agencies"
        description="During this time I worked across three separate creative agencies working on a range of different products and mediums, ranging from print collateral for real estate marketing, to performance management apps for professional sports organisations (Team GB Taekwondo, Saracens rugby club, ECB Cricket and many more), to custom social media management dashboards."
        roles={[
          { name: "UI/UX Designer", duration: "~ 2 years" },
          { name: "Web & Application Designer", duration: "~ 1 year" },
          { name: "Senior Digital & Creative Designer", duration: "~ 1 year" },
        ]}
        coreTech={["Adobe Suite", "Wordpress", "CSS", "HTML"]}
        relatedTech={["PHP"]}
      />
    </section>
  )

  const renderProject = (project: Project, index: number) => {
    const styles = (index+1) === 2 || (index+1) % 3 === 0 ? "sm:col-span-2" : "sm:col-span-3"
    return (
      <a
        key={index}
        href={project.url}
        target="_blank"
        rel="nofollow"
        className={`relative rounded-xl overflow-hidden p-4 h-[250px] sm:h-[500px] col-span-5 ${styles}`}
      >
        <div className="flex gap-2 relative z-[2] text-xs font-medium uppercase tracking-wider mb-2">
          <Image
            className="h-fit"
            src={project.icon}
            alt=""
            width={16}
            height={16}
          />
          {project.label}
        </div>
        <Heading component="h5" className="z-[2] relative w-3/4">
          {project.title}
        </Heading>
        <div className="bg-gradient-to-b from-black/80 to-slate-transparent absolute w-full h-1/2 z-[1] top-0 left-0"></div>
        <Image
          src={project.image}
          fill
          sizes="50vw"
          style={{ objectFit: "cover" }}
          alt=""
          className="z-0"
        />
      </a>
    )
  }

  const renderProjectsSection = () => {
    return (
      <section
        id="projects"
        className="w-full justify-center p-4 sm:p-10 sm:py-20"
      >
        <Heading component="h2" className="mb-[100px]">
          Projects
        </Heading>
        <div className="grid grid-cols-5 gap-6">
          {projects.map((project, index) => {
            return renderProject(project, index)
          })}
        </div>
      </section>
    )
  }

  const renderBehindTheKeyboardSection = () => (
    <section
      id="behind"
      className="w-full flex flex-col justify-center p-4 sm:p-10"
    >
      <div className="w-fit content-center">
        <Heading component="h2">
          There&apos;s more to a person than just work, peek behind the
          keyboard.
        </Heading>
      </div>

      <div className="relative flex flex-wrap gap-8 py-8">
        <div className="relative w-[320px] h-[400px] rounded-lg overflow-hidden">
          <Image
            src={"/images/family.jpg"}
            fill
            sizes="50vw"
            style={{ objectFit: "cover" }}
            alt=""
            className="w-[calc(100%-40px)]"
          />
        </div>
        <div>
          <Heading component="h3" className="mb-1">
            Family & Sport
          </Heading>
          <sub className="text-lg text-gray-400 leading-none">
            Father of one <span className="text-yellow-300">&#47;&#47;</span>{" "}
            Black belt (1st dan) in Taekwondo
          </sub>
        </div>
      </div>
      {/* <div className='relative flex flex-wrap gap-8 py-8'>
        <div className='relative w-[320px] h-[400px] rounded-lg overflow-hidden'>
          <Image
            src={"/images/family.jpg"}
            fill
            objectFit="cover"
            alt=""
            className="w-[calc(100%-40px)]"
          />
        </div>
        <div>
          <Heading component="h3" className="mb-1">
            For fun
          </Heading>
          <sub className="text-lg text-gray-400 leading-none">
            Video & board game lover
          </sub>
        </div>
      </div>
      <div className="relative flex flex-wrap gap-8 py-8">
        <div className="relative w-[320px] h-[400px] rounded-lg overflow-hidden">
          <Image
            src={"/images/family.jpg"}
            fill
            objectFit="cover"
            alt=""
            className="w-[calc(100%-40px)]"
          />
        </div>
        <div>
          <Heading component="h3" className="mb-1">
            Coding fun
          </Heading>
          <sub className="text-lg text-gray-400 leading-none">
            Dabble in creative coding from time to time
          </sub>
        </div>
      </div> */}
    </section>
  )

  return (
    <div className="max-w-[1200px] mx-auto min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="relative flex flex-col gap-8 overflow-hidden">
        <div className="orb pointer-events-none z-20 fixed inset-0 w-[600px] h-[600px] top-0 left-0 animate-hover"></div>
        <Nav />
        <Header />
        {renderExperienceSection()}
        {renderProjectsSection()}
        {renderBehindTheKeyboardSection()}
      </main>
      <Footer />
    </div>
  )
}

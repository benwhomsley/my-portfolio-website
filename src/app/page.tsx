import Image from "next/image";
import Heading from "./components/heading";
import Experience from "./components/experience";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Header from "./components/header";
import { Project } from "./types";
import { experience, projects } from "./constants";
import ContactForm from "./components/contact";

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
      {experience.map((exp, index) => (
        <Experience
          key={index}
          time={exp.time}
          title={exp.title}
          url={exp.url}
          description={exp.description}
          roles={exp.roles}
          coreTech={exp.coreTech}
          relatedTech={exp.relatedTech}
        />
      ))}
    </section>
  );

  const renderProject = (project: Project, index: number) => {
    const styles =
      index + 1 === 2 || (index + 1) % 3 === 0
        ? "sm:col-span-2"
        : "sm:col-span-3";
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
    );
  };

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
            return renderProject(project, index);
          })}
        </div>
      </section>
    );
  };

  // const renderBehindTheKeyboardSection = () => (
  //   <section
  //     id="behind"
  //     className="w-full flex flex-col justify-center p-4 sm:p-10"
  //   >
  //     <div className="w-fit content-center">
  //       <Heading component="h2">
  //         There&apos;s more to a person than just work, peek behind the
  //         keyboard.
  //       </Heading>
  //     </div>

  //     <div className="relative flex flex-wrap gap-8 py-8">
  //       <div className="relative w-[320px] h-[400px] rounded-lg overflow-hidden">
  //         <Image
  //           src={"/images/family.jpg"}
  //           fill
  //           sizes="50vw"
  //           style={{ objectFit: "cover" }}
  //           alt=""
  //           className="w-[calc(100%-40px)]"
  //         />
  //       </div>
  //       <div>
  //         <Heading component="h3" className="mb-1">
  //           Family & Sport
  //         </Heading>
  //         <sub className="text-lg text-gray-400 leading-none">
  //           Father of one <span className="text-yellow-300">&#47;&#47;</span>{" "}
  //           Black belt (1st dan) in Taekwondo
  //         </sub>
  //       </div>
  //     </div>
  //     {/* <div className='relative flex flex-wrap gap-8 py-8'>
  //       <div className='relative w-[320px] h-[400px] rounded-lg overflow-hidden'>
  //         <Image
  //           src={"/images/family.jpg"}
  //           fill
  //           objectFit="cover"
  //           alt=""
  //           className="w-[calc(100%-40px)]"
  //         />
  //       </div>
  //       <div>
  //         <Heading component="h3" className="mb-1">
  //           For fun
  //         </Heading>
  //         <sub className="text-lg text-gray-400 leading-none">
  //           Video & board game lover
  //         </sub>
  //       </div>
  //     </div>
  //     <div className="relative flex flex-wrap gap-8 py-8">
  //       <div className="relative w-[320px] h-[400px] rounded-lg overflow-hidden">
  //         <Image
  //           src={"/images/family.jpg"}
  //           fill
  //           objectFit="cover"
  //           alt=""
  //           className="w-[calc(100%-40px)]"
  //         />
  //       </div>
  //       <div>
  //         <Heading component="h3" className="mb-1">
  //           Coding fun
  //         </Heading>
  //         <sub className="text-lg text-gray-400 leading-none">
  //           Dabble in creative coding from time to time
  //         </sub>
  //       </div>
  //     </div> */}
  //   </section>
  // );

  const renderContactSection = () => (
    <section id="contact" className="w-full flex flex-col p-4 sm:p-10 sm:py-20">
      <div className="flex-col gap-6 sm:flex-row flex justify-between">
        <div className="w-fit">
          <Heading component="h2">Contact</Heading>
        </div>
      </div>
      <ContactForm />
    </section>
  );

  return (
    <div className="max-w-[1200px] mx-auto min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="relative flex flex-col gap-8 overflow-hidden">
        <div className="orb pointer-events-none z-20 fixed inset-0 w-[600px] h-[600px] top-0 left-0 animate-hover"></div>
        <Nav />
        <Header />
        {renderExperienceSection()}
        {renderProjectsSection()}
        {/* {renderBehindTheKeyboardSection()} */}
        {renderContactSection()}
      </main>
      <Footer />
    </div>
  );
}

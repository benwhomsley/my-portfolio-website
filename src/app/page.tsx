import Image from 'next/image'
import Heading from './components/heading'
import Experience from './components/experience'
import OpenForWorkBadge from './components/open-for-work-badge'
import Nav from './components/nav'
import Footer from './components/footer'

export default function Home() {
  const renderHeaderSection = () => (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-center flex-wrap box-border p-4 sm:p-10"
    >
      <OpenForWorkBadge />
      <Heading
        component='h1'
        className='text-7xl'
      >
        Hi, I&apos;m Ben.
      </Heading>
      <sub className='text-lg text-gray-400 leading-none'>
        A Javascript Engineer <span className='text-yellow-300'>&#47;&#47;</span>{' '}
        Front End Developer <span className='text-yellow-300'>&#47;&#47;</span> UX
        Developer.
      </sub>
      <span className='font-normal opacity-50 absolute bottom-10 left-5'>
        Based in the United Kingdom
      </span>
    </section>
  )

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

  // const renderProjectsSection = () => {
  //   return (
  //     <section
  //       id='projects'
  //       className='w-full justify-center p-4 sm:p-10 sm:py-20'
  //     >
  //       <Heading
  //         component='h2'
  //         className='mb-[100px]'
  //       >
  //         Projects
  //       </Heading>
  //       <div className='grid grid-cols-5 gap-6'>
  //         <div className='relative h-[250px] sm:h-[500px] rounded-xl overflow-hidden col-span-5 sm:col-span-3 p-4'>
  //           <span className='block relative z-20 text-xs uppercase tracking-wider mb-2'>
  //             Website
  //           </span>
  //           <Heading
  //             component='h5'
  //             className='z-20 relative w-2/3 sm:w-1/2'
  //           >
  //             Taking studentbeans.com from tortoise to hare
  //           </Heading>
  //           <div className='dot-gradient absolute w-full h-1/3 z-10 top-0 left-0'></div>
  //           <Image
  //             src={'/images/test.jpg'}
  //             fill
  //             objectFit='cover'
  //             alt=''
  //             className='z-0'
  //           />
  //         </div>
  //         <div className='relative h-[250px] sm:h-[500px] rounded-xl overflow-hidden col-span-5 sm:col-span-2 p-4'>
  //           <span className='block relative z-20 text-xs uppercase tracking-wider mb-2'>
  //             Website
  //           </span>
  //           <Heading
  //             component='h5'
  //             className='z-20 relative w-2/3'
  //           >
  //             Taking studentbeans.com from tortoise to hare
  //           </Heading>
  //           <div className='dot-gradient absolute w-full h-1/3 z-10 top-0 left-0'></div>
  //           <Image
  //             src={'/images/test.jpg'}
  //             fill
  //             objectFit='cover'
  //             alt=''
  //             className='z-0'
  //           />
  //         </div>

  //         <div className='relative h-[250px] sm:h-[500px] rounded-xl overflow-hidden col-span-5 sm:col-span-2 p-4'>
  //           <span className='block relative z-20 text-xs uppercase tracking-wider mb-2'>
  //             Website
  //           </span>
  //           <Heading
  //             component='h5'
  //             className='z-20 relative w-2/3'
  //           >
  //             Taking studentbeans.com from tortoise to hare
  //           </Heading>
  //           <div className='dot-gradient absolute w-full h-1/3 z-10 top-0 left-0'></div>
  //           <Image
  //             src={'/images/test.jpg'}
  //             fill
  //             objectFit='cover'
  //             alt=''
  //             className='z-0'
  //           />
  //         </div>
  //         <div className='relative h-[250px] sm:h-[500px] rounded-xl overflow-hidden col-span-5 sm:col-span-3 p-4'>
  //           <span className='block relative z-20 text-xs uppercase tracking-wider mb-2'>
  //             Website
  //           </span>
  //           <Heading
  //             component='h5'
  //             className='z-20 relative w-2/3 sm:w-1/2'
  //           >
  //             Taking studentbeans.com from tortoise to hare
  //           </Heading>
  //           <div className='dot-gradient absolute w-full h-1/3 z-10 top-0 left-0'></div>
  //           <Image
  //             src={'/images/test.jpg'}
  //             fill
  //             objectFit='cover'
  //             alt=''
  //             className='z-0'
  //           />
  //         </div>
  //       </div>
  //     </section>
  //   )
  // }

  const renderProjectsSection2 = () => (
    <section
      id="projects"
      className="w-full flex flex-col justify-center p-4 sm:p-10 sm:py-20"
    >
      <Heading component="h2" className="mb-10">
        Projects
      </Heading>
      <ul>
        <li className="mb-5">
          <div className="flex gap-1 items-center">
            <Image
              className=""
              src="/images/sb-favicon.ico"
              alt=""
              width={16}
              height={16}
            />
            <a className="font-bold" href="https://studenbeans.com/">
              Student Beans
            </a>
          </div>
          <p className="text-gray-500">The #1 student loyalty network.</p>
        </li>
        <li className="mb-5">
          <div className="flex gap-1 items-center">
            <Image
              className=""
              src="/images/sb-favicon.ico"
              alt=""
              width={16}
              height={16}
            />
            <a
              className="font-bold"
              href="https://tranquil-croquembouche-4cdce0.netlify.app/"
            >
              Worlde Unlimited
            </a>
          </div>

          <p className="text-gray-500">
            Wordle but with access to all the levels.
          </p>
        </li>
        <li className="mb-5">
          <div className="flex gap-1 items-center">
            <Image
              className=""
              src="/images/sb-favicon.ico"
              alt=""
              width={16}
              height={16}
            />
            <a className="font-bold" href="https://electroneum.com/">
              Electroneum
            </a>
          </div>
          <p className="text-gray-500">
            A revolutionary new digital ecosystem.
          </p>
        </li>
        <li className="mb-5">
          <div className="flex gap-1 items-center">
            <Image
              className=""
              src="/images/sb-favicon.ico"
              alt=""
              width={16}
              height={16}
            />
            <a className="font-bold" href="https://othello.netlify.app/">
              Othello
            </a>
          </div>
          <p className="text-gray-500">
            Play Othello online against the computer or a friend (locally).
          </p>
        </li>
        <li className="mb-5">
          <div className="flex gap-1 items-center">
            <Image
              className=""
              src="/images/sb-favicon.ico"
              alt=""
              width={16}
              height={16}
            />
            <a
              className="font-bold"
              href="https://effortless-maamoul-af63e9.netlify.app/"
            >
              Drone photography
            </a>
          </div>
          <p className="text-gray-500">A media companies brochure site.</p>
        </li>
      </ul>
    </section>
  )

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
            objectFit="cover"
            alt=""
            className="w-[calc(100%-40px)]"
          />
        </div>
        <div>
          <Heading component="h3" className="mb-1">
            Family & Sport
          </Heading>
          <sub className='text-lg text-gray-400 leading-none'>
            Father of one <span className='text-yellow-300'>&#47;&#47;</span> Black
            belt (1st dan) in Taekwondo
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
        {renderHeaderSection()}
        {renderExperienceSection()}
        {renderProjectsSection2()}
        {renderBehindTheKeyboardSection()}
      </main>
      <Footer />
    </div>
  )
}

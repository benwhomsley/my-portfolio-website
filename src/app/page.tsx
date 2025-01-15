import Image from 'next/image'

export default function Home() {
  return (
    <div className='grid max-w-[1200px] mx-auto items-center min-h-screen font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <div className='orb absolute w-8 h-8 top-10 left-10 bg-white rounded-full shadow-orb shadow-white animate-hover bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(0,0,0,0.40)_0%,rgba(255,255,255,0.00)_100%)]'></div>
        <section className='min-h-screen w-full flex flex-col justify-center p-10'>
          <h1 className='text-8xl font-bold text-gray-100'>
            Hi, I&apos;m Ben.
          </h1>
          <sub className='text-lg text-gray-400 leading-none'>
            A Javascript Engineer/Front End Developer/UX Developer.
          </sub>
        </section>
        <section className='w-full flex flex-col justify-center p-10'>
          <div className='mb-[100px] flex items-center justify-between'>
            <div className='w-fit'>
              <h2 className='text-6xl font-bold text-gray-100'>Experience</h2>
              <p className='text-lg text-gray-400 text-right leading-none'>
                10+ years in industry
              </p>
            </div>
            <div>
              <ul className='mb-2'>
                <li className='px-[7px] py-[2px]rounded-md font-medium before:inline-block before:w-3 before:h-3 before:bg-yellow-300 before:rounded-full before:mr-[5px]'>
                  Core tech
                </li>
                <li className='px-[7px] py-[2px]rounded-md font-medium before:inline-block before:w-3 before:h-3 before:bg-yellow-50 before:rounded-full before:mr-[5px]'>
                  Related tech
                </li>
              </ul>
            </div>
          </div>

          <div className='mb-24'>
            <div className='mb-4'>
              <h3 className='text-2xl font-bold text-gray-100 gap-4 flex mb-1'>
                Studentbeans / Pion
                <span className='px-[5px] py-[2px] bg-gray-100 text-gray-900 rounded-md text-xs font-bold self-center'>
                  Current
                </span>
              </h3>
              <p className='text-gray-300'>
                Senior Javascript Engineer // ~ 7 months
              </p>
              <p className='text-gray-300'>
                Javascript Engineer // 2 years 5 months
              </p>
            </div>
            <div className='mb-4'>
              <h4 className='text-xl font-bold text-gray-100 mb-1'>Tech</h4>
              <ul className='flex gap-2 mb-2'>
                <li className='px-[7px] py-[2px] bg-yellow-300 text-yellow-900 rounded-md text-sm font-bold select-none'>
                  React
                </li>
                <li className='px-[7px] py-[2px] bg-yellow-300 text-yellow-900 rounded-md text-sm font-bold select-none'>
                  Next.js
                </li>
                <li className='px-[7px] py-[2px] bg-yellow-300 text-yellow-900 rounded-md text-sm font-bold select-none'>
                  Tailwind
                </li>
                <li className='px-[7px] py-[2px] bg-yellow-300 text-yellow-900 rounded-md text-sm font-bold select-none'>
                  HTML
                </li>
                <li className='px-[7px] py-[2px] bg-yellow-300 text-yellow-900 rounded-md text-sm font-bold select-none'>
                  Jest
                </li>
                <li className='px-[7px] py-[2px] bg-yellow-300 text-yellow-900 rounded-md text-sm font-bold select-none'>
                  Git
                </li>
              </ul>
              <ul className='flex gap-2'>
                <li className='px-[7px] py-[2px] bg-yellow-50 text-yellow-800 rounded-md text-sm font-semibold select-none'>
                  AWS
                </li>
                <li className='px-[7px] py-[2px] bg-yellow-50 text-yellow-800 rounded-md text-sm font-semibold select-none'>
                  CI/CD
                </li>
                <li className='px-[7px] py-[2px] bg-yellow-50 text-yellow-800 rounded-md text-sm font-semibold select-none'>
                  Docker
                </li>
                <li className='px-[7px] py-[2px] bg-yellow-50 text-yellow-800 rounded-md text-sm font-semibold select-none'>
                  Node
                </li>
              </ul>
            </div>

            <div className='grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-3'>
              <div className='relative h-[250px] mt-5'>
                <Image
                  src={'/images/sb-screenshot.png'}
                  fill
                  objectFit='contain'
                  alt=''
                  className='rounded-lg'
                />
              </div>
              <div className='relative h-[250px] mt-5 rounded-lg overflow-hidden'>
                <Image
                  src={'/images/sb-screenshot.png'}
                  fill
                  objectFit='contain'
                  alt=''
                  className='rounded-lg'
                />
              </div>
              <div className='relative h-[250px] mt-5 rounded-lg overflow-hidden'>
                <Image
                  src={'/images/sb-screenshot.png'}
                  fill
                  objectFit='contain'
                  alt=''
                  className='rounded-lg'
                />
              </div>
            </div>
          </div>

          <div className='mb-24'>
            <div className='mb-4'>
              <h3 className='text-2xl font-bold text-gray-100 gap-4 flex mb-1'>
                Electroneum
              </h3>
              <p className='text-gray-300'>UX Developer // ~ 5 years</p>
            </div>
            <div className='mb-4'>
              <h4 className='text-xl font-bold text-gray-100 mb-1'>Tech</h4>
              <ul className='flex gap-2 mb-2'>
                <li className='px-[7px] py-[2px] bg-yellow-300 text-yellow-900 rounded-md text-sm font-bold select-none'>
                  Angular
                </li>
                <li className='px-[7px] py-[2px] bg-yellow-300 text-yellow-900 rounded-md text-sm font-bold select-none'>
                  Ionic
                </li>
                <li className='px-[7px] py-[2px] bg-yellow-300 text-yellow-900 rounded-md text-sm font-bold select-none'>
                  SASS
                </li>
                <li className='px-[7px] py-[2px] bg-yellow-300 text-yellow-900 rounded-md text-sm font-bold select-none'>
                  HTML
                </li>
                <li className='px-[7px] py-[2px] bg-yellow-300 text-yellow-900 rounded-md text-sm font-bold select-none'>
                  Jest
                </li>
                <li className='px-[7px] py-[2px] bg-yellow-300 text-yellow-900 rounded-md text-sm font-bold select-none'>
                  Git
                </li>
              </ul>
              <ul className='flex gap-2'>
                <li className='px-[7px] py-[2px] bg-yellow-50 text-yellow-800 rounded-md text-sm font-semibold select-none'>
                  AWS
                </li>
                <li className='px-[7px] py-[2px] bg-yellow-50 text-yellow-800 rounded-md text-sm font-semibold select-none'>
                  Docker
                </li>
                <li className='px-[7px] py-[2px] bg-yellow-50 text-yellow-800 rounded-md text-sm font-semibold select-none'>
                  Node
                </li>
              </ul>
            </div>

            <div className='grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-3'>
              <div className='relative h-[250px] mt-5'>
                <Image
                  src={'/images/sb-screenshot.png'}
                  fill
                  objectFit='contain'
                  alt=''
                  className='rounded-lg'
                />
              </div>
              <div className='relative h-[250px] mt-5 rounded-lg overflow-hidden'>
                <Image
                  src={'/images/sb-screenshot.png'}
                  fill
                  objectFit='contain'
                  alt=''
                  className='rounded-lg'
                />
              </div>
              <div className='relative h-[250px] mt-5 rounded-lg overflow-hidden'>
                <Image
                  src={'/images/sb-screenshot.png'}
                  fill
                  objectFit='contain'
                  alt=''
                  className='rounded-lg'
                />
              </div>
            </div>
          </div>
        </section>

        <section className='w-full flex flex-col justify-center p-10'>
          <div className='mb-10 w-fit h-screen content-center'>
            <h2 className='text-6xl font-bold text-gray-100'>
              There&apos;s more to a person than just work, peak behind the
              curtain.
            </h2>
          </div>
          <h3 className='text-2xl font-bold text-gray-100'>Father of one</h3>
          <h3 className='text-2xl font-bold text-gray-100'>
            Black belt (1st dan) in Taekwondo
          </h3>
          <h3 className='text-2xl font-bold text-gray-100'>
            Video game player
          </h3>

          <div className='relative flex flex-wrap py-8'>
            <div className='relative w-[250px] h-[300px] rotate-6 transition-all duration-400 hover:z-10 hover:-translate-y-3'>
              <Image
                src={'/images/family.jpg'}
                fill
                objectFit='cover'
                alt=''
                className='rounded-lg'
              />
            </div>
            <div className='relative w-[250px] h-[300px] -rotate-3 transition-all duration-400 hover:z-10 hover:-translate-y-3'>
              <Image
                src={'/images/family.jpg'}
                fill
                objectFit='cover'
                alt=''
                className='rounded-lg'
              />
            </div>
            <div className='relative w-[250px] h-[300px] rotate-3 transition-all duration-400 hover:z-10 hover:-translate-y-3'>
              <Image
                src={'/images/family.jpg'}
                fill
                objectFit='cover'
                alt=''
                className='rounded-lg'
              />
            </div>
            <div className='relative w-[250px] h-[300px] rotate-3 transition-all duration-400 hover:z-10 hover:-translate-y-3'>
              <Image
                src={'/images/family.jpg'}
                fill
                objectFit='cover'
                alt=''
                className='rounded-lg'
              />
            </div>
          </div>
        </section>
      </main>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'></footer>
    </div>
  )
}

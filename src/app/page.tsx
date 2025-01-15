import Image from 'next/image'

export default function Home() {
  return (
    <div className='grid max-w-[1200px] mx-auto items-center min-h-screen font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        {/* <div className='orb absolute w-8 h-8 top-10 left-10 bg-white rounded-full shadow-orb shadow-white animate-hover bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(0,0,0,0.40)_0%,rgba(255,255,255,0.00)_100%)]'></div> */}
        <section className='min-h-screen w-full flex flex-col justify-center p-10'>
          <h1 className='text-8xl font-bold text-gray-100'>
            Hi, I&apos;m Ben.
          </h1>
          <sub className='text-lg text-gray-400 leading-none'>
            A Javascript Engineer <span className='opacity-30'>//</span> Front
            End Developer <span className='opacity-30'>//</span> UX Developer.
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

          <div className='mb-24 flex justify-end'>
            <div className='w-[200px]'>
              <p className='text-gray-500 font-semibold text-sm'>
                2022 - present
              </p>
            </div>
            <div>
              <div className='mb-4 max-w-[500px]'>
                <h3 className='text-2xl font-bold text-gray-100 gap-4 flex mb-1'>
                  Studentbeans / Pion
                </h3>
                <p className='text-gray-300'>
                  Senior Javascript Engineer // ~ 7 months
                </p>
                <p className='text-gray-300'>
                  Javascript Engineer // 2 years 5 months
                </p>
                <p className='text-gray-500'>
                  Build and maintain critical components used to construct
                  Klaviyo’s frontend, across the whole product. Work closely
                  with cross-functional teams, including developers, designers,
                  and product managers, to implement and advocate for best
                  practices in web accessibility.
                </p>
              </div>
              <div className='mb-4'>
                <ul className='flex gap-2 mb-2'>
                  <li className='px-[7px] py-[2px] bg-yellow-300 text-yellow-950 rounded-md text-xs font-semibold select-none'>
                    React
                  </li>
                  <li className='px-[7px] py-[2px] bg-yellow-300 text-yellow-950 rounded-md text-xs font-semibold select-none'>
                    Next.js
                  </li>
                  <li className='px-[7px] py-[2px] bg-yellow-300 text-yellow-950 rounded-md text-xs font-semibold select-none'>
                    Tailwind
                  </li>
                  <li className='px-[7px] py-[2px] bg-yellow-300 text-yellow-950 rounded-md text-xs font-semibold select-none'>
                    HTML
                  </li>
                  <li className='px-[7px] py-[2px] bg-yellow-300 text-yellow-950 rounded-md text-xs font-semibold select-none'>
                    Jest
                  </li>
                  <li className='px-[7px] py-[2px] bg-yellow-300 text-yellow-950 rounded-md text-xs font-semibold select-none'>
                    Git
                  </li>
                </ul>
                <ul className='flex gap-2'>
                  <li className='px-[7px] py-[2px] bg-yellow-50 text-yellow-950 rounded-md text-xs font-semibold select-none'>
                    AWS
                  </li>
                  <li className='px-[7px] py-[2px] bg-yellow-50 text-yellow-950 rounded-md text-xs font-semibold select-none'>
                    CI/CD
                  </li>
                  <li className='px-[7px] py-[2px] bg-yellow-50 text-yellow-950 rounded-md text-xs font-semibold select-none'>
                    Docker
                  </li>
                  <li className='px-[7px] py-[2px] bg-yellow-50 text-yellow-950 rounded-md text-xs font-semibold select-none'>
                    Node
                  </li>
                </ul>
              </div>

              {/* <div className='grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-3'>
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
            </div> */}
            </div>
          </div>

          <div className='mb-24 flex justify-end'>
            <div className='w-[200px]'>
              <p className='text-gray-500 font-semibold text-sm'>2017 - 2022</p>
            </div>
            <div>
              <div className='mb-4 max-w-[500px]'>
                <h3 className='text-2xl font-bold text-gray-100 gap-4 flex mb-1'>
                  Electroneum
                </h3>
                <p className='text-gray-300'>UX Developer // ~ 5 years</p>
                <p className='text-gray-500'>
                  Build and maintain critical components used to construct
                  Klaviyo’s frontend, across the whole product. Work closely
                  with cross-functional teams, including developers, designers,
                  and product managers, to implement and advocate for best
                  practices in web accessibility.
                </p>
              </div>
              <div className='mb-4'>
                <ul className='flex gap-2 mb-2'>
                  <li className='px-[7px] py-[2px] bg-yellow-300 text-yellow-950 rounded-md text-xs font-semibold select-none'>
                    Angular
                  </li>
                  <li className='px-[7px] py-[2px] bg-yellow-300 text-yellow-950 rounded-md text-xs font-semibold select-none'>
                    Ionic
                  </li>
                  <li className='px-[7px] py-[2px] bg-yellow-300 text-yellow-950 rounded-md text-xs font-semibold select-none'>
                    SASS
                  </li>
                  <li className='px-[7px] py-[2px] bg-yellow-300 text-yellow-950 rounded-md text-xs font-semibold select-none'>
                    HTML
                  </li>
                  <li className='px-[7px] py-[2px] bg-yellow-300 text-yellow-950 rounded-md text-xs font-semibold select-none'>
                    Jest
                  </li>
                  <li className='px-[7px] py-[2px] bg-yellow-300 text-yellow-950 rounded-md text-xs font-semibold select-none'>
                    Git
                  </li>
                </ul>
                <ul className='flex gap-2'>
                  <li className='px-[7px] py-[2px] bg-yellow-50 text-yellow-950 rounded-md text-xs font-semibold select-none'>
                    AWS
                  </li>
                  <li className='px-[7px] py-[2px] bg-yellow-50 text-yellow-950 rounded-md text-xs font-semibold select-none'>
                    Docker
                  </li>
                  <li className='px-[7px] py-[2px] bg-yellow-50 text-yellow-950 rounded-md text-xs font-semibold select-none'>
                    Node
                  </li>
                </ul>
              </div>

              {/* <div className='grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-3'>
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
            </div> */}
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
          <h3 className='text-2xl font-bold text-gray-100'>Board game lover</h3>
          <div className='relative flex flex-wrap py-8'>
            <div className='card relative w-[250px] h-[300px] rotate-6 rounded-lg'>
              <div className='card-back absolute top-0 w-full h-full z-0 bg-black rounded-lg'></div>
              <div className='card-front absolute top-0 p-5 bg-black w-full h-full z-10 rounded-lg overflow-hidden'>
                <Image
                  src={'/images/family.jpg'}
                  fill
                  objectFit='cover'
                  alt=''
                  className='w-[calc(100%-40px)]'
                />
              </div>
            </div>
            <div className='card relative w-[250px] h-[300px] -rotate-3 rounded-lg overflow-hidden'>
              <div className='card-back relative w-full h-full z-0 bg-black'></div>
              <Image
                src={'/images/family.jpg'}
                fill
                objectFit='cover'
                alt=''
                className='card-front z-10'
              />
            </div>
            <div className='card relative w-[250px] h-[300px] rotate-3 rounded-lg overflow-hidden'>
              <div className='card-back relative w-full h-full z-0 bg-black'></div>
              <Image
                src={'/images/family.jpg'}
                fill
                objectFit='cover'
                alt=''
                className='card-front z-10'
              />
            </div>
            <div className='card relative w-[250px] h-[300px] rotate-3 rounded-lg overflow-hidden'>
              <div className='card-back relative w-full h-full z-0 bg-black'></div>
              <Image
                src={'/images/family.jpg'}
                fill
                objectFit='cover'
                alt=''
                className='card-front z-10'
              />
            </div>
          </div>
        </section>
      </main>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'></footer>
    </div>
  )
}

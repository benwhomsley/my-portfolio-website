'use client'

import Image from 'next/image'
import Heading from './components/heading'
import Experience from './components/experience'
import Splitting from 'splitting'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    Splitting()
  }, [])

  const renderOpenForWorkBadge = () => (
    <div>
      <span data-splitting>Open for work</span>
    </div>
  )

  const renderHeaderSection = () => (
    <section className='min-h-screen w-full flex flex-col justify-center p-10'>
      <Heading component='h1'>Hi, I&apos;m Ben.</Heading>
      <sub className='text-lg text-gray-400 leading-none'>
        A Javascript Engineer <span className='opacity-30'>//</span> Front End
        Developer <span className='opacity-30'>//</span> UX Developer.
      </sub>
    </section>
  )
  const renderExperienceSection = () => (
    <section className='w-full flex flex-col justify-center p-10'>
      <div className='mb-[100px] flex items-center justify-between'>
        <div className='w-fit'>
          <Heading component='h2'>Experience</Heading>
          <p className='text-lg text-gray-400 text-right leading-none'>
            10+ years in industry
          </p>
        </div>
        <div>
          <ul className='mb-2'>
            <li className='px-[7px] py-[2px] rounded-md font-medium before:inline-block before:w-3 before:h-3 before:bg-yellow-300 before:rounded-full before:mr-[5px]'>
              Core tech
            </li>
            <li className='px-[7px] py-[2px] rounded-md font-medium before:inline-block before:w-3 before:h-3 before:bg-yellow-50 before:rounded-full before:mr-[5px]'>
              Related tech
            </li>
          </ul>
        </div>
      </div>
      <Experience
        time='2022 - present'
        title='Studentbeans / Pion'
        url='https://studentbeans.com'
        description='Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.'
        roles={[
          'Senior Javascript Engineer // ~ 7 months',
          ' Javascript Engineer // 2 years 5 months',
        ]}
        coreTech={['React', 'Next.js', 'Tailwind', 'HTML', 'Jest', 'Git']}
        relatedTech={['AWS', 'CI/CD', 'Docker', 'Node']}
      />
      <Experience
        time='2017 - 2022'
        title='Electroneum'
        url='https://electroneum.com'
        description='Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.'
        roles={['UX Developer // ~ 5 years']}
        coreTech={['Angular', 'Ionic', 'SASS', 'HTML', 'Jest', 'Git']}
        relatedTech={['AWS', 'Docker', 'Node']}
      />
      <Experience
        time='2012 - 2027'
        title='Creative agencies'
        description='During this time I worked across three separate creative agencies working on a range of different products and mediums, ranging from print collateral for real estate marketing, to performance management apps for professional sports organisations (Team GB Taekwondo, Saracens rugby club, ECB Cricket and many more), to custom social media management dashboards.'
        roles={[
          'UI/UX Designer // ~ 2 years',
          'Web & Application Designer // ~ 1 year',
          'Senior Digital & Creative Designer // ~ 1 year',
        ]}
        coreTech={['Adobe Suite', 'Wordpress', 'CSS', 'HTML']}
        relatedTech={['PHP']}
      />
    </section>
  )

  const renderBehindTheCurtainSection = () => (
    <section className='w-full flex flex-col justify-center p-10'>
      <div className='mb-10 w-fit h-screen content-center'>
        <Heading component='h2'>
          There&apos;s more to a person than just work, peak behind the curtain.
        </Heading>
      </div>

      <div className='relative flex flex-wrap gap-8 py-8'>
        <div className='relative w-[320px] h-[400px] rounded-lg overflow-hidden'>
          <Image
            src={'/images/family.jpg'}
            fill
            objectFit='cover'
            alt=''
            className='w-[calc(100%-40px)]'
          />
        </div>
        <div>
          <Heading component='h3' className='mb-1'>
            Family & Sport
          </Heading>
          <sub className='text-lg text-gray-400 leading-none'>
            Father of one <span className='opacity-30'>//</span> Black belt (1st
            dan) in Taekwondo
          </sub>
        </div>
      </div>
      <div className='relative flex flex-wrap gap-8 py-8'>
        <div className='relative w-[320px] h-[400px] rounded-lg overflow-hidden'>
          <Image
            src={'/images/family.jpg'}
            fill
            objectFit='cover'
            alt=''
            className='w-[calc(100%-40px)]'
          />
        </div>
        <div>
          <Heading component='h3' className='mb-1'>
            For fun
          </Heading>
          <sub className='text-lg text-gray-400 leading-none'>
            Video & board game lover
          </sub>
        </div>
      </div>
      <div className='relative flex flex-wrap gap-8 py-8'>
        <div className='relative w-[320px] h-[400px] rounded-lg overflow-hidden'>
          <Image
            src={'/images/family.jpg'}
            fill
            objectFit='cover'
            alt=''
            className='w-[calc(100%-40px)]'
          />
        </div>
        <div>
          <Heading component='h3' className='mb-1'>
            Coding fun
          </Heading>
          <sub className='text-lg text-gray-400 leading-none'>
            Dabble in creative coding from time to time
          </sub>
        </div>
      </div>
    </section>
  )

  return (
    <div className='grid max-w-[1200px] mx-auto items-center min-h-screen font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        {renderOpenForWorkBadge()}
        <div className='orb blur-3xl opacity-30 absolute w-[600px] h-[600px] top-0 left-0 rounded-full animate-hover'></div>
        {renderHeaderSection()}
        {renderExperienceSection()}
        {renderBehindTheCurtainSection()}
      </main>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center py-8'>
        <a href='https://www.linkedin.com/in/ben-whomsley/' target='_blank'>
          <svg
            fill='#ffffff'
            height='16px'
            width='16px'
            version='1.1'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 310 310'
          >
            <g id='XMLID_801_'>
              <path
                id='XMLID_802_'
                d='M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z'
              />
              <path
                id='XMLID_803_'
                d='M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z'
              />
              <path
                id='XMLID_804_'
                d='M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z'
              />
            </g>
          </svg>
        </a>
      </footer>
    </div>
  )
}

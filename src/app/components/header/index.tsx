import Heading from "../heading"
import OpenForWorkBadge from "../open-for-work-badge"

export const Header = () => {
  return (
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
      A JavaScript Engineer <span className='text-yellow-300'>&#47;&#47;</span>{' '}
      Front End Developer <span className='text-yellow-300'>&#47;&#47;</span> UX
      Developer.
    </sub>
    <span className='font-normal opacity-50 absolute bottom-10 left-5'>
      Based in the United Kingdom
    </span>
  </section>
  )
}

export default Header

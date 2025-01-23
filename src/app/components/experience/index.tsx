import Heading from '../heading'

export const Experience = ({
  time,
  title,
  url,
  roles,
  description,
  coreTech,
  relatedTech,
}: {
  time: string
  title: string
  url?: string
  roles: string[]
  description: string
  coreTech: string[]
  relatedTech: string[]
}) => {
  const renderTitleLink = () => {
    if (url)
      return (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={url}
          className='flex gap-3 items-center hover:underline hover:text-yellow-300'
        >
          {title}{' '}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244'
            />
          </svg>
        </a>
      )

    return title
  }
  return (
    <div className='mb-24 flex flex-col justify-end sm:flex-row'>
      <div className='w-[200px]'>
        <p className='text-gray-500 font-semibold text-sm sm:pt-3'>{time}</p>
      </div>
      <div>
        <div className='mb-4 w-full sm:max-w-[500px]'>
          <Heading
            component='h3'
            className='mb-1'
          >
            {renderTitleLink()}
          </Heading>
          {roles.map((role, index) => {
            return (
              <p
                key={index}
                className='text-gray-300'
              >
                {role}
              </p>
            )
          })}
          <p className='text-gray-500'>{description}</p>
        </div>
        <div className='mb-4'>
          <ul className='flex gap-2 mb-2'>
            {coreTech.map((name, index) => {
              return (
                <li
                  key={index}
                  className='px-[7px] py-[2px] bg-yellow-300 text-yellow-950 rounded-md text-xs font-semibold select-none'
                >
                  {name}
                </li>
              )
            })}
          </ul>

          <ul className='flex gap-2'>
            {relatedTech.map((name, index) => {
              return (
                <li
                  key={index}
                  className='px-[7px] py-[2px] bg-yellow-50 text-yellow-950 rounded-md text-xs font-semibold select-none'
                >
                  {name}
                </li>
              )
            })}
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
  )
}

export default Experience

const OpenForWorkBadge = () => {
  return (
    <div className='absolute top-10 left-10 z-20 w-[100px] h-[100px]'>
      <svg
        height='100'
        width='100'
        className='animate-[spin_8s_linear_infinite]'
      >
        <path
          fill='none'
          id='ellipse-id-r2'
          d='M0 50a50 50 0 1 0 100 0a50 50 0 1 0 -100 0'
        ></path>
        <text
          fill='white'
          className='tracking-[0.8em] text-xs'
        >
          <textPath
            href='#ellipse-id-r2'
            startOffset='0'
          >
            <tspan className='font-normal uppercase'>
              Open * for * work *{' '}
            </tspan>
          </textPath>
        </text>
      </svg>
    </div>
  )
}

export default OpenForWorkBadge

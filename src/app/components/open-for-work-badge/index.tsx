const OpenForWorkBadge = () => {
  return (
    <a
      href='#contact'
      className='flex items-center gap-2 rounded-full border border-yellow-300/40 bg-yellow-300/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-yellow-300 transition-colors hover:bg-yellow-300/20'
    >
      <span className='relative flex h-2 w-2'>
        <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-300 opacity-75'></span>
        <span className='relative inline-flex h-2 w-2 rounded-full bg-yellow-300'></span>
      </span>
      Open for work
    </a>
  )
}

export default OpenForWorkBadge

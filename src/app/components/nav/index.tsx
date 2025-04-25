export const Nav = () => {
  return (
    <nav className="fixed w-full max-w-[1200px] mx-auto z-10 flex justify-end p-4 backdrop-blur-sm bg-black/50">
      <ul className="flex flex-row gap-6 text-sm">
        <li>
          <a className="font-medium" href="#about">About</a>
        </li>
        <li>
          <a className="font-medium" href="#experience">Experience</a>
        </li>
        <li>
          <a className="font-medium" href="#projects">Projects</a>
        </li>
        <li>
          <a className="font-medium" href="#behind">Behind the keyoard</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav

import Image from "next/image";
import Heading from "../heading";
import { CaseStudyProject } from "../../types";

export const CaseStudyCard = ({ project }: { project: CaseStudyProject }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 py-10 border-b border-gray-800 last:border-b-0">
      <div className="flex-1">
        <div className="flex gap-2 items-center text-xs font-medium uppercase tracking-wider mb-2 text-gray-400">
          <Image
            className="h-fit"
            src={project.icon}
            alt=""
            width={16}
            height={16}
          />
          {project.label}
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={project.url}
          className="link-underline flex w-fit gap-3 items-center transition-all"
        >
          <Heading component="h3">{project.title}</Heading>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
        </a>
        <p className="text-gray-400 mt-4">{project.intro}</p>
        <p className="text-gray-400 mt-3">{project.role}</p>
        <div className="mt-4">
          <p className="text-gray-300 font-semibold text-sm mb-2">Impact</p>
          <ul>
            {project.impact.map((line, index) => (
              <li
                key={index}
                className="text-gray-300 before:content-['//'] before:text-yellow-300 before:mr-2"
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex gap-2 flex-wrap mt-4">
          {project.tech.map((name, index) => (
            <li
              key={index}
              className="px-[8px] py-[2px] bg-transparent border border-gray-500 text-gray-300 rounded-xl text-xs font-semibold select-none"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
      <div className="sm:w-[320px] shrink-0">
        <Image
          src={project.image}
          width={320}
          height={180}
          className="rounded-lg object-cover aspect-video"
          alt={`Screenshot of the ${project.label} website`}
        />
      </div>
    </div>
  );
};

export default CaseStudyCard;

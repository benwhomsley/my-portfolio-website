import Image from "next/image";
import Heading from "../heading";
import { SideProject } from "../../types";

export const ProjectCard = ({
  project,
  spanClassName,
}: {
  project: SideProject;
  spanClassName: string;
}) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className={`relative rounded-xl overflow-hidden p-4 h-[250px] sm:h-[350px] col-span-5 ${spanClassName}`}
    >
      <div className="flex gap-2 relative z-[2] text-xs font-medium uppercase tracking-wider mb-2">
        <Image
          className="h-fit"
          src={project.icon}
          alt=""
          width={16}
          height={16}
        />
        {project.label}
      </div>
      <Heading component="h5" className="z-[2] relative w-3/4">
        {project.title}
      </Heading>
      <div className="bg-gradient-to-b from-black/80 to-slate-transparent absolute w-full h-1/2 z-[1] top-0 left-0"></div>
      <Image
        src={project.image}
        fill
        sizes="50vw"
        style={{ objectFit: "cover" }}
        alt={`Screenshot of the ${project.label} website`}
        className="z-0"
      />
    </a>
  );
};

export default ProjectCard;

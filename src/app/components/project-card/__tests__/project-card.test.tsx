import { render, screen } from "@testing-library/react";
import ProjectCard from "..";
import { SideProject } from "../../../types";

const project: SideProject = {
  label: "Wordle Unlimited",
  title: "Wordle but with access to all the levels",
  url: "https://example.com",
  image: "/images/projects/wordle.png",
  icon: "/images/projects/icons/default.ico",
  category: "side",
};

describe("ProjectCard", () => {
  it("renders the project label and title, linking to the project url", () => {
    render(<ProjectCard project={project} spanClassName="sm:col-span-3" />);

    expect(screen.getByText(project.label)).toBeInTheDocument();
    const heading = screen.getByRole("heading", {
      level: 5,
      name: project.title,
    });
    expect(heading).toBeInTheDocument();

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", project.url);
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("applies the provided span className", () => {
    render(<ProjectCard project={project} spanClassName="sm:col-span-2" />);

    expect(screen.getByRole("link")).toHaveClass("sm:col-span-2");
  });
});

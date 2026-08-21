import { render, screen } from "@testing-library/react";
import CaseStudyCard from "..";
import { CaseStudyProject } from "../../../types";

const project: CaseStudyProject = {
  label: "Student Beans",
  title: "The #1 student loyalty network",
  url: "https://studentbeans.com",
  image: "/images/projects/studentbeans.png",
  icon: "/images/projects/icons/studentbeans.ico",
  category: "client",
  intro: "An intro to the company worth knowing.",
  role: "A role worth describing.",
  impact: ["First impact point", "Second impact point"],
  tech: ["React", "Next.js"],
};

describe("CaseStudyCard", () => {
  it("renders the label, title link, company intro and role copy", () => {
    render(<CaseStudyCard project={project} />);

    expect(screen.getByText(project.label)).toBeInTheDocument();

    const heading = screen.getByRole("heading", {
      level: 3,
      name: project.title,
    });
    expect(heading).toBeInTheDocument();

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", project.url);
    expect(link).toHaveAttribute("target", "_blank");

    expect(screen.getByText(project.intro)).toBeInTheDocument();
    expect(screen.getByText(project.role)).toBeInTheDocument();
  });

  it("renders every impact point and tech tag", () => {
    render(<CaseStudyCard project={project} />);

    project.impact.forEach((line) => {
      expect(screen.getByText(line)).toBeInTheDocument();
    });
    project.tech.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });
});

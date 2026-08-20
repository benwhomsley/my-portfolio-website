import { render, screen } from "@testing-library/react";
import Heading from "..";

describe("Heading", () => {
  it("renders the requested element with its children", () => {
    render(<Heading component="h2">Experience</Heading>);

    const heading = screen.getByRole("heading", { level: 2, name: "Experience" });
    expect(heading.tagName).toBe("H2");
  });

  it("merges a custom className with the size styles for the element", () => {
    render(
      <Heading component="h1" className="text-7xl">
        Hi, I&apos;m Ben.
      </Heading>
    );

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveClass("text-7xl");
    expect(heading.className).toMatch(/font-bold/);
  });
});

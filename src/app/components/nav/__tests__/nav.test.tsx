import { render, screen, fireEvent } from "@testing-library/react";
import Nav from "..";

describe("Nav", () => {
  it("links each section to its in-page anchor", () => {
    render(<Nav />);

    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "#about");
    expect(screen.getByRole("link", { name: "Experience" })).toHaveAttribute("href", "#experience");
    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute("href", "#projects");
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "#contact");
  });

  it("renders the open-for-work badge inline with the nav links", () => {
    render(<Nav />);

    expect(screen.getByRole("link", { name: "Open for work" })).toHaveAttribute("href", "#contact");
  });

  it("toggles the mobile menu button state on click", () => {
    render(<Nav />);

    const toggle = screen.getByRole("button", { name: "Open menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("button", { name: "Close menu" })).toBeInTheDocument();

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
});

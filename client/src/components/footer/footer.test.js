import { render, screen } from "@testing-library/react";
import Footer from "./footer";

describe("Footer", () => {
  it("contains the footer text", () => {
    render(<Footer />);
    expect(screen.getByTestId("footer-text")).toHaveTextContent(
      "This project was created by Joe McNally and stored on GitHub. " +
        "A big thank you to Namco for creating Pac-Man in 1980."
    );
    const profileLinkEl = screen.getByTestId("profile-link");
    expect(profileLinkEl).toHaveAttribute(
      "href",
      "https://github.com/jmcnally17"
    );
    expect(profileLinkEl).toHaveTextContent("Joe McNally");
    const githubRepoEl = screen.getByTestId("github-repo");
    expect(githubRepoEl).toHaveAttribute(
      "href",
      "https://github.com/jmcnally17/pacman"
    );
    expect(githubRepoEl).toHaveTextContent("GitHub");
  });
});

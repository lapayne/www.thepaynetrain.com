import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Education from "../components/Education";
import MyLinks from "../components/Links";
import NonTechCerts from "../components/NonTechCerts";
import Projects from "../components/Projects";
import Work from "../components/work";
import Skills from "../components/Skills";
import Quotes from "../components/Quotes";

describe("App components", () => {
  it("renders the Hero section", () => {
    render(<Hero />);
    expect(screen.getByText(/Lee Payne/i)).toBeInTheDocument();
  });

  it("renders the Footer and toggles the contact modal", () => {
    render(<Footer />);

    const contactButton = screen.getByRole("button", { name: /contact me/i });
    expect(contactButton).toBeInTheDocument();

    fireEvent.click(contactButton);
    expect(
      screen.getByRole("heading", { name: /contact me/i }),
    ).toBeInTheDocument();

    const cancelButton = screen.getByRole("button", { name: /cancel/i });
    fireEvent.click(cancelButton);
    expect(
      screen.queryByRole("heading", { name: /contact me/i }),
    ).not.toBeInTheDocument();
  });

  it("renders the Education timeline", () => {
    render(<Education />);
    expect(screen.getByText(/My educational journey/i)).toBeInTheDocument();
    expect(screen.getAllByText(/The Open University/i).length).toBeGreaterThan(
      0,
    );
  });

  it("renders the Links component with expected cards", () => {
    render(<MyLinks />);

    expect(
      screen.getByRole("heading", { name: /Homepage/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Blog/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /LinkedIn/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Github/i }),
    ).toBeInTheDocument();

    const homepageLink = screen.getByRole("link", { name: /Homepage/i });
    expect(homepageLink).toHaveAttribute(
      "href",
      "https://www.thepaynetrain.com",
    );
  });

  it("renders the NonTechCerts section", () => {
    render(<NonTechCerts />);
    expect(
      screen.getByText(/Non Technical Qualifications/i),
    ).toBeInTheDocument();
  });

  it("renders the Projects section", () => {
    render(<Projects />);

    const headings = screen.getAllByRole("heading", { name: /projects/i });
    expect(headings.length).toBeGreaterThanOrEqual(1);
    // Ensure at least one project card is rendered
    expect(screen.getByText(/Maps/i)).toBeInTheDocument();
  });

  it("renders the Work timeline", () => {
    render(<Work />);
    expect(screen.getByText(/My professional journey/i)).toBeInTheDocument();
  });

  it("renders the Skills section", () => {
    render(<Skills />);
    expect(screen.getByText(/Skills &/i)).toBeInTheDocument();
  });

  it("renders the Quotes component and displays fetched quote", async () => {
    const mockFetch = jest.spyOn(global, "fetch").mockResolvedValueOnce({
      text: async () => "quote1;;quote2",
    } as any);

    // Force deterministic selection in the component
    jest.spyOn(Math, "random").mockReturnValue(0);

    render(<Quotes />);

    expect(screen.getByText(/Quote of the day/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/quote1/i)).toBeInTheDocument();
    });

    mockFetch.mockRestore();
    (Math.random as jest.Mock).mockRestore();
  });
});

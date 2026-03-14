import { fireEvent, render, screen } from "@testing-library/react";
import { FocusCards } from "../components/ui/Focus-Cards";

describe("FocusCards", () => {
  const cards = [
    { title: "Test Card 1", src: "/test1.png" },
    { title: "Test Card 2", src: "/test2.png" },
  ];

  it("renders all provided cards", () => {
    render(<FocusCards cards={cards} />);

    expect(screen.getByText(/Test Card 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Card 2/i)).toBeInTheDocument();
  });

  it("applies hover styles when a card is hovered", () => {
    render(<FocusCards cards={cards} />);

    const cardImage = screen.getByAltText(/Test Card 1/i);
    const cardContainer = cardImage.closest("div");
    expect(cardContainer).toBeTruthy();

    const overlay = cardContainer?.querySelector("div");
    expect(overlay).toBeTruthy();
    expect(overlay).toHaveClass("opacity-0");

    fireEvent.mouseEnter(cardContainer!);
    expect(overlay).toHaveClass("opacity-100");

    fireEvent.mouseLeave(cardContainer!);
    expect(overlay).toHaveClass("opacity-0");
  });
});

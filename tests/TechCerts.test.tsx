import { render, screen } from "@testing-library/react";
import TechCerts from "../components/TechCerts";

describe("TechCerts", () => {
  it("renders the section heading", () => {
    render(<TechCerts />);
    expect(
      screen.getByRole("heading", { name: /technical qualifications/i }),
    ).toBeInTheDocument();
  });

  it("renders a card for each certification", () => {
    render(<TechCerts />);

    expect(
      screen.getByText(/Microsoft Certified: DevOps Engineer Expert/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Microsoft Certified: Azure Administrator Associate/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Microsoft Certified: Azure AI Engineer Associate/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Microsoft Certified: Azure Solutions Architect Expert/i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Microsoft® Certified Solutions Expert: Cloud Platform and Infrastructure/i,
      ),
    ).toBeInTheDocument();
  });
});

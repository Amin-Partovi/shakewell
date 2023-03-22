import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Card from "./Card";

const cardProps = {
  title: "card title",
  image: "/00ff.png",
};

describe("item card", () => {
  beforeEach(async () => {
    render(<Card {...cardProps} />);
  });

  test("render title", async () => {
    const title = await screen.findByRole("heading", { level: 1 });

    expect(title).toHaveTextContent(cardProps.title);
  });

  test("render a fixed placeholder as a cover", async () => {
    const image = await screen.findByAltText(cardProps.title);

    expect(image).toHaveAttribute("src", cardProps.image);
  });
});

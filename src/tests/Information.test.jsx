import { render, screen } from "@testing-library/react";
import Information from "../components/sections/Information";
import i18n from "../translation";

test("renders translated catalog text correctly", async () => {
  await i18n.changeLanguage("es"); // ensures Spanish for test

  render(<Information />);

  expect(
    screen.getByText(/Catálogo/i) // or whatever text appears in Team
  ).toBeInTheDocument();
});

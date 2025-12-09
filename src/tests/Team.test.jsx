import { render, screen } from "@testing-library/react";
import Team from "../components/sections/Team";
import i18n from "../translation";

describe("Team component", () => {
  beforeAll(async () => {
    await i18n.changeLanguage("es");
  });

  it("renderiza los títulos traducidos", () => {
    render(<Team />);

    expect(screen.getByText(/Catálogo/i)).toBeInTheDocument();
    expect(screen.getByText(/Conócenos/i)).toBeInTheDocument();
    expect(screen.getByText(/Contacto/i)).toBeInTheDocument();
  });

  it("renderiza las descripciones traducidas", () => {
    render(<Team />);

    expect(screen.getByText(/Accede a las Memorias Migrantes/i)).toBeInTheDocument();
    expect(screen.getByText(/Conoce al equipo/i)).toBeInTheDocument();
    expect(screen.getByText(/si quieres compartir tu historia/i)).toBeInTheDocument();
  });
});

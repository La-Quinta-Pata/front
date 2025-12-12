import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

vi.mock("../utils/getEmbedUrl", () => ({
  default: () => "https://embed.test",
}));

vi.mock("./FormModal", () => ({
  default: ({ children }) => <div data-testid="form-modal">{children}</div>,
}));

import VideoModal from "../components/videos/VideoModal";

describe("VideoModal", () => {
  const mockVideo = {
    title: "Video Test",
    description: "Descripción",
    migrantName: "Ana",
    migrantOrigin: "Chile",
    axisType: "Trabajo",
    url: "https://youtube.com",
  };

  it("no renderiza nada si no hay video", () => {
    const { container } = render(<VideoModal video={null} />);
    expect(container.firstChild).toBeNull();
  });

  it("renderiza el contenido si hay video", () => {
    render(<VideoModal video={mockVideo} onClose={() => {}} />);

    expect(screen.getByText("Video Test")).toBeDefined();
    expect(screen.getByText("Descripción")).toBeDefined();
    expect(screen.getByText("Ana")).toBeDefined();
    expect(screen.getByText("Chile")).toBeDefined();
    expect(screen.getByText("Trabajo")).toBeDefined();

    expect(screen.getByTitle("Video: Video Test")).toHaveAttribute(
      "src",
      "https://embed.test"
    );
  });

  it("llama a onClose al presionar Cerrar", () => {
    const onClose = vi.fn();
    render(<VideoModal video={mockVideo} onClose={onClose} />);

    fireEvent.click(screen.getByRole("button", { name: /cerrar/i }));
    expect(onClose).toHaveBeenCalled();
  });
});

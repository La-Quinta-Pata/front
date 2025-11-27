import { render, screen } from "@testing-library/react";
import VideoList from "../components/VideoList";

describe("VideoList", () => {
  it("muestra los títulos de los vídeos", () => {
    const mockVideos = [
      { id: 1, title: "Video de prueba 1" },
      { id: 2, title: "Video de prueba 2" }
    ];

    render(<VideoList videos={mockVideos} />);

    expect(screen.getByText("Video de prueba 1")).toBeInTheDocument();
    expect(screen.getByText("Video de prueba 2")).toBeInTheDocument();
  });

  it("muestra un mensaje si no hay vídeos", () => {
    render(<VideoList videos={[]} />);

    expect(screen.getByText(/no hay vídeos/i)).toBeInTheDocument();
  });
});

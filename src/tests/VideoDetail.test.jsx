import { render, screen } from "@testing-library/react";
import VideoDetail from "../components/VideoDetail";

describe("VideoDetail", () => {
  it("renderiza un iframe con la URL correcta", () => {
    const url = "https://youtube.com/embed/xxxx";

    render(<VideoDetail videoUrl={url} />);

    const iframe = screen.getByTitle("video-player");

    expect(iframe).toHaveAttribute("src", url);
  });
});

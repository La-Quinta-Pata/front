import { render, screen } from "@testing-library/react";
import Map from "../components/map/Map";

describe("Map", () => {
  it("renderiza tantos marcadores como recibe por props", () => {
    const markers = [
      { id: 1, lat: 41.38, lon: 2.17 },
      { id: 2, lat: 40.41, lon: -3.70 }
    ];

    render(<Map markers={markers} />);

    const renderedMarkers = screen.getAllByTestId("marker");

    expect(renderedMarkers.length).toBe(2);
  });
});

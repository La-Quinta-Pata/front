import { vi, describe, it, expect, beforeEach } from "vitest";
import { getCatalog } from "../services/catalogService"

describe("getCatalog", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("devuelve datos cuando la API responde bien", async () => {
    const mockData = [{ id: 1, title: "Video test" }];

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      })
    );

    const result = await getCatalog();
    expect(result).toEqual(mockData);
  });

  it("lanza error cuando la API responde con error", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
        status: 500,
        json: () => Promise.resolve({ message: "Error interno" }),
      })
    );

    await expect(getCatalog()).rejects.toThrow();
  });

  it("lanza error si fetch explota", async () => {
    global.fetch = vi.fn(() => Promise.reject(new Error("network down")));

    await expect(getCatalog()).rejects.toThrow("network down");
  });
});

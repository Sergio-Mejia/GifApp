import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//hacer un mock completo del path
jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en el componente GifGrid", () => {
  const category = "Lenovo";

  test("should Mostrar el loading inicialmente", () => {
    //Simular objeto que regresa la funcion
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    //Cuando la aplicación se carga
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("should mostrar items cuando se cargan las imagenes en useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Lenovo",
        url: "https://lenovo.com",
      },
      {
        id: "A233",
        title: "Valorant",
        url: "https://valorant.com",
      },
    ];

    //Obtener las imagenes
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});

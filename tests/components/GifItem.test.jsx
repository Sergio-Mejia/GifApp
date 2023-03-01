import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en GifItem", () => {
  const title = "React";
  const url = "https://react.com/";

  test("Debería hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should mostrar la imagen con la Url y el ALT indicado", () => {
    render(<GifItem title={title} url={url} />);
    // console.log(screen.getByRole('img').src);
    // expect( screen.getByRole('img').src ).toBe( url );
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("should mostrar el titulo en el componente", () => {
    render(<GifItem title={title} url={url} />);
    expect( screen.getByText( title ) ).toBeTruthy();
  });
});

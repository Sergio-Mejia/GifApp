import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => { 
    
    test('should Regresar el estado inicial', () => { 
        //Estado inicial: Arreglo vacio y isloading en true
        const { result } = renderHook( () => useFetchGifs('Lenovo') );
        const { images, isLoading } = result.current;

        expect( images.length).toBe(0);
        expect( isLoading ).toBeTruthy();
    })

    test('should retornar un arreglo de imagenes y isLoading en false', async () => { 

        const { result } = renderHook( () => useFetchGifs('Lenovo') );

        //Esperar hasta que result.current.images.length sea mayor a 0
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        )

        const { images, isLoading } = result.current;

        expect( images.length).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy(); 
    })

 })
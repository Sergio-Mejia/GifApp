import { fireEvent, render, screen } from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp'

describe('Pruebas en el componente <GifExpertApp />', () => { 
    
    test('should no hacer nada si la categoria ya existe', () => {  
        render( <GifExpertApp /> );
        //state inicial de mi aplicacion 'The Office'
        const categoria = 'The Office'

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        //Intento agregar la misma categoría
        fireEvent.input( input, { target: { value: categoria }});
        fireEvent.submit( form );
        
        expect( screen.getAllByRole('heading', { level: 3 }).length).toBe(1);

    })
 })
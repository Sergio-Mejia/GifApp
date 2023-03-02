import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory />', () => { 
    
    test('should Cambiar el valor en la caja de texto', () => { 
        render( <AddCategory onNewCategory={ () => {} } />)
        const input = screen.getByRole('textbox');

        fireEvent.input( input, {  target: { value: 'Valorant'} });     

        expect( input.value ).toBe( 'Valorant');
        // // screen.debug();
     })

     test('should llamar a OnNewCategory si el input tiene un valor', () => { 
        const inputValue = 'Lenovo';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } />);
        //Obtener valor de la caja de texto y formulario
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        //Cambiar valor de la caja de texto
        fireEvent.input( input, {  target: { value: inputValue } });
        
        //Disparar el submit del formulario 
        fireEvent.submit( form );
        // screen.debug(); 
        expect( input.value ).toBe('');    

        //Evaluar que onNewCategory sea llamado con el valor que tenia la caja de texto 
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
      })


      test('No debe llamar el OnNewCategory si el input está vacio', () => { 
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } />);

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).not.toHaveBeenCalled();

       })
 })
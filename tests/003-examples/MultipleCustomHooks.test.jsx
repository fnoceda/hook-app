import { screen, render, fireEvent } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/003-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');


describe('Tests on <MultipleCustomHooks />', () => { 
    

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1, 
        increment: mockIncrement,
    });


    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should to show the default component', () => { 




        useFetch.mockReturnValue({
            data: null, 
            isLoading: true, 
            hasError: null
        });

        render( <MultipleCustomHooks /> );

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Pokemon\'s Info'));
        
        const prevButton = screen.getByRole('button', {name: 'Anterior'});
        expect(prevButton).toBeTruthy();

     });



     test('should to show a response', () => { 

        useFetch.mockReturnValue({
            data: {
                name: "Charmander",
                id: 2,
                sprites: {
                  back_default: "back_default",
                  back_shiny: "back_shiny",
                  front_default: "front_default",
                  front_shiny: "front_shiny",
                },
              }, 
            isLoading: false, 
            hasError: null

        });

        render( <MultipleCustomHooks /> );
        expect(screen.getByText(`#2 - Charmander`)).toBeTruthy();

      });

      test('should to call to the next character', () => { 

        useFetch.mockReturnValue({
            data: {
                name: "Charmander",
                id: 2,
                sprites: {
                  back_default: "back_default",
                  back_shiny: "back_shiny",
                  front_default: "front_default",
                  front_shiny: "front_shiny",
                },
              }, 
            isLoading: false, 
            hasError: null
        });




        render( <MultipleCustomHooks /> );
        const nextButton = screen.getByRole('button', {name: 'Siguiente'});
        expect(nextButton).toBeTruthy();
        fireEvent.click(nextButton);




        // expect(mockIncrement).toHaveBeenCalled();


      });




 });
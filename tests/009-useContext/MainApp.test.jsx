import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/009-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe('Test on <MainApp />', () => { 
    beforeEach(() => jest.clearAllMocks());

    test('should show the HomePage', () => { 
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText('HomePage')).toBeTruthy();
     })

     test('should show the AboutPage', () => { 
  
        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText('AboutPage')).toBeTruthy();


     })


     test('should show the LoginPage', () => { 
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText('LoginPage')).toBeTruthy();
     })
 })
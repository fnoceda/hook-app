import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/009-useContext/LoginPage";
const { UserContext } = require("../../src/009-useContext/context/UserContext");

jest.mock('../../src/009-useContext/context/UserContext');

describe('Tests on <LoginPage />', () => { 

    beforeEach(() => jest.clearAllMocks());

    const user = {id: 1, name: 'Francisco', email: 'fnoceda83@gmail.com'}

    const setUserMock = jest.fn();



    test('should show the default component', () => { 
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre'); //aria-label
        expect(preTag.innerHTML).toBe('null');
     });



    test('should show the user', () => { 
        render(
            <UserContext.Provider value={{ user: user }}>
                <LoginPage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre'); 
        expect(preTag.innerHTML).toContain(user.id.toString());
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(user.email);

    });

    test('should call to the setUser method', () => { 


        

        render(
            <UserContext.Provider value={{ user: user, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const setUserButton = screen.getByRole('button', {name: 'Establecer usuario'});
        expect(setUserButton).toBeTruthy();
        fireEvent.click(setUserButton);
        expect(setUserMock).toHaveBeenCalled();
        expect(setUserMock).toHaveBeenCalledWith({"email": "juan@google.com", "id": 123, "name": "Juan"});

    });


 })
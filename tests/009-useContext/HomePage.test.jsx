const { render, screen } = require("@testing-library/react");
const { HomePage } = require("../../src/009-useContext/HomePage");
const { UserContext } = require("../../src/009-useContext/context/UserContext");

describe('Test on <HomePage />', () => { 


    const user = {id: 1, name: 'Francisco'}

    test('should show the component without the user', () => { 
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre'); //aria-label
        expect(preTag.innerHTML).toBe('null');
     })


     test('should show the component with the user', () => { 
        render(
            <UserContext.Provider value={{ user: user }}>
                <HomePage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre'); //aria-label
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(user.id.toString());

     })


 })
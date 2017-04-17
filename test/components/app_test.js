import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

//Use describe to group together similar tasks
describe('App', () => {
    //Use 'it' to task a single attribute of a target
    it('shows the correct text', () => {
        //Create an instance of App
        const component = renderComponent(App);

        //use expect to make an 'assertion' about a target
        expect(component).to.contain('React simple starter');
    });
});
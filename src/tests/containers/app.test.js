import React from 'react';
import { createStore } from 'redux'
//import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../../js/containers/app';

// Mocking variables, since the components are bound to the redux store
// with the connect method, they require the store and the location
// prop injected to execute correctly
// Create the location path name
const loc = { pathname:'/' };
// Create a temp store to use with the test
const store = createStore(function(){
  return { errorMessage:'This is a message' }
});

it('Smoke test the component renders without issues', () => {
  // Create a test element container
  shallow(<App store={store} location={loc} />);
});

it('Test the Rendered output of the component', () => {
  // Create a test element container
  const wrapper = shallow(
    <App store={store} location={loc} />
  ).shallow();
  // Test output comparitor
  const cont = <header className="main"></header>;
  // Ensure the rendered output contains the main puzzle container
  //expect(comp.contains(cont)).toEqual(true);
  //expect(wrapper.find('header.main')).to.have.length(1);
  expect(wrapper.contains(cont)).toEqual(true);
});

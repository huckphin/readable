import React from 'react';
import ReactDOM from 'react-dom';
import ContentWrapper from '../ContentWrapper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContentWrapper />, div);
  ReactDOM.unmountComponentAtNode(div);
});

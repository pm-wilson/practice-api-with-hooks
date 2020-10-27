import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders App', async() => {
    const { asFragment } = render(<App />);

    expect(await asFragment).toMatchSnapshot();
  });
});

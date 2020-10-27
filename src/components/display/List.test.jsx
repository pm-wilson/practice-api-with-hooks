import React from 'react';
import { render } from '@testing-library/react';
import List from './List';

describe('List component', () => {
  const characters = [{ _id: 1, name: 'jim' }, { _id: 2, name: 'fred' }];

  it('renders List', () => {
    const { asFragment } = render(<List characters={characters}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});

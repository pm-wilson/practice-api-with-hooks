import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Controller from './Controller';

describe('Controller container', () => {
  it('creates a list of names', () => {

    render(<Controller />);

    const detailView = screen.getByTestId('detailtest');

    expect(detailView).not.toBeEmptyDOMElement();

  });
});

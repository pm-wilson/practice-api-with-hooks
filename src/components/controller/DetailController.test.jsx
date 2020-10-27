import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DetailController from './DetailController';

describe('DetailController container', () => {
  it('creates a detail view on item click', () => {
    const idParams = { params: { id: '5cf5679a915ecad153ab68f5' } };

    render(<DetailController match={idParams}/>);
    
    const detailView = screen.getByTestId('detailtest');

    expect(detailView).not.toBeEmptyDOMElement();
  });
});

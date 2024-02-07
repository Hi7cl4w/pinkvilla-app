import React from 'react';
import { render } from '@testing-library/react';
import FeedList from './FeedList';

describe('FeedList', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<FeedList />);

        expect(baseElement).toBeTruthy();
    });
});
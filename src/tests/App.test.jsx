import {screen, render} from '@testing-library/react';

import App from '../App';

describe('test the test',() => {
  it('renders app', () => {
    render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument();
  })
})
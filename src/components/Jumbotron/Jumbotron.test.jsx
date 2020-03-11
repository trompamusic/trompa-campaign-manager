import React from 'react';
import { render } from '../../testUtils';
import Jumbotron from './Jumbotron';

describe('<Jumbotron />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render((
      <Jumbotron
        text={{
          subtitle : 'Subtitle',
          h1       : 'H1',
          h2       : 'H2',
          paragraph: 'Paragraph',
        }}
      />
    ));

    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders all text props', () => {
    const { getByText } = render((
      <Jumbotron
        text={{
          subtitle : 'Subtitle',
          h1       : 'H1',
          h2       : 'H2',
          paragraph: 'Paragraph',
        }}
      />
    ));

    expect(getByText('Subtitle')).toBeTruthy();
    expect(getByText('H1')).toBeTruthy();
    expect(getByText('H2')).toBeTruthy();
    expect(getByText('Paragraph')).toBeTruthy();
  });
});

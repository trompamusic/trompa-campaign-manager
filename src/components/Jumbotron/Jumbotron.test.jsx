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
    const { getAllByText } = render((
      <Jumbotron
        text={{
          subtitle : 'Subtitle',
          h1       : 'H1',
          h2       : 'H2',
          paragraph: 'Paragraph',
        }}
      />
    ));

    expect(getAllByText('Subtitle')).toBeTruthy();
    expect(getAllByText('H1')).toBeTruthy();
    expect(getAllByText('H2')).toBeTruthy();
    expect(getAllByText('Paragraph')).toBeTruthy();
  });
});

import React from 'react';
import { render } from '../../testUtils';
import TypeformModal from './TypeformModal';

describe('<TypeformModal />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<TypeformModal url="https://" formRef={{ current: {} }} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

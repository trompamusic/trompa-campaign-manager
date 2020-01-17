import React from 'react';
import { getbyText } from '@testing-library/react';
import { render } from '../../testUtils';
import ActiveTask from './ActiveTask';

describe('<ActiveTask />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<ActiveTask />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('displays next task with task props', () => {
    const { getByText } = render(<ActiveTask name="abc" url="https://demo.videodock.com/trompa/ce-task" />);

    expect(getByText('Next task')).toBeTruthy();
  });

  test('displays loading with loading prop', () => {
    const { getByText } = render(<ActiveTask loading={true} />);

    expect(getByText('Loading...')).toBeTruthy();
  });

  test('displays no tasks left with task prop', () => {
    const { getByText } = render(<ActiveTask noTasks={true} />);

    expect(getByText('No tasks left')).toBeTruthy();
  });
});

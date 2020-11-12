import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from '../../testUtils';
import CreateDigitalDocModal from './CreateDigitalDocModal';

describe('<CreateDigitalDocModal />', () => {
  it('renders and matches snapshot', () => {
    const { container } = render((
      <CreateDigitalDocModal
        initialFormValues={() => ''}
        onFormSubmit={() => ''}
        onUploadButtonClick={() => ''}
      />
    ));

    expect(container.firstChild).toMatchSnapshot();
  });

  it('fires the onUploadButtonClick callback', () => {
    const callback           = jest.fn();
    const { queryAllByText } = render((
      <CreateDigitalDocModal
        initialFormValues={() => ''}
        onFormSubmit={() => ''}
        onUploadButtonClick={callback}
      />
    ));

    fireEvent.click(queryAllByText('Select file')[0]);

    expect(callback).toHaveBeenCalledTimes(1);
  });
});

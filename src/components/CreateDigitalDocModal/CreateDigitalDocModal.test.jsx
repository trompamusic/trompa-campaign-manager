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
    const callback      = jest.fn();
    const { getByText } = render((
      <CreateDigitalDocModal
        initialFormValues={() => ''}
        onFormSubmit={() => ''}
        onUploadButtonClick={callback}
      />
    ));

    fireEvent.click(getByText('Select file'));

    expect(callback).toHaveBeenCalledTimes(1);
  });
});

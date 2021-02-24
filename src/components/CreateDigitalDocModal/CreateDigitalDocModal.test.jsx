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
        handleSolidPodButtonClick={() => ''}
      />
    ));

    expect(container.firstChild).toMatchSnapshot();
  });

  it('fires the onUploadButtonClick callback', () => {
    const callback           = jest.fn();
    const callbackSolid      = jest.fn();
    const { queryAllByText } = render((
      <CreateDigitalDocModal
        initialFormValues={() => ''}
        onUploadButtonClick={callback}
        onSolidPodButtonClick={callbackSolid}
        onFormSubmit={() => ''}
      />
    ));

    fireEvent.click(queryAllByText('Select file')[0]);
    fireEvent.click(queryAllByText('Select from disk')[0]);
    fireEvent.click(queryAllByText('Select from solid pod')[0]);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callbackSolid).toHaveBeenCalledTimes(1);
  });
});

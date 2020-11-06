import React from 'react';
import * as PropTypes from 'prop-types';
import { ReactTypeformEmbed } from 'react-typeform-embed';

export default function TypeformModal ({ url, formRef }) {
  return (
    <ReactTypeformEmbed
      autoOpen={false}
      url={url}
      ref={tf => {
        formRef.current = tf;
      }}
      style={{
        height: 0, width: 0,
      }}
      popup
      hideHeaders
      hideFooter
    />
  );
}

TypeformModal.propTypes = {
  url    : PropTypes.string.isRequired,
  formRef: PropTypes.object.isRequired,
};


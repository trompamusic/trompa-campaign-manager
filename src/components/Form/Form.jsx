import React, { useRef } from 'react';
import { Formik } from 'formik';
import * as PropTypes from 'prop-types';

export default function Form ({
  children,
  initialValues,
  onSubmit,
  submitting,
  errors,
  emptyOnError,
  ...rest
}) {
  const formRef = useRef();

  return (
    <Formik
      ref={formRef}
      onSubmit={onSubmit}
      validateOnChange={false}
      validateOnBlur={false}
      validator={() => ({})}
      initialValues={initialValues}
      {...rest}
    >
      {children}
    </Formik>
  );
}

Form.propTypes = {
  children     : PropTypes.func,
  initialValues: PropTypes.object,
  onSubmit     : PropTypes.func,
  submitting   : PropTypes.bool,
  errors       : PropTypes.array,
  emptyOnError : PropTypes.bool,
};

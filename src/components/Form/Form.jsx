import React from 'react';
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
  return (
    <Formik
      onSubmit={onSubmit}
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

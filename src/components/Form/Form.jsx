import React, { useEffect, useRef } from 'react';
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

  // useEffect(() => {
  //   formRef.current.setSubmitting(submitting);
  // }, [submitting, formRef]);

  // useEffect(() => {
  //   if (errors && emptyOnError) {
  //     Object.keys(errors).forEach(field => {
  //       formRef.current.setFieldValue(field, '', false);
  //     });
  //   }

  //   formRef.current.setErrors(errors || {});
  // }, [emptyOnError, errors, formRef]);

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

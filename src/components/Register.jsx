import React from 'react';
import { Formik } from 'formik';
import useAuthCall from '../hooks/useAuthCall';
import SignUpForm from './SignUpForm';

const Register = () => 
{

    const { register } = useAuthCall();

    return(
  <div>
     <Formik
            initialValues={{
              name: "",
              email: "",
              password1: "",
            }}
            onSubmit={(values, actions) => {
              register({ ...values, password2: values.password1 });
              actions.resetForm();
              actions.setSubmitting(false);
            }}

            component={(props) => <SignUpForm {...props} />}
            

          >
          </Formik>
  </div>
  );
}

export default Register;
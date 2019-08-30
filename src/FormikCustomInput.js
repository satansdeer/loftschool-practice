import React from 'react';
import { Formik, Field } from 'formik';

const Example = () => (
  <div>
    <h1>My Form</h1>
    <Formik
      initialValues={{ email: '', color: 'red', firstName: '' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      render={(props) => (
        <form onSubmit={props.handleSubmit}>
          <Field type="email" name="email" placeholder="Email" />
          <Field component="select" name="color">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>
          <Field name="firstName" component={CustomInputComponent} />
          <Field
            name="lastName"
            render={({ field /* _form */ }) => (
              <input {...field} placeholder="lastName" />
            )}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    />
  </div>
);

const CustomInputComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <div>
    <input type="text" {...field} {...props} />
    {touched[field.name] &&
      errors[field.name] && <div className="error">{errors[field.name]}</div>}
  </div>
);
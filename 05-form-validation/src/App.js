import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import "./styles.css";
import { submitData } from "./api";

const SignupSchema = yup.object().shape({
  firstName: yup.string().required(),
  age: yup
    .number()
    .required()
    .positive()
    .integer(),
  website: yup.string().url()
});

const FirstNameInputContainer = ({ id, error, label, regRef, name, type }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} name={name} ref={regRef} />
      {error && <p>{error.message}</p>}
    </>
  );
};

const App = () => {
  const { register, handleSubmit, errors, getValues } = useForm({
    validationSchema: SignupSchema
  });
  const [values, setValues] = React.useState(null)
  const onSubmit = data => {
    submitData(data);
  };

  console.log(values)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FirstNameInputContainer
        name="firstName"
        label="First Name"
        type="text"
        id="firstName"
        error={errors.firstName}
        regRef={register}
      />
      <div style={{ marginBottom: 10 }}>
        <label>Last Name</label>
        <input type="text" name="lastName" ref={register} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <label>Age</label>
        <input
          onChange={() => setValues(getValues)}
          data-testid="age"
          type="text"
          name="age"
          ref={register}
        />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      <div>
        <label>Website</label>
        <input type="text" name="website" ref={register} />
        {errors.website && <p>{errors.website.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;

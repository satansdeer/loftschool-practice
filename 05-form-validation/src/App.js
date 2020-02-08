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

const App = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: SignupSchema
  });
  const onSubmit = data => {
    submitData(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input type="text" name="firstName" ref={register} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>Last Name</label>
        <input type="text" name="lastName" ref={register} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <label>Age</label>
        <input data-testid="age" type="text" name="age" ref={register} />
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
}

export default App
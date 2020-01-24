import React from "react";
import useForm from "react-hook-form";

export default function App() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Email" name="email" ref={register} />
      <input
        type="password"
        placeholder="Password"
        name="password"
        ref={register({ required: "PASSWORD REQUIRED", minLength: {value: 8, message: "TOO SHORT"} })}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <input type="submit" />
    </form>
  );
}

import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const submitHandler = (data) => {
    console.log(data);
    // reset()
  };
  console.log(errors);
  
  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input type="text" {...register("username",{required:"username is required", maxLength:{value:6,message:"max length should be 6"}}) } placeholder="username" />
        <input type="email" {...register("email",{required:"Email is required"})} placeholder="email" />
        <input type="radio" {...register("gender",{required:"please select gender"})} defaultValue="male"  /> male
        <input type="radio" {...register("gender",{required:"please select gender"})} defaultValue="female" /> female
        <input type="submit" value={"submit"} />
      </form>
    </div>
  );
}

export default App;

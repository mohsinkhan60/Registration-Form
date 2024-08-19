import FormInput from "./components/FormInput";
import "./app.css";
import { useState } from "react";

export const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessege:
        "Username should be 3-16 characters & should not incude special characters",
      label: "Username",
      pattern: "^[a-zA-Z0-9_]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessege: "it should be a valid email",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "data",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "text",
      placeholder: "Password",
      errorMessege:
        "password should be 8-16 characters & should include at least 1 number, 1 letter and 1 special character",
      label: "Password",
      pattern: "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[^\\da-zA-Z]).{8,16}$",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "text",
      placeholder: "Confirm Password",
      errorMessege: "password does not match",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];
  //   console.log(username)

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button>Submit</button>
      </form>
    </div>
  );
};
export default App;

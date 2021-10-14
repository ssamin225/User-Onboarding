import React, { useState } from "react";
import Form from "./components/Form";
import axios from "axios";
import schema from './validation/formSchema';
import * as yup from 'yup';

const initialUser = {
  fname: '',
  lname: '',
  email: '',
  password: '',
  agree: false,
}

const initialFormErrors = {
  fname: '',
  lname: '',
  email: '',
  password: '',
  agree: ''
}

function App() {
  const [user, setUser] = useState(initialUser);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const updateForm = (inputName, inputValue) => {
    validate(inputValue, inputValue);
    setUser({ ...user, [inputName]: inputValue });
  }

  const submitForm = () => {

  }

  return (
    <div className="App">
      <Form user={user} update={updateForm} submit={submitForm} errors={formErrors} />
    </div>
  );
}

export default App;

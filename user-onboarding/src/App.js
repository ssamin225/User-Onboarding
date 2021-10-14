import React, { useState } from "react";
import Form from "./components/Form";

const initialUser = {
  fname: '',
  lname: '',
  email: '',
  password: '',
  agree: false,
}

function App() {
  const [user, setUser] = useState(initialUser);

  const updateForm = (inputName, inputValue) => {
    setUser({ ...user, [inputName]: inputValue});
  }

  const submitForm = () => {
    
  }

  return (
    <div className="App">
      <Form user={user} update={updateForm} submit={submitForm} />
    </div>
  );
}

export default App;

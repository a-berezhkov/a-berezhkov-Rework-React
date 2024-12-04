import React, { useState } from "react";
import type { SignUpFormType } from "./SignUpForm.d";
import axios from "axios";
function SignUpForm() {
  const [form, setForm] = useState<SignUpFormType>({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    telegram_username: "",
    role: "",
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    console.log(name, value);
    
    setForm({ ...form, [name]: value });
  };

  const onSubmitHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const result = await axios.post("http://localhost:8000/users/", form);
    console.log(result);

    console.log(form);
  };

  return (
    <form onSubmit={(e) => onSubmitHandler(e)}>
      <input
        type="text"
        placeholder="username"
        name="username"
        value={form.username}
        onChange={(e) => onChangeHandler(e)}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={form.password}
        onChange={onChangeHandler}
      />
      <input
        type="text"
        name="first_name"
        placeholder="first_name"
        value={form.first_name}
        onChange={onChangeHandler}
      />
      <input
        type="text"
        name="last_name"
        placeholder="last_name"
        value={form.last_name}
        onChange={onChangeHandler}
      />
      <input
        type="text"
        name="telegram_username"
        placeholder="telegram_username"
        value={form.telegram_username}
        onChange={onChangeHandler}
      />
      <input
        type="text"
        name="role"
        placeholder="role"
        value={form.role}
        onChange={onChangeHandler}
      />
      <button type="submit">Отправить</button>
    </form>
  );
}

export default SignUpForm;

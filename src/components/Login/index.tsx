"use client";

import styles from "./Login.module.css";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import Link from "next/link";
import { userContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/userService";

const Login = () => {
  const { user, setUser } = useContext(userContext);
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await userLogin(loginData.username, loginData.password);
    if (!res.message) {
      alert("Login successful!");
      setUser(res);
      router.push("/");
    } else {
      alert(res.message);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  return (
    <form className={styles.formContainer} onSubmit={handleOnSubmit}>
      <h2>Login</h2>
      <div className={styles.inputLabelContainer}>
        <label>Usuario: </label>
        <input
          className={styles.input}
          type="text"
          value={loginData.username}
          name="username"
          placeholder="Example: John Doe"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.inputLabelContainer}>
        <label>Contraseña: </label>
        <input
          className={styles.input}
          type="password"
          value={loginData.password}
          name="password"
          placeholder="Enter your password"
          onChange={handleInputChange}
        />
      </div>
      <span>
        Don´t have an account? <Link href="/register">Sign up</Link>
      </span>
      <button className={styles.button} type="submit">
        LOGIN
      </button>
    </form>
  );
};

export default Login;

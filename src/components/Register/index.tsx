"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./Register.module.css";
import { UserRegister } from "@/interfaces/User";
import Link from "next/link";
import { userRegister } from "@/services/userService";
import { useRouter } from "next/navigation";
const Register = () => {
  const [registerData, setRegisterData] = useState<UserRegister>({
    name: "",
    email: "",
    password: "",
    phone: 0,
    address: "",
  });

  const router = useRouter();

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await userRegister(
      registerData.name,
      registerData.email,
      registerData.password,
      registerData.phone,
      registerData.address
    );
    console.log(registerData);
    alert("Registro Exitoso");
    router.push("/login");
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };
  return (
    <form className={styles.formContainer} onSubmit={handleOnSubmit}>
      <h2>REGISTER</h2>
      <div className={styles.inputLabelContainer}>
        <label>Name: </label>
        <input
          className={styles.input}
          type="text"
          value={registerData.name}
          name="name"
          placeholder="Example: John Doe"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.inputLabelContainer}>
        <label>Phone number: </label>
        <input
          className={styles.input}
          type="text"
          value={registerData.phone}
          name="phone"
          placeholder="Example: 555-555-5555"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.inputLabelContainer}>
        <label>Address: </label>
        <input
          className={styles.input}
          type="text"
          value={registerData.address}
          name="address"
          placeholder="Example: fake street, 123"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.inputLabelContainer}>
        <label>correo: </label>
        <input
          className={styles.input}
          type="email"
          value={registerData.email}
          name="email"
          placeholder="Example: JohnDoe@mail.com"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.inputLabelContainer}>
        <label>Contraseña: </label>
        <input
          className={styles.input}
          type="password"
          value={registerData.password}
          name="password"
          placeholder=" ******"
          onChange={handleInputChange}
        />
      </div>
      <span>
        Already have an account? <Link href="/login">Sign in</Link>
      </span>
      <button className={styles.button}>REGISTER</button>
    </form>
  );
};

export default Register;

import InputForm from "../Elements/input";
import Button from "../Elements/Button";
import { useEffect, useRef } from "react";
const FormLogin = () => {
  const heandelLogin = () => {
    event.preventDefault();
    // menyimpan data di local storage  tidak di rekumendasikan untuk di gunakan pada login sebenarnya
    localStorage.setItem('email', event.target.email.value);
    localStorage.setItem('password', event.target.password.value);
    window.location.href ="/products"
  }
  const emailRef = useRef(null);
  useEffect(() => {
    emailRef.current.focus();
  }, []);
  return (
    <form action="" onSubmit={heandelLogin}>
      <InputForm
        label="Email"
        name="email"
        placeholder="example@gmail.com"
        type="email"
        ref={emailRef}
      />
      <InputForm
        label="Password"
        name="password"
        placeholder="********"
        type="password"
      />

      <Button bg="bg-blue-600 w-full" type="submit">Login</Button>
    </form>
  );
};
export default FormLogin;

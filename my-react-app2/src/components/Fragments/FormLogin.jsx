import InputForm from "../Elements/input";
import Button from "../Elements/Button";
const FormLogin = () => {
  const heandelLogin = () => {
    event.preventDefault();
    // menyimpan data di local storage  tidak di rekumendasikan untuk di gunakan pada login sebenarnya
    localStorage.setItem('email', event.target.email.value);
    localStorage.setItem('password', event.target.password.value);
    window.location.href ="/products"
  }
  return (
    <form action="" onSubmit={heandelLogin}>
      <InputForm
        label="Email"
        name="email"
        placeholder="example@gmail.com"
        type="email"
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

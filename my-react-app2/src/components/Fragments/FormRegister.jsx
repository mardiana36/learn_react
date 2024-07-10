import InputForm from "../Elements/input";
import Button from "../Elements/Button";
const FormRegister = () => {
  return (
    <form action="">
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
      <InputForm
        label="Konfirmasi Password"
        name="confrimPassword"
        placeholder="********"
        type="password"
      />
      <Button bg="bg-blue-600 w-full">Create Acount</Button>
    </form>
  );
};
export default FormRegister;

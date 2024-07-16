import { forwardRef } from "react";

const Input = forwardRef((params,ref) => {
  const { type, placeholder, name } = params;
  return (
    <input
      id={name}
      ref={ref}
      required
      type={type}
      name={name}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
      placeholder={placeholder}
    />
  );
});
Input.displayName = "Input";
export default Input;

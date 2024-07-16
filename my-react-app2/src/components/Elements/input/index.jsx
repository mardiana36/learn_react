import Label from "./label";
import Input from "./input";
import { forwardRef } from "react";
const InputForm = forwardRef( (params, ref) => {
    const { label, type, name, placeholder} = params;
    return (
        <div className="mb-6">
            <Label htmlFor={name}>{ label }</Label>
            <Input ref={ref} name={name} type={type} placeholder={placeholder} />
        </div>
    );
});
InputForm.displayName = "InputForm";
export default InputForm;
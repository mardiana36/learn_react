const Input = (params) => {
    const { type, placeholder,name } = params;
    return (
        <input id={name} required type={type} name={name} className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50" placeholder={placeholder} />
    );
}

export default Input;
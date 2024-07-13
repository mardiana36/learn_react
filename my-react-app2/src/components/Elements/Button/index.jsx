const Button = (params) => {
    const { children = "...", bg="bg-red-700", onClick=()=>{}, type="button"} = params;
    return (
        <button type={type} onClick={onClick} className= {`${bg} px-10 py-3 rounded-xl text-white font-bold`}>
            {children}
        </button>
    );
}

export default Button;
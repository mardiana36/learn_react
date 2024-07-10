const Button = (params) => {
    const { children = "...", bg="bg-red-700" } = params;
    return (
        <button className= {`${bg} py-5 px-20 rounded-xl text-white font-bold`}>
            {children}
        </button>
    );
}

export default Button;
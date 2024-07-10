const Button = (params) => {
    // pemecahan paraeter params
    // children digunakan untuk mengambil value dari tag Button dalam function app()
    const { children = "...", variant = "bg-black" } = params
    return (
        <button className={`py-5 px-20 ${variant} text-white rounded-xl`}>
            {children}
        </button>
    );
};

export default Button;

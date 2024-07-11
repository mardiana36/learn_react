
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";
// tag Link berasal dari library react-router-dom yang memungkinkan untuk pindah ke suatu halamn tanpa realod halamannya
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <AuthLayouts title="Register">
            <FormRegister />
            <p className="text-sm mt-5 text-center">Have an account? <Link to="/login" className="font-bold text-blue-600">Login</Link></p>
        </AuthLayouts>
    );
}
export default RegisterPage
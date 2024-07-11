import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
    return (
        <AuthLayouts title="Login">
            <FormLogin />
            <p className="text-sm mt-5 text-center">Do not have an account? <Link to="/register" className="font-bold text-blue-600">Sign up</Link></p>
        </AuthLayouts>
    );
}
export default LoginPage
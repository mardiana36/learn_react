import { Link } from "react-router-dom";
const AuthLayouts = (params) => {
  const { children, title, type } = params;
  return (
    <div className="flex justify-center items-center min-h-screen gap-10 flex-wrap">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Plase enter your deatles
        </p>
        {children}
        <p className="text-sm mt-5 text-center">
          {type == "login"
            ? "Don't have an account?"
            : "Already have an account?"}
          <Link
            to={`/${type == "login" ? "register" : "login"}`}
            className="font-bold text-blue-600"
          >
            {type == "login" ? " Sign up" : " Sign in"}
          </Link>
        </p>
        {/* <Navigation type={type} /> */}
      </div>
    </div>
  );
};

// condtitional Rendering dengan mengunakan if else dengan membuat element baru atau function baru

// const Navigation = (params) => {
//   const {type} = params
//   if (type == "login") {
//     return (
//       <p className="text-sm mt-5 text-center">
//         Dont have an account?{" "}
//         <Link to="/register" className="font-bold text-blue-600">
//           Sign Up
//         </Link>
//       </p>
//     );
//   } else {
//     return (
//       <p className="text-sm mt-5 text-center">
//         Already have an account?{" "}
//         <Link to="/login" className="font-bold text-blue-600">
//           Sign in
//         </Link>
//       </p>
//     );
//   }
// };

export default AuthLayouts;

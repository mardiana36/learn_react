// import React from "react"; // ini digunakan ketika kita memangil atau membuat component dalam bentuk object
// pembuatan komponent button dengan object atau class
// class Button extends React.Component {
//   render() {
//     return (
//       <button className="py-5 px-20 bg-slate-800 text-white rounded-xl">Clik</button>
//     );
//   }
// }
// // pembuatan komponen button dengan normal function
// function ButtonGreen() {
//   return (
//     <button className="py-5 px-20 bg-green-800 text-white rounded-xl">Clik</button>
//   );
// }
// // pembuatan komponen butoon dengan  row function
// const ButtonRed = () => {
//   return (
//     <button className="py-5 px-20 bg-red-800 text-white rounded-xl">Clik</button>

//    );
//  }

const Button = (params) => {
  // pemecahan paraeter params
  // children digunakan untuk mengambil value dari tag Button dalam function app()
  const {children = "...", variant = "bg-black"} = params
  return (
    <button className={`py-5 px-20 ${variant} text-white rounded-xl`}>
      {children}
    </button>
  );
}

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-2">
        <Button variant="bg-purple-700" >Login</Button>
        <Button variant="bg-red-700" >Logout</Button>
        <Button></Button>
      </div>
    </div>
  );
}

export default App;

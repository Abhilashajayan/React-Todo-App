import {useState} from "react";
import FormData from "./components/formData";


const  App =()=> {
  return (
    <div className="w-full min-h-screen font-bodyFont bg-gradient-to-b from-brown-300 via-white-300 to-white-700 text-white px-4 flex justify-center text-center items-center">
      <div className="w-[850px] bg-bodyColor p-10">
     <FormData />
      </div>
    </div>
  );
}

export default App;
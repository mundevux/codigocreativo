import React from "react";
import Logo from '/public/images/codcreativo.svg';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={Logo} className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></img>
    </div>
  );
};

export default Spinner;
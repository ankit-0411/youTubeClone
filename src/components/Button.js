import React from "react";

function Button({ name }) {
  return (
    <button className="px-5 py-2 m-2 bg-gray-200 rounded-lg font-medium flex-shrink-0">
      {name}
    </button>
  );
}

export default Button;

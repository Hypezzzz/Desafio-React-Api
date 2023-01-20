import React from "react";

const CategoryButton = (props) => {
  return (
    <button
      onClick={() => props.getJoke(props.category)}
      type="button"
      className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
    >
      {props.category}
    </button>
  );
};

export default CategoryButton;

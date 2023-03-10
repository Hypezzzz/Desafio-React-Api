import React from "react";

const SortButton = (props) => {
  return (
    <button
      onClick={() => props.sortResults(props.direction)}
      type="button"
      className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
    >
      {props.text}
    </button>
  );
};

export default SortButton;

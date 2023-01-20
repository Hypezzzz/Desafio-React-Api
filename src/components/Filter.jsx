import React from "react";

const Filter = (props) => {
  return (
    <div className="flex justify-center">
      <div className="mb-3">
        <label className="inline-block mb-2 text-gray-700 text-lg font-semibold">
          Filtrar Resultados:
        </label>
        <input
          type="text"
          className="
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Texto a filtrar"
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default Filter;

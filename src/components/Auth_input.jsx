import React from 'react';

function AuthInput(props) {
  return (
    <div className="mb-4">
      <label htmlFor={props.id} className="block font-bold mb-2 text-sm">
        {props.text}
      </label>
      <input
        type="text"
        id={props.id}
        className="shadow rounded border w-full py-2 px-3 text-gray-700 leading-tight"
        placeholder={props.text}
      />
    </div>
  );
}

export default AuthInput;

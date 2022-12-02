import React from "react";

export default function Input({ type, label, name }) {
  return (
    <div className="mb-5">
      <label className="mb-2 block text-white text-sm font-semibold">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="w-full p-2.5 border border-gray-400 outline-none text-white rounded-md bg-transparent"
      />
    </div>
  );
}

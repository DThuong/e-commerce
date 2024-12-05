import React from 'react';

const InputFields = ({ value, setValue, nameKey, type = 'text' }) => {
  const handleChange = (e) => {
    setValue((prev) => ({
      ...prev,
      [nameKey.toLowerCase().replace(' ', '')]: e.target.value, // Normalize key
    }));
  };

  const formattedNameKey = nameKey.slice(0, 1).toUpperCase() + nameKey.slice(1);

  return (
    <div className="w-full relative">
      {value && (
        <label
          htmlFor={nameKey}
          className="text-[10px] absolute top-[-8px] left-[12px] bg-white px-1 animate-slide-top-sm"
        >
          {formattedNameKey}
        </label>
      )}
      <input
        id={nameKey}
        type={type}
        className="px-4 py-2 rounded-md placeholder:text-sm placeholder:italic border w-full my-2"
        placeholder={formattedNameKey}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputFields;

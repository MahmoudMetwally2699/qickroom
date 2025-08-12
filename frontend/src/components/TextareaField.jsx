import React from 'react';
import { useTranslation } from 'react-i18next';

const TextareaField = ({ label, name, value, onChange, error, required, placeholder }) => {
  const { t } = useTranslation();
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-medium mb-1">
        {t(label)} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={t(placeholder)}
        className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${error ? 'border-red-500' : 'border-gray-300'}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        rows={4}
      />
      {error && <div id={`${name}-error`} className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
};

export default TextareaField;

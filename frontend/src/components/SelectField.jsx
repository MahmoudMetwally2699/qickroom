import React from 'react';
import { useTranslation } from 'react-i18next';

const SelectField = ({ label, name, value, onChange, options, error, required }) => {
  const { t } = useTranslation();
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-medium mb-1">
        {t(label)} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${error ? 'border-red-500' : 'border-gray-300'}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      >
        <option value="">{t('select_option')}</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{t(opt.label)}</option>
        ))}
      </select>
      {error && <div id={`${name}-error`} className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
};

export default SelectField;

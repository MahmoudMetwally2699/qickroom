import React from 'react';
import { useTranslation } from 'react-i18next';

const CheckboxGroup = ({ label, name, options, values, onChange, error, required }) => {
  const { t } = useTranslation();
  const checkedValues = values || [];
  return (
    <div className="mb-4">
      <span className="block font-medium mb-1">
        {t(label)} {required && <span className="text-red-500">*</span>}
      </span>
      <div className="flex flex-wrap gap-3">
        {options.map(opt => (
          <label key={opt.value} className="flex items-center gap-2">
            <input
              type="checkbox"
              name={name}
              value={opt.value}
              checked={checkedValues.includes(opt.value)}
              onChange={onChange}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            {t(opt.label)}
          </label>
        ))}
      </div>
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
};

export default CheckboxGroup;

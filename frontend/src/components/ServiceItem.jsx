import React from 'react';
import { useTranslation } from 'react-i18next';

const ServiceItem = ({ icon, name, description }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4 hover:shadow-lg transition">
      <div className="text-2xl">{icon}</div>
      <div>
        <h4 className="font-semibold text-md mb-1">{t(name)}</h4>
        <p className="text-gray-600 text-sm">{t(description)}</p>
      </div>
    </div>
  );
};

export default ServiceItem;

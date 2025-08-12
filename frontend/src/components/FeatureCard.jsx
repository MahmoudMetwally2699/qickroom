import React from 'react';
import { useTranslation } from 'react-i18next';

const FeatureCard = ({ icon, title, description }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition">
      <div className="mb-4 text-3xl">{icon}</div>
      <h3 className="font-bold text-lg mb-2">{t(title)}</h3>
      <p className="text-gray-600 text-sm">{t(description)}</p>
    </div>
  );
};

export default FeatureCard;

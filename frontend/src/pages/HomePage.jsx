import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import FeatureCard from '../components/FeatureCard';
import ServiceItem from '../components/ServiceItem';
import Footer from '../components/Footer';

const features = [
  {
    icon: <span role="img" aria-label="Hotel">🏨</span>,
    title: 'feature_hotel_management',
    description: 'feature_hotel_management_desc'
  },
  {
    icon: <span role="img" aria-label="Provider">🤝</span>,
    title: 'feature_service_provider',
    description: 'feature_service_provider_desc'
  },
  {
    icon: <span role="img" aria-label="Booking">🛎️</span>,
    title: 'feature_guest_booking',
    description: 'feature_guest_booking_desc'
  },
  {
    icon: <span role="img" aria-label="Dashboard">📊</span>,
    title: 'feature_role_based_dashboards',
    description: 'feature_role_based_dashboards_desc'
  },
  {
    icon: <span role="img" aria-label="Notification">🔔</span>,
    title: 'feature_real_time_notifications',
    description: 'feature_real_time_notifications_desc'
  },
  {
    icon: <span role="img" aria-label="Payment">💳</span>,
    title: 'feature_secure_payment',
    description: 'feature_secure_payment_desc'
  },
  {
    icon: <span role="img" aria-label="Multi-Tenant">🏢</span>,
    title: 'feature_multi_tenant',
    description: 'feature_multi_tenant_desc'
  }
];

const services = [
  {
    icon: <span role="img" aria-label="Laundry">🧺</span>,
    name: 'service_laundry',
    description: 'service_laundry_desc'
  },
  {
    icon: <span role="img" aria-label="Transportation">🚗</span>,
    name: 'service_transportation',
    description: 'service_transportation_desc'
  },
  {
    icon: <span role="img" aria-label="Travel">🌍</span>,
    name: 'service_travel',
    description: 'service_travel_desc'
  },
  {
    icon: <span role="img" aria-label="Spa">💆‍♂️</span>,
    name: 'service_spa',
    description: 'service_spa_desc'
  },
  {
    icon: <span role="img" aria-label="Dining">🍽️</span>,
    name: 'service_dining',
    description: 'service_dining_desc'
  },
  {
    icon: <span role="img" aria-label="Entertainment">🎭</span>,
    name: 'service_entertainment',
    description: 'service_entertainment_desc'
  },
  {
    icon: <span role="img" aria-label="Shopping">🛍️</span>,
    name: 'service_shopping',
    description: 'service_shopping_desc'
  },
  {
    icon: <span role="img" aria-label="Fitness">🏋️‍♂️</span>,
    name: 'service_fitness',
    description: 'service_fitness_desc'
  }
];

const HomePage = () => {
  const { t } = useTranslation();
  return (
  <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-400">
      <Header />
      {/* Modern Hero Section */}
      <section className="relative flex items-center justify-center min-h-[60vh] py-12 px-4">
  <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500/40 via-blue-300/30 to-blue-400/40 blur-xl"></div>
        <div className="relative z-10 max-w-2xl w-full mx-auto backdrop-blur-lg bg-white/70 border border-white/40 rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center animate-fade-in">
          <img src="/qickroom.svg" alt="QickRoom Logo" className="h-24 md:h-32 w-auto mb-6 drop-shadow-2xl animate-slide-down" />
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 bg-clip-text text-transparent animate-fade-in leading-[1.2] py-2 overflow-visible">
            {t('welcome')}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 font-medium animate-fade-in animate-delay-200">
            {t('subheading')}
          </p>
          <a
            href="/form"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 text-white font-bold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 z-50 relative animate-fade-in animate-delay-400"
          >
            {t('getStarted')}
          </a>
        </div>
      </section>
      <main className="flex-1 px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 bg-clip-text text-transparent drop-shadow-lg animate-fade-in">
            {t('keyFeatures')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div className="backdrop-blur-lg bg-white/70 border border-white/40 rounded-2xl shadow-2xl p-6 transition-all duration-500 hover:scale-[1.03] hover:shadow-3xl">
                <FeatureCard key={i} {...f} />
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold mb-8 text-center bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg animate-fade-in">
            {t('serviceCategories')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div className="backdrop-blur-lg bg-white/70 border border-white/40 rounded-2xl shadow-2xl p-6 transition-all duration-500 hover:scale-[1.03] hover:shadow-3xl">
                <ServiceItem key={i} {...s} />
              </div>
            ))}
          </div>
        </section>
        <section className="text-center mt-16">
          <h2 className="text-2xl font-extrabold mb-6 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg animate-fade-in">
            {t('getStartedToday')}
          </h2>
          <p className="mb-8 text-lg text-gray-700 font-medium">{t('joinHotels')}</p>
          <a
            href="/form"
            className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 z-50 relative"
          >
            {t('signUpNow')}
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );

};

export default HomePage;

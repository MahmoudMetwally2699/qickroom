import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Hotel management benefits
const hotelBenefits = [
  {
    icon: "payment",
    title: 'easy_payment_handling',
    description: 'payment_system_with_organized_transactions'
  },
  {
    icon: "settings",
    title: 'central_service_management',
    description: 'unified_platform_for_managing_all_internal_external_updates'
  },
  {
    icon: "trending_up",
    title: 'revenue_increase',
    description: 'smart_revenue_management_commission_maximization'
  },
  {
    icon: "star",
    title: 'enhanced_customer_experience',
    description: 'smooth_seamless_service_experience_more_comfort'
  }
];

// Additional benefits
const additionalBenefits = [
  {
    icon: "analytics",
    title: 'advanced_analytics',
    description: 'detailed_analytics_reports_better_decision_making'
  },
  {
    icon: "group",
    title: 'quality_service',
    description: 'high_quality_service_standards_responsible_staff'
  },
  {
    icon: "schedule",
    title: 'time_saving',
    description: 'simplified_business_operations_time_efficiency'
  },
  {
    icon: "sentiment_very_satisfied",
    title: 'highest_customer_satisfaction',
    description: 'excellent_experiences_highest_satisfaction_rates'
  }
];

const HomePage = () => {
  const { t } = useTranslation();
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqData = [
    {
      question: 'faq_implementation_time_question',
      answer: 'faq_implementation_time_answer'
    },
    {
      question: 'faq_profit_margins_question',
      answer: 'faq_profit_margins_answer'
    },
    {
      question: 'faq_financial_security_question',
      answer: 'faq_financial_security_answer'
    },
    {
      question: 'faq_system_integration_question',
      answer: 'faq_system_integration_answer'
    },
    {
      question: 'faq_technical_support_question',
      answer: 'faq_technical_support_answer'
    },
    {
      question: 'faq_pricing_question',
      answer: 'faq_pricing_answer'
    },
    {
      question: 'faq_trial_period_question',
      answer: 'faq_trial_period_answer'
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[70vh] flex items-center px-4 py-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-right space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  <span className="block">{t('comprehensive_solution')}</span>
                  <span className="block text-blue-600">{t('hotel_services_management')}</span>
                </h1>

                <p className="text-base lg:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                  {t('hero_description')}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-end">
                <a
                  href="/form"
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg text-center"
                >
                  {t('request_demo')}
                </a>
                <a
                  href="/form"
                  className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300 text-center"
                >
                  {t('register_hotel_now')}
                </a>
              </div>

              {/* Stats */}
              <div className="flex justify-center lg:justify-end gap-6 pt-4">
                <div className="text-center">
                  <div className="flex items-center justify-center lg:justify-end gap-1 mb-1">
                    <span className="text-xl font-bold text-gray-800">4.9/5</span>
                    <span className="material-icons text-yellow-500 text-lg">star</span>
                  </div>
                  <p className="text-gray-600 text-xs">{t('rating')}</p>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center lg:justify-end gap-2 mb-1">
                    <span className="text-xl font-bold text-blue-600">+200</span>
                    <span className="material-icons text-blue-600 text-lg">trending_up</span>
                  </div>
                  <p className="text-gray-600 text-xs">{t('revenue_increase')}</p>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center lg:justify-end gap-2 mb-1">
                    <span className="text-xl font-bold text-green-600">+500</span>
                    <span className="material-icons text-green-600 text-lg">business</span>
                  </div>
                  <p className="text-gray-600 text-xs">{t('hotels')}</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Luxury Hotel Lobby"
                  className="w-full h-[350px] lg:h-[400px] object-cover"
                />

                {/* Floating Cards */}
              <div className="absolute bottom-3 left-3 bg-white rounded-lg shadow-lg p-3 max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-xs font-semibold text-gray-800">{t('online')}</span>
                </div>
                <p className="text-xs text-gray-600">{t('integrated_service_management_platform')}</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How QickRoom Works Section */}
      <section id="how-it-works" className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              {t('how_qickroom_works')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('how_qickroom_works_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 - Registration & Setup */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="material-icons text-white text-xl">how_to_reg</span>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {t('step_1_title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('step_1_desc')}
              </p>
            </div>

            {/* Step 2 - Service Management */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="material-icons text-white text-xl">settings</span>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {t('step_2_title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('step_2_desc')}
              </p>
            </div>

            {/* Step 3 - Payment Processing */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="material-icons text-white text-xl">payment</span>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {t('step_3_title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('step_3_desc')}
              </p>
            </div>

            {/* Step 4 - Profit Increase */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="material-icons text-white text-xl">trending_up</span>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {t('step_4_title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('step_4_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="px-4 py-16">
        <div className="max-w-6xl mx-auto">

          {/* Comprehensive Services Section */}
          <div id="services" className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('our_comprehensive_services')}
            </h2>
            <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
              {t('comprehensive_services_description')}
            </p>

            {/* Internal Services */}
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-8">
                <span className="material-icons text-blue-600 text-xl">business</span>
                <h3 className="text-xl font-bold text-gray-800">{t('internal_services')}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Room Management */}
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                      alt="Room Service Management"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-icons text-2xl text-blue-600">bed</span>
                      <h4 className="text-lg font-bold text-gray-800">{t('room_management')}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {t('room_management_desc')}
                    </p>
                  </div>
                </div>

                {/* Guest Management */}
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gray-100">
                    <img
                      src="/Guest Management.webp"
                      alt="Guest Management"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-icons text-2xl text-blue-600">people</span>
                      <h4 className="text-lg font-bold text-gray-800">{t('guest_management')}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {t('guest_management_desc')}
                    </p>
                  </div>
                </div>

                {/* Restaurant Management */}
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                      alt="Restaurant Management"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-icons text-2xl text-blue-600">restaurant</span>
                      <h4 className="text-lg font-bold text-gray-800">{t('restaurant_management')}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {t('restaurant_management_desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* External Services */}
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-8">
                <span className="material-icons text-[#75C0E2] text-xl">connect_without_contact</span>
                <h3 className="text-xl font-bold text-gray-800">{t('external_services')}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Delivery Services */}
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gray-100">
                    <img
                      src="/Delivery Services.jpg"
                      alt="Delivery Services"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-icons text-2xl text-[#75C0E2]">local_shipping</span>
                      <h4 className="text-lg font-bold text-gray-800">{t('delivery_services')}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {t('delivery_services_desc')}
                    </p>
                  </div>
                </div>

                {/* Tourism Services */}
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gray-100">
                    <img
                      src="/Tourism Services.webp"
                      alt="Tourism Services"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-icons text-2xl text-[#75C0E2]">place</span>
                      <h4 className="text-lg font-bold text-gray-800">{t('tourism_services')}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {t('tourism_services_desc')}
                    </p>
                  </div>
                </div>

                {/* Car Rental Services */}
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                      alt="Car Rental Services"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-icons text-2xl text-[#75C0E2]">directions_car</span>
                      <h4 className="text-lg font-bold text-gray-800">{t('car_rental_services')}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {t('car_rental_services_desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Integration Section */}
          <div id="communication" className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 mb-16">
            <div className="text-center mb-8">
              {/* Smart WhatsApp Integration Badge */}
              <div className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <span className="material-icons text-lg mr-2">chat</span>
                {t('smart_whatsapp_integration')}
              </div>

              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center">
                  <span className="material-icons text-white text-2xl">smartphone</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
                  {t('instant_continuous_communication')}
                </h2>
              </div>
              <p className="text-gray-600 max-w-4xl mx-auto text-lg">
                {t('whatsapp_integration_description')}
              </p>

              {/* WhatsApp Button */}
              <div className="mt-6">
                <a
                  href="/form"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto w-fit"
                >
                  <span className="material-icons text-xl">chat</span>
                  {t('integrate_with_whatsapp')}
                </a>
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {t('how_integration_works')}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Hotel Notifications */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 bg-gradient-to-br from-slate-600 to-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Hotel Notifications"
                    className="w-full h-full object-cover mix-blend-overlay opacity-60"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <span className="material-icons text-2xl">notifications</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-green-500 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="material-icons text-white text-sm">smartphone</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="material-icons text-2xl">email</span>
                    {t('hotel_notifications')}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {t('hotel_notifications_desc')}
                  </p>
                </div>
              </div>

              {/* Guest Requests */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 bg-gradient-to-br from-green-400 to-green-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="material-icons text-white text-4xl">smartphone</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <span className="text-green-600 font-bold text-sm">1</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white rounded-lg px-3 py-1">
                      <span className="text-green-600 text-xs font-medium">{t('request_sent')}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="material-icons text-2xl text-green-600">phone</span>
                    {t('guest_requests')}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {t('guest_requests_desc')}
                  </p>
                </div>
              </div>

              {/* Automatic Updates */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 bg-gradient-to-br from-green-400 to-green-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="material-icons text-white text-4xl">sync</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <span className="text-green-600 font-bold text-sm">2</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white rounded-lg px-3 py-1">
                      <span className="text-green-600 text-xs font-medium">{t('auto_update')}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="material-icons text-2xl text-green-600">sync</span>
                    {t('automatic_updates')}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {t('automatic_updates_whatsapp_desc')}
                  </p>
                </div>
              </div>

              {/* External Service Providers */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Service Providers"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <span className="text-green-600 font-bold text-sm">3</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white rounded-lg px-3 py-1">
                      <span className="text-green-600 text-xs font-medium">{t('provider_connected')}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="material-icons text-2xl text-green-600">group</span>
                    {t('external_service_providers_whatsapp')}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {t('external_service_providers_whatsapp_desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Benefits with WhatsApp Mobile Mockup */}
          <div id="benefits" className="bg-gradient-to-br from-gray-50 to-green-50 rounded-3xl p-8 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {t('main_benefits')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('main_benefits_subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Benefits Grid */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Automatic Updates */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <span className="material-icons text-blue-600 text-2xl">update</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {t('automatic_updates')}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t('automatic_updates_desc')}
                    </p>
                  </div>

                  {/* External Service Provider */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <span className="material-icons text-blue-600 text-2xl">business</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {t('external_service_provider')}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t('external_service_provider_desc')}
                    </p>
                  </div>

                  {/* Fast & Instant Response */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <span className="material-icons text-blue-600 text-2xl">flash_on</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {t('fast_instant_response')}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t('fast_instant_response_desc')}
                    </p>
                  </div>

                  {/* Instant Notification */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <span className="material-icons text-blue-600 text-2xl">notifications</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {t('instant_notification')}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t('instant_notification_desc')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Mobile Phone Mockup */}
              <div className="flex justify-center">
                <div className="relative">
                  {/* Phone Frame */}
                  <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">

                      {/* WhatsApp Header */}
                      <div className="bg-green-500 px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
                          <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
                          <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
                        </div>
                        <h3 className="text-white font-semibold">WhatsApp</h3>
                        <div className="text-white text-sm">15:30</div>
                      </div>

                      {/* Chat Header */}
                      <div className="bg-green-600 px-4 py-3 flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">Q</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold">Qickroom</h4>
                          <p className="text-green-200 text-xs">متصل الآن</p>
                        </div>
                        <div className="relative">
                          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">4</span>
                          </div>
                        </div>
                      </div>

                      {/* Chat Messages */}
                      <div className="flex-1 p-4 space-y-4 bg-gray-50">
                        {/* Service Provider Message */}
                        <div className="flex justify-start">
                          <div className="bg-white rounded-lg p-3 max-w-xs shadow-sm">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs text-gray-500">Qickroom</span>
                              <div className="w-3 h-3 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="material-icons text-blue-600" style={{fontSize: '8px'}}>check</span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-800 text-right">
                              تم توجيه لك من فندق الرياض الفاخر لتم تفعيل خدمة Qickroom لغرفتك
                            </p>
                            <span className="text-xs text-gray-400 mt-1 block text-right">9:30 ص</span>
                          </div>
                        </div>

                        {/* Guest Request */}
                        <div className="flex justify-start">
                          <div className="bg-white rounded-lg p-3 max-w-xs shadow-sm">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs text-gray-500">Qickroom</span>
                              <span className="material-icons text-green-500" style={{fontSize: '12px'}}>check_circle</span>
                            </div>
                            <p className="text-sm text-gray-800 text-right">
                              تم استلام طلب خدمة الغرف الخاص بك ستتم بواسطة مقدمي الخدمة لدى فندقك
                            </p>
                            <span className="text-xs text-gray-400 mt-1 block text-right">10:20 ص</span>
                          </div>
                        </div>

                        {/* Hotel Notification */}
                        <div className="flex justify-start">
                          <div className="bg-white rounded-lg p-3 max-w-xs shadow-sm">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs text-gray-500">Qickroom</span>
                              <span className="material-icons text-orange-500" style={{fontSize: '12px'}}>notifications</span>
                            </div>
                            <p className="text-sm text-gray-800 text-right">
                              الفندق يخبرك ومعك الآن - الوقت المتوقع 15 دقيقة
                            </p>
                            <span className="text-xs text-gray-400 mt-1 block text-right">10:45 ص</span>
                          </div>
                        </div>

                        {/* Delivery Confirmation */}
                        <div className="flex justify-start">
                          <div className="bg-white rounded-lg p-3 max-w-xs shadow-sm">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs text-gray-500">Qickroom</span>
                              <span className="material-icons text-yellow-500" style={{fontSize: '12px'}}>delivery_dining</span>
                            </div>
                            <p className="text-sm text-gray-800 text-right">
                              طلبك في الطريق إليك - الوصول خلال 5 دقائق
                            </p>
                            <span className="text-xs text-gray-400 mt-1 block text-right">11:20 ص</span>
                          </div>
                        </div>
                      </div>

                      {/* Online Indicator */}
                      <div className="absolute bottom-4 left-4 bg-white rounded-full px-3 py-1 shadow-lg flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-gray-600">متصل الآن</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Increase Your Profits Section */}
          <div id="profits" className="bg-white rounded-3xl shadow-xl p-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                    <span className="material-icons text-blue-600">attach_money</span>
                    {t('increase_profits_title')}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {t('increase_profits_description')}
                  </p>
                </div>

                {/* Benefits List */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-blue-500 rounded-full text-white text-sm flex items-center justify-center">✓</span>
                    <span className="text-gray-700">{t('profit_benefit_1')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-blue-500 rounded-full text-white text-sm flex items-center justify-center">✓</span>
                    <span className="text-gray-700">{t('profit_benefit_2')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-blue-500 rounded-full text-white text-sm flex items-center justify-center">✓</span>
                    <span className="text-gray-700">{t('profit_benefit_3')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-blue-500 rounded-full text-white text-sm flex items-center justify-center">✓</span>
                    <span className="text-gray-700">{t('profit_benefit_4')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-blue-500 rounded-full text-white text-sm flex items-center justify-center">✓</span>
                    <span className="text-gray-700">{t('profit_benefit_5')}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <a
                    href="/form"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 inline-block"
                  >
                    {t('discover_how_to_increase_profits')}
                  </a>
                </div>
              </div>

              {/* Right Side - Features Grid */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Profit Margin Management */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                      <span className="material-icons text-white text-2xl">trending_up</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {t('profit_margin_management')}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t('profit_margin_management_desc')}
                    </p>
                  </div>

                  {/* Payment Processing */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                      <span className="material-icons text-white text-2xl">credit_card</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {t('payment_processing')}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t('payment_processing_desc')}
                    </p>
                  </div>

                  {/* Smart Management */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                      <span className="material-icons text-white text-2xl">psychology</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {t('smart_management')}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t('smart_management_desc')}
                    </p>
                  </div>

                  {/* Financial Reports */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                      <span className="material-icons text-white text-2xl">bar_chart</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {t('financial_reports')}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t('financial_reports_desc')}
                    </p>
                  </div>
                </div>

                {/* Statistics Section */}
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 text-white">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold mb-1">%45</div>
                      <div className="text-blue-100 text-sm">
                        {t('revenue_increase_stat')}
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-1">%98</div>
                      <div className="text-blue-100 text-sm">
                        {t('operation_accuracy_stat')}
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-1">72</div>
                      <div className="text-blue-100 text-sm">
                        {t('time_savings_stat')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose QickRoom section */}
          <div id="why-us" className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('why_choose_qickroom')}
            </h2>
            <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
              {t('qickroom_description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hotelBenefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4 text-center">
                    <span className="material-icons text-blue-600" style={{fontSize: '3rem'}}>{benefit.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    {t(benefit.title)}
                  </h3>
                  <p className="text-gray-600 text-sm text-center">
                    {t(benefit.description)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional benefits */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">
              {t('additional_benefits')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalBenefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4 text-center">
                    <span className="material-icons text-blue-600" style={{fontSize: '3rem'}}>{benefit.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    {t(benefit.title)}
                  </h3>
                  <p className="text-gray-600 text-sm text-center">
                    {t(benefit.description)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div id="faq" className="bg-white rounded-3xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {t('frequently_asked_questions')}
            </h2>
            <p className="text-gray-600 text-center mb-8">
              {t('faq_description')}
            </p>

            <div className="space-y-4 max-w-4xl mx-auto">
              {faqData.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    className="w-full text-left p-6 hover:bg-gray-50 transition-colors flex items-center justify-between"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="font-semibold text-gray-800 text-lg">
                      {t(faq.question)}
                    </h3>
                    <span className={`text-2xl transition-transform duration-300 ${expandedFAQ === index ? 'rotate-180' : ''}`}>
                      ⌄
                    </span>
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 pb-6 pt-0">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {t(faq.answer)}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">{t('no_answer_found')}</p>
              <a
                href="/form"
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                {t('contact_support_team')}
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <a
              href="/form"
              className="inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              {t('getStarted')}
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
  "hotelNameField": "Hotel Name",
  "cityField": "City",
  "hotelTypeField": "Hotel Type",
  "hotelTypeGroup": "Hotel Group",
  "hotelTypeSingle": "Single Hotel",
  "emailField": "Email",
  "managerNameField": "Manager Name",
  "phoneField": "Phone Number",
  "jobTitleField": "Job Title",
  "managerOfficialEmailField": "Official Email",
  "servicesField": "Select Services to Activate",
  "serviceDescriptionField": "Brief Description of Services to Manage",
  "howDidYouKnowField": "How did you hear about us?",
      // Add English translations here
      "welcome": "Welcome to QickRoom: Transform Your Hotel Operations",
      "subheading": "Simplify hotel management, enhance guest experiences, and maximize revenue with our all-in-one platform.",
      "getStarted": "Get Started",
      "signUpNow": "Sign Up Now",
      "keyFeatures": "Key Features & Benefits",
      "serviceCategories": "Service Categories We Support",
      "getStartedToday": "Get Started Today",
      "joinHotels": "Join hundreds of hotels already using QickRoom to transform their operations. Sign up now and take your hotel management to the next level!",
      "hotelSignupForm": "Join QickRoom: Hotel Signup Form",
      "hotelName": "Hotel Name",
      "email": "Email",
      "phone": "Phone Number",
      "numAdmins": "Number of Hotel Admins",
      "role": "Role",
      "services": "Services",
      "additionalNotes": "Additional Notes",
      "submitApplication": "Submit Application",
  "applicationSuccess": "Application submitted successfully!",
  "feature_hotel_management": "Hotel Management Made Easy",
  "feature_hotel_management_desc": "Manage multiple hotels, set dynamic pricing, and access analytics to boost revenue.",
  "feature_service_provider": "Service Provider Coordination",
  "feature_service_provider_desc": "Onboard and manage providers for Laundry, Transportation, and more.",
  "feature_guest_booking": "Guest Booking & Order Management",
  "feature_guest_booking_desc": "Seamless booking, real-time order tracking, and secure payments.",
  "feature_role_based_dashboards": "Role-Based Dashboards",
  "feature_role_based_dashboards_desc": "Tailored dashboards for admins, providers, and guests.",
  "feature_real_time_notifications": "Real-Time Notifications",
  "feature_real_time_notifications_desc": "Live updates for bookings, payments, and service changes.",
  "feature_secure_payment": "Secure Payment Processing",
  "feature_secure_payment_desc": "Integrated Stripe payments and automated revenue sharing.",
  "feature_multi_tenant": "Multi-Tenant Architecture",
  "feature_multi_tenant_desc": "Support for multiple hotels with isolated environments.",
  "service_laundry": "Laundry",
  "service_laundry_desc": "Professional cleaning services with express and eco-friendly options.",
  "service_transportation": "Transportation",
  "service_transportation_desc": "Car rentals, taxi services, and airport transfers.",
  "service_travel": "Travel & Tourism",
  "service_travel_desc": "Curated tours and local experiences.",
  "service_spa": "Spa & Wellness",
  "service_spa_desc": "Relaxation and fitness services for guests.",
  "service_dining": "Dining",
  "service_dining_desc": "Room service, restaurant reservations, and special dining experiences.",
  "service_entertainment": "Entertainment",
  "service_entertainment_desc": "Book live shows, events, and activities.",
  "service_shopping": "Shopping",
  "service_shopping_desc": "Personal shopping assistance and delivery services.",
  "service_fitness": "Fitness",
  "service_fitness_desc": "Gym access, personal trainers, and fitness classes.",
  "role_super_admin": "Super Admin",
  "role_hotel_admin": "Hotel Admin",
  "select_option": "Select..."
    }
  },
  ar: {
    translation: {
      // Add Arabic translations here
  "hotelNameField": "اسم الفندق",
  "cityField": "المدينة",
  "hotelTypeField": "نوع الفندق",
  "hotelTypeGroup": "مجموعة فنادق",
  "hotelTypeSingle": "فندق فردي",
  "emailField": "البريد الإلكتروني",
  "managerNameField": "اسم المسؤول",
  "phoneField": "رقم الهاتف",
  "jobTitleField": "المسمى الوظيفي",
  "managerOfficialEmailField": "الإيميل الرسمي",
  "servicesField": "تحديد الخدمات المطلوب تفعيلها",
  "serviceDescriptionField": "وصف سريع عن الخدمات التي تريد إدارتها",
  "howDidYouKnowField": "كيف تعرفت علينا؟",
  "welcome": "مرحبًا بكم في كيك: غيّر عمليات فندقك",
      "subheading": "بسّط إدارة الفندق، عزز تجربة الضيوف، وزد الإيرادات مع منصتنا الشاملة.",
      "getStarted": "ابدأ الآن",
      "signUpNow": "سجّل الآن",
      "keyFeatures": "الميزات والفوائد الرئيسية",
      "serviceCategories": "فئات الخدمات التي ندعمها",
      "getStartedToday": "ابدأ اليوم",
      "joinHotels": "انضم إلى مئات الفنادق التي تستخدم كويك روم لتحسين عملياتها. سجّل الآن وارتقِ بإدارة فندقك!",
  "hotelSignupForm": "انضم إلى كيك: نموذج تسجيل الفندق",
      "hotelName": "اسم الفندق",
      "email": "البريد الإلكتروني",
      "phone": "رقم الهاتف",
      "numAdmins": "عدد مديري الفندق",
      "role": "الدور",
      "services": "الخدمات",
      "additionalNotes": "ملاحظات إضافية",
      "submitApplication": "إرسال الطلب",
  "applicationSuccess": "تم إرسال الطلب بنجاح!",
  "feature_hotel_management": "إدارة الفنادق بسهولة",
  "feature_hotel_management_desc": "إدارة عدة فنادق، تحديد الأسعار الديناميكية، والوصول إلى التحليلات لزيادة الإيرادات.",
  "feature_service_provider": "تنسيق مقدمي الخدمات",
  "feature_service_provider_desc": "إضافة وإدارة مقدمي الخدمات مثل الغسيل والنقل والمزيد.",
  "feature_guest_booking": "حجز الضيوف وإدارة الطلبات",
  "feature_guest_booking_desc": "حجز سلس، تتبع الطلبات في الوقت الفعلي، ودفع آمن.",
  "feature_role_based_dashboards": "لوحات معلومات حسب الدور",
  "feature_role_based_dashboards_desc": "لوحات مخصصة للمديرين والمزودين والضيوف.",
  "feature_real_time_notifications": "إشعارات فورية",
  "feature_real_time_notifications_desc": "تحديثات مباشرة للحجوزات والمدفوعات وتغييرات الخدمات.",
  "feature_secure_payment": "معالجة دفع آمنة",
  "feature_secure_payment_desc": "مدفوعات Stripe مدمجة وتوزيع الإيرادات تلقائيًا.",
  "feature_multi_tenant": "بنية متعددة المستأجرين",
  "feature_multi_tenant_desc": "دعم عدة فنادق ببيئات معزولة.",
  "service_laundry": "الغسيل",
  "service_laundry_desc": "خدمات تنظيف احترافية مع خيارات سريعة وصديقة للبيئة.",
  "service_transportation": "النقل",
  "service_transportation_desc": "تأجير سيارات، خدمات تاكسي، ونقل من وإلى المطار.",
  "service_travel": "السفر والسياحة",
  "service_travel_desc": "جولات منظمة وتجارب محلية.",
  "service_spa": "السبا والعافية",
  "service_spa_desc": "خدمات استرخاء ولياقة للضيوف.",
  "service_dining": "المأكولات",
  "service_dining_desc": "خدمة الغرف، حجوزات المطاعم، وتجارب طعام خاصة.",
  "service_entertainment": "الترفيه",
  "service_entertainment_desc": "حجز عروض حية وفعاليات وأنشطة.",
  "service_shopping": "التسوق",
  "service_shopping_desc": "مساعدة في التسوق الشخصي وخدمات التوصيل.",
  "service_fitness": "اللياقة البدنية",
  "service_fitness_desc": "دخول الصالة الرياضية، مدربون شخصيون، ودروس لياقة.",
  "role_super_admin": "مدير عام",
  "role_hotel_admin": "مدير فندق",
  "select_option": "اختر..."
    }
  }
};

// Persist language selection using localStorage
const savedLang = typeof window !== 'undefined' ? localStorage.getItem('qickroom_lang') : null;
const initialLang = savedLang || 'ar';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

// Set document direction based on selected language
if (typeof document !== 'undefined') {
  document.documentElement.dir = initialLang === 'ar' ? 'rtl' : 'ltr';
}

// Listen for language changes and persist selection
i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('qickroom_lang', lng);
  }
  if (typeof document !== 'undefined') {
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  }
});

export default i18n;

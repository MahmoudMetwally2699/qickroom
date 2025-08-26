import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
import InputField from '../components/InputField';
import SelectField from '../components/SelectField';
import CheckboxGroup from '../components/CheckboxGroup';
import TextareaField from '../components/TextareaField';

const serviceOptions = [
  { value: 'laundry', label: 'service_laundry' },
  { value: 'transportation', label: 'service_transportation' },
  { value: 'travel', label: 'service_travel' },
  { value: 'spa', label: 'service_spa' },
  { value: 'dining', label: 'service_dining' },
  { value: 'entertainment', label: 'service_entertainment' },
  { value: 'shopping', label: 'service_shopping' },
  { value: 'fitness', label: 'service_fitness' }
];

const roleOptions = [
  { value: 'super_admin', label: 'role_super_admin' },
  { value: 'hotel_admin', label: 'role_hotel_admin' }
];

// ...existing code...
const FormPage = () => {
  const { t } = useTranslation();
  const [selectedServices, setSelectedServices] = React.useState([]);

  const handleServicesChange = (e) => {
    const value = e.target.value;
    setSelectedServices(prev =>
      e.target.checked
        ? [...prev, value]
        : prev.filter(v => v !== value)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.services = selectedServices;
    // Send data to backend API
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || '';
      const response = await fetch(`${backendUrl}/api/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        toast.success('Form submitted successfully!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error('Submission failed.', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error('An error occurred.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-400 px-4">
      <ToastContainer />
      <div className="backdrop-blur-lg bg-white/70 border border-white/40 rounded-2xl shadow-2xl p-10 w-full max-w-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
  <h2 className="text-3xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 bg-clip-text text-transparent drop-shadow-lg animate-fade-in">
          {t('hotelSignupForm')}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <InputField
            label={t('hotelNameField')}
            type="text"
            name="hotelName"
            required
            placeholder={t('hotelNameField')}
          />
          <InputField
            label={t('cityField')}
            type="text"
            name="city"
            required
            placeholder={t('cityField')}
          />
          <SelectField
            label={t('hotelTypeField')}
            name="hotelType"
            options={[{ value: 'group', label: t('hotelTypeGroup') }, { value: 'single', label: t('hotelTypeSingle') }]}
            required
          />
          <InputField
            label={t('emailField')}
            type="email"
            name="email"
            required
            placeholder={t('emailField')}
          />
          <InputField
            label={t('managerNameField')}
            type="text"
            name="managerName"
            required
            placeholder={t('managerNameField')}
          />
          <InputField
            label={t('phoneField')}
            type="text"
            name="phone"
            required
            placeholder={t('phoneField')}
          />
          <InputField
            label={t('jobTitleField')}
            type="text"
            name="jobTitle"
            required
            placeholder={t('jobTitleField')}
          />
          <InputField
            label={t('managerOfficialEmailField')}
            type="email"
            name="managerOfficialEmail"
            required
            placeholder={t('managerOfficialEmailField')}
          />
          <InputField
            label={t('numAdmins')}
            type="number"
            name="numAdmins"
            required
            placeholder={t('numAdmins')}
          />
          <SelectField
            label={t('role')}
            name="role"
            options={roleOptions}
            required
          />
          <CheckboxGroup
            label={t('servicesField')}
            name="services"
            options={serviceOptions}
            values={selectedServices}
            onChange={handleServicesChange}
            required
          />
          <TextareaField
            label={t('serviceDescriptionField')}
            name="serviceDescription"
            placeholder={t('serviceDescriptionField')}
          />
          <InputField
            label={t('howDidYouKnowField')}
            type="text"
            name="howDidYouKnow"
            required
            placeholder={t('howDidYouKnowField')}
          />
          <TextareaField
            label={t('additionalNotes')}
            name="additionalNotes"
            placeholder={t('additionalNotes')}
          />
          <button
            type="submit"
            className="w-full py-3 mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            {t('submitApplication')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;

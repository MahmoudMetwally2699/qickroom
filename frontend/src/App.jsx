
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import ApiTest from './pages/ApiTest';
import './i18n/i18n';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/apitest" element={<ApiTest />} />
      </Routes>
    </Router>
  );
}

export default App;

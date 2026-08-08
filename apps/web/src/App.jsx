import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import IntakePage from './pages/IntakePage';
import ContactEmailPage from './pages/ContactEmailPage';
import { LanguageProvider } from './context/LanguageContext';

function App() {
    return (
        <LanguageProvider>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/intake" element={<IntakePage />} />
                    <Route path="/contact-email" element={<ContactEmailPage />} />
                </Routes>
            </Router>
        </LanguageProvider>
    );
}

export default App;

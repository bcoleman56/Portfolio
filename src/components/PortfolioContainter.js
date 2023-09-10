import React, { useState } from 'react';
// import pages and navigation
import AboutMe from '../pages/AboutMe';
import ContactMe from '../pages/ContactMe';
import Portfolio from '../pages/Portfolio';
import Header from './Header';
import Footer from './Footer';


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        if (currentPage === 'Contact') {
          return <ContactMe/>;
        }
        return <AboutMe />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className='flex flex-col h-screen'>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}
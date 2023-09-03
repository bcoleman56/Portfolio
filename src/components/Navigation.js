import React from 'react';

export default function Navigation({ currentPage, handlePageChange }) {
    return (
        <div className=' lg:flex-row sm:flex-col flex-col md:text-2xl text-lg font-bold float-right md:my-4 text-emerald-500 '>
            <div className='px-3 hover:text-gray-300'>
                <a 
                    href='#about'
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >About Me</a>
            </div>
            <div className='px-3 hover:text-gray-300'>
                <a 
                    href='#projects'
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >Portfolio</a>
            </div>
            <div className='px-3 hover:text-gray-300'>
                <a 
                    href='#contact'
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >Contact</a>
            </div>
        </div>
    );
}
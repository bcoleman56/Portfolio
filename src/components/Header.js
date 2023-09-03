import React from 'react';
import Navigation from './Navigation';

export default function Header({ currentPage, handlePageChange }) {
    return(
        <>
            <header id='header' className='w-full p-5 '>
                <svg className='hover:invert inline' xmlns="http://www.w3.org/2000/svg" width="80" height="80">
                    <circle cx="40" cy="40" r="30" stroke="rgb(16 185 129)" strokeWidth="4" fill="transparent"/>
                    <text x="40" y="50" fontSize="30" textAnchor="middle" fill="rgb(16 185 129)">BC</text>
                </svg>
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            </header>
        </>
        
    );
}
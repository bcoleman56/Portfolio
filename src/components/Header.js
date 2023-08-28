import React from 'react';
import Navigation from './Navigation';

export default function Header() {
    return(
        <>
            <header id='header' class='w-full p-5 bg-transparent'>
                <svg class='inline-block hover:invert' xmlns="http://www.w3.org/2000/svg" width="80" height="80">
                    <circle cx="40" cy="40" r="30" stroke="rgb(16 185 129)" stroke-width="4" fill="transparent"/>
                    <text x="40" y="50" font-size="30" text-anchor="middle" fill="rgb(16 185 129)">BC</text>
                </svg>
                <Navigation />
            </header>
        </>
        
    );
}
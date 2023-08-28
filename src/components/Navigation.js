import React from 'react';

export default function Navigation() {
    return (
        <>
            <ul class='inline-block text-2xl float-right my-4 text-emerald-500'>
                <li class='inline-block px-3 hover:invert'><a href='#about-me'>About Me</a></li>
                <li class='inline-block px-3 hover:invert'><a href='#projects'>Projects</a></li>
                <li class='inline-block px-3 hover:invert'><a href='#contact-me'>Contact Me</a></li>
            </ul>
        </>   
    );
}
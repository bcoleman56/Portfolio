import React from 'react';
import Project from '../components/Project';

const quizProject = {
    name: 'Coding Quiz',
    image: `/images/Coding Quiz.png`,
    url: 'https://bcoleman56.github.io/coding-quiz/index.html',
    text: 'This application allows the user to test themselves on their programming knowledge.',
}

const quoteProject = {
    name: 'Quote Hub',
    image: `/images/Quote Hub.png`,
    url: 'https://pure-scrubland-99203-50ab01d03184.herokuapp.com/',
    text: 'This application lets a user log-in, request a quote and save that quote into a database.',
}

const weatherProject = {
    name: 'Weather Website',
    image: `/images/Weather Website.png`,
    url: 'https://bcoleman56.github.io/weather-website/',
    text: 'This application let a user type in a city and get a five day forecast for that city.'
}

export default function Portfolio() {
    return (
        <div id='portfolio' className=' w-full p-5 flex flex-col rounded-lg mt-3 items-center mb-auto'>
            <div className='flex flex-col w-full'>
                <h2 className='text-4xl text-emerald-500 text-center font-bold'>Projects</h2>
            </div>
            
            <div id='projects-container' className='grid grid-cols-1 md:max-2xl:grid-cols-2  grid-flow-rows gap-5 justify-center align-center p-5 border-emerald-500'>
                {/* Projects added here */}
                <Project 
                    name={quizProject.name}
                    image={quizProject.image}
                    url={quizProject.url}
                    text={quizProject.text}
                />
                <Project 
                    name={quoteProject.name}
                    image={quoteProject.image}
                    url={quoteProject.url}
                    text={quoteProject.text}
                />
                <Project 
                    name={weatherProject.name}
                    image={weatherProject.image}
                    url={weatherProject.url}
                    text={weatherProject.text}
                />
    
            </div>
        </div>
    )
}
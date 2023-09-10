import React from "react";




export default function AboutMe() {

    const age = function () {
        // year, month index, day
        const bday = new Date('2001, 7, 31').getTime()
        const today = new Date().getTime()
        const diff = today - bday;
        // diff is milliseconds since bday so we have to convert it to years
        const years = diff / 1000 / 3600 / 24 / 365;
        return Math.floor(years);
    }

    

    return(
        <div id='about' className='w-full p-5 text-center mb-auto flex flex-col justify-center items-center'>
            <div className='p-5 items-center'>
                <p className='text-gray-300 text-5xl'>Hey, I'm <span className='text-emerald-400'>Brett</span>, a web developer</p>
            </div>

            <div className='w-full flex flex-col sm:max-2xl:w-3/4 sm:max-2xl:pt-20  items-center pt-5'>
                <img className='w-3/4 sm:max-2xl:w-1/2 border-2 rounded border-emerald-500' src={process.env.PUBLIC_URL + '/images/Headshot.jpg'} alt="Headshot" />
                <p className='text-gray-300 pt-3 sm:max-2xl:pt-20 w-3/4 text-lg  p-3 sm:max-2xl:text-3xl '>
                    I am {age()} years old. When I'm not coding I like to go disc golfing, play video games, or do some reading.
                </p>
            </div>
        </div>
    )
}

//  Future development => Have button for random facts or cycle of facts about me
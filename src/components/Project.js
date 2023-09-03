import React from "react";


export default function Project({name, image, url, text}) {
    return (
        <div id='project-one' className='max-w-sm rounded-lg overflow-hidden shadow-xl h-50 w-50 hover:b-g p-5 border border-emerald-500'>
            <div className='text-emerald-500 text-xl pb-2 font-bold'>{name}</div>
            <a href={url} >
                <img className='rounded border-2 border-emerald-500' src={process.env.PUBLIC_URL + `${image}`} alt={`${name} Website`} />
            </a>
            <div id='text-container' className='text-emerald-500 text-lg'>
                <p>{text}</p>
            </div>
        </div>
    )
}
import React from 'react';

export default function Footer() {
    return (
        <div id='contact-me' className='flex flex-col w-full p-10 bg-slate-900 items-center'>
            <ul className='p-3 flex flex-col items-center'>
                <li className=" text-emerald-500 inline-block"> Email: <a href="mailto:brettcoleman56@gmail.com">brettcoleman56@gmail.com</a></li>
                <li className=" text-emerald-500 inline-block"><a href="https://github.com/bcoleman56/">GitHub: bcoleman56</a></li>
            </ul>
        </div>
    )
}


// Want footer at the bottom of page if empty space => 
//    and at the end of the content if not empty screen space
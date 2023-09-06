import React from "react";


export default function ContactMe() {

    // const handleSubmit = () => {
    //     window.alert('Submitted');
    // }

    return(
        <div id='contact' className='flex flex-col w-full p-5 text-center items-center'>
            <div className='w-3/4'>
                <form className='border rounded-lg border-emerald-500 p-5 space-y-2'>
                    <label htmlFor="name" className='block  text-emerald-500 float-left'>Name:</label>
                    <input type="text" id="name" name="name" className='w-full bg-slate-300' />

                    <label htmlFor="email" className='block  text-emerald-500 float-left'>Email:</label>
                    <input type="email" id="email" name="email" className='w-full bg-slate-300' />

                    <label htmlFor="message" className='block text-emerald-500 float-left'>Message:</label>
                    <textarea id="message" name="message" className='w-full bg-slate-300' />

                    <button type="submit" className='bg-emerald-500 rounded p-1 mt-5 w-full'>Submit</button>
                </form>
            </div>
        </div>
    )
}

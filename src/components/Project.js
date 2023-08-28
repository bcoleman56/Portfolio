import Footer from './Footer';
import Header from './Header';
// import Navigation from './Navigation';


export default function Project() {
    return (
        <div className='bg-slate-700 h-screen v-screen'> 
            <Header />

            <div id='about-me' className='flex flex-col w-3/4 p-5 text-center'>
                <p class='text-emerald-500 text-5xl'>Hey, I'm Brett, a web developer</p>
            </div>

            <div id='contact-me' className='flex flex-col w-3/4 p-5 flex flex-col w-3/4'>
                <h2 class='text-3xl text-emerald-500 ml-10 mb-3'>Contact Me</h2>
                <ul class='space-x-2 my-3 ml-10'>
                    <li class="border border-emerald-500 rounded-lg text-emerald-500 p-2 inline-block" > Email: <a href="mailto:brettcoleman56@gmail.com">brettcoleman56@gmail.com</a></li>
                    <li class="border border-emerald-500 rounded-lg text-emerald-500 p-2 inline-block" ><a href="https://github.com/bcoleman56/">GitHub: bcoleman56</a></li>
                </ul>
            </div>

            <Footer />
        </div>
    )
}
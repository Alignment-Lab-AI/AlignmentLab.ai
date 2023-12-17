import Link from 'next/link';
import React from 'react';

export default function Careers() {
    return (
        <div className="mx-2 md:mx-6 py-6">
            <div className='container mx-auto'>
                <h1 className="text-6xl font-bold">
                    Careers
                </h1>
            </div>
            <hr className="border-slate-600 dark:border-slate-400 my-6" />
            <div className='container mx-auto'>
                <p className='text-lg md:text-xl lg:text-2xl leading-loose'>
                    Do you want to work on the cutting edge of AI and machine learning? <br />
                    Do you want to help build the future of AI? <br />
                    Do you want to work with a team of passionate and talented people? <br />
                    If so, we want to hear from you!
                </p>
                <p className='text-lg md:text-xl lg:text-2xl leading-loose my-12'>
                    Begin by joining our <Link href="https://discord.gg/ad27GQgc7K" className='underline hover:text-teal-400 transition duration-300'>Discord</Link> and introducing yourself.
                </p>
            </div>
        </div>
    )
}

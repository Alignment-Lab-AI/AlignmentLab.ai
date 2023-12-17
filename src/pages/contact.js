import Link from 'next/link';
import React from 'react';

export default function Contact() {
    return (
        <div className="mx-2 md:mx-6 py-6">
            <div className='container mx-auto'>
                <h1 className="text-6xl font-bold">
                    Contact
                </h1>
            </div>
            <hr className="border-slate-600 dark:border-slate-400 my-6" />
            <div className='container mx-auto'>
                <p className='text-lg md:text-xl lg:text-2xl leading-loose'>
                    Do you want to hire us?<br />
                    Do you want to work with us?<br />
                    Do you have a question?<br />
                    Do you want to propose a collaboration?<br />
                </p>
                <p className='text-lg md:text-xl lg:text-2xl leading-loose my-12'>
                    Don&apos;t hesitate to reach out to us at: <Link href="mailto:autometa@alignmentlab.ai" className='underline hover:text-teal-400 transition duration-300'>autometa@alignmentlab.ai</Link>.
                </p>
            </div>
        </div>
    )
}

import React from 'react';

export default function About() {
    return (
        <div className="mx-2 md:mx-6 py-6">
            <div className='container mx-auto'>
                <h1 className="flex justify-center text-6xl font-bold">
                    Alignment Lab AI
                </h1>
            </div>
            <hr className="border-slate-600 dark:border-slate-400 my-6" />
            <div className='container mx-auto'>
                <div className="flex justify-center flex-col gap-6">
                    <p className='text-lg md:text-xl lg:text-2xl leading-loose'>
                        Alignment Lab AI is an open-source research lab with a simple goal: to ensure that the development of AI benefits everyone. We believe in empowering individuals by making this transformative technology accessible, user-friendly, and aligned with human values.
                    </p>
                    <div>
                        <div className='border border-b-0 mt-6 border-slate-600 dark:border-slate-00 w-fit mx-auto p-6'>
                            <img src="images/abstract.png" alt="Alignment Labs Logo" className="filter invert scale-300" width={300} />
                        </div>
                        <hr className="border-slate-600 dark:border-slate-400 mb-6" />
                    </div>
                    <div className="w-8/12 mx-auto grid grid-cols-8 gap-6">
                        <div className='col-span-8 text-center'>
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold underline decoration-4 transition duration-300 hover:text-teal-400'>
                                Our Mission
                            </h2>
                        </div>
                        <div className='col-span-8 lg:col-span-8 xl:col-span-8 mx-auto'>
                            <p className='text-xs md:text-sm lg:text-base leading-loose text-center'>
                                Our mission is to build a future where AI is a force for good, a tool that enhances human lives without compromising privacy or control. We are committed to democratizing access to this technology, believing that everyone deserves to harness the power of AI for personal and societal good.
                            </p>
                        </div>
                    </div>
                    <hr className="border-slate-600 dark:border-slate-400 my-6" />
                    <p className='text-lg md:text-xl lg:text-2xl leading-loose text-center'>
                        We recognize the potential risks associated with centralized control over powerful AI. That's why our research focuses on creating efficient models optimized for local use cases, giving users control over their information.
                    </p>
                    <p className='text-lg md:text-xl lg:text-2xl leading-loose text-center'>
                        Open-source development is at the heart of our approach. By fostering collaboration, transparency, and continuous improvement from a global community, we aim to ensure that AI evolves responsibly and benefits all of humanity.
                    </p>
                </div>
            </div>
        </div>
    )
}

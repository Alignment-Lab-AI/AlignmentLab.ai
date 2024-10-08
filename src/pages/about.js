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
                        <strong>Alignment Lab AI</strong> is an open-source research lab building tools and frameworks that empower users to directly access the potential of AI technology. We are dedicated to democratizing AI by making it accessible, efficient, and user-friendly for everyone, regardless of technical expertise.
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
                                <strong>Our mission is to create an AI ecosystem that is aligned with human values and fosters innovation, transparency, and user empowerment.</strong> We envision a future where AI technology is a force for good, benefiting individuals and society as a whole by enabling individuals to directly access and utilize the power of their own data to improve their lives.
                            </p>
                        </div>
                    </div>
                    <hr className="border-slate-600 dark:border-slate-400 my-6" />
                    <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center'>
                        Additional Content
                    </h3>
                    <p className='text-lg md:text-xl lg:text-2xl leading-loose text-center'>
                        A core focus for us is building an AI-optimized ecosystem with a user-centric design, powered by generative AI that anticipates user needs prioritizes their privacy and security through ensuring that users have complete control over their information.
                    </p>
                    <p className='text-lg md:text-xl lg:text-2xl leading-loose text-center'>
                        We are developing advanced AI architectures, including Open Empathic, a multimodal LLM capable of perceiving and generating human-like text, images, and speech. This commitment to multimodality and multilingual support underscores our dedication to creating a globally inclusive AI experience.
                    </p>
                </div>
            </div>
        </div>
    )
}
